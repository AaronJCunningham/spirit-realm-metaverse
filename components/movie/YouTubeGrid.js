import React from "react";
import { Suspense } from "react";

export const YouTubeGrid = () => {
  const videos = [
    { id: "HHetbIYg7og", src: "https://www.youtube.com/watch?v=HHetbIYg7og" },
  ];

  return (
    <div className="youtube-grid">
      <div className="youtube-grid-item">
        <iframe
          src="https://www.youtube.com/embed/ZmWREtcDVBE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className="youtube-grid-item">
        <iframe
          src="https://www.youtube.com/embed/ZmWREtcDVBE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className="youtube-grid-item">
        <iframe
          src="https://www.youtube.com/embed/ZmWREtcDVBE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className="youtube-grid-item">
        <iframe
          src="https://www.youtube.com/embed/ZmWREtcDVBE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  );
};
