"use client";

import { useEffect, useState } from "react";
import "./style.css";

export default function MeusIngressos() {
  const [ingressos, setIngressos] = useState([]);

  useEffect(() => {
    async function carregarIngressos() {
      const res = await fetch("http://localhost:8081/Ingresso");
      const dados = await res.json();
      setIngressos(dados);
    }

    carregarIngressos();
  }, []);

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Todos os ingressos</h1>

      {ingressos.length === 0 ? (
        <p>Nenhum ingresso encontrado.</p>
      ) : (
        <div className="lista-ingressos">
          {ingressos.map((ing) => (
            <div key={ing.id} className="ingresso-card">
              <p><strong>Nº:</strong> {ing.numero}</p>
              <p><strong>Data:</strong> {new Date(ing.dataHora).toLocaleString()}</p>
              <p><strong>Valor:</strong> R$ {ing.valorTotal}</p>
              <p><strong>Tipo:</strong> {ing.tipoIngresso}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

