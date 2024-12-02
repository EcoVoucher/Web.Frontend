import React from 'react';
import Subtitle from '../../atoms/tipography/subtitle';
import './subTitleSection.css';

const SubtitleSection: React.FC = () => {
  return (
    <div className="subtitle-section">
      <Subtitle text="O EcoVoucher irá transformar a maneira de gerar valor à população através da reciclagem. Seu funcionamento é simples como demonstrado abaixo: Assista o vídeo sobre nossa empresa!!!" />
    </div>
  );
};

export default SubtitleSection;
