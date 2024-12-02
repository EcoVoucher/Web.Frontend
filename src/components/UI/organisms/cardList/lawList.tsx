import React from 'react';
import './lawsList.css';
import LawCard from '../../molecules/card/lawCard';

interface Law {
  imgSrc: string;
  titulo: string;
  descricao: string;
  link: string;
}

interface LawsListProps {
  leis: Law[];
}

const LawsList: React.FC<LawsListProps> = ({ leis }) => (
  <>
    <h5>
      As leis ambientais no Brasil foram criadas com a intenção de proteger o meio ambiente e reduzir as consequências de ações devastadoras.
    </h5>
    <div className="container3">
      {leis.map((lei, index) => (
        <LawCard
          key={index}
          imgSrc={lei.imgSrc}
          titulo={lei.titulo}
          descricao={lei.descricao}
          link={lei.link}
        />
      ))}
    </div>
  </>
);

export default LawsList;
