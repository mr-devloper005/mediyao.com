import { Check, Star } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const plans = [
  {
    name: 'Basic',
    price: '$49',
    subtitle: 'For startups launching initial media visibility',
    popular: false,
    distribution: 'Regional + niche publications',
    analytics: 'Core open/click reporting',
    reach: 'Up to 25 media pickups',
    features: ['1 release / month', 'Standard formatting', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$99',
    subtitle: 'For active brands with recurring release cycles',
    popular: true,
    distribution: 'National distribution channels',
    analytics: 'Real-time dashboard + trend metrics',
    reach: 'Up to 120 media pickups',
    features: ['4 releases / month', 'Priority review', 'Advanced targeting'],
  },
  {
    name: 'Premium',
    price: '$199',
    subtitle: 'For enterprise-grade media momentum',
    popular: false,
    distribution: 'Global distribution network',
    analytics: 'Executive reporting + reach benchmarking',
    reach: 'Unlimited media pickups',
    features: ['Unlimited releases', 'Dedicated specialist', 'Custom newsroom kit'],
  },
]

const faqs = [
  {
    q: 'Can I upgrade my plan anytime?',
    a: 'Yes. You can upgrade immediately and your remaining credits adjust automatically.',
  },
  {
    q: 'Do plans include editorial checks?',
    a: 'Every plan includes quality review for structure and readability before distribution.',
  },
  {
    q: 'Is there a discount for annual billing?',
    a: 'Yes. Annual plans reduce total pricing and include bonus release credits.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#0f172a]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-[#ecd3c4] bg-[linear-gradient(130deg,#0c1744_0%,#1d1c60_48%,#2a0f2f_100%)] p-8 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">Business Wire Style Pricing</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Choose a release plan built for media outcomes.</h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-slate-200">
            Compare distribution level, analytics depth, and media reach across plans.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[1.7rem] border p-6 shadow-[0_16px_42px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 ${
                plan.popular
                  ? 'border-[#C40C0C] bg-white ring-2 ring-[#C40C0C]/20'
                  : 'border-[#efd8ca] bg-white'
              }`}
            >
              {plan.popular ? (
                <p className="inline-flex items-center gap-1 rounded-full bg-[#C40C0C] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  <Star className="h-3.5 w-3.5" />
                  Popular
                </p>
              ) : null}
              <h2 className="mt-4 text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-1 text-sm text-slate-600">{plan.subtitle}</p>
              <p className="mt-5 text-4xl font-semibold tracking-[-0.03em]">{plan.price}<span className="text-base font-medium text-slate-500"> /mo</span></p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li><span className="font-semibold">Distribution:</span> {plan.distribution}</li>
                <li><span className="font-semibold">Analytics:</span> {plan.analytics}</li>
                <li><span className="font-semibold">Media reach:</span> {plan.reach}</li>
              </ul>
              <div className="mt-6 space-y-2">
                {plan.features.map((item) => (
                  <div key={item} className="inline-flex w-full items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-[#CC561E]" />
                    {item}
                  </div>
                ))}
              </div>
              <button className="mt-6 h-11 w-full rounded-xl bg-[#0d1b49] text-sm font-semibold text-white hover:bg-[#13296b]">
                Get Started
              </button>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-[1.7rem] border border-[#efd8ca] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Add-ons</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ['Priority Journalist Outreach', '$39 / release'],
              ['Localization Pack (5 regions)', '$29 / release'],
              ['Executive Insight Report', '$49 / month'],
            ].map(([title, price]) => (
              <div key={title} className="rounded-2xl border border-[#f2dfd3] bg-[#fff9f5] p-4">
                <p className="font-semibold text-[#0f172a]">{title}</p>
                <p className="mt-1 text-sm text-[#CC561E]">{price}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[1.7rem] border border-[#efd8ca] bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">FAQs</h2>
          <div className="mt-5 space-y-4">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-xl border border-[#f2dfd3] bg-[#fff9f5] p-4">
                <h3 className="font-semibold text-[#0f172a]">{item.q}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">{item.a}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
