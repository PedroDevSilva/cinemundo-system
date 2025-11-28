import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "CineMundo",
  description: "Sistema de exibição de filmes - Versão 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <head>
          <link rel="icon" href="/icon.svg" type="img/svg+xml"></link>
        </head>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
