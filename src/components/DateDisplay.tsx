// src/components/DateDisplay.tsx
"use client";
import React from "react";

type DateDisplayProps = {
  createdAt: string;
};

const DateDisplay: React.FC<DateDisplayProps> = ({ createdAt }) => {
  const creationDate = new Date(createdAt);
  const now = new Date();
  const diffInHours = Math.abs(now.getTime() - creationDate.getTime()) / 36e5;

  let displayText;

  if (diffInHours < 1) {
    const diffInMinutes = Math.round(diffInHours * 60);
    displayText = `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    const diffInHoursRounded = Math.round(diffInHours);
    displayText = `${diffInHoursRounded} hours ago`;
  } else {
    displayText = creationDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  }

  return (
    <span className="text-xs font-bold text-gray-400 opacity-75">
      {displayText}
    </span>
  );
};

export default DateDisplay;
