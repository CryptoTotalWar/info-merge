// src/components/HeadlineCard.tsx
"use client";
import React from "react";
import { HeadlineType } from "@/types";
import Link from "next/link";

type HeadlineCardProps = {
  headline: HeadlineType;
};

const HeadlineCard: React.FC<HeadlineCardProps> = ({ headline }) => {
  return (
    <div className="p-2">
      <Link
        href={headline.hyperlink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {headline.headlineContent}
      </Link>
    </div>
  );
};

export default HeadlineCard;
