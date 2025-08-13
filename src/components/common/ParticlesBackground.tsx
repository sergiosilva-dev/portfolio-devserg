// src/components/common/ParticlesBackground.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

type Props = { className?: string; ariaHidden?: boolean };

export default function ParticlesBackground({
  className = "",
  ariaHidden,
}: Props) {
  const [ready, setReady] = useState(false);

  // Inicializa el engine UNA sola vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  // Opciones tipadas (puedes quitar ISourceOptions si no quieres importar tipos)
  const options: ISourceOptions = useMemo(
    () => ({
      detectRetina: true,
      fpsLimit: 60,
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      particles: {
        number: {
          value: 40,
          density: { enable: true, width: 1920, height: 1080 }, // reemplaza area por width/height
        },
        color: { value: "#9aa0a6" },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
        move: { enable: true, speed: 0.6 },
      },
    }),
    []
  );

  return (
    <div className={className} aria-hidden={ariaHidden ? "true" : undefined}>
      {ready && (
        <Particles
          id="tsparticles"
          options={options}
          className="w-full h-full"
        />
      )}
    </div>
  );
}
