import { useEffect } from "react";

export default function Letreiro() {
  useEffect(() => {
    const texto = "Venha estudar na Fatec";
    const letreiro = document.getElementById("letreiro");
    let i = 0;

    function escrever() {
      if (i < texto.length) {
        letreiro.textContent += texto.charAt(i);
        i++;
        setTimeout(escrever, 150);
      }
    }

    escrever();
  }, []);

  return <div id="letreiro"></div>;
}
