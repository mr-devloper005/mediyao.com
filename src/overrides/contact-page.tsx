import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#f7f9ff] text-slate-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#CC561E]">Support</p>
        <h1 className="mt-3 text-center text-5xl font-semibold tracking-[-0.05em] text-[#0f172a]">Contact Us</h1>
        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[1fr_280px]">
          <section className="rounded-[2rem] border border-[#f1d7c8] bg-white p-5 shadow-[0_18px_46px_rgba(15,23,42,0.08)] sm:p-7">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#3f3f3f]">
                    Contact Name <span className="text-[#cc0000]">*</span>
                  </label>
                  <input className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#C40C0C]" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#3f3f3f]">Phone Number</label>
                  <input className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#C40C0C]" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#3f3f3f]">
                  Email <span className="text-[#cc0000]">*</span>
                </label>
                <input className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-[#C40C0C]" />
              </div>

              <p className="pt-2 text-sm font-semibold text-[#6c6c6c]">Help Us Understand Your Needs A Little More.</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#3f3f3f]">
                    What type of organization are you? <span className="text-[#cc0000]">*</span>
                  </label>
                  <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-[#7a7a7a] outline-none focus:border-[#C40C0C]">
                    <option>Please Select</option>
                    <option>Business</option>
                    <option>Agency</option>
                    <option>Publisher</option>
                    <option>Journalist</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#3f3f3f]">
                    Subject: How may we help you? <span className="text-[#cc0000]">*</span>
                  </label>
                  <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-[#7a7a7a] outline-none focus:border-[#C40C0C]">
                    <option>Please Select</option>
                    <option>Distribution Support</option>
                    <option>Sales Questions</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-[#3f3f3f]">
                  Message / Comment <span className="text-[#cc0000]">*</span>
                </label>
                <textarea className="min-h-[130px] w-full rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#C40C0C]" />
              </div>

              <div className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-500">
                <span className="inline-block h-5 w-5 border border-[#bdbdbd] bg-white" />
                <span>I'm not a robot</span>
              </div>

              <button
                type="submit"
                className="block h-11 min-w-[160px] rounded-xl bg-[#C40C0C] px-8 text-sm font-semibold text-white transition hover:bg-[#a00a0a]"
              >
                Submit Now
              </button>
            </form>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[1.6rem] border border-[#f1d7c8] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <h2 className="text-lg font-semibold text-[#0f172a]">Telephone Hours:</h2>
              <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-600">
                Monday to Friday
                <br />
                8:30am to 5:00pm Pacific (PDT)
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-[#f1d7c8] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <h2 className="text-lg font-semibold text-[#0f172a]">Toll Free Telephone:</h2>
              <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-600">
                1-888-880-9539
                <br />
                1-646-417-8294
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-[#f1d7c8] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.0
6)]">
              <h2 className="text-lg font-semibold text-[#0f172a]">US Address:</h2>
              <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-600">
                Suite 1400 - 505 Second Avenue
                <br />
                Seattle, WA
                <br />
                98104, USA
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-[#f1d7c8] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
              <h2 className="text-lg font-semibold text-[#0f172a]">Canada Address:</h2>
              <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-600">
                Suite 203 - 901 West 3rd St.
                <br />
                North Vancouver, BC
                <br />
                V7P 3P9, Canada
              </p>
            </div>
          </aside>
        </div>

        <section className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#C40C0C_0%,#FF6500_100%)] p-8 text-white shadow-[0_18px_46px_rgba(15,23,42,0.10)]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl text-[34px] font-bold leading-[1.15] tracking-[-0.02em]">
              Please take a moment to check out our FAQs
              <br />
              for quick answers to common questions.
            </p>
            <a
              href="/help"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.02em] text-[#9e1c00] hover:bg-white/95"
            >
              View FAQ
            </a>
          </div>
        </section>

        <p className="mt-6 text-center text-sm text-[#64748b]">Serving inquiries for {SITE_CONFIG.name} support, billing, and publishing assistance.</p>
      </main>
      <Footer />
    </div>
  )
}
