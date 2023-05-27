import React from 'react'
import {Link} from "react-router-dom"

export default function Atividade03 () {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/todolist'>ToDo List</Link>
                    </li>
                    <li>
                        <Link to='/'>Voltar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}