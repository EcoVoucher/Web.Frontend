import Layout from '../layout';
import Image from 'next/image';
import './style.css';


const LegislacaoAmbiental: React.FC = () => {
  const leis = [
    {
      imgSrc: "/imagem/images/arv_1.png",
      titulo: 'Lei 9795/99 – POLÍTICA NACIONAL DE EDUCAÇÃO AMBIENTAL',
      descricao: 'Dispõe sobre a educação ambiental, institui a Política Nacional de Educação Ambiental e dá outras providências.',
      link: 'https://www.planalto.gov.br/ccivil_03/leis/l9795.htm#:~:text=Art.,de%20vida%20e%20sua%20sustentabilidade.',
    },
    {
      imgSrc: '/imagem/images/arv_2.png',
      titulo: 'LEI 6938/81 - POLÍTICA NACIONAL DO MEIO AMBIENTE',
      descricao: 'Traz consigo diretrizes e instrumentos para preservação, melhoria e recuperação da qualidade ambiental.',
      link: 'https://www.planalto.gov.br/ccivil_03/leis/l6938.htm',
    },
    {
      imgSrc: '/imagem/images/arv_3.png',
      titulo: 'LEI 9605/98 - LEI DOS CRIMES AMBIENTAIS',
      descricao: 'Para aplicar sanções penais e administrativas àqueles que praticam conduta ou atividades que lesem o meio ambiente.',
      link: 'https://www.planalto.gov.br/ccivil_03/leis/l9605.htm#:~:text=Disp%C3%B5e%20sobre%20as%20san%C3%A7%C3%B5es%20penais,ambiente%2C%20e%20d%C3%A1%20outras%20provid%C3%AAncias.',
    },
    {
      imgSrc: '/imagem/images/arv_4.png',
      titulo: 'LEI 12305/2010 - POLÍTICA NACIONAL DE RESÍDUOS SÓLIDOS',
      descricao: 'Lei que estabelece instrumentos e diretrizes para os setores públicos e as empresas lidarem com os resíduos gerados.',
      link: 'https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm',
    },
    {
      imgSrc: '/imagem/images/arv_5.png',
      titulo: 'LEI 9433/97 - LEI DE RECURSOS HÍDRICOS',
      descricao: 'Institui a Política Nacional de Recursos Hídricos e cria o Sistema Nacional de Recursos Hídricos, e dá outras providências.',
      link: 'https://www.planalto.gov.br/ccivil_03/leis/l9433.htm',
    },
    {
      imgSrc: '/imagem/images/arv_6.png',
      titulo: 'LEI 7802/89 - LEI DOS AGROTÓXICOS',
      descricao: 'Legislar sobre a produção, registro, exportação, importação, transporte, e controle tecnológico e toxicológico dos agrotóxicos.',
      link: 'https://www.planalto.gov.br/ccivil_03/leis/l7802.htm',
    },
  ];

  return (
            <div>
                    <div className="titulo">
                      <h6>Legislação Ambiental Vigente</h6>
                    </div>
                    <div className="container">
                        <br/>
                      <h2>
                        As leis ambientais no Brasil foram criadas com a intenção de proteger o meio ambiente e reduzir as consequências de ações devastadoras.
                      </h2>
                      {leis.map((lei, index) => (
                        <div key={index} className="box">
                          <Image src={lei.imgSrc} alt={`Imagem ${index + 1}`} width={150} height={150} />
                          <h5>{lei.titulo}</h5>
                          <p>{lei.descricao}</p>
                          <a href={lei.link} target="_blank" rel="noopener noreferrer" className="btn">
                            CONSULTE AQUI
                          </a>
                        </div>
                      ))} 
                    </div>
  </div>
  );
};
export default LegislacaoAmbiental;
