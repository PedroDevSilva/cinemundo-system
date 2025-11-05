import "./globals.css";

export const metadata = {
  title: "CineMundo",
  description: "Sistema de exibição de filmes - Versão 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        style={{
          backgroundColor: "black",
          color: "white",
          margin: 0,
          fontFamily: "Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
