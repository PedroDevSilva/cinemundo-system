"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <div className="logo">
          <img src="/img/logo.svg" alt="Logo" className="logo-img" />
          <span>CineMundo</span>
        </div>
      </Link>

      <nav className="nav">
        <ul>
          <li><Link href="#">Filmes</Link></li>
          <li><Link href="#">Sessões</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li>
            <Link href="/"> 
              <button
                onClick={() => {
                  localStorage.removeItem("usuarioLogado");
                  window.location.href = "/";
                }}
                >
                Logout
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}
