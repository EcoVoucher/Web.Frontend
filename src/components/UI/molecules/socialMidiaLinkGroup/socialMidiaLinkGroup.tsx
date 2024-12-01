import React from 'react';
import SocialMediaLink from '../../atoms/socialMediaLink/socialMediaLink';
import './socialMidiaLinkGroup.module.css';

const socialMediaLinksData = [
  { href: "https://youtu.be/uur_Qz6eobs", src: "/imagem/IMAGEMhome/logo-youtube.png", alt: "YouTube" },
  { href: "https://www.linkedin.com/", src: "/imagem/IMAGEMhome/logo-linkedin.png", alt: "LinkedIn" },
  { href: "https://www.instagram.com/", src: "/imagem/IMAGEMhome/logo-insta.png", alt: "Instagram" },
  { href: "https://www.facebook.com/", src: "/imagem/IMAGEMhome/logo-face.png", alt: "Facebook" },
];


const SocialMediaLinksGroup: React.FC = () => {
  return (
    <div className="socialMediaGroup">
      {socialMediaLinksData.map((link, index) => (
        <SocialMediaLink key={index} href={link.href} src={link.src} alt={link.alt} />
      ))}
    </div>
  );
};

export default SocialMediaLinksGroup;
