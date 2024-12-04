import React from 'react';
import './subtitle.css';

interface SubtitleProps {
  text: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
  return <h2>{text}</h2>;
};

export default Subtitle;
