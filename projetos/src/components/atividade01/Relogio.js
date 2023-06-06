import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../css/home/home.css";

function Relogio() {
    const [horarioAtual, setHorarioAtual] = useState("");

    useEffect(() => {
        function exibirHora() {
            let dataAtual = new Date();
            let hrs = dataAtual.getHours();
            let min = dataAtual.getMinutes();
            let seg = dataAtual.getSeconds();

            if (hrs < 10) {
                hrs = "0" + hrs;
            }

            if (min < 10) {
                min = "0" + min;
            }

            if (seg < 10) {
                seg = "0" + seg;
            }

            let horarioAtual = hrs + ":" + min + ":" + seg;

            setHorarioAtual(horarioAtual);
        }

        const intervalId = setInterval(exibirHora, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container-main">
            <div className="relogio">
                <h1>Relógio</h1>
                <h2>{horarioAtual}</h2>
            </div>
        </div>
    );
}

export default Relogio;
