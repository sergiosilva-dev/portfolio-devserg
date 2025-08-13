import Script from "next/script";

export default function SeoJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sergio Silva",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-devserg.vercel.app",
    jobTitle: "Frontend Developer",
    sameAs: [
      // añade tus redes si quieres: GitHub, LinkedIn, etc.
    ],
  };
  return (
    <Script
      id="person-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
