// src/components/HeadlineItem.tsx
import React from "react";

type HeadlineItemProps = {
  headline: {
    id: string;
    headlineContent: string;
    hyperlink: string;
    createdAt: Date;
    // Other fields as needed
  };
};

export function HeadlineItem({ headline }: HeadlineItemProps) {
  return (
    <li className="mb-1">
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
