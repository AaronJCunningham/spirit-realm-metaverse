import React from "react";
import { Suspense } from "react";

export const YouTubeGrid = () => {
  return (
    <div className="youtube-grid">
      <div className="youtube-grid-item">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IIyymDGVrH8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
