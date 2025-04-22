
import { useEffect } from "react";

export default function Relogio() {
  useEffect(() => {
    const elemento = document.getElementById("relogio");

    function atualizarHora() {
      const agora = new Date();
      const horas = agora.getHours().toString().padStart(2, '0');
      const minutos = agora.getMinutes().toString().padStart(2, '0');
      const segundos = agora.getSeconds().toString().padStart(2, '0');

      elemento.textContent = `${horas}:${minutos}:${segundos}`;
    }

    atualizarHora(); // já mostra na primeira renderização
    const intervalo = setInterval(atualizarHora, 1000);

    return () => clearInterval(intervalo); // limpa o intervalo se o componente for desmontado
  }, []);

  return <div id="relogio" style={{ fontSize: "2rem", fontFamily: "monospace" }}></div>;
}


