// src/app/page.tsx
import { CategoryContainer } from "@/components/CategoryContainer";
import { HeadlinesByCategoryType } from "@/types"; // Ensure this path is correct

type PageProps = {
  data: HeadlinesByCategoryType;
};

export async function loader() {
  const res = await fetch("/api/headlines"); // Relative URL for the API endpoint
  if (!res.ok) {
    throw new Error("Failed to fetch headlines");
  }
  return res.json();
}

export default function Page({ data }: PageProps) {
  const headlinesByCategory: HeadlinesByCategoryType = data;

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Headlines</h1>
      </header>
      <main>
        {Object.entries(headlinesByCategory).map(([categoryTag, headlines]) => (
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
