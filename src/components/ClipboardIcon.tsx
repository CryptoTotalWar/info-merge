"use client";
import React from "react";

type ClipboardIconProps = {
  hyperlink: string;
};

const ClipboardIcon: React.FC<ClipboardIconProps> = ({ hyperlink }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(hyperlink);
  };

  return (
    <span className="material-icons cursor-pointer" onClick={copyToClipboard}>
      content_copy
    </span>
  );
};

export default ClipboardIcon;
