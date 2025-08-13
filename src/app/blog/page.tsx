import Section from "@/components/ui/Section";
import PageTitle from "@/components/ui/PageTitle";

export const metadata = { title: "Blog | Sergio Silva" };

export default function BlogPage() {
  return (
    <Section>
      <PageTitle>Blog</PageTitle>
      <p className="mt-4 text-white/70">
        Listado de artículos (Strapi/Markdown próximamente).
      </p>
    </Section>
  );
}
