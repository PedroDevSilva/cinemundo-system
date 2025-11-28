"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carrossel({ filmes }) {
  const [index, setIndex] = useState(0);

  // sistema com timer pra trocar de filmes de destaque
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % filmes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [filmes.length]);

  function anterior() {
    setIndex((i) => (i - 1 + filmes.length) % filmes.length);
  }

  function proximo() {
    setIndex((i) => (i + 1) % filmes.length);
  }

  return (
    <div className="carousel-container">
      <button className="btn-nav left" onClick={anterior}>
        <ChevronLeft color="#facc15" size={32} />
      </button>

      <div className="carousel">
        {filmes.map((filme, i) => {
          const diff = (i - index + filmes.length) % filmes.length;

          // lista das posicoes
          let style = {};

          if (diff === 0) {
            // elemento do meio (destaque)
            style = { transform: "translateX(0px) scale(1.25)", zIndex: 3 };
          } else if (diff === 1) {
            style = { transform: "translateX(180px) scale(0.9)", zIndex: 2 };
          } else if (diff === filmes.length - 1) {
            style = { transform: "translateX(-180px) scale(0.9)", zIndex: 2 };
          } else {
            style = { transform: "scale(0.8)", zIndex: 1, opacity: 0 };
          }

          return (
            <div
              key={filme.id}
              className={`carousel-item ${diff === 0 ? "active" : ""}`}
              style={style}
            >
              <img
                src={filme.poster}
                alt={filme.titulo}
                style={{
                  width: "200px",
                  height: "300px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </div>
          );
        })}
      </div>

      
      <button className="btn-nav right" onClick={proximo}>
        <ChevronRight color="#facc15" size={32} />
      </button>
    </div>
  );
}
