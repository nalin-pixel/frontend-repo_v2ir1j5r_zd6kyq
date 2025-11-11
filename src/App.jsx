import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'

function App() {
  const projects = [
    {
      title: 'LensCraft – Photography Portfolio',
      description: 'A minimal, high-performance portfolio with dynamic galleries and CMS integration.',
      tags: ['Next.js', 'Tailwind', 'Vercel', 'Framer Motion'],
      link: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1744550913201-2821ffaf8088?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMZW5zQ3JhZnQlMjAlRTIlODAlOTMlMjBQaG90b2dyYXBoeSUyMFBvcnRmb2xpb3xlbnwwfDB8fHwxNzYyODc2MDIxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
    },
    {
      title: 'ShopSphere – eCommerce UX',
      description: 'Conversion-focused store with accessible components and delightful micro-interactions.',
      tags: ['React', 'Stripe', 'Accessibility'],
      link: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'VisionBoard – Creative Studio Site',
      description: '3D-enhanced landing with Spline background and advanced scroll choreography.',
      tags: ['Spline', 'Scroll', 'SEO'],
      link: 'https://example.com',
      image: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  const experience = [
    { role: 'Frontend Developer', company: 'Creative Tech Studio', period: '2023 — Present', points: [
      'Built brand sites with modern stacks, focusing on performance and accessibility.',
      'Led component library initiatives and design system governance.',
      'Collaborated with designers, photographers, and PMs across sprints.'
    ]},
    { role: 'Engineering Intern', company: 'Lens Labs', period: '2022 — 2023', points: [
      'Prototyped 3D interactions with Spline and WebGL.',
      'Optimized image delivery and LCP with Next-gen formats.'
    ]}
  ]

  const education = [
    { degree: 'B.Sc. Computer Science', org: 'Modern University', year: '2022' },
  ]

  const achievements = [
    'Winner — Hack the Lens 2023',
    'Top 10 — Frontend Mentor Global Challenge',
    'Speaker — Modern Web UX Meetup'
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />

        <Section id="projects" title="Projects" subtitle="Selected work that blends engineering with visual craft.">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience & Internships" subtitle="Hands-on roles delivering modern web products.">
          <div className="space-y-6">
            {experience.map((e) => (
              <div key={e.role} className="rounded-xl bg-white ring-1 ring-gray-200 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="font-semibold">{e.role} · <span className="text-gray-600">{e.company}</span></h3>
                  <p className="text-sm text-gray-600">{e.period}</p>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((ed) => (
              <div key={ed.degree} className="rounded-xl bg-white ring-1 ring-gray-200 p-6">
                <h3 className="font-semibold">{ed.degree}</h3>
                <p className="text-gray-600 text-sm">{ed.org} — {ed.year}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((a) => (
              <li key={a} className="rounded-lg bg-white ring-1 ring-gray-200 p-4 text-sm">{a}</li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact" subtitle="Have a project in mind? Let’s build something beautiful and fast.">
          <form className="max-w-xl space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Tell me about your idea" />
            </div>
            <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 text-sm font-semibold shadow hover:bg-black">
              Send Message
            </button>
          </form>
        </Section>
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-gray-500">Built with care — performance, accessibility, and modern aesthetics.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
