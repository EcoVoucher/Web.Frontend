'use client';
import React from 'react';
import ButtonGrid from '../../molecules/botaogrid/botaogrid';
import styles from './botaohome.module.css'; // Importa o CSS module corretamente

export default function HomePageOrganism() {
  return (
    <div className={styles.container}>
      <ButtonGrid />
      {/* Associa o estilo local à tag h1 */}
      <h1 className={styles.title}>VENHA FAZER PARTE DESTA IDEIA!!!</h1>
    </div>
  );
}
