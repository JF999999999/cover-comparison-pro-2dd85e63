import { createFileRoute } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ParadisoFazit } from "@/components/site/ParadisoFazit";
import { IMAGES, absoluteImageUrl, type SiteImage } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

const TITLE = "Modelle von Poolüberdachungen – Bauformen im Überblick";
const DESCRIPTION =
  "Flache, mittelhohe, hohe, begehbare und schiebbare Poolüberdachungen: Aufbau, Einsatzbereiche, Vorteile und Grenzen der wichtigsten Bauformen.";

const crumbs = [
  { label: "Startseite", to: "/" },
  { label: "Modelle" },
];

type Modell = {
  id: string;
  name: string;
  image: SiteImage;
  intro: string;
  pro: string[];
  contra: string[];
};

const modelle: Modell[] = [
  {
    id: "flach",
    name: "Flache Poolüberdachung",
    image: IMAGES.flach,
    intro:
      "Die flache Bauform liegt niedrig über der Wasseroberfläche und fügt sich optisch sehr zurückhaltend in den Garten ein. Sie eignet sich besonders dort, wo die Sicht auf Haus und Grundstück frei bleiben soll.",
    pro: [
      "Sehr unauffällige Optik, geringe Bauhöhe",
      "Häufig ohne Baugenehmigung realisierbar",
      "Guter Wärmerückhalt durch kleines Luftvolumen",
      "Windschnittige Konstruktion",
    ],
    contra: [
      "Schwimmen nur bei geöffneter Überdachung",
      "Kein Aufenthaltsbereich rund um den Pool",
    ],
  },
  {
    id: "mittelhoch",
    name: "Mittelhohe Poolüberdachung",
    image: IMAGES.mittelhoch,
    intro:
      "Mittelhohe Modelle sind ein Kompromiss aus zurückhaltender Optik und nutzbarem Innenraum. Schwimmen ist bei vielen Ausführungen auch im geschlossenen Zustand möglich.",
    pro: [
      "Schwimmen meist auch geschlossen möglich",
      "Deutlich mehr Innenraum als bei Flachmodellen",
      "Weiterhin moderate Bauhöhe",
    ],
    contra: [
      "Aufrechtes Stehen nur eingeschränkt möglich",
      "Größere Ansichtsfläche im Garten",
    ],
  },
  {
    id: "hoch",
    name: "Hohe Poolüberdachung",
    image: IMAGES.hoch,
    intro:
      "Hohe Überdachungen schaffen einen eigenen Raum: Sie sind begehbar, bieten Platz für Liegen und Möbel und machen den Pool zu einem wettergeschützten Aufenthaltsbereich.",
    pro: [
      "Voll begehbarer Innenraum, aufrechtes Stehen möglich",
      "Nutzung als geschützter Wohn- und Aufenthaltsbereich",
      "Sehr lange nutzbare Saison",
    ],
    contra: [
      "Häufig genehmigungspflichtig",
      "Prägt das Gartenbild deutlich stärker",
    ],
  },
  {
    id: "begehbar",
    name: "Begehbare Poolüberdachung",
    image: IMAGES.begehbar,
    intro:
      "Bei begehbaren Konstruktionen ist die Dachfläche belastbar ausgeführt und lässt sich als zusätzliche Terrassenfläche nutzen – interessant bei knappem Platz im Garten.",
    pro: [
      "Zusätzliche nutzbare Fläche über dem Pool",
      "Sehr hohe Verkehrssicherheit im geschlossenen Zustand",
      "Klare, architektonische Optik",
    ],
    contra: [
      "Höhere Anforderungen an Statik und Unterbau",
      "Sorgfältige Planung der Auflager erforderlich",
    ],
  },
  {
    id: "schiebe",
    name: "Schiebeüberdachung",
    image: IMAGES.pflege,
    intro:
      "Schiebemodelle bestehen aus mehreren ineinander verfahrbaren Segmenten. So lässt sich der Pool je nach Wetter teilweise oder vollständig öffnen.",
    pro: [
      "Stufenlose Anpassung an Wetter und Nutzung",
      "Segmente lassen sich platzsparend zusammenschieben",
      "Auch motorisch bedienbar erhältlich",
    ],
    contra: [
      "Ausreichend Schiebeweg neben dem Pool erforderlich",
      "Führungen benötigen regelmäßige Reinigung",
    ],
  },
];

export const Route = createFileRoute("/modelle")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/modelle` },
      { property: "og:image", content: absoluteImageUrl(IMAGES.mittelhoch) },
      { name: "twitter:image", content: absoluteImageUrl(IMAGES.mittelhoch) },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/modelle` }],
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
            image: absoluteImageUrl(IMAGES.mittelhoch),
            author: { "@type": "Person", name: "Carsten Fels" },
          },
        ]),
      },
    ],
  }),
  component: Modelle,
});

function Modelle() {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Bauformen"
        title="Modelle von Poolüberdachungen im Überblick"
        subtitle="Flach, mittelhoch, hoch, begehbar oder schiebbar – welche Bauform passt, hängt von Grundstück, Nutzung und gewünschtem Komfort ab."
      />

      <div className="container-x mt-16 space-y-20 md:space-y-28">
        {modelle.map((m, i) => (
          <article
            key={m.id}
            id={m.id}
            className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
          >
            <figure
              className={`overflow-hidden rounded-3xl border border-border bg-mist shadow-[var(--shadow-soft)] ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <img
                src={m.image.src}
                alt={m.image.alt}
                title={m.image.title}
                width={m.image.width}
                height={m.image.height}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>

            <div>
              <h2 className="text-3xl md:text-4xl">{m.name}</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">{m.intro}</p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-white p-5">
                  <h3 className="text-sm font-semibold text-foreground">Stärken</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {m.pro.map((p) => (
                      <li key={p} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-mist p-5">
                  <h3 className="text-sm font-semibold text-foreground">Zu bedenken</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {m.contra.map((c) => (
                      <li key={c} className="flex gap-2">
                        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ParadisoFazit text="Die passende Bauform ergibt sich aus Grundstück, Nutzung und gewünschtem Komfort. Unabhängig davon entscheiden Verarbeitungsqualität, Bedienkomfort und Serviceverfügbarkeit darüber, wie lange eine Überdachung Freude macht." />
    </>
  );
}
