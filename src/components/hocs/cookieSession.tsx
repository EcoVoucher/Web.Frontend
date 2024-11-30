import Cookies from 'js-cookie';
import CryptoJS from "crypto-js";
import { env } from "@/config/env";

export const handleSetCookie = (token: string) => {
    token = criptografar(token);
    Cookies.set('userToken', token, {
        secure: process.env.NODE_ENV === 'production', // HTTPS apenas em produção
        sameSite: 'Strict',  // Proteção contra CSRF
        expires: 1,          // Expira em 1 dia
    });
};

export const handleGetCookie = () => {
    const userToken = Cookies.get('userToken');
    alert(`Token do cookie: ${userToken}`);
};


export function salvarJsonEmCookie(nome: string, objeto: object, dias: number) {
    const jsonString = JSON.stringify(objeto);
    const dataExpiracao = new Date();
    dataExpiracao.setTime(dataExpiracao.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expiracao = "expires=" + dataExpiracao.toUTCString();
    document.cookie = `${nome}=${jsonString};${expiracao};path=/`;
}

export function obterJsonDeCookie(nome: string) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(nome + '=')) {
        const valor = cookie.substring(nome.length + 1);
        return JSON.parse(valor);
      }
    }
    return null; // Retorna null se o cookie não existir
}

function criptografar(string: string) {
    return CryptoJS.AES.encrypt(string, env.secretKey).toString();
}

function descriptografar(string: string) {
    return CryptoJS.AES.decrypt(string, env.secretKey).toString(CryptoJS.enc.Utf8);   
}