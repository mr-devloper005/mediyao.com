import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const sections = [
  { title: 'Data We Collect', body: 'Account information, usage analytics, and content you submit.' },
  { title: 'How We Use Data', body: 'To personalize your experience, improve search, and keep the platform secure.' },
  { title: 'Your Choices', body: 'You can manage email preferences and delete your account at any time.' },
]

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      description="How we collect, use, and protect your information."
    >
      <Card className="overflow-hidden rounded-[1.8rem] border border-[#f1d7c8] bg-white shadow-[0_18px_48px_rgba(15,23,42,0.08)]">
        <CardContent className="space-y-4 p-6">
          <p className="inline-flex rounded-full bg-[#F6CE71]/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a3a18]">
            Last updated: March 16, 2026
          </p>
          {sections.map((section) => (
            <div key={section.title} className="rounded-xl border border-[#f1d7c8] bg-[#fff8f2] p-4">
              <h3 className="text-sm font-semibold text-[#111827]">{section.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{section.body}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  )
}
