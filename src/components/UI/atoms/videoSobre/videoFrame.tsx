import React from 'react';
import './VideoFrame.css';

interface VideoFrameProps {
  src: string;
  title: string;
}

const VideoFrame: React.FC<VideoFrameProps> = ({ src, title }) => {
  return (
    <iframe
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
  );
};

export default VideoFrame;
