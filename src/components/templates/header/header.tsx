import React from 'react';
import NavBarOrganism from '../../UI/organisms/elementos/elementos';
import { faHome, faEnvelope, faUser, faGavel } from '@fortawesome/free-solid-svg-icons';

const navigationLinks = [
  { href: '/pontuacao', label: 'Pontuação', icon: faHome },
  { href: '/legislacao', label: 'Legislação', icon: faGavel },
  { href: '/login', label: 'Login', icon: faUser },
  { href: '/contato', label: 'Contato', icon: faEnvelope },
];


const Header: React.FC = () => {
  return (
    <header>
      <NavBarOrganism navigationLinks={navigationLinks} />
    </header>
  );
};

export default Header;
