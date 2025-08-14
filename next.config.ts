// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"], // opcional
  },
  // aquí puedes mantener otras opciones válidas (images, redirects, rewrites, headers, etc.)
};

export default nextConfig;