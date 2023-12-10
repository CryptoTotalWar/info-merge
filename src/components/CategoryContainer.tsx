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
  return (
    <section className="break-inside-avoid mb-6 bg-slate-700 border border-slate-300 rounded-lg p-4 opacity-99 shadow-slate-800 shadow-2xl">
      <h3 className="text-xl font-bold mb-4 uppercase text-center">
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
