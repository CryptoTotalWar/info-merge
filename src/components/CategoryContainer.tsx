"use client";
// src/components/CategoryContainer.tsx

// src/components/CategoryContainer.tsx
import React from "react";
import HeadlineCard from "./HeadlineCard";
import { HeadlineType } from "@/types";

type CategoryContainerProps = {
  categoryTag: string;
  headlines: HeadlineType[];
};

export function CategoryContainer({
  categoryTag,
  headlines,
}: CategoryContainerProps) {
  console.log("headlines:", headlines);
  // Check if headlines is an array before mapping
  const renderHeadlines =
    Array.isArray(headlines) &&
    headlines.map((headline) => (
      <HeadlineCard key={headline.id} headline={headline} />
    ));
  return (
    <section className="break-inside-avoid mb-6 bg-gray-900 border border-slate-700 rounded-lg p-4 opacity-95 shadow-slate-800 shadow-2xl">
      <h3 className="text-2xl font-bold mb-4 uppercase text-center transform skew-x-12 ">
        {categoryTag}
      </h3>
      <div className="flex flex-col gap-2">
        {headlines.map((headline) => (
          <HeadlineCard key={headline.id} headline={headline} />
        ))}
      </div>
    </section>
  );
}
