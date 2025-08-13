import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
