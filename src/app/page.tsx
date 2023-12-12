// src/app/page.tsx
"use client";
import { Theme } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import PublicHeader from "@/components/PublicHeader";
import { CategoryContainer } from "@/components/CategoryContainer";
import { HeadlinesByCategoryType } from "@/types";
import { Progress } from "@/components/progress"; // Import the Progress component
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Page() {
  const [data, setData] = useState({} as HeadlinesByCategoryType);
  const [progress, setProgress] = useState(0); // State to manage progress

  useEffect(() => {
    async function fetchData() {
      setProgress(30); // Initial progress
      const response = await fetch("/api/headlines");
      const data = await response.json();
      setData(data);
      setProgress(100); // Set progress to 100% after fetching data
    }
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
      <main className="columns-3 gap-4 mx-auto py-4 max-w-8xl">
        {Object.entries(data).map(([categoryTag, headlines]) => (
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
