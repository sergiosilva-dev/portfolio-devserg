import Section from "@/components/ui/Section";
import PageTitle from "@/components/ui/PageTitle";

export const metadata = { title: "Skills | Sergio Silva" };

export default function SkillsPage() {
  return (
    <Section>
      <PageTitle>Skills</PageTitle>
      <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-white/80">
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
      </ul>
    </Section>
  );
}
