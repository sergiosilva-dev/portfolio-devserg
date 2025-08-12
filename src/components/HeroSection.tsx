// Autor: Sergio Silva
// Fecha: 2025-08-06
// Descripción: Sección principal tipo Hero del portafolio

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profilePic from "@/assets/sergio.jpg";
import ParticlesBackground from "@/components/common/ParticlesBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-full flex items-center justify-center bg-zinc-950 overflow-hidden">
      {/* Fondo con partículas */}
      <div className="absolute inset-0 z-0 h-full pointer-events-none">
        {/* <- z-0, no negativo */}
        <ParticlesBackground />
      </div>

      {/* Fade suave hacia el footer */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-zinc-950" />

      {/* Contenido */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={profilePic}
          alt="Foto de Sergio"
          width={120}
          height={120}
          className="rounded-full mx-auto border-4 border-blue-500"
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-bold mt-4">Sergio Silva</h1>
        <p className="mt-2 text-lg text-zinc-300">
          Desarrollador Web y Frontend Developer
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="#proyectos"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2 rounded-md border border-zinc-600"
          >
            Contáctame
          </a>
        </div>
      </motion.div>
    </section>
  );
}
