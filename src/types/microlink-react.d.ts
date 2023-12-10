// src/microlink-react.d.ts
declare module "@microlink/react" {
  import React from "react";

  interface MicrolinkProps {
    url: string;
    [key: string]: any; // Add other props as needed
  }

  const Microlink: React.FC<MicrolinkProps>;
  export default Microlink;
}
