import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { ContentImage } from '@/components/shared/content-image'
import { ArrowRight, BarChart3, Globe2, Sparkles, TrendingUp } from 'lucide-react'

export const HOME_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full release for complete details.'
  return value.length > 180 ? value.slice(0, 177).trimEnd() + '...' : value
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 9, { fresh: true })
  const featured = posts[0]
  const archive = posts.slice(1, 7)

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
                <Link href="/pricing" className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/16">
                  View pricing
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
                    Featured press release
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#111827] sm:text-4xl">{featured.title}</h2>
                  <p className="mt-4 text-sm leading-8 text-slate-600">{excerpt(featured.summary)}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span>{new Date(featured.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{featured.authorName || 'Mediyao Editorial Desk'}</span>
                  </div>
                  <Link href={`/updates/${featured.slug}`} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C40C0C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a00a0a]">
                    Read full release
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative min-h-[260px] lg:min-h-full">
                  <ContentImage src={(Array.isArray(featured.media) && featured.media[0]?.url) || '/placeholder.svg?height=760&width=1100'} alt={featured.title} fill className="object-cover" />
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
              {archive.map((post) => (
                <article key={post.id} className="rounded-[1.6rem] border border-[#f1d7c8] bg-white p-6 shadow-[0_14px_38px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(15,23,42,0.1)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#CC561E]">
                    {String((post.content as any)?.category || 'Press release')}
                  </p>
                  <h3 className="mt-3 line-clamp-2 text-xl font-semibold leading-snug text-[#111827]">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">{excerpt(post.summary)}</p>
                  <div className="mt-4 text-xs text-slate-500">
                    {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <Link href={`/updates/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C40C0C]">
                    Open release
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-[2rem] bg-[linear-gradient(120deg,#C40C0C_0%,#FF6500_100%)] p-8 text-white">
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">Need wider media pickup?</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">Choose a plan built for consistent release velocity.</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#9e1c00]">
                See pricing plans
              </Link>
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
