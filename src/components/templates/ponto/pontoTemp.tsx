import React from 'react';
import Title from '../../UI/atoms/tipography/title';
import ContentSection from '../../UI/organisms/pontos/contentSection';
import './pontoTemp.css';

const PontoEco: React.FC = () => {
  return (
    <div className="ponto-eco">
      <Title text="Pontos de Coleta" />
      <ContentSection />
    </div>
  );
};

export default PontoEco;
