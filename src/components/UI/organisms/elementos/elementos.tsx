import React from 'react';
import LogoGroup from '../../molecules/logoLinkGroup/logoLinkGroup';
import NavigationLinksGroup from '../../molecules/navigationLinksGroup/navigationLinkGroup';
import SocialMediaLinksGroup from '../../molecules/socialMidiaLinkGroup/socialMidiaLinkGroup';
import styles from './elementos.module.css';

interface NavigationLinkData {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface NavBarOrganismProps {
  navigationLinks: NavigationLinkData[];
}

const NavBarOrganism: React.FC<NavBarOrganismProps> = ({ navigationLinks }) => {
  return (
    <nav className={styles.navBar}>
      <LogoGroup />
      <NavigationLinksGroup links={navigationLinks} />
      <SocialMediaLinksGroup />
    </nav>
  );
};

export default NavBarOrganism;
