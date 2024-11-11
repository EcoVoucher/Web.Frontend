'use client';
import { useEffect, useRef, useState } from 'react';
import { validaDocumento } from "@/components/hocs/validaDocumento";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { env } from "@/config/env";

export default function Login() {
    const apiUrl = `${env.apiBaseUrl}/user`;
    const [documento, setDocumento]  = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [documentoValido, setDocumentoValido] = useState<boolean | null>(null);

    useEffect(() => {
        setDocumentoValido(validaDocumento(documento));
    }, [documento])

    const isSubmitting = useRef(false);

    const handleSubmit = async(event: any) => {
        if (isSubmitting.current) return;
        isSubmitting.current = true;
        event.preventDefault();
        console.log(documentoValido);
        if (documentoValido) {
            //const form = event.currentTarget;
            //if (form.checkValidity() === false) {
            //    event.stopPropagation();
            //}


            
            const response = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identidade: documento,
                    senha: senha,
                }),
            });
            const data = await response.json();
            console.log(data);
            

            
            // const response = await axios.get(`${env.apiBaseUrl}/orders`);

            // const orders = response.data.pedidos.map((order: any) => {
            //     const date = new Date(order.data);
            //     const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
            //     return {
            //     id: order.id,
            //     date: formattedDate,
            //     cpf: order.cpf,
            //     paymentMethod: order.forma_pagamento,
            //     itemCount: order.quantidade_itens,
            //     totalValue: order.valor_total,
            //     };
            // });
            console.log('Form submitted');
        } else {
            console.log('Invalid document');
        }
    };

    //const form = document.getElementById('login-form');
    //if (form) {
    //    form.addEventListener('submit', handleSubmit);
    //}
    
    return (
        <div>
            <div className="container2">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                            <a href="/home">
                                <img src="/imagem/IMAGEMhome/log-ecovoucher.jpeg" alt="Logotipo" className="logo"  />
                            </a>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card rounded-0">
                            <div className="card-body">
                                <form id="login-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="cpfOuCnpj">Cpf / Cnpj:</label>
                                        <input type="text" id="cpfOuCnpj" className={`form-control ` + (!documentoValido ? 'is-invalid' : 'is-valid')} name="cpfOuCnpj" required onChange={(e) => setDocumento(e.target.value)}/>
                                        <div className="invalid-feedback" id="cpfCnpjMessage"></div>
                                        <div id="validationServer03" className="invalid-feedback">
                                            Cpf ou Cnpj inválido
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="senha">Senha:</label>
                                        <div className="input-group">
                                            <input type="password" id="senha" className="form-control" name="senha" onChange={(e) => setSenha(e.target.value)} required />
                                        </div>
                                        <div id="validationServer03Feedback" className="invalid-feedback">
                                            Senha inválida
                                        </div>
                                        <div id="passwordMessage" className="invalid-feedback"></div>
                                        <div className="forgot-password">
                                            <a href='#'>Esqueceu a senha?</a>
                                        </div>
                                        <div className="signup">
                                            <a href="/cadastro">Faça seu cadastro!</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Entrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}