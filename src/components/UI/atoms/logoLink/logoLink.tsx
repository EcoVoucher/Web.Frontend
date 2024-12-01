import React from 'react';
import Link from 'next/link'; 
import styles from './logoLink.module.css'; // Usando CSS Module

interface LogoLinkProps {
  href: string; // URL de destino
  src: string; // Fonte da imagem
  alt: string; // Texto alternativo para acessibilidade
  width?: number; // Largura opcional da imagem
}

const LogoLink: React.FC<LogoLinkProps> = ({ href, src, alt, width = 150 }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={styles.logoLink} aria-label={alt}>
        <img src={src} alt={alt} width={width} className={styles.logo} />
      </a>
    </Link>
  );
};

export default LogoLink;