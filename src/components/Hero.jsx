import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur text-gray-700 px-3 py-1 text-xs font-medium ring-1 ring-black/5">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for freelance projects
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Creative Developer crafting modern, performant web experiences
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            I blend design, photography, and engineering to build joyful, accessible interfaces.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 text-sm font-semibold shadow hover:bg-black transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/80 backdrop-blur px-5 py-2.5 text-sm font-semibold ring-1 ring-black/10 text-gray-900 hover:bg-white">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  )
}
