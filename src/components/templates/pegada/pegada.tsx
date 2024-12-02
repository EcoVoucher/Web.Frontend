'use client'
import React, { ReactNode, useState } from 'react';
import './pegada.css';

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
        fetch('http://localhost:4000/api/user/alterar_pegada', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyOTYwYjVlNzE2ZmUxYzVjYTIyM2Q2In0sImlhdCI6MTczMDc2NzgxNCwiZXhwIjoxNzMwNzc3ODE0fQ.Gs8tlbl5eHb0LSpbv-0DJkKq5dfiHnjP3q6i020pajw',
            },
            body: JSON.stringify({
                token: '672960b5e716fe1c5ca223d6',
                soma_pegada: soma
            })
        }).then((response) => response.json()).then(() => {
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
                    <button onClick={calcularSoma}>Verificar minha pegada</button>
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
