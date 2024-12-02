import React from 'react';
import Image from 'next/image';
import './imageComponent.css';

interface ImageComponentProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default ImageComponent;
