'use client';
import React from 'react';
import Link from 'next/link';
import styles from './botao.module.css'; // Importa o CSS Module

interface RoundedButtonWithImageProps {
  href: string;
  imgSrc: string;
  altText: string;
  title: string;
  accessKey: string;
  ariaLabel: string;
}

export default function RoundedButtonWithImage({
  href,
  imgSrc,
  altText,
  title,
  accessKey,
  ariaLabel,
}: RoundedButtonWithImageProps) {
  return (
    <Link href={href} title={title} accessKey={accessKey} aria-label={ariaLabel}>
      <button className={styles.botaoredondo}>
        <img src={imgSrc} alt={altText} />
      </button>
    </Link>
  );
}
