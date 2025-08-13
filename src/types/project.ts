export type Project = {
    id: string;
    title: string;
    slug: string;
    summary: string;
    stack: string[];
    thumbnail?: string;
    repoUrl?: string;
    demoUrl?: string;
    featured?: boolean;
};