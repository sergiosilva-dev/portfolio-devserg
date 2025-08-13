import Section from "@/components/ui/Section";
import PageTitle from "@/components/ui/PageTitle";

export const metadata = { title: "Proyectos | Sergio Silva" };

export default function ProjectsPage() {
  return (
    <Section>
      <PageTitle>Proyectos</PageTitle>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cards de proyecto irán aquí */}
        <div className="rounded-xl border border-white/10 p-5">
          Proyecto ejemplo
        </div>
      </div>
    </Section>
  );
}
