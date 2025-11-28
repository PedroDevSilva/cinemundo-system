"use client";

import { useEffect, useState } from "react";
import "./style.css";

export default function ListaDeFilmes() {
  const [listaFilmes, setListaFilmes] = useState([]);

  // pega os filmes do backend quando a página abre
  useEffect(() => {
    const pegarTudoDoBanco = async () => {
      try {
        const resposta = await fetch("http://localhost:8081/Filme");
        const filmesRecebidos = await resposta.json();
        setListaFilmes(filmesRecebidos);
      } catch (erro) {
        console.log("Deu ruim na hora de buscar os filmes:", erro);
      }
    };

    pegarTudoDoBanco();
  }, []);

  // quando clica no card vai pra página do filme
  const abrirDetalhesDoFilme = (filmeClicado) => {
    window.location.href = `/filme/${filmeClicado.id}`;
  };

  return (
    <div className="lista-container">
      <h1 className="titulo">Filmes Disponíveis</h1>

      {listaFilmes.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          Carregando os filmes, só um segundinho...
        </p>
      ) : (
        listaFilmes.map((cadaFilme) => (
          <div
            key={cadaFilme.id}
            className="card-filme"
            onClick={() => abrirDetalhesDoFilme(cadaFilme)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={cadaFilme.poster}
              alt={cadaFilme.titulo}
              className="poster"
            />

            <div className="info">
              <h2>{cadaFilme.titulo}</h2>
              <p className="sinopse">{cadaFilme.sinopse}</p>

              <p>
                <strong>Diretor:</strong> {cadaFilme.diretor}
              </p>
              <p>
                <strong>Elenco:</strong> {cadaFilme.elenco}
              </p>
              <p>
                <strong>Duração:</strong> {cadaFilme.duracao} minutos
              </p>
              <p>
                <strong>Ano:</strong> {cadaFilme.anoLancamento}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}