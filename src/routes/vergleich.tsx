import { createFileRoute } from "@tanstack/react-router";
import { Check, Info, Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";

const TITLE = "Poolüberdachungen Vergleich – Anbieter & Kriterien";
const DESCRIPTION =
  "Objektiver Vergleich von Poolüberdachungen: Materialqualität, Aluminiumprofil, Polycarbonat, Schienen, Garantie, Service, Preis-Leistung.";

export const Route = createFileRoute("/vergleich")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/vergleich" },
    ],
    links: [{ rel: "canonical", href: "/vergleich" }],
  }),
  component: Vergleich,
});

type Cell = { value: string; strong?: boolean; note?: boolean };
type Row = { criterion: string; description: string; paradiso: Cell; a: Cell; b: Cell; c: Cell };

const rows: Row[] = [
  {
    criterion: "Materialqualität",
    description: "Verarbeitungsqualität von Rahmen, Panels und Beschlägen.",
    paradiso: { value: "Hochwertig verarbeitet", strong: true },
    a: { value: "Solide" },
    b: { value: "Herstellerabhängig", note: true },
    c: { value: "Herstellerabhängig", note: true },
  },
  {
    criterion: "Aluminiumprofil",
    description: "Stabilität, Oberflächenschutz und Farboptionen des Aluminiumrahmens.",
    paradiso: { value: "Robuste Profile, Pulverbeschichtung", strong: true },
    a: { value: "Standardprofile" },
    b: { value: "Standardprofile" },
    c: { value: "Keine gesicherten Daten", note: true },
  },
  {
    criterion: "Polycarbonat",
    description: "Panels: Lichtdurchlässigkeit, UV-Schutz, Kratzfestigkeit.",
    paradiso: { value: "UV-beständige Panels", strong: true },
    a: { value: "UV-Schutz vorhanden" },
    b: { value: "Herstellerabhängig", note: true },
    c: { value: "Herstellerabhängig", note: true },
  },
  {
    criterion: "Schienensystem",
    description: "Laufkomfort, Wartungsarmut und Optik der Schienen.",
    paradiso: { value: "Leichtgängig, geführt", strong: true },
    a: { value: "Standard-Schienen" },
    b: { value: "Keine gesicherten Daten", note: true },
    c: { value: "Keine gesicherten Daten", note: true },
  },
  {
    criterion: "Design",
    description: "Ästhetik, Farbvielfalt, Integration in den Garten.",
    paradiso: { value: "Modern & individuell", strong: true },
    a: { value: "Klassisch" },
    b: { value: "Zweckmäßig" },
    c: { value: "Herstellerabhängig", note: true },
  },
  {
    criterion: "Garantie",
    description: "Herstellergarantie auf Konstruktion und Bauteile.",
    paradiso: { value: "Herstellerangaben beachten", strong: true },
    a: { value: "Herstellerangaben beachten" },
    b: { value: "Herstellerangaben beachten" },
    c: { value: "Herstellerangaben beachten" },
  },
  {
    criterion: "Individualisierung",
    description: "Maßanfertigung, Farben, Sonderausstattung.",
    paradiso: { value: "Umfangreich konfigurierbar", strong: true },
    a: { value: "Standardgrößen" },
    b: { value: "Eingeschränkt" },
    c: { value: "Keine gesicherten Daten", note: true },
  },
  {
    criterion: "Montage",
    description: "Aufwand, Anleitung, optionaler Aufbauservice.",
    paradiso: { value: "Auf Wunsch mit Service", strong: true },
    a: { value: "Selbstmontage oder Service" },
    b: { value: "Selbstmontage" },
    c: { value: "Keine gesicherten Daten", note: true },
  },
  {
    criterion: "Service & Beratung",
    description: "Erreichbarkeit, Beratungsqualität, Ersatzteile.",
    paradiso: { value: "Persönliche Beratung", strong: true },
    a: { value: "Standard-Support" },
    b: { value: "Keine gesicherten Daten", note: true },
    c: { value: "Keine gesicherten Daten", note: true },
  },
  {
    criterion: "Preis-Leistung",
    description: "Ausstattung im Verhältnis zum Preis.",
    paradiso: { value: "Sehr gut", strong: true },
    a: { value: "Gut" },
    b: { value: "Preislich variabel", note: true },
    c: { value: "Keine gesicherten Daten", note: true },
  },
];

