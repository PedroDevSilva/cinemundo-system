import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <div className="logo">
          <img src="/img/logo.png" alt="Logo" className="logo-img" />
          <span>CineMundo</span>
        </div>
      </Link>

      <nav className="nav">
        <ul>
          <li><Link href="#">Filmes</Link></li>
          <li><Link href="#">Sessões</Link></li>
          <li><Link href="#">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}
