import React from 'react';
import Link from 'next/link';
import ImageComponent from '../../atoms/imagens/imageComponents';
import './linkimage.css';

interface LinkedImageProps {
  href: string;
  src: string;
  alt: string;
}

const LinkedImage: React.FC<LinkedImageProps> = ({ href, src, alt }) => {
  return (
    <div className="linked-image">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <ImageComponent src={src} alt={alt} width={200} height={200} />
      </Link>
    </div>
  );
};

export default LinkedImage;
