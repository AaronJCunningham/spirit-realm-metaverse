import React from "react";
import { Suspense } from "react";

export const YouTubeGrid = () => {
  return (
    <div className="video-container">
      <iframe
        className="video"
        src="https://www.youtube.com/embed/IIyymDGVrH8"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowFullScreen
      ></iframe>
    </div>
    // </div>
  );
};
