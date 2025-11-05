"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import FilmeCard from "../components/FilmeCard";
import Footer from "../components/Footer";

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
    <div>
      <Header />
      <main className="container">
        <h1 className="titulo">Em Cartaz</h1>

        {erro && <p className="erro">{erro}</p>}
        
        <div className="grid-filmes">
          {filmes.map((filme) => (
            <FilmeCard key={filme.id} filme={filme} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
