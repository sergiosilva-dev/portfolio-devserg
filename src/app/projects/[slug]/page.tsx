import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";

import Section from "@/components/ui/Section";
import PageTitle from "@/components/ui/PageTitle";
import { projects } from "@/data/projects";

// Next 15: params es un Promise
type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);

  // OG por proyecto si existe: /public/og/projects/<slug>.jpg
  const candidateFs = path.join(
    process.cwd(),
    "public",
    "og",
    "projects",
    `${slug}.jpg`
  );
  const ogImage = fs.existsSync(candidateFs)
    ? `/og/projects/${slug}.jpg`
    : "/og/default.jpg"; // asegúrate de tener este archivo

  return {
    title: p ? `${p.title} | Proyectos` : "Proyecto",
    openGraph: { images: [ogImage] },
    twitter: { images: [ogImage] },
  };
}

// (opcional) ISR
export const revalidate = 60;

export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();

  return (
    <Section>
      <PageTitle>{p.title}</PageTitle>
      <p className="mt-3 text-white/70 max-w-3xl">{p.summary}</p>

      <div className="mt-6 relative aspect-[16/9] w-full overflow-hidden rounded-xl">
        <Image
          src={p.thumbnail ?? "/assets/placeholders/project-placeholder.webp"}
          alt={p.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <ul className="mt-6 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <li key={t} className="text-xs rounded-md px-2 py-1 bg-white/10">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-4">
        {p.demoUrl && (
          <Link href={p.demoUrl} className="underline underline-offset-4">
            Demo
          </Link>
        )}
        {p.repoUrl && (
          <Link href={p.repoUrl} className="underline underline-offset-4">
            Código
          </Link>
        )}
        <Link href="/projects" className="underline underline-offset-4">
          Volver a proyectos
        </Link>
      </div>
    </Section>
  );
}
