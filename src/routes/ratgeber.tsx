import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";

const TITLE = "Kaufratgeber Poolüberdachung – Auswahl, Preise, Wartung";
const DESCRIPTION =
  "Der große Kaufratgeber für Poolüberdachungen: Material, Bauform, Preise, Genehmigungen, Lebensdauer, Reinigung und Wartung.";

export const Route = createFileRoute("/ratgeber")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/ratgeber" },
    ],
    links: [{ rel: "canonical", href: "/ratgeber" }],
  }),
  component: Ratgeber,
});

const sections = [
  {
    id: "beste",
    title: "Welche Poolüberdachung ist die beste?",
    body: [
      "Die „beste" Poolüberdachung gibt es nicht pauschal – entscheidend sind Ihre individuellen Anforderungen: Größe des Pools, Nutzungsdauer, Gartenlayout, Budget und ästhetische Vorlieben.",
      "Wichtig ist eine Kombination aus hochwertigem Aluminiumprofil, UV-beständigem Polycarbonat, einem langlebigen Schienensystem sowie zuverlässigem Service. Ein Anbieter mit persönlicher Beratung und Erfahrung – wie Paradiso – erleichtert die Wahl deutlich.",
    ],
  },
  {
    id: "flach-vs-hoch",
    title: "Flach oder hoch – was ist besser?",
    body: [
      "Flache Poolüberdachungen sind diskret, optisch zurückhaltend und häufig günstiger. Sie schützen zuverlässig, ermöglichen aber kein Schwimmen im geschlossenen Zustand.",
      "Hohe Modelle wirken wie ein kleiner Wintergarten. Sie erlauben ganzjähriges Baden, sind komfortabler und schützen umfassender – kosten aber mehr und sind stärker im Garten sichtbar.",
      "Als Kompromiss bieten sich mittelhohe Varianten oder Schiebemodelle an, die je nach Wetter geöffnet oder geschlossen werden.",
    ],
  },
  {
    id: "material",
    title: "Aluminium oder Kunststoff?",
    body: [
      "Der Rahmen einer hochwertigen Poolüberdachung besteht in der Regel aus pulverbeschichtetem Aluminium. Aluminium ist leicht, extrem korrosionsbeständig und langlebig – ideal für den Außenbereich.",
      "Als Panels wird meist Polycarbonat eingesetzt: bruchsicher, UV-beständig und lichtdurchlässig. Reine Kunststoff-Konstruktionen sind günstiger, erreichen aber selten die Stabilität und Optik einer Alu-Konstruktion.",
    ],
  },
  {
    id: "kosten",
    title: "Was kostet eine Poolüberdachung?",
    body: [
      "Die Preise variieren stark je nach Bauform, Größe, Ausstattung und Anbieter. Flache Modelle für kleinere Pools starten meist im niedrigen bis mittleren vierstelligen Bereich, hohe oder begehbare Modelle liegen deutlich darüber.",
      "Zusätzlich zu berücksichtigen sind Montage, Fundament, ggf. Baugenehmigung sowie individuelle Ausstattungen wie Schiebetüren, Farben oder Sonderprofile. Für eine belastbare Kalkulation empfiehlt sich immer ein individuelles Angebot.",
    ],
  },
  {
    id: "genehmigung",
    title: "Welche Genehmigungen sind notwendig?",
    body: [
      "Ob eine Baugenehmigung erforderlich ist, hängt vom jeweiligen Bundesland und Ihrer Gemeinde ab. Flache Modelle sind in vielen Regionen genehmigungsfrei, hohe oder feststehende Konstruktionen häufig genehmigungspflichtig.",
      "Vor dem Kauf sollten Sie sich immer bei Ihrer örtlichen Bauaufsicht informieren. Ein guter Anbieter unterstützt Sie mit Plänen und Datenblättern für den Antrag.",
    ],
  },
  {
    id: "lebensdauer",
    title: "Wie lange hält eine Poolüberdachung?",
    body: [
      "Eine sorgfältig gefertigte Poolüberdachung aus Aluminium und Polycarbonat kann bei guter Pflege problemlos 15 bis 25 Jahre halten – teilweise sogar länger.",
      "Entscheidend sind Materialqualität, ordnungsgemäße Montage sowie regelmäßige Reinigung der Schienen und Rollen. Verschleißteile wie Dichtungen sollten alle paar Jahre kontrolliert und bei Bedarf ersetzt werden.",
    ],
  },
  {
    id: "wartung",
    title: "Reinigung und Wartung",
    body: [
      "Für eine lange Lebensdauer sollten Sie Panels und Rahmen regelmäßig mit klarem Wasser oder mildem Reinigungsmittel säubern. Aggressive Chemikalien und Scheuerschwämme sind zu vermeiden.",
      "Schienen und bewegliche Teile profitieren von einer jährlichen Kontrolle: Schmutz entfernen, Rollen prüfen, ggf. leicht schmieren. Vor dem Winter empfiehlt sich eine gründliche Reinigung.",
    ],
  },
];

function Ratgeber() {
  return (
    <>
      <PageHero
        eyebrow="Kaufratgeber"
        title="Poolüberdachung kaufen – alles, was Sie wissen müssen"
        subtitle="Von der Auswahl bis zur Pflege: Der ausführliche Ratgeber für alle, die eine hochwertige Poolüberdachung planen."
      />

      <section className="container-x mt-14 grid gap-12 lg:grid-cols-[220px_1fr]">
        {/* TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-border bg-white p-5">
            <div className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Inhalt
            </div>
            <ul className="space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <article className="min-w-0 space-y-16">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">
                Kapitel {String(i + 1).padStart(2, "0")}
              </div>
              <h2 className="text-3xl md:text-4xl">{s.title}</h2>
              <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-muted-foreground">
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </section>

      <CTASection />
    </>
  );
}
