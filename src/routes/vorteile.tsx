import { createFileRoute } from "@tanstack/react-router";
import { Sun, Droplets, Zap, Lock, TrendingUp, Leaf } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";

const TITLE = "Vorteile einer Poolüberdachung – Energie, Sicherheit, Werterhalt";
const DESCRIPTION =
  "Alle Vorteile einer Poolüberdachung im Überblick: Energie sparen, Wasser sauber halten, Badesaison verlängern, Sicherheit und Werterhöhung.";

export const Route = createFileRoute("/vorteile")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/vorteile" },
    ],
    links: [{ rel: "canonical", href: "/vorteile" }],
  }),
  component: Vorteile,
});

const points = [
  {
    icon: Zap,
    title: "Energie sparen",
    text: "Eine geschlossene Poolüberdachung reduziert Wärme- und Verdunstungsverluste deutlich – der Heizaufwand sinkt spürbar und Sie sparen Betriebskosten.",
  },
  {
    icon: Droplets,
    title: "Wasser sauber halten",
    text: "Laub, Insekten, Pollen und Staub bleiben draußen. Sie benötigen weniger Chemie und deutlich weniger Zeit für die Reinigung.",
  },
  {
    icon: Sun,
    title: "Badesaison verlängern",
    text: "Das Wasser wird durch die Sonne unter dem Dach schneller warm und bleibt es länger. Je nach Modell bis zu mehreren Monaten mehr Badespaß pro Jahr.",
  },
  {
    icon: Lock,
    title: "Sicherheit für Kinder & Haustiere",
    text: "Eine verschlossene Überdachung verhindert unbeaufsichtigten Zugang zum Wasser und erhöht die Sicherheit im Alltag deutlich.",
  },
  {
    icon: TrendingUp,
    title: "Werterhöhung des Gartens",
    text: "Ein hochwertig überdachter Pool wirkt gepflegt, ganzjährig einsatzbereit und steigert die Attraktivität Ihrer Immobilie.",
  },
  {
    icon: Leaf,
    title: "Weniger Wasser & Chemie",
    text: "Deutlich reduzierte Verdunstung bedeutet weniger Nachfüllen und einen stabileren Chemikalien-Haushalt – gut für Umwelt und Geldbeutel.",
  },
];

function Vorteile() {
  return (
    <>
      <PageHero
        eyebrow="Vorteile"
        title="Warum sich eine Poolüberdachung wirklich lohnt"
        subtitle="Sechs Gründe, warum sich die Investition in eine hochwertige Poolüberdachung meist schon nach wenigen Jahren bezahlt macht."
      />

      <section className="container-x mt-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-white p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-primary/5 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <div className="grid gap-10 rounded-3xl border border-border bg-mist p-8 md:grid-cols-2 md:p-14">
          <div>
            <h2 className="text-3xl md:text-4xl">Kurz zusammengefasst</h2>
            <p className="mt-4 text-muted-foreground">
              Eine Poolüberdachung ist eine der wirkungsvollsten Ergänzungen für jeden
              privaten Pool – wirtschaftlich, praktisch und optisch.
            </p>
          </div>
          <ul className="space-y-3 text-foreground">
            {[
              "Deutlich reduzierte Heiz- und Betriebskosten",
              "Weniger Pflege- und Reinigungsaufwand",
              "Mehrere Wochen bis Monate zusätzliche Badesaison",
              "Klar erhöhte Sicherheit für Kinder und Tiere",
              "Nachhaltige Nutzung durch weniger Wasser und Chemie",
              "Wertsteigerung des gesamten Außenbereichs",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
