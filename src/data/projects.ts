import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "devserg",
        title: "DevSerg (Portfolio + Blog)",
        slug: "devserg",
        summary: "Portafolio con Next.js, Tailwind, partículas y buenas prácticas 2025.",
        stack: ["Next.js", "TypeScript", "Tailwind"],
        thumbnail: "/assets/placeholders/project.webp",
        repoUrl: "https://github.com/sergiosilva-dev/portfolio-devserg",
        demoUrl: "#",
        featured: true,
    },
    {
        id: "devjobs",
        title: "DevJobs",
        slug: "devjobs",
        summary: "Plataforma para conectar devs con ofertas remotas.",
        stack: ["Next.js", "TypeScript", "Node.js"],
        thumbnail: "/assets/placeholders/project.webp",
    },
    {
        id: "offline-notes",
        title: "OfflineNotes (Compose)",
        slug: "offline-notes",
        summary: "Notas offline con Room, MVVM y sincronización diferida.",
        stack: ["Android", "Kotlin", "Room"],
        thumbnail: "/assets/placeholders/project.webp",
    },
    {
        id: "restaurant-site",
        title: "Restaurante UpDevelop",
        slug: "restaurant-updevelop",
        summary: "Sitio multipágina con SEO, dark mode y reservas.",
        stack: ["HTML", "CSS", "JavaScript"],
        thumbnail: "/assets/placeholders/project.webp",
    },
];