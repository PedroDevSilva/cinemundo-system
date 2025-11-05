export default function FilmeCard({ filme }) {
  return (
    <div className="filme-card">
      <a href="#">
        <img
          src={filme.poster}
          alt={filme.titulo}
          className="poster"
        />
        <div className="info">
          <h3>{filme.titulo}</h3>
          <p className="filme-descricao">{filme.sinopse?.length > 100 ? filme.sinopse.slice(0, 100) + "..." : filme.sinopse}</p>
        </div>
      </a>
    </div>
  );
}
