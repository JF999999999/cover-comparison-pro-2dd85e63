import { PARADISO_URL } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export function CTASection({
  title = "Bereit für Ihre neue Poolüberdachung?",
  subtitle = "Lassen Sie sich von Paradiso beraten und fordern Sie ein unverbindliches Angebot an.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-x my-20">
      <div className="relative overflow-hidden rounded-3xl hero-gradient p-8 text-white shadow-[var(--shadow-elegant)] md:p-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--accent)]/30 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="min-w-0">
            <h2 className="text-balance text-3xl md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-white/75">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={PARADISO_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-primary shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
            >
              Kostenloses Angebot anfordern
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={PARADISO_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Mehr über Paradiso erfahren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
