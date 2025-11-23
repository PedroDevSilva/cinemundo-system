"use client";

import { useEffect, useState } from "react";
import { Clapperboard } from "lucide-react";
import Carrossel from "../components/Carrossel";
import FilmeCard from "../components/FilmeCard"

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

  return (
    <div className="w-screen h-screen">
      <main className="container">
        <h1 className="titulo flex gap-2 items-center">
          <Clapperboard />
          Destaques da semana
        </h1>
        <br></br>
        <br></br>
        {erro && <p className="erro">{erro}</p>}

        <Carrossel filmes={filmes.slice(0, 5)} />
        <h2 className="titulo flex gap-2 items-center">
          Filmes disponíveis
        </h2>

        <div className="grid-filmes">
          {filmes.slice(6,10).map((filme) => (
            <FilmeCard key={filme.id} filme={filme} />
          ))}
        </div>
        
      </main>
    </div>
  );
}
