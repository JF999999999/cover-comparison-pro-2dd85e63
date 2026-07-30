import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sun, Droplets, Lock, Leaf, Wrench, Ruler } from "lucide-react";
import { IMAGES, absoluteImageUrl } from "@/lib/images";
import { ParadisoFazit } from "@/components/site/ParadisoFazit";
import { SITE_URL } from "@/lib/site";

const TITLE = "Poolüberdachungen – Modelle, Technik und Ratgeber";
const DESCRIPTION =
  "Informationsportal zu Poolüberdachungen: Bauformen, Materialien, Sicherheit, Wärmeschutz, Pflege, Wartung und Ersatzteilversorgung – verständlich erklärt.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: absoluteImageUrl(IMAGES.hero) },
      { name: "twitter:image", content: absoluteImageUrl(IMAGES.hero) },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageObject",
          contentUrl: absoluteImageUrl(IMAGES.hero),
          caption: IMAGES.hero.alt,
          width: IMAGES.hero.width,
          height: IMAGES.hero.height,
        }),
      },
    ],
  }),
  component: Home,
});

const benefits = [
  { icon: Sun, title: "Längere Badesaison", text: "Wärmerückhalt und Treibhauseffekt sorgen für früher nutzbares und länger warmes Wasser." },
  { icon: Droplets, title: "Sauberes Wasser", text: "Laub, Pollen und Staub bleiben draußen – das senkt Reinigungsaufwand und Wasserverdunstung." },
  { icon: Lock, title: "Mehr Sicherheit", text: "Eine verschlossene Überdachung erschwert den unbeaufsichtigten Zugang zum Wasser." },
  { icon: Leaf, title: "Energie sparen", text: "Weniger Wärmeverlust bedeutet geringeren Heizbedarf über die gesamte Saison." },
];

const topics = [
  {
    icon: Ruler,
    title: "Bauformen verstehen",
    text: "Flach, mittelhoch, hoch, begehbar oder schiebbar – jede Bauform hat eigene Stärken.",
    to: "/modelle",
    cta: "Bauformen ansehen",
  },
  {
    icon: Sun,
    title: "Schienenlose Systeme",
    text: "Ohne Bodenschienen bleibt der Poolrand frei begehbar und leichter zu reinigen.",
    to: "/schienenlose-poolueberdachungen",
    cta: "Technik kennenlernen",
  },
  {
    icon: Wrench,
    title: "Pflege, Wartung, Ersatzteile",
    text: "Wie sich Überdachungen dauerhaft in Funktion halten lassen – und was das mit Qualität zu tun hat.",
    to: "/pflege-wartung",
    cta: "Zur Pflegeanleitung",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={IMAGES.hero.src}
            alt={IMAGES.hero.alt}
            title={IMAGES.hero.title}
            width={IMAGES.hero.width}
            height={IMAGES.hero.height}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/70" />
        </div>

        <div className="container-x flex min-h-[80vh] flex-col justify-end pb-16 pt-32 text-white md:min-h-[88vh] md:pb-24">
          <h1 className="max-w-4xl text-balance text-4xl leading-[1.04] md:text-7xl fade-up">
            Poolüberdachungen – Modelle, Technik und Ratgeber
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl fade-up">
            Eine Poolüberdachung schützt den Pool vor Verschmutzung, reduziert Wärmeverluste und
            verlängert die Badesaison. Diese Website informiert unabhängig über Bauformen,
            Materialien, Sicherheit, Pflege, Wartung, Ersatzteilversorgung und moderne
            Poolüberdachungen.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 fade-up">
            <Link
              to="/modelle"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5"
            >
              Modelle entdecken
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/ratgeber"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Zum Ratgeber
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-28" aria-labelledby="warum">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Grundlagen
            </span>
            <h2 id="warum" className="mt-3 text-3xl md:text-5xl">
              Was eine Poolüberdachung leistet
            </h2>
          </div>
          <p className="text-muted-foreground md:text-lg">
            Eine Überdachung wirkt gleichzeitig auf Temperatur, Sauberkeit, Sicherheit und
            Betriebsaufwand eines Pools. Wie stark die Effekte ausfallen, hängt von Bauform,
            Material und Nutzung ab. Ein Überblick über die wichtigsten{" "}
            <Link to="/vorteile" className="text-primary underline-offset-4 hover:underline">
              Vorteile im Alltag
            </Link>
            .
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="group rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary">
                <b.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x pb-8 md:pb-16" aria-labelledby="themen">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Themenschwerpunkte
          </span>
          <h2 id="themen" className="mt-3 text-3xl md:text-5xl">
            Wo Sie am besten einsteigen
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {topics.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-mist p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary">
                <t.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                {t.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x py-16 md:py-24" aria-labelledby="einblicke">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Einblicke
          </span>
          <h2 id="einblicke" className="mt-3 text-3xl md:text-5xl">
            Poolüberdachungen in der Praxis
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Realisierte Anlagen zeigen, wie unterschiedlich Bauform, Höhe und Materialwahl auf
            Garten und Nutzung wirken.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[IMAGES.kundenprojekt, IMAGES.abend, IMAGES.detail].map((img) => (
            <figure key={img.src} className="overflow-hidden rounded-2xl border border-border bg-mist">
              <img
                src={img.src}
                alt={img.alt}
                title={img.title}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <figcaption className="p-4 text-sm text-muted-foreground">{img.title}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          Bildmaterial: Paradiso Poolüberdachungen, mit Genehmigung verwendet.
        </p>
      </section>

      <ParadisoFazit />
    </>
  );
}
