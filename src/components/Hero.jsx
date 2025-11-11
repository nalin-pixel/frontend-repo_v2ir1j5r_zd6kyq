import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center bg-white">
      {/* Animated background: gradient blobs + grid */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0",
            color: "#0f172a", // slate-900 dots
          }}
        />
        {/* Soft radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.06),transparent_60%)]" />

        {/* Animated gradient blobs */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full blur-3xl"
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, #a78bfa, #22d3ee, #60a5fa, #a78bfa)",
            opacity: 0.35,
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-[36rem] w-[36rem] rounded-full blur-3xl"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, #34d399, #60a5fa, #f472b6, #34d399)",
            opacity: 0.3,
          }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 w-full">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur text-gray-700 px-3 py-1 text-xs font-medium ring-1 ring-black/5 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for freelance projects
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Creative Developer crafting modern, performant web experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-slate-700 text-base md:text-lg"
          >
            I blend design, motion, and engineering to build joyful, accessible interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold shadow hover:bg-black transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-white/80 backdrop-blur px-5 py-2.5 text-sm font-semibold ring-1 ring-black/10 text-slate-900 hover:bg-white"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Floating accent cards */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="pointer-events-none absolute right-4 top-24 hidden md:block"
        >
          <div className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-slate-900/10 shadow-sm p-4">
            <p className="text-xs font-semibold text-slate-700">Performance</p>
            <p className="mt-1 text-sm text-slate-600">Lighthouse 95+ scores</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="pointer-events-none absolute left-8 bottom-14 hidden md:block"
        >
          <div className="rounded-2xl bg-white/70 backdrop-blur ring-1 ring-slate-900/10 shadow-sm p-4">
            <p className="text-xs font-semibold text-slate-700">Animations</p>
            <p className="mt-1 text-sm text-slate-600">Smooth micro‑interactions</p>
          </div>
        </motion.div>
      </div>

      {/* Foreground gradient fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
    </section>
  )
}
