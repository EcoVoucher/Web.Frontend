import React from 'react';
import './lawCard.css';
import ImageComponent from '../../atoms/imagens/imageComponents';
import Button from '../../atoms/buttons/button';

interface LawCardProps {
  imgSrc: string;
  titulo: string;
  descricao: string;
  link: string;
}

const LawCard: React.FC<LawCardProps> = ({ imgSrc, titulo, descricao, link }) => (
  <div className="box">
    <ImageComponent src={imgSrc} alt={titulo} width={150} height={150} />
    <p>{titulo}</p>
    <p>{descricao}</p>
    <Button link={link} text="CONSULTE AQUI" />
  </div>
);

export default LawCard;
