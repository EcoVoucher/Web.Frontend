import React from 'react';
import ImageComponent from '../../../atoms/imagens/imageComponents';
import './imageSection.css';

interface ImageSectionProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageSection: React.FC<ImageSectionProps> = ({ src, alt, width, height }) => {
  return (
    <div className="image-section">
      <ImageComponent src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default ImageSection;
