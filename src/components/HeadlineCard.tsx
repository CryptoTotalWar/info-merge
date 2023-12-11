// src/components/HeadlineCard.tsx
"use client";
import React from "react";
import { HeadlineType } from "@/types";
import Link from "next/link";
import DateDisplay from "./DateDisplay";
import ClipboardIcon from "./ClipboardIcon";
import EmbeddedMedia from "./EmbeddedMedia"; // Import the EmbeddedMedia component

type HeadlineCardProps = {
  headline: HeadlineType;
};

const HeadlineCard: React.FC<HeadlineCardProps> = ({ headline }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(headline.hyperlink);
    // You can add a notification or tooltip to indicate the link has been copied.
  };

  return (
    <div className="p-2 shadow-2xl rounded-md opacity-100 bg-slate-700">
      <DateDisplay createdAt={headline.createdAt.toString()} />
      {headline.useMicroLink && ( // Conditionally render EmbeddedMedia based on useMicroLink
        <EmbeddedMedia
          url={headline.hyperlink}
          useMicroLink={headline.useMicroLink}
        />
      )}
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
