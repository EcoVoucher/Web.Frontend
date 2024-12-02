import React from 'react';
import Subtitle from '../../atoms/tipography/subtitle';
import './odsMol.css';

interface TextContentProps {
  title: string;
  paragraphs: string[];
}

const TextContent: React.FC<TextContentProps> = ({ title, paragraphs }) => {
  return (
    <div className="text-content">
      <Subtitle text={title} />
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default TextContent;
