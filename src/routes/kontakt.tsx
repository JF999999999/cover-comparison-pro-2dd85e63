import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { PARADISO_URL, SITE_URL } from "@/lib/site";

const TITLE = "Kontakt – Poolüberdachung Ratgeber";
const DESCRIPTION =
  "Fragen zu Poolüberdachungen, Hinweise zu Inhalten oder Interesse an einer Beratung? Hier finden Sie die Kontaktmöglichkeiten.";

const crumbs = [
  { label: "Startseite", to: "/" },
  { label: "Kontakt" },
];

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/kontakt` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/kontakt` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd(crumbs)) },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Kontakt"
        title="Sie haben eine Frage?"
        subtitle="Für Hinweise zu den Inhalten dieser Website oder allgemeine Fragen rund um Poolüberdachungen erreichen Sie uns über die folgenden Wege."
      />

      <section className="container-x mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]">
          <h2 className="text-2xl">Betreiber dieser Website</h2>
          <ul className="mt-6 space-y-4 text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                Carsten Fels
                <br />
                77743 Neuried
                <br />
                Deutschland
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                Die vollständigen Kontaktdaten finden Sie im{" "}
                <a href="/impressum" className="text-primary underline-offset-4 hover:underline">
                  Impressum
                </a>
                .
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-mist p-8">
          <h2 className="text-2xl">Beratung zu konkreten Anlagen</h2>
          <p className="mt-4 text-muted-foreground">
            Für individuelle Planung, Aufmaß, Montage oder Ersatzteilanfragen wenden Sie sich am
            besten direkt an einen Hersteller. Paradiso fertigt schienenlose Poolüberdachungen in
            Deutschland und betreut auch ältere Anlagen.
          </p>
          <a
            href={PARADISO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
          >
            Zur Paradiso Website
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>
    </>
  );
}
