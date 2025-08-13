export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
      {children}
    </h1>
  );
}
