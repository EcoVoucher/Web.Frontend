"use client";
import React, { useState } from 'react';
import './style.css';

export default function EcoVoucher() {
        return (
            <div>
                <br/>
                 <br/>
                    <h3>Pontos de Coleta</h3>
                    <br/>
                    <div className="conteudo">
                        <div className="imagem">
                            <img src="/imagem/images/locais.png" alt="" width="100%" />
                        </div>
                        <div className="texto">
                            <h2>
                                Os Pontos de coleta estão espalhados por vários lugares da cidade, faça uma pesquisa, veja o ponto mais próximo de seu endereço e nos ajude a cuidar do nosso Planeta.
                            </h2>
                        </div>
                    </div>
            </div>
        );
    };