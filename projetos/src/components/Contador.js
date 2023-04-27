
import React, { useState, useEffect } from "react";

function Contador () {
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
    <div>
    <p>Exercício 2 - Letreiro</p>
      <h3>{substring}</h3>
    </div>
  );
}

export default Contador;