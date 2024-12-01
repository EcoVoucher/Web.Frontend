'use client';
import './style.css';
import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { ContatoService } from '../services/ContatoService';
// import { setCookie, getCookie, deleteCookie } from '../utils/cookie-utils';
// import { Contato } from '../models/Contato';
// import styles from '../styles/Contato.module.css';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ContatoFormInputs {
  name: string;
  email: string;
  telefone: string;
  tipo: string;
  mensagem: string;
}

export default function ContatoComponent() {
  const [contatos, setContatos] = useState<ContatoFormInputs[]>([]);
  const [selectedContato, setSelectedContato] = useState<ContatoFormInputs | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    // loadContatosFromCookies();
  }, []);

  const initialValues: ContatoFormInputs = {
    name: '',
    email: '',
    telefone: '',
    tipo: '',
    mensagem: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-zÀ-ſ\s]+$/, 'Nome deve conter apenas letras.')
      .required('Nome é obrigatório.'),
    email: Yup.string()
      .email('E-mail inválido.')
      .required('E-mail é obrigatório.'),
    telefone: Yup.string()
      .matches(/^\(\d{2}\)\d{4,5}-\d{4}$/, 'Formato esperado: (DD) XXXX-XXXX ou (DD) XXXXX-XXXX')
      .required('Telefone é obrigatório.'),
    tipo: Yup.string().required('Tipo é obrigatório.'),
    mensagem: Yup.string()
      .max(300, 'Mensagem deve ter no máximo 300 caracteres.')
      .required('Mensagem é obrigatória.')
  });

  const onSubmit = (values: ContatoFormInputs) => {
    // Simulação de envio de contato
    alert('Mensagem enviada com sucesso! (Simulação)');
    setContatos([...contatos, values]);
  };

  const openEditModal = (contato: ContatoFormInputs) => {
    setSelectedContato(contato);
    setIsEditModalOpen(true);
  };

  const onEditSubmit = (values: ContatoFormInputs) => {
    if (!selectedContato) return;
    // Simulação de atualização de contato
    alert('Contato atualizado com sucesso! (Simulação)');
    setContatos(contatos.map(c => (c === selectedContato ? values : c)));
    setIsEditModalOpen(false);
  };

  return (
    <div className="contatoContainer">
      <div className="formContainer">
        <h2>Contato</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name">Nome:</label>
                <Field name="name" type="text" id="name" placeholder="Nome Completo" className="form-control" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="email">E-mail:</label>
                <Field name="email" type="email" id="email" placeholder="exemplo@e-mail.com" className="form-control" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="telefone">Telefone:</label>
                <Field name="telefone" type="tel" id="telefone" placeholder="(DD) XXXX-XXXX" className="form-control" />
                <ErrorMessage name="telefone" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="tipo">Tipo:</label>
                <Field name="tipo" as="select" id="tipo" className="form-control">
                  <option value="">Selecione</option>
                  <option value="1">Colaborar/Empresa</option>
                  <option value="2">Pessoa Física</option>
                  <option value="3">Outros</option>
                </Field>
                <ErrorMessage name="tipo" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="mensagem">Mensagem (até 300 caracteres):</label>
                <Field name="mensagem" as="textarea" id="mensagem" placeholder="Deixe sua mensagem." className="form-control" />
                <ErrorMessage name="mensagem" component="div" className="text-danger" />
              </div>
              <button type="submit" className="btn btn-success btn-lg">Enviar</button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="container mt-4">
        <table className="table table-striped" id="table-contato">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Mensagem</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {contatos.map((contato, index) => (
              <tr key={index}>
                <td>{contato.name}</td>
                <td>{contato.email}</td>
                <td>{contato.telefone}</td>
                <td>{contato.mensagem}</td>
                <td>
                  <button className="btn btn-success" onClick={() => openEditModal(contato)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedContato && (
        <Modal show={isEditModalOpen} onHide={() => setIsEditModalOpen(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Alterar Contato</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik initialValues={selectedContato} validationSchema={validationSchema} onSubmit={onEditSubmit}>
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="modal-name" className="col-form-label">Nome:</label>
                    <Field name="name" type="text" className="form-control" id="modal-name" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="modal-email" className="col-form-label">Email:</label>
                    <Field name="email" type="text" className="form-control" id="modal-email" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="modal-telefone" className="col-form-label">Telefone:</label>
                    <Field name="telefone" type="text" className="form-control" id="modal-telefone" />
                    <ErrorMessage name="telefone" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="modal-mensagem" className="col-form-label">Mensagem:</label>
                    <Field name="mensagem" as="textarea" className="form-control" id="modal-mensagem" />
                    <ErrorMessage name="mensagem" component="div" className="text-danger" />
                  </div>
                  <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsEditModalOpen(false)}>Fechar</button>
                    <button type="submit" className="btn btn-primary">Salvar Mudanças</button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}
