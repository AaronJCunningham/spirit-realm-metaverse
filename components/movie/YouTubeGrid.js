import React from "react";
import { Suspense } from "react";

export const YouTubeGrid = () => {
  return (
    // <div className="youtube-grid">
    <div className="video-container">
      <iframe
        className="video"
        src="https://www.youtube.com/embed/IIyymDGVrH8"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowfullscreen
      ></iframe>
    </div>
    // </div>
  );
};
