// Autor: Sergio Silva
// Fecha: 2025-08-06
// Descripción: Sección principal tipo Hero del portafolio

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/sergio.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src={heroBg}
        alt="Fondo de desarrollo"
        fill
        className="object-cover opacity-20 z-0"
        priority
      />

      {/* Contenido central */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center text-white px-4"
      >
        <Image
          src={profilePic}
          alt="Foto de Sergio"
          width={120}
          height={120}
          className="rounded-full mx-auto border-4 border-blue-500"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mt-4">Sergio Silva</h1>
        <p className="text-lg sm:text-xl mt-2 text-blue-400 font-semibold">
          Desarrollador Web y Frontend Developer
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Link href="#proyectos">
            <button className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 transition">
              Ver proyectos
            </button>
          </Link>
          <Link href="#contacto">
            <button className="px-6 py-2 rounded border border-blue-400 hover:bg-blue-400 hover:text-black transition">
              Contáctame
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
