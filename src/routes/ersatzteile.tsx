import { createFileRoute } from "@tanstack/react-router";
import { PackageSearch, Clock, FileText, Recycle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ParadisoFazit } from "@/components/site/ParadisoFazit";
import { IMAGES, absoluteImageUrl } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

const TITLE = "Ersatzteile für Poolüberdachungen – Verfügbarkeit & Praxis";
const DESCRIPTION =
  "Welche Verschleißteile an Poolüberdachungen anfallen, welche Angaben für die Beschaffung nötig sind und warum langfristige Ersatzteilversorgung entscheidend ist.";

const crumbs = [
  { label: "Startseite", to: "/" },
  { label: "Ersatzteile" },
];

const teile = [
  { title: "Laufrollen und Führungen", text: "Typische Verschleißteile, die durch Sand und Schmutz beansprucht werden. Ein Austausch stellt die Leichtgängigkeit meist vollständig wieder her." },
  { title: "Dicht- und Bürstenprofile", text: "Sie halten Wasser, Zugluft und Schmutz draußen. Nach vielen Jahren verhärten sie und sollten ersetzt werden." },
  { title: "Griffe, Verriegelungen, Beschläge", text: "Mechanische Bauteile, die täglich bewegt werden. Ein Tausch ist in der Regel unkompliziert." },
  { title: "Füllungen und Panels", text: "Einzelne Platten oder Glasfelder lassen sich bei Beschädigung häufig separat ersetzen, ohne die gesamte Anlage zu tauschen." },
  { title: "Antriebe und Motorkomponenten", text: "Bei motorisierten Anlagen betrifft dies Antriebe, Steuerungen und – bei solarbetriebenen Systemen – Akkus." },
  { title: "Verankerungen und Endanschläge", text: "Sicherheitsrelevante Bauteile, die nach Sturmereignissen geprüft und bei Bedarf erneuert werden sollten." },
];

const angaben = [
  "Hersteller und Modellbezeichnung",
  "Baujahr bzw. Jahr der Montage",
  "Anzahl der Segmente und ungefähre Maße",
  "Fotos des betroffenen Bauteils und der Einbausituation",
];

export const Route = createFileRoute("/ersatzteile")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/ersatzteile` },
      { property: "og:image", content: absoluteImageUrl(IMAGES.werk) },
      { name: "twitter:image", content: absoluteImageUrl(IMAGES.werk) },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ersatzteile` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          breadcrumbJsonLd(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: TITLE,
            description: DESCRIPTION,
            inLanguage: "de-DE",
            image: absoluteImageUrl(IMAGES.werk),
            author: { "@type": "Person", name: "Carsten Fels" },
          },
        ]),
      },
    ],
  }),
  component: Ersatzteile,
});

function Ersatzteile() {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Langlebigkeit"
        title="Ersatzteile für Poolüberdachungen"
        subtitle="Eine Überdachung ist nur so langlebig wie ihre Ersatzteilversorgung. Wer nach Jahren noch passende Rollen, Dichtungen oder Panels erhält, muss nicht die ganze Anlage tauschen."
      />

      <section className="container-x mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl">Warum Verfügbarkeit über die Lebensdauer entscheidet</h2>
          <div className="mt-5 space-y-4 text-muted-foreground md:text-lg">
            <p>
              Poolüberdachungen sind robuste Konstruktionen. Was im Lauf der Jahre nachlässt, sind
              typischerweise nicht Rahmen oder Füllung, sondern kleine bewegliche Teile: Rollen,
              Dichtungen, Griffe. Sind diese Komponenten verfügbar, bleibt die Anlage über
              Jahrzehnte nutzbar.
            </p>
            <p>
              Fehlt die Versorgung, wird aus einem Verschleißteil im ungünstigsten Fall ein
              Komplettaustausch. Die Frage nach der Ersatzteilversorgung gehört deshalb schon vor
              dem Kauf gestellt – ebenso wie die nach der Dokumentation der verbauten Komponenten.
            </p>
          </div>
        </div>
        <figure className="overflow-hidden rounded-3xl border border-border bg-mist shadow-[var(--shadow-soft)]">
          <img
            src={IMAGES.werk.src}
            alt={IMAGES.werk.alt}
            title={IMAGES.werk.title}
            width={IMAGES.werk.width}
            height={IMAGES.werk.height}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover"
          />
        </figure>
      </section>

      <section className="container-x mt-20" aria-labelledby="typische-teile">
        <div className="flex items-center gap-3">
          <PackageSearch className="h-6 w-6 text-primary" aria-hidden="true" />
          <h2 id="typische-teile" className="text-3xl md:text-4xl">
            Typische Ersatz- und Verschleißteile
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teile.map((t) => (
            <article key={t.title} className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-base font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x mt-20 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-mist p-8">
          <div className="mb-4 flex items-center gap-3">
            <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-2xl">Diese Angaben helfen bei der Anfrage</h2>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {angaben.map((a) => (
              <li key={a} className="rounded-xl bg-white px-4 py-3">
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-soft)]">
          <div className="mb-4 flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="text-2xl">Auch ältere Anlagen weiter nutzen</h2>
          </div>
          <p className="text-muted-foreground">
            Auch nach mehr als 20 Jahren können für viele Paradiso-Poolüberdachungen noch passende
            Ersatzteile verfügbar sein. Eine Prüfung im Einzelfall ist immer erforderlich – eine
            generelle Zusage lässt sich daraus nicht ableiten.
          </p>
          <p className="mt-4 flex gap-2 text-sm text-muted-foreground">
            <Recycle className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              Reparieren statt ersetzen ist zudem der ressourcenschonendere Weg: Bestehende
              Konstruktionen bleiben erhalten, es fällt kein vollständiger Neubau an.
            </span>
          </p>
        </div>
      </section>

      <ParadisoFazit text="Wer eine Poolüberdachung über Jahrzehnte nutzen möchte, sollte die Ersatzteilversorgung genauso bewerten wie Material und Optik." />
    </>
  );
}
