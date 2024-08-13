export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-28 w-full h-full bg-gradient-bg-3 bg-repeat">
      <div className="md:px-7 text-center">
        {children}
      </div>
    </section>
  );
}
