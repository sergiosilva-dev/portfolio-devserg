import Link from "next/link";
import Section from "@/components/ui/Section";
import PageTitle from "@/components/ui/PageTitle";

export default function NotFound() {
  return (
    <Section>
      <PageTitle>Página no encontrada</PageTitle>
      <p className="mt-3 text-white/70">
        Lo sentimos, no pudimos encontrar lo que buscas.
      </p>
      <div className="mt-6">
        <Link href="/" className="underline underline-offset-4">
          Volver al inicio
        </Link>
      </div>
    </Section>
  );
}
