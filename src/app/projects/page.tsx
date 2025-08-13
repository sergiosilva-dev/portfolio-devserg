import { Suspense } from "react";
import Section from "@/components/ui/Section";
import PageTitle from "@/components/ui/PageTitle";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { projects } from "@/data/projects";

export const metadata = { title: "Proyectos | Sergio Silva" };
export const dynamic = "force-dynamic";

export default function ProjectsPage() {
  return (
    <Section>
      <PageTitle>Proyectos</PageTitle>

      <Suspense
        fallback={
          <p className="mt-6 text-sm text-white/70">Cargando proyectos…</p>
        }
      >
        <ProjectsExplorer projects={projects} />
      </Suspense>
    </Section>
  );
}
