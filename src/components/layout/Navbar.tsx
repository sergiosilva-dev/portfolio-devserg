// Author: Sergio Silva
// Date: 2025-08-06
// Description: Componente de navegación principal del sitio

"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full bg-white dark:bg-zinc-950 shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between px-4 sm:px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Sergio.dev
        </Link>
        <div className="space-x-4">
          <Link href="#sobre-mi" className="hover:underline">
            Sobre mí
          </Link>
          <Link href="#proyectos" className="hover:underline">
            Proyectos
          </Link>
          <Link href="#skills" className="hover:underline">
            Skills
          </Link>
          <Link href="#contacto" className="hover:underline">
            Contacto
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
