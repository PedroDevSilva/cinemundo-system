"use client";

import { useEffect, useState } from "react";
import Carrossel from "../components/Carrossel";
import CardFilme from "../components/FilmeCard";
import { Film } from 'lucide-react';
import { Star } from 'lucide-react';

export default function PaginaInicial() {
  const [filmes, setFilmes] = useState([]);
  const [mensagemErro, setMensagemErro] = useState("");

  // busca os filmes do endpoint filme quando abre a página
  useEffect(() => {
    const buscarFilmes = async () => {
      try {
        const resposta = await fetch("http://localhost:8081/filme");

        if (!resposta.ok) {
          throw new Error("Deu erro na hora de pegar os filmes");
        }

        const listaRecebida = await resposta.json();
        setFilmes(listaRecebida);
      } catch (erro) {
        setMensagemErro("Não conseguiu conectar no servidor, verifica se o backend tá rodando");
        console.log("Erro completo:", erro);
      }
    };

    buscarFilmes();
  }, []);

  // função pra ir pra página do filme clicado
  const abrirPaginaDoFilme = (filme) => {
    window.location.href = `/filme/${filme.id}`;
  };

  // gambiarra pra deixar a imagem do carrossel clicável (porque o componente não passa o onClick direto)
  useEffect(() => {
    const temporizador = setInterval(() => {
      const imagemAtiva = document.querySelector(".carousel-item.active img");

      if (imagemAtiva && !imagemAtiva.dataset.cliqueJaFoi) {
        imagemAtiva.dataset.cliqueJaFoi = "true";
        imagemAtiva.style.cursor = "pointer";

        imagemAtiva.addEventListener("click", () => {
          const tituloDaImagem = imagemAtiva.alt;
          const filmeAchado = filmes.find((f) => f.titulo === tituloDaImagem);

          if (filmeAchado) {
            abrirPaginaDoFilme(filmeAchado);
          }
        });
      }
    }, 700);

    return () => clearInterval(temporizador);
  }, [filmes]);

  return (
    <div className="home-wrapper">
      <main className="container">
        <h1 className="titulo flex gap-2 items-center justify-center">
          <Star />
          Destaques da semana
          <Star />
        </h1>

        {mensagemErro && <p className="erro">{mensagemErro}</p>}

        {/* carrossel com os 5 primerios filmes */}
        <Carrossel filmes={filmes.slice(0, 5)} />

        <h2 className="titulo flex gap-2 items-center justify-center mt-10">
          <Film />
          Todos os filmes disponíveis
          <Film />  
        </h2>

        <div className="grid-filmes">
          {filmes.map((filme) => (
            <CardFilme
              key={filme.id}
              filme={filme}
              onClick={() => abrirPaginaDoFilme(filme)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}