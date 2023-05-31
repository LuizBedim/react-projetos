
import React from 'react';

import { Link } from 'react-router-dom';

export default function Game () {
    return (
        <div>
            <h1>Jogo da memória</h1>

            <Link to='/'>Voltar</Link>
        </div>
    );
}