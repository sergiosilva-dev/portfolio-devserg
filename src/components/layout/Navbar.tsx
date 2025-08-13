// Author: Sergio Silva
// Date: 2025-08-06
// Description: Componente de navegación principal del sitio

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre mí" },
  { href: "/projects", label: "Proyectos" },
  { href: "/blog", label: "Blog" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Sergio.dev
        </Link>
        <div className="hidden md:flex gap-4">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-2 py-1 rounded-md text-sm ${
                  active ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
