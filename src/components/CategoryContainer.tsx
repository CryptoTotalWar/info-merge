"use client";
// src/components/CategoryContainer.tsx

import React from "react";
import { HeadlineItem } from "./HeadlineItem";
import { HeadlineType } from "@/types"; // Ensure the path matches your project structure

type CategoryContainerProps = {
  categoryTag: string;
  headlines: HeadlineType[]; // Use HeadlineType from the central types file
};

export function CategoryContainer({
  categoryTag,
  headlines,
}: CategoryContainerProps) {
  return (
    <section className="flex flex-col mb-6 w-5/12 bg-slate-700 border border-slate-300 rounded-lg p-4 opacity-90 p">
      <h3 className="text-xl font-bold mb-4 uppercase text-center">
        {categoryTag}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {headlines.map((headline) => (
          <HeadlineItem key={headline.id} headline={headline} />
        ))}
      </ul>
    </section>
  );
}
