"use client";
import { useState } from "react";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

  return (
    <div className="relative w-full aspect-video max-w-4xl mx-auto">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`} //src="https://www.youtube.com/embed/2WqL-WLwGu0?si=6Pa9dZjmMLxtHqJa"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full h-full aspect-video rounded-xl"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}
