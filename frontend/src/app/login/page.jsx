"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserRound } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const router = useRouter();

  async function fazerLogin(e) {
    e.preventDefault();
    setMensagem("Verificando...");

    try {
      const res = await fetch("http://localhost:8081/Cliente");
      const clientes = await res.json();
      const usuario = clientes.find(c => c.email === email && c.senha === senha);

      if (!usuario) {
        setMensagem("Email ou senha incorretos!");
        return;
      }

      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
      await fetch("http://localhost:8081/Acesso", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ clienteId: usuario.id, dataHora: new Date().toISOString() }) });
      
      setMensagem("Login feito com sucesso!");
      const voltarPara = sessionStorage.getItem("voltarPara") || "/";
      sessionStorage.removeItem("voltarPara");
      router.push(voltarPara);

    } catch (erro) {
      setMensagem("Erro no servidor");
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-[#111] border border-[#222] rounded-xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-[#cc0000] text-center mb-4">
          Login Cine Mundo
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Entre com seu e-mail e senha
        </p>

        <form onSubmit={fazerLogin} className="space-y-5">
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#444] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#cc0000] focus:ring-2 focus:ring-[#facc15]/30 transition"
          />
          <input
            type="password"
            placeholder="••••••••"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#444] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#cc0000] focus:ring-2 focus:ring-[#facc15]/30 transition"
          />

          <button
            type="submit"
            className="w-full py-3 bg-transparent border border-[#cc0000] text-[#cc0000] rounded-lg font-bold text-lg hover:bg-[#facc15] hover:text-black transition-all duration-200 hover:shadow-lg hover:shadow-[#facc15]/30"
          >
            Entrar na Conta
          </button>
        </form>

        <p className="text-center mt-6 text-[#cc0000] min-h-6">
          {mensagem}
        </p>
      </div>
    </div>
  );
}