import Link from 'next/link';
import Image from 'next/image';
import './style.css';


export default function SustainableGoals() {
  return (
    <div>
            <div className="page-content">
            <div className="titulo">
                <h6>Objetivos do Desenvolvimento Sustentável</h6>
            </div>
            <br />
            <div className="conteudo">
                <div className="imagem">
                <Link href="https://brasil.un.org/pt-br/sdgs" target="_blank" rel="noopener noreferrer">
                    <Image src="/imagem/img/ODS.jpg" alt="ods" width={500} height={300}></Image>
                </Link>
                </div>
                <div className="texto">
                <h3>O que são ODS?</h3>
                <p>
                    A sigla ODS, de Objetivos de Desenvolvimento Sustentável, faz parte da chamada “Agenda 2030”. Trata-se de um pacto global assinado durante a Cúpula das Nações Unidas, em 2015, por 193 países membros. A agenda é composta por 17 objetivos ambiciosos e interconectados, desdobrados em 169 metas, com foco em superar os principais desafios de desenvolvimento enfrentados por pessoas no Brasil e no mundo, promovendo o crescimento sustentável global até 2030.
                </p>
                <p>Quais são os ODS?</p>
                <p>
                    Os 17 Objetivos de Desenvolvimento Sustentável abarcam diferentes temas de aspectos ambientais ou sociais. O foco de todos eles é acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade.
                </p>
                <p>
                    Cada ODS é dividido em submetas, deixando mais claro as ações que cada país precisa tomar para atingir a vida sustentável dos seus cidadãos (e do seu meio ambiente). Assim como as metas de cada ODS, eles foram construídos de maneira que fossem interdependentes. Ou seja, quando um país conseguir atingir um deles, muito provavelmente, terá conseguido avançar em outros.
                </p>
                <p>O EcoVoucher visa atender, ao menos, 5 objetivos:</p>
                <ul>
                    <li>
                    <strong>ODS 1:</strong> Erradicação da pobreza: acabar com a pobreza em todas as suas formas, em todos os lugares. Conheça:{' '}
                    <Link href="https://brasil.un.org/pt-br/sdgs/1" target="_blank" rel="noopener noreferrer">https://brasil.un.org/pt-br/sdgs/1 </Link>
                    </li>
                    <li>
                    <strong>ODS 2:</strong> Fome zero e agricultura sustentável: acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável. Conheça:{' '}
                    <Link href="https://brasil.un.org/pt-br/sdgs/2" target="_blank" rel="noopener noreferrer">https://brasil.un.org/pt-br/sdgs/2 </Link>
                    </li>
                    <li>
                    <strong>ODS 10:</strong> Redução das desigualdades: reduzir as desigualdades dentro dos países e entre eles. Conheça:{' '}
                    <Link href="https://brasil.un.org/pt-br/sdgs/10" target="_blank" rel="noopener noreferrer">https://brasil.un.org/pt-br/sdgs/10 </Link>
                    </li>
                    <li>
                    <strong>ODS 11:</strong> Cidades e comunidades sustentáveis: tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis. Conheça:{' '}
                    <Link href="https://brasil.un.org/pt-br/sdgs/11" target="_blank" rel="noopener noreferrer">https://brasil.un.org/pt-br/sdgs/11 </Link>
                    </li>
                    <li>
                    <strong>ODS 13:</strong> Ação contra a mudança global do clima: tomar medidas urgentes para combater a mudança climática e seus impactos. Conheça:{' '}
                    <Link href="https://brasil.un.org/pt-br/sdgs/13" target="_blank" rel="noopener noreferrer">https://brasil.un.org/pt-br/sdgs/13 
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </div>
    </div>
  );
}
