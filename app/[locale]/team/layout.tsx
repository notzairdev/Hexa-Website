export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-28 w-full h-full bg-gradient-bg bg-cover">
      <div className="md:px-7 text-center">
        {children}
      </div>
    </section>
  );
}
