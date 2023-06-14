import React from 'react'
import { Link } from "react-router-dom"

import "../../css/atividade04/atividade04.css";

export default function Atividade04() {
    return (
        <div className='atividade-main'>
            <nav className='atividade-card'>
                <ul>
                    <div className='atividade-central'>
                        <div className='atividade-esquerda'>
                            <li>
                                <Link to='/toolbar'>Toolbar</Link>
                            </li>
                            <li>
                                <Link to='/gallery1'>Gallery</Link>
                            </li>
                            <li>
                                <Link to='/counter'>Counter</Link>
                            </li>
                            <li>
                                <Link to='/form'>Form</Link>
                            </li>
                            <li>
                                <Link to='/movingdot'>MovingDot</Link>
                            </li>
                            <li>
                                <Link to='/form2'>Form2</Link>
                            </li>
                            <li>
                                <Link to='/form3'>Form3</Link>
                            </li>
                        </div>
                        <div className='atividade-direita'>
                            <li>
                                <Link to='/list'>List</Link>
                            </li>
                            <li>
                                <Link to='/list2'>List2</Link>
                            </li>
                            <li>
                                <Link to='/shapeeditor'>ShapeEditor</Link>
                            </li>
                            <li>
                                <Link to='/counterlist'>Counter List</Link>
                            </li>
                            <li>
                                <Link to='/list3'>List3</Link>
                            </li>
                            <li>
                                <Link to='/list4'>List4</Link>
                            </li>
                            <li>
                                <Link to='/bucketlist'>BucketList</Link>
                            </li>
                        </div>
                    </div>
                    <li>
                        <Link to='/'>Voltar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}