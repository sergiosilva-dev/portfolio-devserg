// src/components/common/ParticlesBackground.tsx
"use client";

import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadBasic(engine);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },

      background: { color: { value: "#0d1117" } },
      fpsLimit: 60,
      particles: {
        color: { value: "#ffffff" },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: { value: 60, density: { enable: true } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id="tsparticles" options={options} />;
}
