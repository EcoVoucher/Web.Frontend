'use client';
import './style.css';
import Link from 'next/link';


export default function HomePage() {
    return (
        <div>
            <div className="principal">
                <Link href="/sobre" title="6.CONHEÇA A NOSSA EMPRESA!!" accessKey="6" aria-label="6.CONHEÇA A NOSSA EMPRESA!!">
                    <button className="botaoredondo">
                        <img src="imagem/IMAGEMhome/eco-novo.jpeg" alt="ecoVocher" />
                    </button>
                </Link>

                <Link href="/pontos" title="7.SAIBA OS PONTOS DE COLETA!!" accessKey="7" aria-label="7.SAIBA OS PONTOS DE COLETA!!">
                    <button className="botaoredondo">
                        <img src="imagem/IMAGEMhome/LOC.png" alt="SAIBA OS PONTOS DE COLETA!!" />
                    </button>
                </Link>

                <Link href="/pegada" title="8.CALCULE SUA PEGADA ECOLOGICA!!!" accessKey="8" aria-label="8.CALCULE SUA PEGADA ECOLOGICA!!!">
                    <button className="botaoredondo">
                        <img src="/imagem/IMAGEMhome/PEGADA ECOLOGICA.jpg" alt="CALCULE SUA PEGADA ECOLOGICA!!!" />
                    </button>
                </Link>

                <Link href="/ods" title="9.FAZEMOS PARTE DA ODS!!! VEJA!!" accessKey="9" aria-label="9.FAZEMOS PARTE DA ODS!!! VEJA!!!!!">
                    <button className="botaoredondo">
                        <img src="imagem/IMAGEMhome/ODS.jpg" alt="FAZEMOS PARTE DA ODS!!! VEJA!!" />
                    </button>
                </Link>
            </div>
            <h1>VENHA FAZER PARTE DESTA IDEIA!!!</h1>
        </div>
    );

}