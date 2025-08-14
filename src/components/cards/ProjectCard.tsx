import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";

export default function ProjectCard({ project, priority = false, }: { project: Project ; priority?: boolean; }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition p-4 sm:p-5 flex flex-col">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
        <Image
          src={project.thumbnail || "/assets/placeholders/project-placeholder.webp"}
          alt={project.title}
          fill
          priority={priority}
          className="object-cover transition-transform group-hover:scale-[1.02]"
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold">
        <Link
          href={`/projects/${project.slug}`}
          className="hover:underline underline-offset-4"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-white/70">{project.summary}</p>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <li key={t} className="text-xs rounded-md px-2 py-1 bg-white/10">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-3">
        {project.demoUrl && (
          <Link
            href={project.demoUrl}
            className="text-sm underline underline-offset-4"
          >
            Demo
          </Link>
        )}
        {project.repoUrl && (
          <Link
            href={project.repoUrl}
            className="text-sm underline underline-offset-4"
          >
            Código
          </Link>
        )}
      </div>
    </article>
  );
}
