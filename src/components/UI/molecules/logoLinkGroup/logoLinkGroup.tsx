import React from 'react';
import LogoLink from '../../atoms/logoLink/logoLink';
import './logoLinkGroup.module.css';

const LogoGroup: React.FC = () => {
return (
    <div className="logoGroup">
    <LogoLink 
        href="/home" 
        src="/imagem/IMAGEMhome/log-ecovoucher.jpeg" 
        alt="Logotipo" 
        width={150}
    />
    </div>
);
};

export default LogoGroup;
