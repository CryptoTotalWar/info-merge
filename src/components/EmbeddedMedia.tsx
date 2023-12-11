// src/components/EmbeddedMedia.tsx
"use client";
import React from "react";
import Microlink from "@microlink/react";

type EmbeddedMediaProps = {
  url: string;
};

const EmbeddedMedia: React.FC<EmbeddedMediaProps> = ({ url }) => {
  return (
    <div className="my-2 max-w-full">
      <Microlink
        url={url}
        size="large"
        style={{
          borderRadius: "0.42857em",
          fontFamily: "inherit", // Use the inherited font style
        }}
      />
    </div>
  );
};

export default EmbeddedMedia;
