import React, { useEffect } from 'react';
import Hotjar from '@hotjar/browser';
import NavBarOrganism from '../../UI/organisms/elementos/elementos';
import { faHome, faEnvelope, faUser, faGavel } from '@fortawesome/free-solid-svg-icons';

const navigationLinks = [
  { href: '/pontuacao', label: 'Pontuação', icon: faHome },
  { href: '/legislacao', label: 'Legislação', icon: faGavel },
  { href: '/login', label: 'Login', icon: faUser },
  { href: '/contato', label: 'Contato', icon: faEnvelope },
];




const Header: React.FC = () => {
  useEffect(() => {
    Hotjar.init(5234044, 6);
  }, []);
  return (
    <header>
      <NavBarOrganism navigationLinks={navigationLinks} />
    </header>
  );
};

export default Header;
