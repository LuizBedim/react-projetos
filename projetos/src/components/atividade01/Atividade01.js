import React from 'react'
import {Link} from "react-router-dom"

export default function Atividade01 () {
    return (
        <div>
            <h1>Aula 01</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/relogio'>Relogio</Link>
                    </li>
                    <li>
                        <Link to='/frase'>Frase</Link>
                    </li>
                    <li>
                        <Link to='/'>Voltar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}