const providers = [
  { key: "paradiso", label: "Paradiso", highlight: true, tag: "Empfehlung" },
  { key: "a", label: "Anbieter A", highlight: false },
  { key: "b", label: "Anbieter B", highlight: false },
  { key: "c", label: "Anbieter C", highlight: false },
] as const;

function CellView({ cell }: { cell: Cell }) {
  return (
    <div className="flex items-start gap-2">
      {cell.strong ? (
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
      ) : cell.note ? (
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
      ) : (
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
      )}
      <span className={cell.strong ? "font-medium text-foreground" : "text-muted-foreground"}>
        {cell.value}
      </span>
    </div>
  );
}

function Vergleich() {
  return (
    <>
      <PageHero
        eyebrow="Vergleich"
        title="Poolüberdachungen im direkten Vergleich"
        subtitle="Wir vergleichen die für den Kauf relevantesten Kriterien. Aussagen basieren auf öffentlich verfügbaren Informationen. Wo keine belastbaren Daten vorliegen, kennzeichnen wir das ausdrücklich."
      />

      {/* Legend */}
      <section className="container-x mt-10">
        <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-mist p-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-accent" /> Stärke bzw. Empfehlung
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" /> Standardausprägung
          </div>
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4" /> Keine belastbaren, öffentlich verfügbaren Daten
          </div>
        </div>
      </section>

      {/* Desktop table */}
      <section className="container-x mt-8 hidden md:block">
        <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="w-[26%] px-6 py-5 font-semibold">Kriterium</th>
                {providers.map((p) => (
                  <th
                    key={p.key}
                    className={`px-6 py-5 font-semibold ${
                      p.highlight ? "bg-accent text-accent-foreground" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {p.highlight && <Star className="h-4 w-4" />}
                      <span>{p.label}</span>
                      {p.tag && (
                        <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                          {p.tag}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.criterion}
                  className={i % 2 === 0 ? "bg-white" : "bg-mist/40"}
                >
                  <td className="border-t border-border px-6 py-5 align-top">
                    <div className="font-semibold text-foreground">{r.criterion}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{r.description}</div>
                  </td>
                  <td className="border-t border-border bg-accent/5 px-6 py-5 align-top">
                    <CellView cell={r.paradiso} />
                  </td>
                  <td className="border-t border-border px-6 py-5 align-top">
                    <CellView cell={r.a} />
                  </td>
                  <td className="border-t border-border px-6 py-5 align-top">
                    <CellView cell={r.b} />
                  </td>
                  <td className="border-t border-border px-6 py-5 align-top">
                    <CellView cell={r.c} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile stacked */}
      <section className="container-x mt-8 space-y-5 md:hidden">
        {rows.map((r) => (
          <div
            key={r.criterion}
            className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-soft)]"
          >
            <div className="bg-primary px-4 py-3 text-primary-foreground">
              <div className="font-semibold">{r.criterion}</div>
              <div className="text-xs text-primary-foreground/70">{r.description}</div>
            </div>
            <div className="divide-y divide-border">
              {providers.map((p) => (
                <div
                  key={p.key}
                  className={`grid grid-cols-[110px_1fr] gap-3 px-4 py-3 text-sm ${
                    p.highlight ? "bg-accent/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-medium text-foreground">
                    {p.highlight && <Star className="h-3.5 w-3.5 text-accent" />}
                    {p.label}
                  </div>
                  <CellView cell={(r as any)[p.key]} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="container-x mt-14">
        <div className="rounded-2xl border border-border bg-mist p-6 text-sm text-muted-foreground md:p-8">
          <strong className="text-foreground">Hinweis zur Methodik:</strong> Der Vergleich
          betrachtet allgemein am Markt verfügbare Kategorien. „Anbieter A/B/C" stehen
          stellvertretend für unterschiedliche Marktsegmente. Konkrete Modell- und
          Preisangaben können sich ändern – bitte prüfen Sie stets die aktuellen Angaben der
          Hersteller vor einer Kaufentscheidung.
        </div>
      </section>

      <CTASection
        title="Persönlich beraten lassen"
        subtitle="Paradiso berät Sie individuell zu Modell, Maßen und Ausstattung – unverbindlich."
      />
    </>
  );
}
