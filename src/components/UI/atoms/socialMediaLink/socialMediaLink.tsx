import React from 'react';
import styles from './socialMediaLink.module.css'; // Usando CSS Module

interface SocialMediaLinkProps {
  href: string; // URL do perfil na mídia social
  src: string; // Caminho para o ícone da mídia social
  alt: string; // Texto alternativo para acessibilidade
  width?: string; // Largura opcional da imagem
  height?: string; // Altura opcional da imagem
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ href, src, alt, width = '20px', height = '20px' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialLink}
      aria-label={alt} // Melhora a acessibilidade
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height} // Permite altura personalizada
        className={styles.socialImage}
      />
    </a>
  );
};

export default SocialMediaLink;
