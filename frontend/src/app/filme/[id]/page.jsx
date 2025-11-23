"use client";
import { useEffect, useState } from "react";
import "./style.css"; // IMPORTANTE

export default function FilmeDescricao({ params }) {
  const [filme, setFilme] = useState(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregar() {
      const { id } = await params;

      try {
        const res = await fetch(`http://localhost:8081/filme/${id}`);
        if (!res.ok) throw new Error("Erro ao buscar filme");

        const dados = await res.json();
        setFilme(dados);
      } catch (e) {
        setErro(e.message);
      }
    }

    carregar();
  }, [params]);

  if (erro) return <h1 className="erro">{erro}</h1>;
  if (!filme) return <h1 className="carregando">Carregando...</h1>;

  return (
    <div className="pagina-filme">
      <div className="poster-container">
        <img src={filme.poster} className="poster-filme" alt={filme.titulo} />
      </div>

      <div className="info-filme">
        <h1 className="titulo-filme">{filme.titulo}</h1>

        <p className="sinopse"><b>Sinopse:</b> {filme.sinopse}</p>

        <p><b>Diretor:</b> {filme.diretor}</p>
        <p><b>Elenco:</b> {filme.elenco}</p>

        <p><b>Ano de lançamento:</b> {filme.anoLancamento}</p>
        <p><b>Duração:</b> {filme.duracao} min</p>
        <p><b>Classificação:</b> {filme.classificacaoIndicativa}</p>
        <p><b>Produtora:</b> {filme.produtora}</p>
      </div>
    </div>
  );
}
