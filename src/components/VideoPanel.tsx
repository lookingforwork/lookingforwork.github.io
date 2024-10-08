"use client";

import Image from "next/image";
import { Video } from "./Video";
import React, { useRef, useEffect, useState } from "react";

export const VideoPanel: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to auto-play video:", error);
      });
    }
  }, []);

  return (
    <div className="animate-appear-2000 flex flex-col items-center object-center w-full h-full">
      <video
        ref={videoRef}
        className="flex shrink w-full max-h-[108%] object-cover object-center items-center max-w-[1200px]"
        loop
        muted
        playsInline
      >
        <source src="/vid/blueside_website_demo_5mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
//max-h-[108%]
