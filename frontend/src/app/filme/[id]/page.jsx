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
      const dados = localStorage.getItem("usuarioLogado");//armazena usuario logado
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
          valorTotal: 35.90, //valor fixo, ja que meia e inteira nao estao implementadas ainda
          tipoIngresso: "inteira",
          clienteId: clienteId,
          assentoId: 1,  //para intuito de testes, ja que funcao de assentos nao está implementada
          pagamentoId: 1,//para intuito de testes, ja que função de seleção de pagamento nao está implementada
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

  // se nao tiver carregado o filme, aparece isso
  if (!filme)
    return (
      <div className="flex items-center justify-center min-h-screen text-3xl font-bold text-[#cc0000]">
        Carregando filme...
      </div>
    );

  return (
    <>
      {/* conteudo da pag do filme */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid md:grid-cols-2 gap-12 bg-[#111] rounded-3xl overflow-hidden border border-[#222] shadow-2xl shadow-[#cc0000]/10">
          <img
            src={filme.poster}
            alt={filme.titulo}
            className="w-full h-auto object-cover"
          />

          <div className="p-12 flex flex-col justify-center">
            <h1 className="text-6xl font-bold mb-6 text-[#cc0000]">
              {filme.titulo}
            </h1>

            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              <strong className="text-[#cc0000]">Sinopse:</strong> {filme.sinopse}
            </p>

            <div className="space-y-4 text-lg mb-12 text-gray-300">
              <p><strong className="text-[#cc0000]">Diretor:</strong> {filme.diretor}</p>
              <p><strong className="text-[#cc0000]">Ano:</strong> {filme.anoLancamento}</p>
              <p><strong className="text-[#cc0000]">Duração:</strong> {filme.duracao} minutos</p>
            </div>

            <button
              onClick={comprarIngresso}
              disabled={carregandoCompra}
              className={`w-full max-w-md mx-auto py-6 px-12 rounded-xl text-2xl font-bold transition-all duration-300 
                ${carregandoCompra 
                  ? "bg-[#333] text-gray-500 cursor-not-allowed border border-[#444]" 
                  : "bg-transparent border-2 border-[#cc0000] text-[#cc0000] hover:bg-[#facc15] hover:text-black hover:shadow-2xl hover:shadow-[#cc0000]/40 hover:-translate-y-1"
                }`}
            >
              {carregandoCompra ? "Processando compra..." : "Comprar Ingresso - R$ 35,90"}
            </button>
          </div>
        </div>
      </div>

      {/* puxa o componente popup */}
      {showPopup && (
        <PopupSucesso
          mensagem="PARABÉNS! Seu ingresso foi comprado com sucesso! Divirta-se no cinema!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}