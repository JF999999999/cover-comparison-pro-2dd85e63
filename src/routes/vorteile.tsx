import { createFileRoute } from "@tanstack/react-router";
import { Sun, Droplets, Lock, Leaf, Sparkles, Timer, ShieldCheck, Home } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ParadisoFazit } from "@/components/site/ParadisoFazit";
import { IMAGES, absoluteImageUrl } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

const TITLE = "Vorteile einer Poolüberdachung – Nutzen im Überblick";
const DESCRIPTION =
  "Wärmeschutz, längere Badesaison, Sicherheit, weniger Reinigung und geringerer Chemikalienbedarf: die wichtigsten Vorteile einer Poolüberdachung im Alltag.";

const crumbs = [
  { label: "Startseite", to: "/" },
  { label: "Vorteile" },
];

const items = [
  { icon: Sun, title: "Längere Badesaison", text: "Wärmerückhalt und Sonneneinstrahlung machen den Pool früher im Jahr nutzbar und verlängern die Saison in den Herbst hinein." },
  { icon: Timer, title: "Schnellere Erwärmung", text: "Das Luftvolumen unter der Überdachung heizt sich auf und gibt Wärme an das Wasser ab – besonders wirksam bei flachen Bauformen." },
  { icon: Droplets, title: "Weniger Verdunstung", text: "Eine geschlossene Überdachung reduziert die Wasserverdunstung deutlich und senkt damit Nachfüllbedarf und Wärmeverlust." },
  { icon: Sparkles, title: "Deutlich weniger Schmutz", text: "Laub, Pollen, Insekten und Staub gelangen kaum ins Wasser. Filter und Reinigungsroboter werden spürbar entlastet." },
  { icon: Leaf, title: "Geringerer Chemikalienbedarf", text: "Weniger Schmutzeintrag und stabilere Wassertemperaturen führen in der Regel zu einem gleichmäßigeren, sparsameren Chemieeinsatz." },
  { icon: Lock, title: "Mehr Sicherheit", text: "Verschlossene Überdachungen erschweren den unbeaufsichtigten Zugang – ein wichtiger Beitrag zur Sicherheit im Familiengarten." },
  { icon: ShieldCheck, title: "Schutz der Technik", text: "Beckenrand, Folie und Einbauteile sind weniger UV-Strahlung und Witterung ausgesetzt und altern langsamer." },
  { icon: Home, title: "Gewinn an Aufenthaltsqualität", text: "Hohe und begehbare Modelle schaffen einen wettergeschützten Raum, der sich auch außerhalb der Badezeit nutzen lässt." },
];

export const Route = createFileRoute("/vorteile")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/vorteile` },
      { property: "og:image", content: absoluteImageUrl(IMAGES.abend) },
      { name: "twitter:image", content: absoluteImageUrl(IMAGES.abend) },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/vorteile` }],
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
            image: absoluteImageUrl(IMAGES.abend),
            author: { "@type": "Person", name: "Carsten Fels" },
          },
        ]),
      },
    ],
  }),
  component: Vorteile,
});

function Vorteile() {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Nutzen"
        title="Vorteile einer Poolüberdachung"
        subtitle="Eine Überdachung wirkt gleichzeitig auf Temperatur, Sauberkeit, Sicherheit und Betriebskosten – hier die wichtigsten Effekte im Überblick."
      />

      <section className="container-x mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <article
            key={i.title}
            className="rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary">
              <i.icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="text-lg font-semibold">{i.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
          </article>
        ))}
      </section>

      <section className="container-x mt-20 grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <figure className="overflow-hidden rounded-3xl border border-border bg-mist shadow-[var(--shadow-soft)]">
          <img
            src={IMAGES.abend.src}
            alt={IMAGES.abend.alt}
            title={IMAGES.abend.title}
            width={IMAGES.abend.width}
            height={IMAGES.abend.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover"
          />
        </figure>
        <div>
          <h2 className="text-3xl md:text-4xl">Wirtschaftlich über die Jahre</h2>
          <div className="mt-5 space-y-4 text-muted-foreground md:text-lg">
            <p>
              Die spürbarsten Einsparungen entstehen durch geringere Wärmeverluste und weniger
              Verdunstung. Beides wirkt sich unmittelbar auf Heizenergie, Wasserverbrauch und
              Pflegeaufwand aus.
            </p>
            <p>
              Hinzu kommt ein weniger offensichtlicher Effekt: Bauteile, die dauerhaft vor
              Witterung und UV-Strahlung geschützt sind, altern langsamer. Über einen Zeitraum von
              zehn bis zwanzig Jahren summiert sich das zu einem realen Werterhalt der gesamten
              Poolanlage.
            </p>
          </div>
        </div>
      </section>

      <ParadisoFazit text="Die Vorteile einer Überdachung entfalten sich erst über Jahre – vorausgesetzt, die Anlage bleibt leichtgängig, dicht und wartbar. Deshalb lohnt der Blick auf Verarbeitungsqualität und Serviceverfügbarkeit." />
    </>
  );
}
