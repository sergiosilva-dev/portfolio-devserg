import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-devserg.vercel.app";

    const staticRoutes: MetadataRoute.Sitemap = [
        "", "/about", "/projects", "/blog", "/skills", "/contact",
    ].map((p) => ({
        url: `${base}${p || "/"}`,
        lastModified: new Date(),
    }));

    const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
        url: `${base}/projects/${p.slug}`,
        lastModified: new Date(),
    }));

    return [...staticRoutes, ...projectRoutes];
}