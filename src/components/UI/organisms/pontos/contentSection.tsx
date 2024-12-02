import React from 'react';
import ImageSection from '../../molecules/ponto/imageSection/imageSection';
import TextSection from '../../molecules/ponto/textSection';
import './contentSection.css';

const ContentSection: React.FC = () => {
  return (
    <div className="content-section">
      <ImageSection src="/imagem/images/locais.png" alt="Pontos de Coleta" width={500} height={300} />
      <TextSection text="Os Pontos de coleta estão espalhados por vários lugares da cidade, faça uma pesquisa, veja o ponto mais próximo de seu endereço e nos ajude a cuidar do nosso Planeta." />
    </div>
  );
};

export default ContentSection;
