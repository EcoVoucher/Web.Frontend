'use client';
import React from 'react';
import RoundedButtonWithImage from '../../atoms/botao/botao';
import styles from './ButtonGrid.module.css'; // Importação correta como CSS Module

export default function ButtonGrid() {
  return (
    <div className={styles.principal}>
      <RoundedButtonWithImage
        href="/sobre"
        imgSrc="/imagem/IMAGEMhome/eco-novo.jpeg"
        altText="ecoVocher"
        title="6.CONHEÇA A NOSSA EMPRESA!!"
        accessKey="6"
        ariaLabel="6.CONHEÇA A NOSSA EMPRESA!!"
      />
      <RoundedButtonWithImage
        href="/pontos"
        imgSrc="/imagem/IMAGEMhome/LOC.png"
        altText="SAIBA OS PONTOS DE COLETA!!"
        title="7.SAIBA OS PONTOS DE COLETA!!"
        accessKey="7"
        ariaLabel="7.SAIBA OS PONTOS DE COLETA!!"
      />
      <RoundedButtonWithImage
        href="/pegada"
        imgSrc="/imagem/IMAGEMhome/PEGADA ECOLOGICA.jpg"
        altText="CALCULE SUA PEGADA ECOLOGICA!!!"
        title="8.CALCULE SUA PEGADA ECOLOGICA!!!"
        accessKey="8"
        ariaLabel="8.CALCULE SUA PEGADA ECOLOGICA!!!"
      />
      <RoundedButtonWithImage
        href="/ods"
        imgSrc="/imagem/IMAGEMhome/ODS.jpg"
        altText="FAZEMOS PARTE DA ODS!!! VEJA!!"
        title="9.FAZEMOS PARTE DA ODS!!! VEJA!!"
        accessKey="9"
        ariaLabel="9.FAZEMOS PARTE DA ODS!!! VEJA!!!!!"
      />
    </div>
  );
}
