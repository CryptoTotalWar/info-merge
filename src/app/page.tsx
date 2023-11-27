// import Link from "next/link";
// src/app/page.tsx
import { GetServerSideProps } from "next";
import { prisma } from "@/db";
import { CategoryContainer } from "@/components/CategoryContainer";
import { HeadlinesByCategoryType } from "@/types"; // Now importing from the types directory

type PageProps = {
  headlinesByCategory: HeadlinesByCategoryType;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const headlines = await prisma.headline.findMany({
    orderBy: {
      categoryTag: "asc",
      createdAt: "desc",
    },
  });

  // Group headlines by category
  const headlinesByCategory = headlines.reduce(
    (acc: HeadlinesByCategoryType, headline) => {
      acc[headline.categoryTag] = acc[headline.categoryTag] || [];
      acc[headline.categoryTag].push(headline);
      return acc;
    },
    {}
  );

  return {
    props: { headlinesByCategory },
  };
};

export default function Page({ headlinesByCategory }: PageProps) {
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
