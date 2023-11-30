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
    <section className="flex flex-col mb-6 max-w-[40%] w-full md:max-w-full">
      <h3 className="text-xl font-bold mb-2">{categoryTag}</h3>
      <ul>
        {headlines.map((headline) => (
          <HeadlineItem key={headline.id} headline={headline} />
        ))}
      </ul>
    </section>
  );
}
