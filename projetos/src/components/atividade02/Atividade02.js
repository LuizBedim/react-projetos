import React from 'react'
import {Link} from "react-router-dom"

export default function Atividade02 () {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/contador'>Contador</Link>
                    </li>
                    <li>
                        <Link to='/'>Voltar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}