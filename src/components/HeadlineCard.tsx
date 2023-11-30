// src/components/HeadlineCard.tsx
"use client";
import React from "react";
import { HeadlineType } from "@/types";
import Link from "next/link";
import DateDisplay from "./DateDisplay";

type HeadlineCardProps = {
  headline: HeadlineType;
};

const HeadlineCard: React.FC<HeadlineCardProps> = ({ headline }) => {
  return (
    <div className="p-2">
      <DateDisplay createdAt={headline.createdAt.toString()} />
      <Link
        href={headline.hyperlink}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline mt-2 block text-lg font-bold"
      >
        {headline.headlineContent}
      </Link>
    </div>
  );
};

export default HeadlineCard;
