import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'
import { ArrowRight, BarChart3, Globe2, Sparkles, TrendingUp } from 'lucide-react'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const stockImages = [
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1400',
  'https://images.pexels.com/photos/6804065/pexels-photo-6804065.jpeg?auto=compress&cs=tinysrgb&w=1400',
]

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full release for complete details.'
  return value.length > 180 ? value.slice(0, 177).trimEnd() + '...' : value
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 9, { fresh: true })
  const featured = posts[0]
  const archive = posts.slice(1, 7)
  const spotlight = posts[7] || posts[2] || featured
  const insightCards = posts.slice(0, 4)
  const testimonialCards = [
    {
      quote:
        'Mediyao helped our startup turn one launch update into repeat pickups across niche and mainstream outlets.',
      name: 'Sarah Mitchell',
      role: 'PR Lead, Northwell Labs',
    },
    {
      quote:
        'The release template and analytics made our communication workflow faster and easier to report internally.',
      name: 'James Carter',
      role: 'Communications Manager, VistaraX',
    },
    {
      quote:
        'Instead of publishing and hoping, we now track engagement and iterate our headlines release by release.',
      name: 'Lauren Brooks',
      role: 'Brand Strategist, SignalCraft',
    },
  ]

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#0f172a]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(140deg,#0a1640_0%,#1a0f33_45%,#2f0d20_100%)] text-white">
          <div className="absolute -left-24 top-10 h-60 w-60 rounded-full bg-[#C40C0C]/25 blur-3xl" />
          <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-[#FF6500]/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="animate-[factory-fade-up_0.5s_ease_both]">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
                <Sparkles className="h-3.5 w-3.5" />
                {SITE_CONFIG.name} presswire
              </p>
              <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Distribute brand stories with newsroom-grade clarity.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-200">
                Publish releases, improve media reach, and keep your company narrative consistent across journalists, partners, and stakeholders.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/updates" className="inline-flex items-center gap-2 rounded-full bg-[#C40C0C] px-5 py-3 text-sm font-semibold transition hover:bg-[#a00a0a]">
                  Explore releases
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ['Distribution', '160+ media channels'],
                  ['Analytics', 'Real-time release signals'],
                  ['Reach', 'Journalist-ready formatting'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl border border-white/15 bg-white/8 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-200">{k}</p>
                    <p className="mt-1 text-sm font-semibold">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-[factory-fade-up_0.65s_ease_both] rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Why teams use Mediyao</p>
              <div className="mt-5 space-y-4">
                {[
                  { icon: Globe2, title: 'Wider media pickup', body: 'Structured release format increases discoverability and syndication quality.' },
                  { icon: BarChart3, title: 'Release analytics', body: 'Track visibility trends and campaign-level performance from one view.' },
                  { icon: TrendingUp, title: 'Brand momentum', body: 'Sustain a consistent stream of official announcements and updates.' },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/15 bg-black/15 p-4">
                    <item.icon className="h-5 w-5 text-[#F6CE71]" />
                    <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
                    <p className="mt-1 text-sm leading-7 text-slate-200">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {featured ? (
            <article className="overflow-hidden rounded-[2rem] border border-[#f1d7c8] bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-7 sm:p-9">
                  <p className="inline-flex rounded-full bg-[#F6CE71]/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a3a18]">
                    Featured press wire
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">{featured.title}</h2>
                  <p className="mt-4 text-sm leading-8 text-slate-600">{excerpt(featured.summary)}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span>{featured.authorName || 'Mediyao Editorial Desk'}</span>
                  </div>
                  <Link href={`/updates/${featured.slug}`} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C40C0C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a00a0a]">
                    Read full release
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative min-h-[260px] lg:min-h-full">
                  <ContentImage src={(Array.isArray(featured.media) && featured.media[0]?.url) || stockImages[0]} alt={featured.title} fill className="object-cover" />
                </div>
              </div>
            </article>
          ) : null}

          <div className="mt-12">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CC561E]">Newsroom feed</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#0f172a]">Recent releases</h2>
              </div>
              <Link href="/updates" className="text-sm font-semibold text-[#C40C0C] hover:text-[#a00a0a]">
                View all releases
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {archive.map((post, index) => (
                <article key={post.id} className="rounded-[1.6rem] border border-[#f1d7c8] bg-white p-6 shadow-[0_14px_38px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,23,42,0.1)]">
                  <div className="relative mb-4 h-40 overflow-hidden rounded-xl">
                    <ContentImage
                      src={(Array.isArray(post.media) && post.media[0]?.url) || stockImages[(index + 1) % stockImages.length]}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#CC561E]">
                    {String((post.content as any)?.category || 'Press wire')}
                  </p>
                  <h3 className="mt-3 line-clamp-2 text-xl font-semibold leading-snug text-[#111827]">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">{excerpt(post.summary)}</p>
                  <Link href={`/updates/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C40C0C]">
                    Open release
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {spotlight ? (
            <section className="mt-14 grid overflow-hidden rounded-[2rem] border border-[#ecd6ca] bg-white shadow-[0_20px_54px_rgba(15,23,42,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[280px]">
                <ContentImage
                  src={(Array.isArray(spotlight.media) && spotlight.media[0]?.url) || stockImages[2]}
                  alt={spotlight.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CC561E]">Spotlight story</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#111827]">
                  {spotlight.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-slate-600">{excerpt(spotlight.summary)}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-700">
                  <li>Release pages optimized for journalists and aggregators.</li>
                  <li>Structured metadata for stronger discovery and indexing.</li>
                  <li>Editorial-quality layout tuned for quick scanning.</li>
                </ul>
                <Link href={`/updates/${spotlight.slug}`} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C40C0C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a00a0a]">
                  Read spotlight release
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          ) : null}

          <section className="mt-14 rounded-[2rem] bg-[#2f0a64] px-6 py-8 text-white sm:px-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">Platform highlights</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">
                  One newsroom workflow for publishing, distribution, and performance tracking.
                </h3>
              </div>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#2f0a64]">
                Book a demo
              </Link>
            </div>
          </section>

          <section className="mt-14">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CC561E]">Resources and insights</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#0f172a]">Learn from current release trends</h3>
              </div>
              <Link href="/updates" className="text-sm font-semibold text-[#C40C0C] hover:text-[#a00a0a]">Explore newsroom</Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {insightCards.map((post, index) => (
                <article key={post.id} className="rounded-[1.2rem] border border-[#f0ddd1] bg-white p-4">
                  <div className="relative h-36 overflow-hidden rounded-lg">
                    <ContentImage
                      src={(Array.isArray(post.media) && post.media[0]?.url) || stockImages[(index + 2) % stockImages.length]}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="mt-4 line-clamp-2 text-lg font-semibold text-[#111827]">{post.title}</h4>
                  <p className="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">{excerpt(post.summary)}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] border border-[#ead9cc] bg-[#fffcf8] p-6 sm:p-8">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CC561E]">Client voices</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#111827]">Why communication teams stick with Mediyao</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {testimonialCards.map((item) => (
                <article key={item.name} className="rounded-xl border border-[#f1e1d4] bg-white p-5">
                  <p className="text-sm leading-7 text-slate-700">"{item.quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-[#111827]">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 overflow-hidden rounded-[2rem] bg-[#f4be00]">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5a2e00]">Weekly newsroom digest</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#3a1f00]">Get campaign ideas, release examples, and media tips in your inbox.</h3>
                <p className="mt-3 text-sm leading-7 text-[#6b3c00]">
                  Join product marketers, founders, and communication teams receiving practical distribution insights every week.
                </p>
                <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
                  <input className="rounded-full border border-[#d38d00] bg-white px-4 py-3 text-sm text-[#3a1f00] outline-none" placeholder="Your name" />
                  <input className="rounded-full border border-[#d38d00] bg-white px-4 py-3 text-sm text-[#3a1f00] outline-none" placeholder="Work email" />
                  <button type="button" className="rounded-full bg-[#C40C0C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a00a0a]">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="relative min-h-[280px]">
                <ContentImage src={stockImages[4]} alt="Newsletter section visual" fill className="object-cover" />
              </div>
            </div>
          </section>

          <div className="mt-14 rounded-[2rem] bg-[linear-gradient(120deg,#C40C0C_0%,#FF6500_100%)] p-8 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">Need wider media pickup?</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">Choose a plan built for consistent release velocity.</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold">
                Contact newsroom support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
