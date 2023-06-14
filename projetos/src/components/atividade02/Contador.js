
import React, { useState } from 'react';

import { Link } from "react-router-dom";

import "../../css/atividade02/contador.css";
import menina from "../../img/menina.png";
import menino from "../../img/menino.png";

const Contador = () => {
    const [quantidadeHomem, setQauntidadeHomem] = useState(0);
    const [quantidadeMulher, setQauntidadeMulher] = useState(0);

    const totalPeople = quantidadeHomem + quantidadeMulher;

    const adicionar = (genero) => {
        if (genero === 'homem') {
            setQauntidadeHomem((contagem) => contagem + 1);
        } else if (genero === 'mulher') {
            setQauntidadeMulher((contagem) => contagem + 1);
        }
    };

    const retirar = (genero) => {
        if (genero === 'homem') {
            if (quantidadeHomem > 0) {
                setQauntidadeHomem((contagem) => contagem - 1);
            }
        } else if (genero === 'mulher') {
            if (quantidadeMulher > 0) {
                setQauntidadeMulher((contagem) => contagem - 1);
            }
        }
    };

    return (
        <div className='main'>

            <div className="container-contador">
                <h2>Contador de Pessoas</h2>

                <div className='container-divisao'>

                    <div className="homem">
                        <img src={menino} />
                        <h3>
                            Homens: {quantidadeHomem}
                        </h3>
                        <div className='botoes-contador'>
                            <button onClick={() => retirar('homem')}>-</button>
                            <button onClick={() => adicionar('homem')}>+</button>
                        </div>
                    </div>

                    <div className="mulher">
                        <img src={menina} />
                        <h3>
                            Mulheres: {quantidadeMulher}
                        </h3>
                        <div className='botoes-contador'>
                            <button onClick={() => retirar('mulher')}>-</button>
                            <button onClick={() => adicionar('mulher')}>+</button>
                        </div>
                    </div>
                </div>
                <h3>Total de Pessoas: {totalPeople}</h3>
                <Link className='botao-voltar' to='/atividade02'>Voltar</Link>
            </div>

        </div>
    );
};

export default Contador;
