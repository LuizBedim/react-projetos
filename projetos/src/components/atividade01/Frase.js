import React, { useState, useEffect } from "react";

import '../../css/atividade01/frase.css';

function Frase() {
    const [frase, setFrase] = useState("Venha estudar na Fatec!!!");
    const [substring, setSubstring] = useState("");

    useEffect(() => {
        let i = 0;

        const intervalId = setInterval(() => {
            setSubstring(frase.substring(0, i));
            i++;
            if (i > frase.length) {
                i = 0;
            }
        }, 200);

        return () => {
            clearInterval(intervalId);
        };
    }, [frase]);

    return (
        <div className="container-main">
            <div className="container-frase">

                <div className="frase">
                    <h3>{substring}</h3>
                </div>
            </div>
        </div>
    );
}

export default Frase;
