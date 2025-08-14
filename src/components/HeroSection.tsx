// Autor: Sergio Silva
// Fecha: 2025-08-06
// Descripción: Sección principal tipo Hero del portafolio

"use client";

import Image from "next/image";
import Link from "next/link";
import ParticlesBackground from "@/components/common/ParticlesBackground";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Fondo de partículas */}
      <ParticlesBackground
        className="absolute inset-0 -z-10 pointer-events-none"
        ariaHidden
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[70vh] md:min-h-[78vh] lg:min-h-[82vh] flex items-center">
          <div className="w-full text-center">
            {/* Avatar */}
            <div className="mx-auto mb-6 sm:mb-8 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full ring-2 ring-white/10 shadow-md overflow-hidden">
              <Image
                src="/images/avatar/sergio.jpg"
                alt="Foto de Sergio Silva"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Título */}
            <h1 className="mx-auto max-w-3xl md:max-w-4xl font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Sergio Silva
            </h1>

            {/* Subtítulo */}
            <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/70">
              Desarrollador Web y Frontend Developer
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm sm:text-base font-medium bg-blue-600 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition"
              >
                Ver proyectos
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm sm:text-base font-medium bg-white/10 hover:bg-white/15 ring-1 ring-white/15 backdrop-blur-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 transition"
              >
                Contáctame
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
