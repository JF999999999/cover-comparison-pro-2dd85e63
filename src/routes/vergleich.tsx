import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ComponentType } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Droplets,
  Eye,
  Info,
  Layers,
  Leaf,
  LifeBuoy,
  Package,
  Recycle,
  Shield,
  ShieldCheck,
  Sparkles,
  Sun,
  ThermometerSun,
  Timer,
  TrendingUp,
  Wrench,
  X,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import heroPool from "@/assets/hero-pool.jpg";

const TITLE = "Poolüberdachungen Vergleich – Material, Qualität & Langlebigkeit";
const DESCRIPTION =
  "Unabhängiger Premium-Vergleich von Poolüberdachungen: Material, Kratzfestigkeit, UV-Beständigkeit, Reinigung, Lebensdauer, Garantie und Wertbeständigkeit im Detail.";

export const Route = createFileRoute("/vergleich")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/vergleich" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/vergleich" }],
  }),
  component: Vergleich,
});

/* ------------------------------------------------------------------ */
/* Vergleichstabelle                                                   */
/* ------------------------------------------------------------------ */

type Verdict = "glass" | "plastic" | "neutral";

type Criterion = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  tooltip: string;
  glass: string;
  plastic: string;
  winner: Verdict;
};

const criteria: Criterion[] = [
  {
    icon: Layers,
    label: "Material",
    tooltip: "Grundmaterial der Überdachungsfelder.",
    glass: "Echtglas (ESG / VSG), Alu-Profil",
    plastic: "Polycarbonat-Stegplatten, Alu-Profil",
    winner: "neutral",
  },
  {
    icon: Shield,
    label: "Kratzfestigkeit",
    tooltip: "Widerstandsfähigkeit gegen mechanische Beschädigung der Oberfläche.",
    glass: "Sehr hoch – unempfindlich im Alltag",
    plastic: "Gering – vorsichtige Reinigung nötig",
    winner: "glass",
  },
  {
    icon: Sun,
    label: "UV-Beständigkeit",
    tooltip: "Verhalten der Oberfläche unter dauerhafter Sonneneinstrahlung.",
    glass: "Vergilbt nicht, dauerhaft klar",
    plastic: "UV-Schutzschicht altert – Vergilbung möglich",
    winner: "glass",
  },
  {
    icon: Droplets,
    label: "Reinigung",
    tooltip: "Möglichkeiten und Aufwand der Reinigung.",
    glass: "Glasreiniger, Mikrofaser, Harz entfernbar",
    plastic: "Nur Wasser empfohlen, keine scharfen Mittel",
    winner: "glass",
  },
  {
    icon: Eye,
    label: "Transparenz",
    tooltip: "Optische Klarheit und Durchsicht.",
    glass: "Kristallklar, verzerrungsfrei",
    plastic: "Leicht milchig, Stegstruktur sichtbar",
    winner: "glass",
  },
  {
    icon: Timer,
    label: "Lebensdauer",
    tooltip: "Erwartbare Nutzungsdauer bei fachgerechter Montage.",
    glass: "30+ Jahre realistisch",
    plastic: "10–15 Jahre je nach Belastung",
    winner: "glass",
  },
  {
    icon: ThermometerSun,
    label: "Hagelbeständigkeit",
    tooltip: "Verhalten bei starkem Hagelschlag.",
    glass: "ESG/VSG sehr stabil, splittersicher",
    plastic: "Elastisch, kann aber weiß werden",
    winner: "neutral",
  },
  {
    icon: Wrench,
    label: "Wartung",
    tooltip: "Regelmäßiger Pflege- und Wartungsbedarf.",
    glass: "Gering – Dichtungen & Laufwerk prüfen",
    plastic: "Mittel – Oberfläche empfindlicher",
    winner: "glass",
  },
  {
    icon: Package,
    label: "Ersatzteile",
    tooltip: "Verfügbarkeit von Ersatzteilen über Jahre.",
    glass: "Bei Premium-Herstellern langfristig verfügbar",
    plastic: "Herstellerabhängig, Stegplatten austauschbar",
    winner: "neutral",
  },
  {
    icon: ShieldCheck,
    label: "Garantie",
    tooltip: "Übliche Herstellergarantien im Premium-Segment.",
    glass: "Häufig 10+ Jahre auf Konstruktion",
    plastic: "Meist 2–10 Jahre, oft mit Einschränkungen",
    winner: "glass",
  },
  {
    icon: TrendingUp,
    label: "Wertbeständigkeit",
    tooltip: "Werterhalt über die Nutzungsdauer.",
    glass: "Hoch – zeitloses Design, klare Optik",
    plastic: "Nimmt mit sichtbarer Alterung ab",
    winner: "glass",
  },
  {
    icon: Recycle,
    label: "Nachhaltigkeit",
    tooltip: "Recyclingfähigkeit und Ökobilanz.",
    glass: "Glas & Alu vollständig recycelbar",
    plastic: "Recycling eingeschränkt möglich",
    winner: "glass",
  },
];

