import React from 'react';
import './videoSection.css';

const VideoSection: React.FC = () => {
  return (
    <div className="video-section">
      <iframe
        src="https://www.youtube.com/embed/uur_Qz6eobs?si=dT7FdrYkXclK7Qy9"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoSection;
