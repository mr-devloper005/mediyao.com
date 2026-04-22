import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'

const services = [
  {
    title: 'What does Mediyao do?',
    body: 'We help brands publish and distribute press releases with a format that journalists can scan quickly.',
  },
  {
    title: 'Who uses Mediyao?',
    body: 'Startups, agencies, and communication teams that need reliable media visibility and structured announcements.',
  },
  {
    title: 'Why use Mediyao?',
    body: 'You get consistent release quality, better discoverability, and a faster newsroom publishing workflow.',
  },
]

const academyCards = [
  {
    title: 'How to write a release journalists open',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Headline formulas for better pickup',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Distribution checklists before publish',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'How to position launches for media relevance',
    image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Press kit essentials for modern brands',
    image: 'https://images.pexels.com/photos/6804065/pexels-photo-6804065.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Release timing by campaign intent',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

const faqs = [
  {
    q: 'What makes this different from a blog post?',
    a: 'A press release on Mediyao is structured for media pickup with stronger metadata, concise formatting, and distribution context.',
  },
  {
    q: 'Can we publish multiple releases each month?',
    a: 'Yes. Plans support recurring releases and we provide workflow guidance for consistent publishing cadence.',
  },
  {
    q: 'Do you support product launches and funding news?',
    a: 'Yes. Product updates, funding rounds, partnerships, events, and milestone announcements are common use cases.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f9ff]">
      <NavbarShell />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CC561E]">About {SITE_CONFIG.name}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#0f172a] sm:text-5xl">
                It is a media jungle out there. We build clarity for your brand story.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600">
                {SITE_CONFIG.name} helps teams share announcements with confidence. Our newsroom-ready format keeps releases clean, readable, and distribution-friendly.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/press-release" className="inline-flex items-center gap-2 rounded-full bg-[#C40C0C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#a00a0a]">
                  Explore Releases
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex rounded-full border border-[#0d1b49]/20 bg-white px-5 py-3 text-sm font-semibold text-[#0d1b49] hover:bg-slate-50">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.9rem] border border-[#efd8ca] shadow-[0_18px_48px_rgba(15,23,42,0.1)]">
              <div className="relative h-full min-h-[320px]">
                <ContentImage
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Press release editorial team planning media strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-[#efd8ca] bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.06)]">
                <h2 className="text-xl font-semibold text-[#0f172a]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-[linear-gradient(90deg,#1a0c5d_0%,#180b72_100%)] py-10 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {['5-Star Workflow', 'Approved Distribution', 'High Readability Format', 'Editorially Structured'].map((item) => (
              <div key={item} className="rounded-xl border border-white/20 bg-white/8 p-4 text-center text-sm font-semibold">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CC561E]">PressRelease Academy</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#0f172a]">Guides for stronger media communication</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academyCards.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[1.4rem] border border-[#efd8ca] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
                <div className="relative h-36">
                  <ContentImage src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-[#0f172a]">{item.title}</p>
                <p className="mt-2 text-xs leading-6 text-slate-500">Practical playbook for better press release outcomes and cleaner publication quality.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
          <div className="rounded-[1.7rem] border border-[#efd8ca] bg-white p-6 sm:p-8">
            <h2 className="text-center text-3xl font-semibold tracking-[-0.04em] text-[#0f172a]">FAQ</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((item) => (
                <details key={item.q} className="rounded-xl border border-[#f1dfd4] bg-[#fff8f4] p-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-[#0f172a]">{item.q}</summary>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 bg-[#F6CE71]">
          <div className="mx-auto grid max-w-7xl gap-7 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d300f]">Be the first to know</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#0f172a]">Subscribe for press and product updates</h2>
              <p className="mt-3 text-sm leading-7 text-[#5f3519]">
                Join our update list for publishing insights, media strategy guides, and release best practices.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <input className="h-11 min-w-[210px] rounded-xl border border-[#cf9a58] bg-white px-4 text-sm text-[#0f172a] outline-none" placeholder="Email address" />
                <button className="inline-flex h-11 items-center rounded-xl bg-[#C40C0C] px-5 text-sm font-semibold text-white hover:bg-[#a00a0a]">
                  Subscribe
                </button>
              </div>
              <div className="mt-4 space-y-2 text-sm text-[#5f3519]">
                {['Weekly media publishing tips', 'No spam, unsubscribe anytime', 'Created for communication teams'].map((item) => (
                  <p key={item} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#C40C0C]" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.4rem] border border-[#cf9a58]/70">
              <div className="relative min-h-[260px]">
                <ContentImage
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="People discussing communication strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
