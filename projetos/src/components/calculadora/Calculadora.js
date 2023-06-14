
import React, { useState } from 'react';

import { Link } from "react-router-dom";

import './calculadora.css';

const Calculadora = () => {
    const [resultado, setResultado] = useState('');
    const [numeroAtual, setNumeroAtual] = useState('');
    const [operador, setOperador] = useState('');

    const numeroClick = (number) => {
        setNumeroAtual(numeroAtual + number);
    };

    const operadorClick = (operador) => {
        if (numeroAtual !== '') {
            setOperador(operador);
            setResultado(numeroAtual);
            setNumeroAtual('');
        }
    };

    const calcularClick = () => {
        if (operador !== '' && numeroAtual !== '') {
            const numero1 = parseFloat(resultado);
            const numero2 = parseFloat(numeroAtual);
            let resultadocalculo;

            switch (operador) {
                case '+':
                    resultadocalculo = numero1 + numero2;
                    break;
                case '-':
                    resultadocalculo = numero1 - numero2;
                    break;
                case '*':
                    resultadocalculo = numero1 * numero2;
                    break;
                case '/':
                    resultadocalculo = numero1 / numero2;
                    break;
                default:
                    return;
            }

            setResultado(resultadocalculo.toString());
            setNumeroAtual('');
            setOperador('');
        }
    };

    const handleClearClick = () => {
        setResultado('');
        setNumeroAtual('');
        setOperador('');
    };

    return (
        <div className='container-main'>
            <div className='container-calculadora'>
                <div className="calculadora">
                    <div className="resultado">{resultado}</div>
                    <div className="input">
                        <input type="text" value={numeroAtual} readOnly />
                    </div>
                    <div className="botoes">
                        <button onClick={() => numeroClick('7')}>7</button>
                        <button onClick={() => numeroClick('8')}>8</button>
                        <button onClick={() => numeroClick('9')}>9</button>
                        <button onClick={() => operadorClick('/')}>/</button>
                        <button onClick={() => numeroClick('4')}>4</button>
                        <button onClick={() => numeroClick('5')}>5</button>
                        <button onClick={() => numeroClick('6')}>6</button>
                        <button onClick={() => operadorClick('*')}>*</button>
                        <button onClick={() => numeroClick('1')}>1</button>
                        <button onClick={() => numeroClick('2')}>2</button>
                        <button onClick={() => numeroClick('3')}>3</button>
                        <button onClick={() => operadorClick('-')}>-</button>
                        <button onClick={() => numeroClick('0')}>0</button>
                        <button onClick={() => calcularClick()}>=</button>
                        <button onClick={() => handleClearClick()}>C</button>
                        <button onClick={() => operadorClick('+')}>+</button>
                    </div>

                </div>
                <Link className="voltar" to='/'>Voltar</Link>
            </div>
        </div>
    );
};

export default Calculadora;