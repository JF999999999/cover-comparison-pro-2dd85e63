import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";
import { Mail, MessageSquare, ExternalLink } from "lucide-react";
import { PARADISO_URL } from "@/lib/site";

const TITLE = "Kontakt – Poolüberdachung Vergleich";
const DESCRIPTION =
  "Kontaktieren Sie uns bei Fragen zum Vergleich oder wenden Sie sich direkt an Paradiso für ein persönliches Angebot.";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen Sie uns an"
        subtitle="Wir freuen uns über Feedback zu unseren Inhalten und beantworten allgemeine Fragen rund um Poolüberdachungen."
      />

      <section className="container-x mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]">
          <MessageSquare className="h-6 w-6 text-primary" />
          <h3 className="mt-5 text-xl font-semibold">Anfrage zum Vergleich</h3>
          <p className="mt-2 text-muted-foreground">
            Sie vermissen eine Information oder haben eine inhaltliche Rückmeldung? Schreiben
            Sie uns – wir freuen uns über jede konstruktive Nachricht.
          </p>
          <a
            href="mailto:kontakt@pooluberdachung-vergleich.de"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            E-Mail schreiben
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground shadow-[var(--shadow-elegant)]">
          <ExternalLink className="h-6 w-6 text-white/80" />
          <h3 className="mt-5 text-xl font-semibold">Angebot direkt bei Paradiso</h3>
          <p className="mt-2 text-primary-foreground/80">
            Für ein konkretes Angebot, Maßanfertigungen oder eine persönliche Beratung wenden
            Sie sich am besten direkt an Paradiso.
          </p>
          <a
            href={PARADISO_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-primary transition-all hover:-translate-y-0.5"
          >
            Zur offiziellen Paradiso Website
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
