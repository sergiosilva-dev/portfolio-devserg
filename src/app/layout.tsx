import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio | Sergio Silva",
  description: "Portafolio profesional de Sergio Silva como desarrollador web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}