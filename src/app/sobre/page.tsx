import './style.css';
import { FC } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

const EcoVoucher: FC = () => {
  return (
    <div>
      <Head>
        <title>EcoVoucher - O que é e como funciona?</title>
        <br />
      </Head>
      <div className="page-content">
        <div className="titulo">
          <h3>O que é e como funciona?</h3>
        </div>
        <div className="texto">
          <h2>
            O EcoVoucher irá transformar a maneira de gerar valor à população através da reciclagem. Seu funcionamento é
            simples como demonstrado abaixo: Assista o vídeo sobre nossa empresa!!!
          </h2>
        </div>
        <div className="conteudo">
          <div className="conteudo-video">
            <iframe
              src="https://www.youtube.com/embed/uur_Qz6eobs?si=dT7FdrYkXclK7Qy9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
          </div>
        </div>
      </div>
  );
};

export default EcoVoucher;
