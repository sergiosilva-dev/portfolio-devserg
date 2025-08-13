import Section from "@/components/ui/Section";
import PageTitle from "@/components/ui/PageTitle";

export const metadata = { title: "Contacto | Sergio Silva" };

export default function ContactPage() {
  return (
    <Section>
      <PageTitle>Contacto</PageTitle>
      <p className="mt-4 text-white/70">
        Escríbeme a: ssilva@updevelop.com.co
      </p>
      {/* Formulario real más adelante */}
    </Section>
  );
}
