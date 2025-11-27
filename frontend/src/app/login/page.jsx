// app/login/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

      const usuario = clientes.find(
        (c) => c.email === email && c.senha === senha
      );

      if (!usuario) {
        setMensagem("Email ou senha errados!");
        return;
      }

      // salva o usuario logado
      localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

      // insere na tabela acesso
      await fetch("http://localhost:8081/Acesso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clienteId: usuario.id,
          dataHora: new Date().toISOString(),
        }),
      });

      setMensagem("Logado com sucesso!");

      // volta p ultima pag
      const voltarPara = sessionStorage.getItem("voltarPara") || "/";
      sessionStorage.removeItem("voltarPara");
      router.push(voltarPara);

    } catch (erro) {
      setMensagem("Erro no servidor");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={fazerLogin}>
          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded mb-4"
            required
          />
          <input
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full p-3 border rounded mb-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-center text-sm">{mensagem}</p>
      </div>
    </div>
  );
}