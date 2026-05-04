import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/site-config";

const sections = [
  { title: "Account Usage", body: "Keep your account secure and follow community guidelines." },
  {
    title: "Content Ownership",
    body: "You own the content you publish and grant the platform a license to display it.",
  },
  { title: "Acceptable Use", body: "No spam, harassment, or illegal content." },
];

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of Service"
      description={`The rules and guidelines for using ${SITE_CONFIG.name}.`}
    >
      <Card className="overflow-hidden rounded-[1.8rem] border border-white/20 bg-white/10 backdrop-blur-sm shadow-[0_18px_48px_rgba(0,0,0,0.3)]">
        <CardContent className="space-y-4 p-6">
          <p className="inline-flex rounded-full bg-[#F6CE71]/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a3a18]">
            Last updated: March 16, 2026
          </p>
          {sections.map((section) => (
            <div key={section.title} className="rounded-xl border border-white/20 bg-white/5 p-4">
              <h3 className="text-sm font-semibold text-white">{section.title}</h3>
              <p className="mt-2 text-sm text-white/80">{section.body}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageShell>
  );
}
