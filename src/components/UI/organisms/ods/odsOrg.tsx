import React from 'react';
import LinkedImage from '../../molecules/ods/linkimage';
import TextContent from '../../molecules/ods/odsMol';
import ODSList from '../../molecules/ods/listOds';
import './odsOrg.css';

const ContentSection: React.FC = () => {
  const paragraphs = [
    "A sigla ODS, de Objetivos de Desenvolvimento Sustentável, faz parte da chamada 'Agenda 2030'.",
    "Quais são os ODS?",
    "Os 17 Objetivos de Desenvolvimento Sustentável abarcam diferentes temas de aspectos ambientais.",
    "O EcoVoucher visa atender, ao menos, 5 objetivos:",
  ];

  const odsItems = [
    { title: "ODS 1", description: "Erradicação da pobreza.", link: "https://brasil.un.org/pt-br/sdgs/1" },
    { title: "ODS 2", description: "Fome zero e agricultura sustentável.", link: "https://brasil.un.org/pt-br/sdgs/2" },
    { title: "ODS 10", description: "Redução das desigualdades.", link: "https://brasil.un.org/pt-br/sdgs/10" },
    { title: "ODS 11", description: "Cidades e comunidades sustentáveis.", link: "https://brasil.un.org/pt-br/sdgs/11" },
    { title: "ODS 13", description: "Ação contra a mudança global do clima.", link: "https://brasil.un.org/pt-br/sdgs/13" },
  ];

  return (
    <>
      <div className="header-section">
        <LinkedImage href="https://brasil.un.org/pt-br/sdgs" src="/imagem/imagemHOME/ods_logo.png" alt="Objetivos do Desenvolvimento Sustentável" />
      </div>
      <div className="content-section">
        <TextContent title="O que são ODS?" paragraphs={paragraphs} />
        <ODSList items={odsItems} />
      </div>
    </>
  );
};

export default ContentSection;
