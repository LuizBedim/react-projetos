
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./Home";
import Accordion from './components/Accordion';

const MinhasRotas = () => {
    return (
        <BrowserRouter>
            <Routes>   
                <Route path="/" element={<Home />} />
                <Route path="/accordion" element={<Accordion />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MinhasRotas;