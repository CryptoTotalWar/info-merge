"use client";
// src/components/HeadlineItem.tsx

import React from "react";
import { HeadlineType } from "@/types"; // Ensure the path matches your project structure

type HeadlineItemProps = {
  headline: HeadlineType;
};

export function HeadlineItem({ headline }: HeadlineItemProps) {
  return (
    <li className="my-3 w-full">
      <a
        href={headline.hyperlink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {headline.headlineContent}
      </a>
    </li>
  );
}