function VerdictPill({ v }: { v: Verdict }) {
  if (v === "neutral")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
        Vergleichbar
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
      <Check className="h-3 w-3" /> Vorteil {v === "glass" ? "Glas" : "Kunststoff"}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Reinigung                                                           */
/* ------------------------------------------------------------------ */

const glassCleaning = [
  "Reinigung mit klassischem Glasreiniger möglich",
  "Mikrofasertücher verwendbar – keine Kratzer",
  "Harz und Baumsäfte lassen sich entfernen",
  "Saharastaub und Pollen leicht abwaschbar",
  "Dauerhaft klare Oberfläche über Jahrzehnte",
];

const plasticCleaning = [
  "Reinigung nur mit Wasser empfohlen",
  "Empfindlicher gegen Kratzer und Wischspuren",
  "Beschädigte UV-Schicht kann weiße Stellen verursachen",
  "Hartnäckige Verschmutzungen schwieriger zu lösen",
  "Regelmäßige Kontrolle der Oberfläche sinnvoll",
];

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */

const timeline = [
  {
    year: "Jahr 1",
    glass: "Kristallklar, verzerrungsfrei, volle Lichtdurchlässigkeit.",
    plastic: "Klar, leichte Stegstruktur, volle UV-Schutzschicht aktiv.",
  },
  {
    year: "Jahr 5",
    glass: "Optisch unverändert. Dichtungen erstmals prüfen.",
    plastic: "Erste feine Kratzer, UV-Schutz beginnt zu altern.",
  },
  {
    year: "Jahr 10",
    glass: "Weiterhin klar. Meist noch innerhalb der Garantie.",
    plastic: "Beginnende Vergilbung möglich, Reinigung wird aufwendiger.",
  },
  {
    year: "Jahr 15",
    glass: "Vollständig klar bei gepflegten Anlagen.",
    plastic: "Sichtbare Alterung. Austausch einzelner Felder häufig nötig.",
  },
  {
    year: "Jahr 20+",
    glass: "Nach 20+ Jahren häufig noch original – hohe Wertbeständigkeit.",
    plastic: "Rückgang der Transparenz. Ersatz meist wirtschaftlich sinnvoll.",
  },
];

/* ------------------------------------------------------------------ */
/* Expertenwissen                                                      */
/* ------------------------------------------------------------------ */

const proTips = [
  {
    icon: Layers,
    title: "Materialqualität",
    text: "Nur ESG-/VSG-Sicherheitsglas oder markengeprüftes Polycarbonat verwenden. Aluminium sollte pulverbeschichtet und salzwasserbeständig sein.",
  },
  {
    icon: Wrench,
    title: "Laufschienen",
    text: "Präzise gefertigte Laufwerke aus Edelstahl entscheiden über Laufruhe und Langlebigkeit. Schienenlose Systeme vermeiden Stolperkanten.",
  },
  {
    icon: LifeBuoy,
    title: "Dichtungen",
    text: "Hochwertige EPDM-Dichtungen sind UV-stabil und behalten über Jahrzehnte ihre Elastizität – ein häufig unterschätztes Qualitätsmerkmal.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie",
    text: "Achten Sie auf klar formulierte Garantien mit unterscheidbarer Laufzeit für Konstruktion, Beschichtung und Verglasung.",
  },
  {
    icon: Package,
    title: "Ersatzteile",
    text: "Fragen Sie explizit nach der Ersatzteil-Verfügbarkeit für 15–20 Jahre. Einzelfelder, Rollen und Dichtungen müssen nachbestellbar sein.",
  },
  {
    icon: Timer,
    title: "Wartungsaufwand",
    text: "Ein jährlicher Sichtcheck, gelegentliches Nachfetten der Laufwerke und Kontrolle der Dichtungen reichen bei Premium-Anlagen aus.",
  },
  {
    icon: Droplets,
    title: "Reinigung",
    text: "Materialgerechte Reinigung schützt die Oberfläche. Glas verträgt fast alles, Polycarbonat nur milde Mittel und weiche Tücher.",
  },
  {
    icon: TrendingUp,
    title: "Wertbeständigkeit",
    text: "Eine durchdachte Konstruktion mit langlebigen Materialien behält Optik und Funktion – und damit ihren Marktwert – über Jahrzehnte.",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "Ist Glas oder Kunststoff die bessere Wahl?",
    a: "Für den langfristigen Einsatz spricht sehr viel für Echtglas: höhere Kratzfestigkeit, keine Vergilbung, bessere Reinigung und deutlich längere Lebensdauer. Kunststoff kann bei kleineren Budgets oder temporären Lösungen sinnvoll sein.",
  },
  {
    q: "Wie lange hält eine hochwertige Poolüberdachung?",
    a: "Eine fachgerecht montierte Anlage mit Echtglas und pulverbeschichtetem Aluminium erreicht regelmäßig 25 bis 30 Jahre und mehr.",
  },
  {
    q: "Wie kratzempfindlich ist Polycarbonat?",
    a: "Polycarbonat ist deutlich weicher als Glas. Sand, harte Tücher oder scharfe Reiniger können bleibende Spuren hinterlassen.",
  },
  {
    q: "Vergilbt Kunststoff wirklich?",
    a: "Ohne intakte UV-Schutzschicht ja. Moderne Platten sind co-extrudiert, dennoch altert die Schutzschicht mit den Jahren sichtbar.",
  },
  {
    q: "Wie reinige ich eine Glasüberdachung richtig?",
    a: "Mit klarem Wasser und Mikrofasertuch, bei Bedarf mit haushaltsüblichem Glasreiniger. Harz und Baumsaft lassen sich mit milden Lösungsmitteln entfernen.",
  },
  {
    q: "Ist eine Poolüberdachung hagelsicher?",
    a: "ESG/VSG-Glas hält üblichen Hagelschlägen sicher stand. Polycarbonat ist elastisch, kann bei starkem Hagel aber weiße Stellen entwickeln.",
  },
  {
    q: "Welche Garantie ist üblich?",
    a: "Premium-Hersteller geben oft 10 Jahre und mehr auf die Konstruktion, teils separate Laufzeiten für Verglasung und Beschichtung.",
  },
  {
    q: "Wie hoch ist der Wartungsaufwand?",
    a: "Ein jährlicher Sichtcheck, Reinigung der Laufwerke und Kontrolle der Dichtungen reichen in der Regel aus.",
  },
  {
    q: "Bekomme ich in 10 Jahren noch Ersatzteile?",
    a: "Bei etablierten Herstellern ja. Lassen Sie sich die Ersatzteil-Verfügbarkeit vor dem Kauf schriftlich bestätigen.",
  },
  {
    q: "Sind Bodenschienen zwingend nötig?",
    a: "Nein. Es gibt schienenlose Konstruktionen, die Stolperkanten vermeiden und optisch ruhiger wirken – bei entsprechend präziser Verankerung.",
  },
  {
    q: "Erhöht eine Überdachung die Wassertemperatur?",
    a: "Ja. Je nach Bauhöhe und Klima sind 5–10 °C Erwärmung realistisch – der Solareffekt reduziert außerdem Heizkosten.",
  },
  {
    q: "Brauche ich eine Baugenehmigung?",
    a: "Das hängt von Bundesland, Höhe und Grundstück ab. Klären Sie das vor dem Kauf mit dem Bauamt oder dem Hersteller.",
  },
  {
    q: "Wie wirkt sich eine Überdachung auf den Immobilienwert aus?",
    a: "Eine hochwertige Anlage steigert die Attraktivität der Immobilie und wird von Käufern als werthaltige Ausstattung wahrgenommen.",
  },
  {
    q: "Ist die Reinigung von Polycarbonat wirklich so heikel?",
    a: "Ja. Alkoholhaltige Reiniger, Scheuermilch oder harte Bürsten können die Oberfläche beschädigen und den UV-Schutz angreifen.",
  },
  {
    q: "Was passiert im Winter mit der Überdachung?",
    a: "Alle Premium-Modelle sind winterfest. Schnee sollte ab bestimmten Lasten entfernt werden – die Hersteller geben konkrete Werte vor.",
  },
  {
    q: "Wie nachhaltig ist eine Poolüberdachung?",
    a: "Glas und Aluminium lassen sich vollständig recyceln. In der Nutzung spart die Überdachung Energie, Wasser und Chemie.",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

function Vergleich() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <TooltipProvider delayDuration={150}>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroPool}
            alt="Hochwertige Poolüberdachung aus Glas und Aluminium über einem modernen Pool"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/75" />
        </div>

        <div className="container-x flex min-h-[80vh] flex-col justify-end pb-20 pt-32 text-white md:min-h-[86vh] md:pb-28">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/90 backdrop-blur fade-up">
            <Sparkles className="h-3.5 w-3.5" /> Unabhängiger Qualitätsvergleich
          </span>
          <h1 className="max-w-4xl text-balance text-4xl leading-[1.02] md:text-7xl fade-up">
            Welche Poolüberdachung passt wirklich zu Ihnen?
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl fade-up">
            Ein unabhängiger Vergleich wichtiger Qualitätsmerkmale.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 fade-up">
            <a
              href="#vergleich"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5"
            >
              Jetzt vergleichen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#fazit"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Direkt zum Fazit
            </a>
          </div>
        </div>
      </section>

      {/* VERGLEICHSTABELLE */}
      <section id="vergleich" className="container-x scroll-mt-24 py-20 md:py-28">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Qualitätsvergleich
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl">Glas vs. Kunststoff im Detail</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Zwölf zentrale Kriterien, die den Alltag mit einer Poolüberdachung über Jahrzehnte
            prägen. Hovern Sie über die Icons für eine kurze Erklärung.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden overflow-hidden rounded-3xl border border-border bg-white/70 shadow-[var(--shadow-elegant)] backdrop-blur md:block">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_auto] items-center gap-4 border-b border-border bg-gradient-to-br from-white to-mist px-8 py-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            <div>Kriterium</div>
            <div className="text-accent">Glas</div>
            <div>Kunststoff</div>
            <div className="text-right">Vorteil</div>
          </div>
          {criteria.map((c, i) => (
            <div
              key={c.label}
              className={`grid grid-cols-[1.4fr_1fr_1fr_auto] items-start gap-4 px-8 py-6 transition-colors hover:bg-mist/50 ${
                i !== criteria.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/5 text-primary">
                  <c.icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-foreground">
                    {c.label}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          type="button"
                          aria-label={`Info zu ${c.label}`}
                          className="text-muted-foreground/70 transition-colors hover:text-primary"
                        >
                          <Info className="h-3.5 w-3.5" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">{c.tooltip}</TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className="text-sm text-foreground/90">{c.glass}</div>
              <div className="text-sm text-muted-foreground">{c.plastic}</div>
              <div className="flex justify-end">
                <VerdictPill v={c.winner} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid gap-4 md:hidden">
          {criteria.map((c) => (
            <div
              key={c.label}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center justify-between gap-3 border-b border-border bg-gradient-to-br from-white to-mist px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/5 text-primary">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-foreground">{c.label}</span>
                </div>
                <VerdictPill v={c.winner} />
              </div>
              <div className="grid divide-y divide-border text-sm">
                <div className="grid grid-cols-[80px_1fr] gap-3 px-4 py-3">
                  <span className="font-medium text-accent">Glas</span>
                  <span className="text-foreground/90">{c.glass}</span>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-3 px-4 py-3">
                  <span className="font-medium text-muted-foreground">Kunststoff</span>
                  <span className="text-muted-foreground">{c.plastic}</span>
                </div>
                <div className="px-4 py-3 text-xs text-muted-foreground">{c.tooltip}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REINIGUNG */}
      <section className="container-x py-16 md:py-24">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Pflege im Alltag
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl">Reinigung – der unterschätzte Faktor</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Kaum ein Merkmal wirkt sich so direkt auf den Alltag aus wie die Reinigung. Beide
            Materialien stellen sehr unterschiedliche Anforderungen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Glas */}
          <div className="group relative overflow-hidden rounded-3xl border border-accent/20 bg-white p-8 shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-1 md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-70" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Droplets className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-accent">Empfohlen</div>
                  <h3 className="text-2xl font-semibold">Glas</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {glassCleaning.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-foreground/90 md:text-[15px]">
                    <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kunststoff */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-muted-foreground/10 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-muted text-muted-foreground">
                  <Droplets className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Zu beachten
                  </div>
                  <h3 className="text-2xl font-semibold">Kunststoff</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {plasticCleaning.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-muted-foreground md:text-[15px]">
                    <X className="mt-0.5 h-4.5 w-4.5 shrink-0 text-muted-foreground/70" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UV / ALTERUNG TIMELINE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-mist to-white py-20 md:py-28">
        <div className="container-x">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              UV & Alterung
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl">Wie sich Materialien über Jahre verhalten</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Eine realistische Einschätzung, wie Glas und Polycarbonat unter freiem Himmel altern
              – von der Erstinstallation bis nach 20 Jahren im Einsatz.
            </p>
          </div>

          <div className="relative">
            {/* vertikale Linie */}
            <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:left-1/2 md:block" />

            <ol className="space-y-8 md:space-y-14">
              {timeline.map((t, i) => (
                <li
                  key={t.year}
                  className={`relative grid gap-6 md:grid-cols-2 md:gap-14 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""
                  }`}
                >
                  {/* Punkt */}
                  <span className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-white md:left-1/2 md:block" />

                  <div className={`${i % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
                      {t.year}
                    </div>
                  </div>

                  <div
                    className={`grid gap-4 sm:grid-cols-2 ${
                      i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                    }`}
                  >
                    <div className="rounded-2xl border border-accent/15 bg-white p-5 shadow-[var(--shadow-soft)]">
                      <div className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
                        Glas
                      </div>
                      <p className="text-sm text-foreground/90">{t.glass}</p>
                    </div>
                    <div className="rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-soft)]">
                      <div className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        Kunststoff
                      </div>
                      <p className="text-sm text-muted-foreground">{t.plastic}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* EXPERTENWISSEN */}
      <section className="container-x py-20 md:py-28">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Expertenwissen
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl">Worauf Profis beim Kauf achten</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Acht Kriterien, die im Fachhandel und in der Planung den Unterschied zwischen einer
            durchschnittlichen und einer exzellenten Poolüberdachung machen.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proTips.map((t) => (
            <div
              key={t.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-70" />
              <div className="relative">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mist/50 py-20 md:py-28">
        <div className="container-x">
          <div className="mb-12 max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Häufige Fragen
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl">Antworten aus der Praxis</h2>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-white/70 shadow-[var(--shadow-elegant)] backdrop-blur">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className={i !== 0 ? "border-t border-border" : ""}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-mist/60 md:px-8 md:py-6"
                  >
                    <span className="text-base font-medium text-foreground md:text-lg">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        open ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:px-8 md:pb-8 md:text-[15px]">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAZIT */}
      <section id="fazit" className="container-x scroll-mt-24 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-white via-white to-mist p-8 shadow-[var(--shadow-elegant)] md:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
              <Leaf className="h-3.5 w-3.5" /> Fazit
            </div>
            <h2 className="max-w-3xl text-3xl md:text-5xl">
              Langfristige Qualität zahlt sich in fast allen Fällen aus
            </h2>

            <div className="mt-8 grid gap-6 text-muted-foreground md:grid-cols-2 md:text-[15px]">
              <p>
                Wer eine Poolüberdachung als langfristige Investition betrachtet, kommt an
                Echtglas und einer sauber verarbeiteten Aluminiumkonstruktion kaum vorbei.
                Kratzfestigkeit, Transparenz und UV-Beständigkeit bleiben über Jahrzehnte
                stabil – bei entsprechend geringem Pflegeaufwand.
              </p>
              <p>
                Ebenso wichtig wie das Material sind eine belastbare Ersatzteilversorgung und
                nachvollziehbare Garantien. Beides senkt die Gesamtkosten über die Nutzungsdauer
                spürbar und macht hochwertige Anlagen häufig zur wirtschaftlicheren Lösung –
                unabhängig vom Hersteller.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Layers, label: "Echtglas & Alu-Konstruktion" },
                { icon: Package, label: "Verfügbare Ersatzteile" },
                { icon: ShieldCheck, label: "Lange, klare Garantien" },
                { icon: TrendingUp, label: "Nachhaltiger Werterhalt" },
              ].map((k) => (
                <div
                  key={k.label}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm text-foreground backdrop-blur"
                >
                  <k.icon className="h-4.5 w-4.5 text-accent" />
                  {k.label}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/modelle"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
              >
                Passendes Modell finden
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/ratgeber"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-mist"
              >
                Zum ausführlichen Kaufratgeber
              </Link>
              <span className="text-xs text-muted-foreground">
                Redaktionelle Einschätzung – kein Testurteil.
              </span>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
