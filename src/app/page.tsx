"use client";
import { useEffect, useState } from "react"; // src/app/page.tsx
import { CategoryContainer } from "@/components/CategoryContainer";
import { HeadlinesByCategoryType } from "@/types"; // Ensure this path is correct

type PageProps = {
  data: HeadlinesByCategoryType;
};

export default function Page() {
  const [data, setData] = useState({} as HeadlinesByCategoryType);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/headlines");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  console.log("Received data:", data);

  if (!data || Object.keys(data).length === 0) {
    // Handle the case when data is undefined or empty
    return <div>No headlines available.</div>; // Display a message to the user
  }

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Headlines</h1>
      </header>
      <main>
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
