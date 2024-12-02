'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { validaDocumento } from "@/components/hocs/validaDocumento";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { env } from "@/config/env";
import { handleSetCookieSession } from '@/components/hocs/cookie';
import validaSenha from '@/components/hocs/validaSenha';

export default function Login() {
    const apiUrl = `${env.apiBaseUrl}/user`;
    const [documento, setDocumento]  = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [documentoValido, setDocumentoValido] = useState<boolean | null>(null);
    const [SenhaValida, setSenhaValida] = useState<boolean | null>(null);

    useEffect(() => {
    }, [documento, senha])

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const isDocumentoValido = validaDocumento(documento);
        const isSenhaValida = validaSenha(senha);

        setDocumentoValido(isDocumentoValido);
        setSenhaValida(isSenhaValida);

        console.log(isDocumentoValido);
        if (isDocumentoValido && isSenhaValida) {            
            const response = axios.post(`${apiUrl}/login`, {
                identidade: documento,
                senha: senha,
            }).then((response) => {
                setSenhaValida(true);
                setDocumentoValido(true);
                handleSetCookieSession(response.data.access_token);
                window.location.href = '/pegada';
            }).catch((error) => {
                console.log(error.message);
                setSenhaValida(false);
                setDocumentoValido(false);
            });
            console.log(response);
        } else {
            console.log('Invalid document');
        }
    };

    return (
        <div>
            <div className="container2" id='teste'>
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
                                <form method='POST' id="login-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="cpfOuCnpj">Cpf / Cnpj:</label>
                                        <input type="text" id="cpfOuCnpj" className={`form-control ` + (documentoValido === false ? 'is-invalid' : documentoValido !== null ? 'is-valid' : '')} name="cpfOuCnpj" required onChange={(e) => setDocumento(e.target.value)}/>
                                        <div id="cfpCnpjFeedback" className="invalid-feedback">
                                            Digite um Cpf ou Cnpj válido
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="senha">Senha:</label>
                                        <div className="input-group">
                                            <input type="password" id="senha" className={`form-control ${SenhaValida === false ? 'is-invalid' : SenhaValida !== null ? 'is-valid' : ''}`} name="senha" onChange={(e) => setSenha(e.target.value)} required />
                                        </div>
                                        <div className="forgot-password">
                                            <a href='#'>Esqueceu a senha?</a>
                                        </div>
                                        <div className="signup">
                                            <a href="/cadastro">Faça seu cadastro!</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success">Entrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}