"use client";

import { useEffect, useState } from "react";
import "./style.css";

export default function ListaFilme() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function carregarFilmes() {
      const res = await fetch("http://localhost:8081/Filme");
      const dados = await res.json();
      setFilmes(dados);
    }

    carregarFilmes();
  }, []);

  // Função que abre os detalhes do filme
  const handleFilmeClick = (filme) => {
    window.location.href = `/filme/${filme.id}`; // ou modal
  };

  return (
    <div className="lista-container">
      <h1 className="titulo">Filmes Disponíveis</h1>

      {filmes.length === 0 ? (
        <p>Carregando filmes...</p>
      ) : (
        filmes.map((f) => (
          <div
            key={f.id}
            className="card-filme"
            onClick={() => handleFilmeClick(f)} 
            style={{ cursor: "pointer" }}    
          >
            <img src={f.poster} alt={f.titulo} className="poster" />

            <div className="info">
              <h2>{f.titulo}</h2>
              <p className="sinopse">{f.sinopse}</p>

              <p><strong>Diretor:</strong> {f.diretor}</p>
              <p><strong>Elenco:</strong> {f.elenco}</p>
              <p><strong>Duração:</strong> {f.duracao} min</p>
              <p><strong>Ano:</strong> {f.anoLancamento}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

