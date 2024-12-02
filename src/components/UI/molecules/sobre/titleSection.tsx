import React from 'react';
import Title from '../.././atoms/tipography/title';
import './titleSection.css';

const TitleSection: React.FC = () => {
  return (
    <div className="title-section">
      <Title text="O que é e como funciona?" />
    </div>
  );
};

export default TitleSection;
