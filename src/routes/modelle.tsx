import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import heroFlach from "@/assets/model-flach.jpg";
import heroMittel from "@/assets/model-mittel.jpg";
import heroHoch from "@/assets/model-hoch.jpg";
import heroBegehbar from "@/assets/model-begehbar.jpg";
import heroSchiebe from "@/assets/model-schiebe.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";

const TITLE = "Modelle von Poolüberdachungen – Flach, Hoch, Schiebe & mehr";
const DESCRIPTION =
  "Übersicht aller Bauarten von Poolüberdachungen: flach, mittelhoch, hoch, begehbar und Schiebeüberdachungen inklusive Vor- und Nachteilen.";

export const Route = createFileRoute("/modelle")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/modelle" },
    ],
    links: [{ rel: "canonical", href: "/modelle" }],
  }),
  component: Modelle,
});

type Model = {
  id: string;
  name: string;
  image?: string;
  claim: string;
  description: string;
  pros: string[];
  cons: string[];
  recommendation: string;
};

const models: Model[] = [
  {
    id: "flach",
    name: "Flache Poolüberdachungen",
    image: heroFlach,
    claim: "Diskret, modern, ideal für zeitgemäße Gärten.",
    description:
      "Flache Modelle liegen mit geringer Bauhöhe direkt über dem Pool. Sie fügen sich unauffällig in die Architektur ein und schützen zuverlässig vor Verschmutzung und Wärmeverlust.",
    pros: [
      "Sehr diskrete Optik",
      "Guter Wärmerückhalt bei geringem Luftvolumen",
      "Meist günstiger als hohe Varianten",
      "Häufig auch nachträglich installierbar",
    ],
    cons: [
      "Keine Nutzung als Wintergarten möglich",
      "Kein Schwimmen bei geschlossener Überdachung",
    ],
    recommendation:
      "Ideal für Puristen und moderne Gärten, in denen die Überdachung optisch zurücktreten soll.",
  },
  {
    id: "mittel",
    name: "Mittelhohe Poolüberdachungen",
    image: heroMittel,
    claim: "Der ausgewogene Kompromiss.",
    description:
      "Mittelhohe Modelle bieten mehr Kopffreiheit und ermöglichen es, bei geöffneten Frontelementen entspannt einzusteigen. Sie kombinieren Wärmeeffizienz mit Komfort.",
    pros: [
      "Deutlich mehr Komfort als flache Modelle",
      "Guter Wärmerückhalt",
      "Optisch weiterhin sehr integrierbar",
    ],
    cons: [
      "Höherer Preis als flache Varianten",
      "Nur eingeschränkt begehbar",
    ],
    recommendation:
      "Für Familien, die etwas mehr Komfort möchten, ohne auf ein zurückhaltendes Design zu verzichten.",
  },
  {
    id: "hoch",
    name: "Hohe Poolüberdachungen",
    image: heroHoch,
    claim: "Voller Komfort, ganzjährig nutzbar.",
    description:
      "Hohe Überdachungen wirken wie ein kleiner Wintergarten und ermöglichen komfortables Schwimmen und Verweilen auch bei geschlossenem Dach. Ideal für ganzjährige Nutzung.",
    pros: [
      "Schwimmen bei geschlossener Überdachung möglich",
      "Nutzung als Lounge- oder Wellnessbereich",
      "Sehr guter Wetterschutz",
    ],
    cons: [
      "Höherer Anschaffungspreis",
      "Deutlich präsenter im Garten",
      "Ggf. Baugenehmigung erforderlich",
    ],
    recommendation:
      "Perfekt für alle, die ihren Pool wie ein privates Hallenbad das ganze Jahr über nutzen möchten.",
  },
  {
    id: "begehbar",
    name: "Begehbare Modelle",
    image: heroBegehbar,
    claim: "Komfort und Bewegungsfreiheit.",
    description:
      "Begehbare Überdachungen bieten ausreichend Kopffreiheit, um bequem um den Pool herumzugehen. Sie eignen sich hervorragend für Familien und Poolbetreiber, die viel Zeit am Wasser verbringen.",
    pros: [
      "Bewegungsfreiheit rund um den Pool",
      "Erweiterte Nutzung als geschützter Aufenthaltsbereich",
      "Sicherer Zugang bei jedem Wetter",
    ],
    cons: [
      "Mittleres bis höheres Preissegment",
      "Größerer Flächenbedarf",
    ],
    recommendation:
      "Empfehlenswert, wenn der Pool als zentraler Aufenthaltsort im Garten dienen soll.",
  },
  {
    id: "schiebe",
    name: "Schiebeüberdachungen",
    image: heroSchiebe,
    claim: "Flexibel öffnen und schließen.",
    description:
      "Schiebeüberdachungen bestehen aus mehreren, ineinander schiebbaren Segmenten. So lässt sich der Pool je nach Wetter und Wunsch teilweise oder vollständig öffnen.",
    pros: [
      "Sehr flexibel im Alltag",
      "Kombinierbar mit flachen, mittleren und hohen Ausführungen",
      "Angenehmes Freibad-Feeling bei geöffnetem Zustand",
    ],
    cons: [
      "Regelmäßige Reinigung der Schienen empfohlen",
      "Höhere technische Komplexität",
    ],
    recommendation:
      "Die richtige Wahl, wenn maximale Flexibilität wichtig ist – vom vollen Schutz bis zum offenen Freibad.",
  },
];

function Modelle() {
  return (
    <>
      <PageHero
        eyebrow="Modelle"
        title="Welche Poolüberdachung passt zu Ihrem Garten?"
        subtitle="Fünf Bauarten – von diskret-flach bis begehbar. Jede hat ihre Stärken. Hier finden Sie eine übersichtliche Gegenüberstellung."
      />

      <section className="container-x mt-10 grid gap-4 md:grid-cols-5">
        {models.map((m) => (
          <a
            key={m.id}
            href={`#${m.id}`}
            className="rounded-xl border border-border bg-white px-4 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {m.name.replace("Poolüberdachungen", "").replace("Modelle", "").trim() || m.name}
          </a>
        ))}
      </section>

      <div className="mt-16 space-y-24">
        {models.map((m, i) => (
          <section key={m.id} id={m.id} className="container-x scroll-mt-24">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
                  />
                ) : (
                  <div className="aspect-[4/3] w-full rounded-2xl hero-gradient shadow-[var(--shadow-elegant)]" />
                )}
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  Modelltyp {i + 1} / {models.length}
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl">{m.name}</h2>
                <p className="mt-2 text-lg font-medium text-primary">{m.claim}</p>
                <p className="mt-4 text-muted-foreground">{m.description}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="mb-2 text-sm font-semibold text-foreground">Vorteile</div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {m.pros.map((p) => (
                        <li key={p} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="mb-2 text-sm font-semibold text-foreground">Zu beachten</div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {m.cons.map((c) => (
                        <li key={c} className="flex gap-2">
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/70" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-primary/10 bg-primary/5 p-5 text-sm text-foreground">
                  <span className="font-semibold text-primary">Empfehlung: </span>
                  {m.recommendation}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTASection
        title="Unsicher, welches Modell passt?"
        subtitle="Paradiso hilft Ihnen bei der Wahl der passenden Bauform – kostenfrei und unverbindlich."
      />
    </>
  );
}
