import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Psicóloga Ana Carolina",
  description: "Olá Sou Ana Carolina, Psicóloga Clínica (CRP 06/201160), graduada na Universidade Paulista. Trabalho com psicoterapia exclusivamente online, uma abordagem que amplia meu alcance para atender pessoas em qualquer parte do mundo. Clique e saiba mais!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Aqui é onde a fonte será carregada consistentemente */}
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
