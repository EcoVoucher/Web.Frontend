import React from 'react';
import Link from 'next/link'; // Supondo que você está usando Next.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import styles from './navigationLink.module.css'; // Arquivo CSS para estilizar o link

// Define as propriedades (props) que o componente NavigationLink espera receber
interface NavigationLinkProps {
  href: string;            // O endereço de destino do link
  label: string;           // O texto a ser exibido no link
  icon: IconDefinition;    // O ícone FontAwesome a ser exibido
}

// Define o componente atômico NavigationLink
const NavigationLink: React.FC<NavigationLinkProps> = ({ href, label, icon }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={styles.navigationLink} aria-label={label}>
        {label} <FontAwesomeIcon icon={icon} />
      </a>
    </Link>
  );
};

export default NavigationLink;