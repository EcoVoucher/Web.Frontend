import React from 'react';

import "./style.css"

const NavBar: React.FC = () => {
    return (
        <header>
            <img src="imagem/IMAGEMhome/eco-novo.jpeg" alt="logotipo da empresa" id="marca" />
            <div className="sup">
                <div className="superior">
                    <a href="/pontuacao" target="_self" rel="next" className="link" accessKey="1" aria-label="1.Sua pegada/seus pontos">1.Pontuação <i className="fas fa-star"></i></a>
                    <a href="/legislacao" target="_self" rel="next" className="link" accessKey="2" aria-label="2.Legislaçao">2.Legislação<i className="fas fa-balance-scale"></i></a>
                    <a href="/contato" target="_self" rel="next" className="link" accessKey="3" aria-label="3.Contato">3.<i className="fas fa-envelope"></i></a>
                    <a href="/login" className="link" accessKey="4" aria-label="4.Login">4.Login<i className="fas fa-sign-in-alt"></i></a>
                </div>
            </div>
            <div className="redesocial">
                <a href="https://youtu.be/uur_Qz6eobs" target="_blank"><img src="imagem/IMAGEMhome/logo-youtube.png" alt="YouTube" width="10%" /></a>
                <a href="https://www.linkedin.com/" target="_blank"><img src="imagem/IMAGEMhome/logo-linkedin.png" alt="aedIn" width="10%" /></a>
                <a href="https://www.instagram.com/" target="_blank"><img src="imagem/IMAGEMhome/logo-insta.png" alt="Instagram" width="10%" /></a>
                <a href="https://www.facebook.com/" target="_blank"><img src="imagem/IMAGEMhome/logo-face.png" alt="Facebook" width="10%" /></a>
                <a href="https://www.whatsapp.com/" target="_blank"><img src="imagem/IMAGEMhome/logo-zap.png" alt="WhatsApp" width="10%" /></a>
            </div>
        </header>
    );
};

export default NavBar;