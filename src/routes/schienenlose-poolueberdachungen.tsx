import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Footprints, Brush, Wind, Accessibility, Ruler } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ParadisoFazit } from "@/components/site/ParadisoFazit";
import { IMAGES, absoluteImageUrl } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

const TITLE = "Schienenlose Poolüberdachungen – Technik & Vorteile";
const DESCRIPTION =
  "Wie schienenlose Poolüberdachungen funktionieren: freier Poolrand, barrierefreier Zugang, einfache Reinigung und worauf bei Planung und Untergrund zu achten ist.";

const crumbs = [
  { label: "Startseite", to: "/" },
  { label: "Schienenlose Poolüberdachungen" },
];

const vorteile = [
  { icon: Footprints, title: "Freier Poolrand", text: "Ohne Bodenschienen bleibt der Umgang um den Pool durchgehend eben und stolperfrei begehbar." },
  { icon: Brush, title: "Einfachere Reinigung", text: "Es gibt keine Schienenkanäle, in denen sich Laub, Sand und Schmutz sammeln können." },
  { icon: Accessibility, title: "Barrierearmer Zugang", text: "Der Übergang zwischen Terrasse und Pool bleibt ohne Absatz – ein Vorteil für Kinder und ältere Menschen." },
  { icon: Sparkles, title: "Ruhiges Erscheinungsbild", text: "Die Terrassenfläche wirkt aufgeräumt, weil keine sichtbaren Führungen im Belag liegen." },
  { icon: Wind, title: "Weniger Verschleißpunkte", text: "Da keine offen liegenden Laufschienen verschmutzen, sinkt der Wartungsaufwand an der Führung." },
  { icon: Ruler, title: "Flexible Positionierung", text: "Die Überdachung lässt sich je nach System flexibler verfahren und parken." },
];

const planung = [
  {
    title: "Tragfähiger, ebener Untergrund",
    text: "Schienenlose Systeme leiten Lasten punktuell ein. Der Belag rund um den Pool sollte eben, tragfähig und frostsicher ausgeführt sein.",
  },
  {
    title: "Ausreichende Parkfläche",
    text: "Auch schienenlose Überdachungen benötigen eine Fläche, auf der die zusammengeschobenen Segmente abgestellt werden.",
  },
  {
    title: "Windlasten berücksichtigen",
    text: "Für die geöffnete wie die geschlossene Position sind Verankerungspunkte vorzusehen, die zur Standortsituation passen.",
  },
  {
    title: "Bedienung festlegen",
    text: "Manuelles Verschieben ist bei vielen Größen problemlos möglich; motorische Antriebe erhöhen den Komfort spürbar.",
  },
];

export const Route = createFileRoute("/schienenlose-poolueberdachungen")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/schienenlose-poolueberdachungen` },
      { property: "og:image", content: absoluteImageUrl(IMAGES.schienenlos) },
      { name: "twitter:image", content: absoluteImageUrl(IMAGES.schienenlos) },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/schienenlose-poolueberdachungen` },
    ],
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
            image: absoluteImageUrl(IMAGES.schienenlos),
            author: { "@type": "Person", name: "Carsten Fels" },
          },
        ]),
      },
    ],
  }),
  component: Schienenlos,
});

function Schienenlos() {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Technik"
        title="Schienenlose Poolüberdachungen"
        subtitle="Systeme ohne Bodenschienen verzichten auf sichtbare Führungen im Terrassenbelag. Das verändert Optik, Begehbarkeit und Reinigungsaufwand deutlich."
      />

      <section className="container-x mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <figure className="overflow-hidden rounded-3xl border border-border bg-mist shadow-[var(--shadow-soft)]">
          <img
            src={IMAGES.schienenlos.src}
            alt={IMAGES.schienenlos.alt}
            title={IMAGES.schienenlos.title}
            width={IMAGES.schienenlos.width}
            height={IMAGES.schienenlos.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover"
          />
        </figure>
        <div>
          <h2 className="text-3xl md:text-4xl">Wie funktioniert eine schienenlose Konstruktion?</h2>
          <div className="mt-5 space-y-4 text-muted-foreground md:text-lg">
            <p>
              Klassische Poolüberdachungen laufen auf Schienen, die im oder auf dem Terrassenbelag
              verlegt werden. Schienenlose Systeme verlagern die Führung stattdessen in die
              Konstruktion der Segmente selbst: Die Elemente werden über Rollen oder Führungen an
              den Modulen geführt und lassen sich so ohne durchgehende Bodenschiene verfahren.
            </p>
            <p>
              Der sichtbarste Unterschied liegt am Poolrand. Dort bleibt der Belag frei, eben und
              ohne Kanten. Das wirkt nicht nur ruhiger, sondern erleichtert auch das Reinigen und
              reduziert typische Verschmutzungsstellen.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x mt-20" aria-labelledby="vorteile-schienenlos">
        <h2 id="vorteile-schienenlos" className="text-3xl md:text-4xl">
          Vorteile im Alltag
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {vorteile.map((v) => (
            <article
              key={v.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary">
                <v.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x mt-20" aria-labelledby="planung">
        <div className="rounded-3xl border border-border bg-mist p-8 md:p-12">
          <h2 id="planung" className="text-3xl md:text-4xl">
            Worauf bei der Planung zu achten ist
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {planung.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-6">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Weitere Grundlagen zu Aufbau, Material und Genehmigung finden Sie im{" "}
            <Link to="/ratgeber" className="text-primary underline-offset-4 hover:underline">
              Ratgeber
            </Link>
            .
          </p>
        </div>
      </section>

      <ParadisoFazit text="Schienenlose Systeme lohnen sich vor allem dort, wo der Poolrand frei bleiben soll und Wert auf einfache Reinigung gelegt wird. Entscheidend sind eine saubere Planung des Untergrunds und eine robuste Ausführung der Führungstechnik." />
    </>
  );
}
