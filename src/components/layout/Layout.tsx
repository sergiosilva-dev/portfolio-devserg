// Author: Sergio Silva
// Date: 2025-08-06
// Description: Componente de layout general que contiene Navbar, children y Footer

"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <Navbar />
      <main className="flex-1 w-full px-4 sm:px-8 max-w-7xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
