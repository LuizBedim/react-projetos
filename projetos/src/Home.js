
import React from 'react'
import {Link} from "react-router-dom"

export default function Home () {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/accordion'>Accordion</Link>
                    </li>
                    <li>
                        <Link to='/calculadora'>Calculadora</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}