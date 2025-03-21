export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid lg:grid-cols-[2fr_3fr] text-sm md:text-xl lg:text-l p-8 gap-10 sm:p-20 animate-fade-in-up opacity-0">
      {children}
    </main>
  );
}
