import Link from 'next/link'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full post for the complete update.'
  return value.length > 220 ? value.slice(0, 217).trimEnd() + '...' : value
}

export async function TaskListPageOverride(_: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: true })
  const recent = posts.slice(0, 5)

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#0f172a]">
      <NavbarShell />
      <main className="mx-auto grid max-w-6xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-14">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-[#efd8ca] pb-12">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#CC561E]">{String((post.content as any)?.category || 'Update')}</p>
              <h1 className="mx-auto mt-3 max-w-4xl text-center text-3xl font-black uppercase leading-tight tracking-[0.02em] text-[#0f172a] sm:text-4xl">{post.title}</h1>
              <div className="mt-4 flex items-center justify-center gap-3 text-sm text-slate-600">
                <span>by {post.authorName || 'Editorial desk'}</span>
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-700">{excerpt(post.summary)}</p>
              <div className="mt-8 text-center">
                <Link href={`/updates/${post.slug}`} className="inline-flex rounded-full bg-[#C40C0C] px-8 py-3 text-sm font-medium text-white hover:bg-[#a00a0a]">Continue Reading</Link>
              </div>
            </article>
          ))}
        </div>
        <aside className="space-y-6">
          <div className="rounded-xl border border-[#efd8ca] bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-0">
              <input className="h-12 flex-1 border border-[#ecd2c1] px-4 text-sm outline-none" placeholder="Type here to search" />
              <button className="flex h-12 w-12 items-center justify-center bg-[#0d1b49] text-white">Q</button>
            </div>
          </div>
          <div className="rounded-xl border border-[#efd8ca] bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
            <div className="space-y-5">
              {recent.map((post) => (
                <Link key={post.id} href={`/updates/${post.slug}`} className="block border-b border-[#f0dfd4] pb-5 last:border-b-0 last:pb-0">
                  <p className="text-base leading-7 text-[#0f172a]">{post.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  )
}
