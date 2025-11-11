export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600 max-w-3xl">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
