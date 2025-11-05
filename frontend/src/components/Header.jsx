export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/img/logo.png" alt="Logo" className="logo-img" />
        <span>CineMundo</span>
      </div>
      <nav className="nav">
         <ul>
          <li><a href="#">Filmes</a></li>
          <li><a href="#">Sessões</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}
