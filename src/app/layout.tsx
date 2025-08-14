import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-devserg.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Portafolio | Sergio Silva",
    template: "%s | Sergio Silva",
  },
  description:
    "Portafolio y blog técnico de Sergio Silva. Next.js, TypeScript, Tailwind, buenas prácticas 2025.",
  alternates: {
    canonical: "/",
    languages: { "es-CO": "/" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Sergio.dev",
    title: "Sergio Silva",
    description:
      "Desarrollador Web y Frontend Developer. Portafolio y blog con tecnologías modernas 2025.",
    images: ["/og/default.jpg"],
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Silva",
    description:
      "Desarrollador Web y Frontend Developer. Portafolio y blog con tecnologías modernas 2025.",
    images: ["/og/default.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" }, // clásico
      { url: "/icons/icon-192.png", sizes: "192x192" },
      { url: "/icons/icon-512.png", sizes: "512x512" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f14" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
