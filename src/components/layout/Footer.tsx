// Author: Sergio Silva
// Date: 2025-08-06
// Description: Componente de pie de página

"use client";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 text-center py-6 mt-12 text-sm text-zinc-600 dark:text-zinc-400">
      © {new Date().getFullYear()} Sergio Silva. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;
