import React from 'react';
import Subtitle from '../../atoms/tipography/subtitle';
import './TextSection.css';

interface TextSectionProps {
  text: string;
}

const TextSection: React.FC<TextSectionProps> = ({ text }) => {
  return (
    <div className="text-section">
      <Subtitle text={text} />
    </div>
  );
};

export default TextSection;
