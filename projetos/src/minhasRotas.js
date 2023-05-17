
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./Home";
import Accordion from './components/Accordion';
import Calculadora from './components/calculadora/Calculadora';

const MinhasRotas = () => {
    return (
        <BrowserRouter>
            <Routes>   
                <Route path="/" element={<Home />} />
                <Route path="/accordion" element={<Accordion />} />
                <Route path="/calculadora" element={<Calculadora />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MinhasRotas;