"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PopupSucesso from "../../../components/PopupSucesso";

export default function FilmeDescricao({ params }) {
  const [filme, setFilme] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [carregandoCompra, setCarregandoCompra] = useState(false);
  const router = useRouter();

  // pega id do cliente logado
  const getClienteId = () => {
    try {
      const dados = localStorage.getItem("usuarioLogado");
      if (!dados) return null;
      const usuario = JSON.parse(dados);
      return usuario.id || null;
    } catch {
      return null;
    }
  };

  //  carrega o filme
  useEffect(() => {
    async function carregarFilme() {
      const { id } = await params;
      if (!id) return;

      try {
        const res = await fetch(`http://localhost:8081/filme/${id}`);
        if (res.ok) {
          const data = await res.json();
          setFilme(data);
        } else {
          alert("Filme não encontrado");
        }
      } catch {
        alert("Erro ao carregar o filme");
      }
    }
    carregarFilme();
  }, [params]);

  // comprar ingresso
  async function comprarIngresso() {
    const clienteId = getClienteId();

    if (!clienteId) {
      alert("Você precisa estar logado para comprar!");
      sessionStorage.setItem("voltarPara", window.location.pathname);
      router.push("/login");
      return;
    }

    setCarregandoCompra(true);

    try {
      // gera numero de ingresso aleatorio
      const numeroIngresso = Math.floor(10000000 + Math.random() * 90000000)
        .toString()
        .substring(0, 10);

      const resposta = await fetch("http://localhost:8081/ingresso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          numero: numeroIngresso,
          dataHora: new Date().toISOString(),
          valorTotal: 35.90,
          tipoIngresso: "inteira",
          clienteId: clienteId,
          assentoId: null,  
          pagamentoId: null,
        }),
      });

      if (!resposta.ok) {
        const erro = await resposta.text();
        throw new Error(erro || "Erro no servidor");
      }

      // deu bom
      setShowPopup(true);
    } catch (erro) {
      console.error("Erro ao comprar:", erro);
      alert("Erro ao comprar o ingresso: " + erro.message);
    } finally {
      setCarregandoCompra(false);
    }
  }

  // se nao houver carregado o filme, aparece isso
  if (!filme)
    return (
      <div className="flex items-center justify-center min-h-screen text-3xl font-bold text-green-600">
        Carregando filme...
      </div>
    );

  return (
    <>
      {/* conteudo da pag do filme */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <img
            src={filme.poster}
            alt={filme.titulo}
            className="w-full h-auto object-cover"
          />

          <div className="p-12 flex flex-col justify-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {filme.titulo}
            </h1>

            <p className="text-xl mb-8 text-gray-700 leading-relaxed">
              <strong>Sinopse:</strong> {filme.sinopse}
            </p>

            <div className="space-y-4 text-lg mb-12">
              <p><strong>Diretor:</strong> {filme.diretor}</p>
              <p><strong>Ano:</strong> {filme.anoLancamento}</p>
              <p><strong>Duração:</strong> {filme.duracao} minutos</p>
            </div>

            <button
              onClick={comprarIngresso}
              disabled={carregandoCompra}
              className={`py-6 px-12 rounded-2xl text-3xl font-bold text-white transition-all transform hover:scale-105 shadow-2xl ${
                carregandoCompra
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              }`}
            >
              {carregandoCompra ? "Processando compra..." : "Comprar Ingresso - R$ 35,90"}
            </button>
          </div>
        </div>
      </div>

      {/* PopUp depois de comprar o ingresso com sucesso */}
      {showPopup && (
        <PopupSucesso
          mensagem="PARABÉNS! Seu ingresso foi comprado com sucesso! Divirta-se no cinema!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}