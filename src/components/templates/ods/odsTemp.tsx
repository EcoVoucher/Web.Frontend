import React from 'react';
import Title from '../../UI/atoms/tipography/title';
import ContentSection from '../../UI/organisms/ods/odsOrg';
import './odsTemp.css';

const SustainableGoals: React.FC = () => {
  return (
    <div className="sustainable-goals">
      <Title text="Objetivos do Desenvolvimento Sustentável" />
      <ContentSection />
    </div>
  );
};

export default SustainableGoals;
