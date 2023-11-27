// src/components/CategoryContainer.tsx
import React from "react";
import { HeadlineItem } from "./HeadlineItem";

export type Headline = {
  id: string;
  headlineContent: string;
  hyperlink: string;
  createdAt: Date;
  // Other fields as needed
};

type CategoryContainerProps = {
  categoryTag: string;
  headlines: Headline[];
};

export function CategoryContainer({
  categoryTag,
  headlines,
}: CategoryContainerProps) {
  return (
    <section className="mb-6">
      <h3 className="text-xl font-bold mb-2">{categoryTag}</h3>
      <ul>
        {headlines.map((headline) => (
          <HeadlineItem key={headline.id} headline={headline} />
        ))}
      </ul>
    </section>
  );
}
