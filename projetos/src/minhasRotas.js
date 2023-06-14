
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Home
import Home from "./Home";

// Atividade 01
import Atividade01 from "./components/atividade01/Atividade01";
import Relogio from "./components/atividade01/Relogio";
import Frase from "./components/atividade01/Frase";

// Atividade 02
import Atividade02 from "./components/atividade02/Atividade02";
import Contador from "./components/atividade02/Contador";

// Atividade 03
import Atividade03 from "./components/atividade03/Atividade03";
import Gallery from './components/atividade03/Gallery';
import TodoList from './components/atividade03/TodoList';

// Atividade 04
import Atividade04 from "./components/atividade04/Atividade04";
import Toolbar from "./components/atividade04/Toolbar";
import Gallery1 from './components/atividade04/Gallery1';
import Counter from "./components/atividade04/Counter";
import Form from './components/atividade04/Form';
import MovingDot from './components/atividade04/MovingDot';
import Form2 from './components/atividade04/Form2';
import Form3 from './components/atividade04/Form3';
import List from './components/atividade04/List';
import List2 from './components/atividade04/List2';
import ShapeEditor from './components/atividade04/ShaperEditor';
import CounterList from "./components/atividade04/CounterList";
import List3 from './components/atividade04/List3';
import List4 from './components/atividade04/List4';
import BucketList from './components/atividade04/BucketList';

// Atividade 05
import Atividade05 from './components/atividade05/Atividade05';
import Accordion from './components/atividade05/Accordion';
import Messenger from './components/atividade05/Messenger';
import FormQuiz from './components/atividade05/FormQuiz';
import FormTicket from './components/atividade05/FormTicket';

// Calculadora
import Calculadora from './components/calculadora/Calculadora';

const MinhasRotas = () => {
    return (
        <BrowserRouter>
            <Routes>   
                // Home
                <Route path="/" element={<Home />} />

                // Atividade 01
                <Route path="/atividade01" element={<Atividade01 />} />
                <Route path="/relogio" element={<Relogio />} />
                <Route path="/frase" element={<Frase />} />

                // Atividade 02
                <Route path="/atividade02" element={<Atividade02 />} />
                <Route path="/contador" element={<Contador />} />

                // Atividade 03
                <Route path="/atividade03" element={<Atividade03 />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/todolist" element={<TodoList />} />

                // Atividade 04
                <Route path="/atividade04" element={<Atividade04 />} />
                <Route path="/toolbar" element={<Toolbar />} />
                <Route path="/gallery1" element={<Gallery1 />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/form" element={<Form />} />
                <Route path="/movingdot" element={<MovingDot />} />
                <Route path="/form2" element={<Form2 />} />
                <Route path="/form3" element={<Form3 />} />
                <Route path="/list" element={<List />} />
                <Route path="/list2" element={<List2 />} />
                <Route path="/shapeeditor" element={<ShapeEditor />} />
                <Route path="/counterlist" element={<CounterList />} />
                <Route path="/list3" element={<List3 />} />
                <Route path="/list4" element={<List4 />} />
                <Route path="/bucketlist" element={<BucketList />} />

                // Atividade 05
                <Route path="/atividade05" element={<Atividade05 />} />
                <Route path="/accordion" element={<Accordion />} />
                <Route path="/messenger" element={<Messenger />} />
                <Route path="/formquiz" element={<FormQuiz />} />
                <Route path="/formticket" element={<FormTicket />} />
                
                // Calculadora
                <Route path="/calculadora" element={<Calculadora />} />

            </Routes>
        </BrowserRouter>
    );
}

export default MinhasRotas;