import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beatriz Cunha - Advocacia e Consultoria Jurídica Especializada",
  description: "Serviços jurídicos especializados com excelência e dedicação. Atendimento personalizado para suas necessidades legais.",
  icons: {
    icon: "/marca dagua preta.png",
    apple: "/marca dagua preta.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

