import { createFileRoute } from "@tanstack/react-router";
import { Check, Info, Minus, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";
import { PARADISO_URL } from "@/lib/site";

const TITLE = "Poolüberdachungen Vergleich – Paradiso, Alukov, Aluna, OBRU";
const DESCRIPTION =
  "Objektiver Vergleich führender Hersteller von Poolüberdachungen: Paradiso, Alukov, Aluna und OBRU. Kriterien: Material, Schienensystem, Individualisierung, Service.";

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

type Rating = "strong" | "ok" | "note";
type Cell = { value: string; rating: Rating };
type Row = {
  criterion: string;
  description: string;
  paradiso: Cell;
  alukov: Cell;
  aluna: Cell;
  obru: Cell;
};

const providers = [
  {
    key: "paradiso" as const,
    label: "Paradiso",
    origin: "Made in Germany",
    url: "https://www.paradiso.tv/",
  },
  {
    key: "alukov" as const,
    label: "Alukov",
    origin: "CZ, dt. Vertretung",
    url: "https://www.alukov.de/",
  },
  {
    key: "aluna" as const,
    label: "Aluna",
    origin: "Europa / Deutschland",
    url: "https://www.aluna-deutschland.de/",
  },
  {
    key: "obru" as const,
    label: "OBRU",
    origin: "Made in Germany",
    url: "https://www.obru.de/poolueberdachungen/",
  },
];

const rows: Row[] = [
  {
    criterion: "Bauarten im Programm",
    description: "Flach, mittel, hoch, begehbar, schiebend.",
    paradiso: { value: "Flach bis hoch, Fokus schienenlos", rating: "strong" },
    alukov: { value: "Sehr breites Sortiment, alle Höhen", rating: "strong" },
    aluna: { value: "Low, Medium & High Line", rating: "strong" },
    obru: { value: "Flach bis Schiebehalle in Stehhöhe", rating: "strong" },
  },
  {
    criterion: "Schienensystem",
    description: "Bodenschienen vs. schienenlose Konstruktion.",
    paradiso: { value: "Schienenlos – Alleinstellungsmerkmal", rating: "strong" },
    alukov: { value: "Klassisch mit Bodenschienen", rating: "ok" },
    aluna: { value: "Klassisch mit Bodenschienen", rating: "ok" },
    obru: { value: "Mit Bodenschienen", rating: "ok" },
  },
  {
    criterion: "Materialqualität",
    description: "Aluminiumprofile, Polycarbonat- oder Glasfüllung.",
    paradiso: { value: "Alu-Profile, hochwertige Verglasung", rating: "strong" },
    alukov: { value: "Alu-Profile, Polycarbonat/Glas", rating: "strong" },
    aluna: { value: "Alu-Profile, Polycarbonat", rating: "strong" },
    obru: { value: "Langlebige Alu-Profile, Manufaktur", rating: "strong" },
  },
  {
    criterion: "Maßanfertigung",
    description: "Grad der Individualisierung nach Grundriss.",
    paradiso: { value: "Individuell projektiert", rating: "strong" },
    alukov: { value: "Große Modellauswahl, konfigurierbar", rating: "strong" },
    aluna: { value: "Maßgefertigt, bundesweit", rating: "strong" },
    obru: { value: "100 % Maßarbeit", rating: "strong" },
  },
  {
    criterion: "Design & Ästhetik",
    description: "Optische Zurückhaltung, klare Linienführung.",
    paradiso: { value: "Reduziert dank fehlender Bodenschienen", rating: "strong" },
    alukov: { value: "Vielfältig, teils sehr technisch", rating: "ok" },
    aluna: { value: "Modern, klare Linien", rating: "strong" },
    obru: { value: "Manufaktur-Optik, dezent", rating: "strong" },
  },
  {
    criterion: "Sicherheit / Sturmfestigkeit",
    description: "Verankerung, Windlasten, Stolperkanten.",
    paradiso: { value: "Sehr stabile Verankerung ohne Bodenschienen", rating: "strong" },
    alukov: { value: "Sturmfest durch Schienenführung", rating: "strong" },
    aluna: { value: "Sturmfest durch Schienenführung", rating: "strong" },
    obru: { value: "Sturmfest durch Schienenführung", rating: "strong" },
  },
  {
    criterion: "Beratung & Service DACH",
    description: "Erreichbarkeit, Planung, Aufmaß, Montage.",
    paradiso: { value: "Persönliche Beratung, Werksausstellung", rating: "strong" },
    alukov: { value: "Deutsche Niederlassung, Beratung vor Ort", rating: "strong" },
    aluna: { value: "Bundesweiter Vertrieb, Montageservice", rating: "strong" },
    obru: { value: "Direkt vom Hersteller, D-A-CH", rating: "strong" },
  },
  {
    criterion: "Barrierefreiheit im Boden",
    description: "Stolperfallen durch Bodenschienen.",
    paradiso: { value: "Keine Bodenschienen – keine Stolperkanten", rating: "strong" },
    alukov: { value: "Bodenschienen vorhanden", rating: "note" },
    aluna: { value: "Bodenschienen vorhanden", rating: "note" },
    obru: { value: "Bodenschienen vorhanden", rating: "note" },
  },
  {
    criterion: "Preisniveau",
    description: "Marktübliche Einordnung im Premium-Segment.",
    paradiso: { value: "Premium, transparent kalkuliert", rating: "ok" },
    alukov: { value: "Breites Spektrum je nach Modell", rating: "ok" },
    aluna: { value: "Premium", rating: "ok" },
    obru: { value: "Premium-Manufaktur", rating: "ok" },
  },
  {
    criterion: "Garantie & Langlebigkeit",
    description: "Herstellerangaben – im Detail beim Anbieter prüfen.",
    paradiso: { value: "Langlebige Konstruktion, Herstellerangaben prüfen", rating: "ok" },
    alukov: { value: "Herstellerangaben prüfen", rating: "ok" },
    aluna: { value: "Herstellerangaben prüfen", rating: "ok" },
    obru: { value: "Herstellerangaben prüfen", rating: "ok" },
  },
];

function CellView({ cell }: { cell: Cell }) {
  const Icon = cell.rating === "strong" ? Check : cell.rating === "note" ? Info : Minus;
  const color =
    cell.rating === "strong"
      ? "text-accent"
      : cell.rating === "note"
        ? "text-muted-foreground"
        : "text-muted-foreground/70";
  const textClass =
    cell.rating === "strong" ? "font-medium text-foreground" : "text-muted-foreground";
  return (
    <div className="flex items-start gap-2">
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${color}`} />
      <span className={textClass}>{cell.value}</span>
    </div>
  );
}

function Vergleich() {
  return (
    <>
      <PageHero
        eyebrow="Vergleich"
        title="Vier Hersteller von Poolüberdachungen im Vergleich"
        subtitle="Wir stellen Paradiso, Alukov, Aluna und OBRU sachlich gegenüber. Angaben basieren auf öffentlich zugänglichen Herstellerinformationen; für ein Angebot prüfen Sie bitte die aktuellen Details beim jeweiligen Anbieter."
      />

      {/* Provider intro */}
      <section className="container-x mt-12 grid gap-4 md:grid-cols-4">
        {providers.map((p) => (
          <a
            key={p.key}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl text-foreground">{p.label}</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              {p.origin}
            </div>
          </a>
        ))}
      </section>

      {/* Legend */}
      <section className="container-x mt-8">
        <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-mist p-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-accent" /> Deutliche Stärke
          </div>
          <div className="flex items-center gap-2">
            <Minus className="h-4 w-4" /> Marktüblich / vergleichbar
          </div>
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4" /> Zu beachten je nach Anforderung
          </div>
        </div>
      </section>

      {/* Desktop table */}
      <section className="container-x mt-8 hidden md:block">
        <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="w-[24%] px-6 py-5 font-semibold">Kriterium</th>
                {providers.map((p) => (
                  <th key={p.key} className="px-6 py-5 font-semibold">
                    <div>{p.label}</div>
                    <div className="text-[11px] font-normal uppercase tracking-widest text-primary-foreground/60">
                      {p.origin}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.criterion} className={i % 2 === 0 ? "bg-white" : "bg-mist/40"}>
                  <td className="border-t border-border px-6 py-5 align-top">
                    <div className="font-semibold text-foreground">{r.criterion}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{r.description}</div>
                  </td>
                  {providers.map((p) => (
                    <td key={p.key} className="border-t border-border px-6 py-5 align-top">
                      <CellView cell={(r as any)[p.key]} />
                    </td>
                  ))}
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
                <div key={p.key} className="grid grid-cols-[110px_1fr] gap-3 px-4 py-3 text-sm">
                  <div className="font-medium text-foreground">{p.label}</div>
                  <CellView cell={(r as any)[p.key]} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Fazit */}
      <section className="container-x mt-16">
        <div className="rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-soft)] md:p-12">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Unser Fazit
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl">
            Alle vier Hersteller liefern Premium-Qualität – Paradiso setzt sich in einem
            entscheidenden Punkt ab
          </h2>
          <div className="mt-6 grid gap-6 text-muted-foreground md:grid-cols-2 md:text-[15px]">
            <p>
              <strong className="text-foreground">Alukov</strong> überzeugt durch ein sehr
              breites Sortiment mit vielen Bau­formen, <strong className="text-foreground">Aluna</strong>{" "}
              punktet mit klaren Linien und bundesweiter Montage, und{" "}
              <strong className="text-foreground">OBRU</strong> steht für kompromisslose
              Manufaktur-Qualität aus Deutschland. Wer eine klassische Über­dachung mit Boden­schienen
              sucht, ist bei allen dreien gut aufgehoben.
            </p>
            <p>
              <strong className="text-foreground">Paradiso</strong> geht einen anderen Weg:
              Die schienenlose Konstruktion verzichtet auf feste Boden­führungen, vermeidet
              Stolper­kanten und wirkt optisch deutlich ruhiger im Garten. In Kombination mit
              der individuellen Fertigung „Made in Germany" und einer eigenen Werks­ausstellung
              ist Paradiso für uns die überzeugendste Wahl – vor allem für alle, denen Design,
              Barrierefreiheit und Langlebigkeit gleich wichtig sind.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PARADISO_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              Zu Paradiso
              <ExternalLink className="h-4 w-4" />
            </a>
            <span className="text-xs text-muted-foreground">
              Kein Test­urteil – eine redaktionelle Einschätzung anhand öffentlich verfügbarer
              Informationen.
            </span>
          </div>
        </div>
      </section>

      <section className="container-x mt-10">
        <div className="rounded-2xl border border-border bg-mist p-6 text-sm text-muted-foreground md:p-8">
          <strong className="text-foreground">Hinweis zur Methodik:</strong> Der Vergleich
          basiert auf öffentlich zugänglichen Angaben der Hersteller­websites (Stand
          Redaktions­schluss). Preise, Konfigurationen und Garantieleistungen können
          abweichen – bitte holen Sie vor einer Kauf­entscheidung ein individuelles Angebot
          direkt beim Hersteller ein.
        </div>
      </section>

      <CTASection
        title="Persönlich beraten lassen"
        subtitle="Fordern Sie ein unverbindliches Angebot bei Paradiso an oder vergleichen Sie mit weiteren Herstellern."
      />
    </>
  );
}
