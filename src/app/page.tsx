// src/app/page.tsx
"use client";
import { Theme } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import PublicHeader from "@/components/PublicHeader";
import { CategoryContainer } from "@/components/CategoryContainer";
import { HeadlinesByCategoryType } from "@/types";
import { Progress } from "@/components/progress"; // Import the Progress component
import ParticlesBackground from "@/components/ParticlesBackground";
import CategoryFilter from "@/components/CategoryFilter";

export default function Page() {
  const [data, setData] = useState<HeadlinesByCategoryType>({}); // Use generic type for useState
  const [progress, setProgress] = useState(0); // State to manage progress
  // Initialize all categories as active by default after data is fetched
  const [activeCategories, setActiveCategories] = useState<string[]>([]); // New state for active categories

  // Function to handle filter changes
  const handleFilterChange = (category: string) => {
    setActiveCategories((currentCategories) => {
      return currentCategories.includes(category)
        ? currentCategories.filter((c) => c !== category)
        : [...currentCategories, category];
    });
  };

  useEffect(() => {
    setProgress(30); // Initial progress
    const fetchData = async () => {
      const response = await fetch("/api/headlines");
      const headlinesData = await response.json();
      setData(headlinesData);
      setActiveCategories(Object.keys(headlinesData)); // Initialize all categories as active
      setProgress(100); // Set progress to 100% after fetching data
    };
    fetchData();
  }, []);

  if (!data || Object.keys(data).length === 0) {
    // Display a progress bar while loading
    return (
      <>
        <div className="flex justify-center items-start h-screen pt-20">
          {" "}
          {/* Adjusted to position higher */}
          <Progress value={progress} className="w-[60%]" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <ParticlesBackground />
      </div>
      <PublicHeader />
      <CategoryFilter
        categories={Object.keys(data)}
        onFilterChange={handleFilterChange}
      />
      <main className="columns-3 gap-4 mx-auto py-4 max-w-8xl">
        {Object.entries(data)
          .filter(([categoryTag]) => activeCategories.includes(categoryTag))
          .map(([categoryTag, headlines]) => (
            <CategoryContainer
              key={categoryTag}
              categoryTag={categoryTag}
              headlines={headlines}
            />
          ))}
      </main>
    </>
  );
}
