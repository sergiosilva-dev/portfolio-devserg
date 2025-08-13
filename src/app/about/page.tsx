import Section from "@/components/ui/Section";
import PageTitle from "@/components/ui/PageTitle";

export const metadata = { title: "Sobre mí | Sergio Silva" };

export default function AboutPage() {
  return (
    <Section>
      <PageTitle>Sobre mí</PageTitle>
      <p className="mt-4 text-white/70 max-w-3xl">
        Breve bio, experiencia, filosofía de trabajo y lo que estoy construyendo
        en 2025.
      </p>
    </Section>
  );
}
