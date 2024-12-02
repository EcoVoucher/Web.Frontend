'use client'
import React, { ReactNode, useState } from 'react';
import './pegada.css';
import { handleGetCookie } from '@/components/hocs/cookie';
import { env } from '@/config/env';
import axios from 'axios';

interface PegadaTemplateProps {
    children: ReactNode;
}

const PegadaTemplate: React.FC<PegadaTemplateProps> = ({ children }) => {
    const [resultado, setResultado] = useState<number>(0);

    const calcularSoma = () => {
        let soma = 0;
        const selects = document.querySelectorAll<HTMLSelectElement>('select');
        selects.forEach(select => {
            soma += parseInt(select.value);
        });

        let comparativo: string = "";
        if (soma <= 150) {
            comparativo = "É menor que 4 gha, equivalente à dos E.U.A.";
        } else if (soma <= 400) {
            comparativo = "Está entre 4 e 6 gha, equivalente à da França";
        } else if (soma <= 600) {
            comparativo = "Está entre 6 e 8 gha, equivalente à da Suécia";
        } else if (soma <= 800) {
            comparativo = "Está entre 8 e 10 gha, padrão Brasil";
        } else {
            comparativo = "É maior que 10 gha, dentro da média mundial";
        }

        alert("Seu total de pontos é: " + soma + "\nPegada ecológica: " + comparativo);
        const token = handleGetCookie() || '';
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userId = decodedToken.user.id;

        axios.patch(`${env.apiBaseUrl}/user/alterar_pegada`, {
            token: userId,
            soma_pegada: soma
        }, {
            headers: {
            'Content-Type': 'application/json',
            'access-token': token,
            }
        }).then(() => {
            alert("Pegada ecológica atualizada com sucesso!");
        }).catch(() => {
            alert('Erro ao atualizar pegada ecológica:');
        });

        setResultado(soma);
    };

    return (
        <div className='container'>
            <header className='header'>
                <h3>Pegada Ecológica: O que é isso?</h3>
                <hr />
            </header>

            <main className='main'>
                <section className='pegada'>
                    <div className='imagem'>
                        <img src="imagem/images/footprint.png" alt="Pegada Ecológica" width="100%" />
                    </div>
                    <div className='texto'>
                        <h2>Você já parou para pensar que a forma como vivemos deixa marcas no meio ambiente?</h2>
                        <p>
                            É isso mesmo, nossa caminhada pela Terra deixa “rastros”, “pegadas”, que podem ser maiores ou
                            menores, dependendo de como caminhamos.
                            A Pegada Ecológica é uma metodologia de contabilidade ambiental que avalia a pressão do consumo das
                            populações humanas sobre os recursos naturais.
                            Expressada em hectares globais (gha), permite comparar diferentes padrões de consumo e verificar se
                            estão dentro da capacidade ecológica do planeta.
                        </p>
                        {/* ... Conteúdo adicional ... */}
                    </div>
                </section>

                {children}
            </main>

            <div className='bot'>
                <div className='botao'>
                    <button onClick={calcularSoma}>Verifique a sua pegada</button>
                </div>

                <div className='soma'>
                    <p id="resultado">{resultado}</p>
                </div>
            </div>

            <footer className='footer'>
                <p>© 2024 Pegada Ecológica. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default PegadaTemplate;
