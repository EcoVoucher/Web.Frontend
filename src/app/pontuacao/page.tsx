/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthProvider, isAuth } from '@/components/hocs/cookie';
import Pontuacao from '@/components/templates/pontuacao/pontuacao';

interface Material {
  nome: string;
  pontos: number;
}

const PontuacaoPage: React.FC = () => {
  if(!isAuth()) {
    return <AuthProvider><></></AuthProvider>;
  }
  const materiais: Material[] = [
    { nome: 'Plástico', pontos: 10 },
    { nome: 'Papel', pontos: 8 },
    { nome: 'Vidro', pontos: 5 },
    { nome: 'Metal', pontos: 15 },
  ];

  // Configuração do Formik
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      materialSelecionado: '',
      peso: '',
    },
    validationSchema: Yup.object({
      materialSelecionado: Yup.string().required('Selecione um material.'),
      peso: Yup.number()
        .typeError('Digite um número válido.')
        .min(1, 'O peso deve ser maior que zero.')
        .required('Digite o peso.'),
    }),
    onSubmit: (values) => {
      const material = materiais.find(
        (m) => m.pontos.toString() === values.materialSelecionado
      );
      if (material) {
        const pontosTotais = (material.pontos / 100) * parseFloat(values.peso);
        alert(`Pontos calculados: ${pontosTotais.toFixed(2)} pontos`);
      }
    },
  });
}

const HomePage: React.FC = () => {
  return (
    <div>
      <Pontuacao />
    </div>
  );
};

export default HomePage;
