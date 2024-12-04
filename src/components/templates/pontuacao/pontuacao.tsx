'use client';
import React from 'react';
import Formulario from '../formularios/formularioPontuacao';
import './pontuacao.css';

interface Material {
  nome: string;
  pontos: number;
}

const Pontuacao: React.FC = () => {
  const materiais: Material[] = [
    { nome: 'Plástico', pontos: 10 },
    { nome: 'Papel', pontos: 8 },
    { nome: 'Vidro', pontos: 5 },
    { nome: 'Metal', pontos: 15 },
  ];

  return (
    <>
      <div className="centralizar">
        {/* Tabela à esquerda */}
        <div className="tabela">
          <h3>Tabela de Materiais Recicláveis</h3>
          <table>
            <thead>
              <tr>
                <th>Tipo de Material</th>
                <th>Pontos por 100g</th>
              </tr>
            </thead>
            <tbody>
              {materiais.map((material, index) => (
                <tr key={index}>
                  <td>{material.nome}</td>
                  <td>{material.pontos} pontos</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Formulário à direita */}
        <div className="esquerda">
          <Formulario materiais={materiais} />
        </div>
      </div>
    </>
  );
};

export default Pontuacao;
