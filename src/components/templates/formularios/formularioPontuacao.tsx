import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './formularioPontuacao.css';

interface FormularioProps {
  materiais: { nome: string; pontos: number }[];
}

const Formulario: React.FC<FormularioProps> = ({ materiais }) => {
  // Configuração do Formik
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

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Calcular Pontos</h2>

      {/* Campo: Material Selecionado */}
      <div className="form-group">
        <label htmlFor="materialSelecionado">Escolha o material:</label>
        <select
          id="materialSelecionado"
          name="materialSelecionado"
          value={formik.values.materialSelecionado}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Selecione</option>
          {materiais.map((material, index) => (
            <option key={index} value={material.pontos}>
              {material.nome}
            </option>
          ))}
        </select>
        {formik.touched.materialSelecionado && formik.errors.materialSelecionado ? (
          <div className="error">{formik.errors.materialSelecionado}</div>
        ) : null}
      </div>

      {/* Campo: Peso */}
      <div className="form-group">
        <label htmlFor="peso">Digite o peso em g:</label>
        <input
          type="number"
          id="peso"
          name="peso"
          value={formik.values.peso}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Peso em g"
        />
        {formik.touched.peso && formik.errors.peso ? (
          <div className="error">{formik.errors.peso}</div>
        ) : null}
      </div>

      {/* Botão de Envio */}
      <button type="submit">Calcular Pontos</button>
    </form>
  );
};

export default Formulario;
