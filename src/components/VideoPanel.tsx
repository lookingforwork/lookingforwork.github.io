"use client";

import React, { useRef, useEffect } from "react";

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
    <div className="animate-appear-2000 flex flex-col items-center mt-6 sm:mt-0">
      <video
        ref={videoRef}
        className="object-cover object-center"
        loop
        muted
        playsInline
      >
        <source src="/vid/blueside_website_demo_3mb_dec.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
