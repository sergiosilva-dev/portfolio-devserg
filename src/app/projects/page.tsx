import Section from "@/components/ui/Section";
import PageTitle from "@/components/ui/PageTitle";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { projects } from "@/data/projects";

export const metadata = { title: "Proyectos | Sergio Silva" };

export default function ProjectsPage() {
  return (
    <Section>
      <PageTitle>Proyectos</PageTitle>
      <ProjectsExplorer projects={projects} />
    </Section>
  );
}
