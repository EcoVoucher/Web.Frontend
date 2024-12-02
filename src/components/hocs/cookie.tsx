import Cookies from 'js-cookie';
import CryptoJS from "crypto-js";
import { env } from "@/config/env";
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';



const authContext = createContext<{
    token: string | null;
}>({
    token: null,
});


interface AuthProviderProps {
    children: React.ReactNode;
}

export function isAuth(): boolean {
    const token = handleGetCookie();
    let retorno = true;
    if (!token) {
        retorno = false;
    } else {
        try {
            const response = axios.post(`${env.apiBaseUrl}/auth`, {}, {
            headers: {
                'access-token': token
            }
            });
            console.log('Token validation response', response);
            return true;
        } catch (error) {
            console.log('Token validation error', error);
            console.error('Error during token validation', error);
            return false;
        }
    }
    
    return retorno;
}


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token] = useState<string | null>(handleGetCookie());

    useEffect(() => {
        
        
        
        
        if (!token) {
            window.location.href = '/login';
        } else {
            axios.post(`${env.apiBaseUrl}/auth`, {}, {
                headers: {
                    'access-token': token
                }
            }).then(response => {
                console.log('Token validation response', response);
            }).catch(error => {
                handleDeleteCookie('userToken');
                console.error('Error during token validation', error);
                window.location.href = '/login';
            });
        }
    
        // setToken(token);
    }, []);
    useEffect(() => {
    }, [token]);
    //let token = handleGetCookie();
    return (
        <authContext.Provider value={{ token }}>
            {children}
        </authContext.Provider>
    );
}

export const useAuth = () => useContext(authContext);


export const handleSetCookie = (token: string, nameCookie: string, value: object, expire: number) => {
    token = criptografar(token);
    Cookies.set(nameCookie, JSON.stringify(value), {
        secure: false, // HTTPS apenas em produção
        sameSite: 'Strict',  // Proteção contra CSRF
        expires: expire,          // Expira em 1 'dia
    });
}


export const handleSetCookieSession = (token: string, nameCookie = 'userToken') => {
    token = criptografar(token);
    
    Cookies.set(nameCookie, token, {
        secure: true, // HTTPS apenas em produção
        sameSite: 'Strict',  // Proteção contra CSRF
        expires: 1,          // Expira em 1 'dia
    });
};

export const handleGetCookie = () => {
    const userToken: string | null = Cookies.get('userToken') ?? null;
    if (userToken === null) {
        return userToken;
    }
    
    const userGet: string = descriptografar(userToken);

    return userGet;
};

export const handleDeleteCookie = (nameCookie: string) => {
    Cookies.remove(nameCookie, { path: '/' });
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

function criptografar(string: string): string {
    return CryptoJS.AES.encrypt(string, env.secretKey).toString();
}

function descriptografar(string: string): string {
    return CryptoJS.AES.decrypt(string, env.secretKey).toString(CryptoJS.enc.Utf8);
}