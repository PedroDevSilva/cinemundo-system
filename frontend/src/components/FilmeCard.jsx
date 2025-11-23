import Link from "next/link";

export default function FilmeCard({ filme }) {
  return (
    <div className="filme-card">
      <Link href={`/filme/${filme.id}`}>
        <img
          src={filme.poster}
          alt={filme.titulo}
          className="poster"
        />
        <div className="info">
          <h3>{filme.titulo}</h3>
          <p className="filme-descricao">
            {filme.sinopse?.length > 100 ? filme.sinopse.slice(0, 100) + "..." : filme.sinopse}
          </p>
        </div>
      </Link>
    </div>
  );
}
