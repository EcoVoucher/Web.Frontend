import React from 'react';
import NavigationLink from '../../atoms/navigationLink/navigationLink';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styles from './navigationLinkGroup.module.css';

// Define a estrutura de dados para os links
interface NavigationLinkData {
  href: string;
  label: string;
  icon: IconDefinition;
}

interface NavigationLinksGroupProps {
  links: NavigationLinkData[]; // Array de links a ser renderizado
}

const NavigationLinksGroup: React.FC<NavigationLinksGroupProps> = ({ links }) => {
  return (
    <div className={styles.sup}>
      {links.map((link, index) => (
        <NavigationLink key={index} href={link.href} label={link.label} icon={link.icon} />
      ))}
    </div>
  );
};

export default NavigationLinksGroup;
