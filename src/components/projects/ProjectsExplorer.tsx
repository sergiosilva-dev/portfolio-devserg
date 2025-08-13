"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProjectCard from "@/components/cards/ProjectCard";
import type { Project } from "@/types/project";

export default function ProjectsExplorer({
  projects,
}: {
  projects: Project[];
}) {
  const router = useRouter();
  const search = useSearchParams();

  // stacks seleccionados desde la URL (?stack=Next.js,TypeScript)
  const selected = useMemo(() => {
    const raw = search.get("stack");
    return raw ? raw.split(",").filter(Boolean) : [];
  }, [search]);

  // todos los stacks disponibles (únicos)
  const allStacks = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.stack.forEach((s) => set.add(s)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const toggle = (tag: string) => {
    const next = selected.includes(tag)
      ? selected.filter((t) => t !== tag)
      : [...selected, tag];
    const qs = next.length
      ? `?stack=${encodeURIComponent(next.join(","))}`
      : "";
    router.replace(`/projects${qs}`, { scroll: false });
  };

  const clear = () => router.replace("/projects", { scroll: false });

  const filtered = selected.length
    ? projects.filter((p) => selected.every((t) => p.stack.includes(t)))
    : projects;

  return (
    <div className="mt-6">
      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-2">
        {allStacks.map((s) => {
          const active = selected.includes(s);
          return (
            <button
              key={s}
              onClick={() => toggle(s)}
              className={`px-3 py-1.5 rounded-full text-sm border transition ${
                active
                  ? "bg-blue-600 border-blue-500"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
              aria-pressed={active}
            >
              {s}
            </button>
          );
        })}
        {selected.length > 0 && (
          <button
            onClick={clear}
            className="ml-2 text-sm underline underline-offset-4"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Conteo */}
      <p className="mt-4 text-sm text-white/70">
        Mostrando {filtered.length} de {projects.length} proyectos
        {selected.length ? ` · filtros: ${selected.join(", ")}` : ""}
      </p>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
