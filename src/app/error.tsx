"use client";

import Section from "@/components/ui/Section";
import PageTitle from "@/components/ui/PageTitle";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.error(error);
  return (
    <html>
      <body>
        <Section>
          <PageTitle>Ocurrió un error</PageTitle>
          <p className="mt-3 text-white/70">
            Algo salió mal. Intenta recargar la página.
          </p>
        </Section>
      </body>
    </html>
  );
}
