import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Brush, Droplets, Snowflake, Wrench, CircleAlert } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ParadisoFazit } from "@/components/site/ParadisoFazit";
import { IMAGES, absoluteImageUrl } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

const TITLE = "Pflege & Wartung von Poolüberdachungen – Anleitung";
const DESCRIPTION =
  "Reinigung, Dichtungen, Führungen und Winterbetrieb: So bleibt eine Poolüberdachung dauerhaft leichtgängig, dicht und funktionsfähig.";

const crumbs = [
  { label: "Startseite", to: "/" },
  { label: "Pflege & Wartung" },
];

const routine = [
  {
    icon: Brush,
    title: "Regelmäßige Reinigung der Flächen",
    text: "Klares Wasser und ein weicher Schwamm oder Mikrofasertuch genügen in den meisten Fällen. Bei stärkerer Verschmutzung eignen sich milde, pH-neutrale Reiniger. Scheuermittel, Lösungsmittel und harte Bürsten vermeiden – sie hinterlassen Mikrokratzer.",
  },
  {
    icon: Droplets,
    title: "Führungen und Rollen sauber halten",
    text: "Sand, Laub und Kies sind die häufigste Ursache für schwergängige Elemente. Führungen mehrmals pro Saison ausfegen oder ausspülen; Rollen auf freien Lauf prüfen.",
  },
  {
    icon: Wrench,
    title: "Dichtungen und Beschläge kontrollieren",
    text: "Dichtprofile einmal jährlich auf Risse, Verhärtung und festen Sitz prüfen. Verriegelungen und Griffe auf Leichtgängigkeit testen und bei Bedarf mit geeigneten Pflegemitteln behandeln.",
  },
  {
    icon: Snowflake,
    title: "Winterbetrieb",
    text: "Die meisten Anlagen bleiben ganzjährig draußen. Bei starkem Schneefall sollte die Last gemäß Herstellerangabe abgetragen werden. Elemente im Winter vollständig geschlossen und verriegelt lassen, um Windangriffsflächen zu vermeiden.",
  },
];

const plan = [
  { zeit: "Monatlich in der Saison", tun: "Sichtprüfung, Führungen ausfegen, grobe Verschmutzung entfernen" },
  { zeit: "Zweimal jährlich", tun: "Flächen gründlich reinigen, Rollen und Laufflächen prüfen" },
  { zeit: "Jährlich", tun: "Dichtungen, Verriegelungen, Verschraubungen und Endanschläge kontrollieren" },
  { zeit: "Nach Sturm oder Hagel", tun: "Konstruktion, Füllungen und Verankerung auf Schäden prüfen" },
];

export const Route = createFileRoute("/pflege-wartung")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/pflege-wartung` },
      { property: "og:image", content: absoluteImageUrl(IMAGES.pflege) },
      { name: "twitter:image", content: absoluteImageUrl(IMAGES.pflege) },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/pflege-wartung` }],
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
            image: absoluteImageUrl(IMAGES.pflege),
            author: { "@type": "Person", name: "Carsten Fels" },
          },
        ]),
      },
    ],
  }),
  component: Pflege,
});

function Pflege() {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Betrieb"
        title="Pflege und Wartung von Poolüberdachungen"
        subtitle="Der Aufwand ist gering – entscheidend ist Regelmäßigkeit. Wer Führungen sauber hält und Dichtungen im Blick behält, verlängert die Lebensdauer erheblich."
      />

      <section className="container-x mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <figure className="overflow-hidden rounded-3xl border border-border bg-mist shadow-[var(--shadow-soft)]">
          <img
            src={IMAGES.pflege.src}
            alt={IMAGES.pflege.alt}
            title={IMAGES.pflege.title}
            width={IMAGES.pflege.width}
            height={IMAGES.pflege.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover"
          />
        </figure>
        <div>
          <h2 className="text-3xl md:text-4xl">Was Pflege tatsächlich bewirkt</h2>
          <div className="mt-5 space-y-4 text-muted-foreground md:text-lg">
            <p>
              Fast alle Störungen an Poolüberdachungen lassen sich auf zwei Ursachen zurückführen:
              verschmutzte Führungen und gealterte Dichtungen. Beides ist mit einfachen Mitteln
              beherrschbar, wenn es regelmäßig kontrolliert wird.
            </p>
            <p>
              Gepflegte Anlagen laufen leichter – und werden deshalb häufiger geschlossen. Das
              wiederum verbessert Wärmerückhalt, Sauberkeit und Sicherheit spürbar.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x mt-20" aria-labelledby="routine">
        <h2 id="routine" className="text-3xl md:text-4xl">
          Die vier Pflegebereiche
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {routine.map((r) => (
            <article key={r.title} className="rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-soft)]">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary">
                <r.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x mt-20" aria-labelledby="wartungsplan">
        <div className="rounded-3xl border border-border bg-mist p-8 md:p-12">
          <div className="flex items-center gap-3">
            <CalendarCheck className="h-6 w-6 text-primary" aria-hidden="true" />
            <h2 id="wartungsplan" className="text-3xl md:text-4xl">
              Wartungsplan
            </h2>
          </div>
          <ul className="mt-8 divide-y divide-border overflow-hidden rounded-2xl bg-white">
            {plan.map((p) => (
              <li key={p.zeit} className="grid gap-1 p-5 sm:grid-cols-[220px_1fr] sm:gap-6">
                <span className="text-sm font-semibold text-foreground">{p.zeit}</span>
                <span className="text-sm text-muted-foreground">{p.tun}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex gap-2 text-sm text-muted-foreground">
            <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>
              Beachten Sie immer die Pflegehinweise des jeweiligen Herstellers – Materialien und
              Beschichtungen unterscheiden sich. Benötigte Bauteile finden Sie unter{" "}
              <Link to="/ersatzteile" className="text-primary underline-offset-4 hover:underline">
                Ersatzteile
              </Link>
              .
            </span>
          </p>
        </div>
      </section>

      <ParadisoFazit text="Pflege ist nur die halbe Miete: Ebenso wichtig ist, dass Verschleißteile auch nach vielen Jahren noch beschafft werden können." />
    </>
  );
}
