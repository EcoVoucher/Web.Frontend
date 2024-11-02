import Link from 'next/link';

export default function HomePage() {
    return (
        <main>
            <div className="principal">
                <a target="ecoVoucher-sobre" rel="next" title="6.CONHEÇA A NOSSA EMPRESA!!" accessKey="6" aria-label="6.CONHEÇA A NOSSA EMPRESA!!">
                    <button className="botaoredondo">
                        <img src="assets/IMAGEM/home/eco-novo.jpeg" alt="ecoVocher" />
                    </button>
                </a>

                <a target="pontos-coleta" rel="next" title="7.SAIBA OS PONTOS DE COLETA!!" accessKey="7" aria-label="7.SAIBA OS PONTOS DE COLETA!!">
                    <button className="botaoredondo">
                        <img src="assets/IMAGEM/home/LOC.png" alt="SAIBA OS PONTOS DE COLETA!!" />
                    </button>
                </a>

                <a target="pegada" rel="next" title="8.CALCULE SUA PEGADA ECOLOGICA!!!" accessKey="8" aria-label="8.CALCULE SUA PEGADA ECOLOGICA!!!">
                    <button className="botaoredondo">
                        <img src="assets/IMAGEM/home/PEGADA ECOLOGICA.jpg" alt="CALCULE SUA PEGADA ECOLOGICA!!!" />
                    </button>
                </a>

                <a target="ods" rel="next" title="9.FAZEMOS PARTE DA ODS!!! VEJA!!" accessKey="9" aria-label="9.FAZEMOS PARTE DA ODS!!! VEJA!!!!!">
                    <button className="botaoredondo">
                        <img src="assets/IMAGEM/home/ODS.jpg" alt="FAZEMOS PARTE DA ODS!!! VEJA!!" />
                    </button>
                </a>
            </div>
            <h1>VENHA FAZER PARTE DESTA IDEIA!!!</h1>
        </main>
    );
}