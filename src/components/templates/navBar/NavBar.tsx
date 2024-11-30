import React from 'react';
import { faBalanceScale, faEnvelope, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import "./style.css";

const NavBar: React.FC = () => {
    return (
        <header>
            
            <a href="/home"><img src="/imagem/IMAGEMhome/log-ecovoucher.jpeg" alt="Logotipo" className="logo" width={150}/></a>
            <div className="sup">
                <div className="superior">
                    <Link href="/pontuacao" className="link" aria-label="1.Sua pegada/seus pontos">
                        1.Pontuação <FontAwesomeIcon icon={faStar} />
                    </Link>
                    <Link href="/legislacao" className="link" aria-label="2.Legislação">
                        2.Legislação <FontAwesomeIcon icon={faBalanceScale} />
                    </Link>
                    <Link href="/contato" className="link" aria-label="3.Contato">
                        3.Contato <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                    <Link href="/login" className="link" aria-label="4.Login">
                        4.Login <FontAwesomeIcon icon={faUser} />
                    </Link>
                </div>
            </div>
            <div className="redesocial">
                <a href="https://youtu.be/uur_Qz6eobs" target="_blank" rel="noopener noreferrer">
                    <img src="imagem/IMAGEMhome/logo-youtube.png" alt="YouTube" width="10%" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <img src="imagem/IMAGEMhome/logo-linkedin.png" alt="LinkedIn" width="10%" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src="imagem/IMAGEMhome/logo-insta.png" alt="Instagram" width="10%" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src="imagem/IMAGEMhome/logo-face.png" alt="Facebook" width="10%" />
                </a>
                <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src="imagem/IMAGEMhome/logo-zap.png" alt="WhatsApp" width="10%" />
                </a>
            </div>
        </header>
    );
};

export default NavBar;
