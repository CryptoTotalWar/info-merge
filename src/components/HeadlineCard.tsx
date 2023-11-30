// src/components/HeadlineCard.tsx
"use client";
import React from "react";
import { HeadlineType } from "@/types";
import Link from "next/link";
import DateDisplay from "./DateDisplay";
import ClipboardIcon from "./ClipboardIcon";

type HeadlineCardProps = {
  headline: HeadlineType;
};

const HeadlineCard: React.FC<HeadlineCardProps> = ({ headline }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(headline.hyperlink);
    // You can add a notification or tooltip to indicate the link has been copied.
  };

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
      <ClipboardIcon hyperlink={headline.hyperlink} />{" "}
      {/* Clipboard icon below the hyperlink */}
    </div>
  );
};

export default HeadlineCard;
