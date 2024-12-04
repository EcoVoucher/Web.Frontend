"use client";
import React, { useState } from 'react';
import PegadaTemplate from '../../components/templates/pegada/pegada';
import FormularioPegada from '../../components/templates/formularios/formularioPegada';
import axios from 'axios';
import { AuthProvider, handleGetCookie, isAuth } from '@/components/hocs/cookie';
import { env } from "@/config/env";

const PegadaPage: React.FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [resultado, setResultado] = useState(0);
    if(!isAuth()) {
        return <AuthProvider><></></AuthProvider>;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const calcularSoma = () => {
        let soma = 0;
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            soma += parseInt(select.value);
        });

        let comparativo: string = "";
        if (soma <= 150) {
            comparativo = "É menor que 4 gha, equivalente à dos E.U.A.";
        } else if (soma <= 400) {
            comparativo = "Está entre 4 e 6 gha, equivalente à da França";
        } else if (soma <= 600) {
            comparativo = "Está entre 6 e 8 gha, equivalente à da Suécia";
        } else if (soma <= 800) {
            comparativo = "Está entre 8 e 10 gha, padrão Brasil";
        } else {
            comparativo = "É maior que 10 gha, dentro da média mundial";
        }    
    
        alert("Seu total de pontos é: " + soma + "\nPegada ecológica: " + comparativo);
        const token = handleGetCookie() || '';
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const userId = decodedToken.user.id;

        axios.patch(`${env.apiBaseUrl}/user/alterar_pegada`, {
            token: userId,
            soma_pegada: soma
        }, {
            headers: {
            'Content-Type': 'application/json',
            'access-token': token,
            }
        }).then(() => {
            alert("Pegada ecológica atualizada com sucesso!");
        }).catch(() => {
            alert('Erro ao atualizar pegada ecológica:');
        });


        setResultado(soma);
    };

    return (
        <><PegadaTemplate>
            <FormularioPegada />
        </PegadaTemplate></>
                )
            }


export default PegadaPage;
