"use client";

import { useEffect, useState } from "react";
import Carrossel from "../components/Carrossel";
import FilmeCard from "../components/FilmeCard";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarFilmes() {
      try {
        const res = await fetch("http://localhost:8081/filme");
        if (!res.ok) throw new Error("Erro ao carregar filmes");
        const data = await res.json();
        setFilmes(data);
      } catch (err) {
        setErro("Falha na conexão com o servidor");
        console.error(err);
      }
    }
    carregarFilmes();
  }, []);

  const handleFilmeClick = (filme) => {
    window.location.href = `/filme/${filme.id}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const ativo = document.querySelector(".carousel-item.active img");
      if (ativo && !ativo.dataset.clickHandler) {
        ativo.dataset.clickHandler = "true";
        ativo.style.cursor = "pointer"; 

        ativo.onclick = () => {
          const filme = filmes.find((f) => f.titulo === ativo.alt);
          if (filme) handleFilmeClick(filme);
        };
      }
    }, 500);

    return () => clearInterval(interval);
  }, [filmes]);

  return (
    <div className="home-wrapper">
      <main className="container">
        <h1 className="titulo flex gap-2 items-center justify-center">
          🎬 Destaques da semana
        </h1>

        {erro && <p className="erro">{erro}</p>}

        {/* Carrossel intacto */}
        <Carrossel filmes={filmes.slice(0, 5)} />

        <h2 className="titulo flex gap-2 items-center justify-center">
          📚 Filmes disponíveis
        </h2>

        <div className="grid-filmes">
          {filmes.map((filme) => (
            <FilmeCard
              key={filme.id}
              filme={filme}
              onClick={() => handleFilmeClick(filme)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
