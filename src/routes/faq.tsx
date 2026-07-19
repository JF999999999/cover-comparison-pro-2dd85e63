import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";

const TITLE = "FAQ zu Poolüberdachungen – häufige Fragen & Antworten";
const DESCRIPTION =
  "20+ häufige Fragen und Antworten rund um Poolüberdachungen: Kosten, Material, Genehmigung, Montage, Pflege und mehr.";

const faqs: { q: string; a: string }[] = [
  { q: "Was ist eine Poolüberdachung?", a: "Eine Poolüberdachung ist eine feste oder verschiebbare Konstruktion, die einen Pool überdacht und ihn vor Wetter, Schmutz und Wärmeverlust schützt." },
  { q: "Welche Arten von Poolüberdachungen gibt es?", a: "Man unterscheidet flache, mittelhohe, hohe, begehbare sowie Schiebeüberdachungen. Jede Bauform hat spezifische Vor- und Nachteile." },
  { q: "Aus welchem Material besteht eine hochwertige Überdachung?", a: "Der Rahmen besteht meist aus pulverbeschichtetem Aluminium, die Panels aus UV-beständigem Polycarbonat. Diese Kombination ist langlebig und wartungsarm." },
  { q: "Wie viel kostet eine Poolüberdachung?", a: "Die Preise variieren stark je nach Bauform, Größe und Ausstattung. Für konkrete Zahlen ist ein individuelles Angebot des Herstellers sinnvoll." },
  { q: "Brauche ich eine Baugenehmigung?", a: "Das ist bundeslandabhängig. Flache Modelle sind oft genehmigungsfrei, hohe Konstruktionen häufig genehmigungspflichtig. Wenden Sie sich an Ihre örtliche Bauaufsicht." },
  { q: "Wie lange hält eine Poolüberdachung?", a: "Bei guter Pflege und hochwertiger Fertigung sind 15–25 Jahre und mehr realistisch. Wichtig sind regelmäßige Wartung und Reinigung." },
  { q: "Kann ich bei geschlossener Überdachung schwimmen?", a: "Bei hohen und einigen mittelhohen Modellen ist das problemlos möglich. Bei flachen Modellen muss die Überdachung dazu geöffnet werden." },
  { q: "Verlängert eine Überdachung die Badesaison wirklich?", a: "Ja. Durch den Treibhauseffekt und den Wärmerückhalt wird das Wasser schneller warm und bleibt es länger – oft mehrere Wochen bis Monate zusätzlich." },
  { q: "Wie sicher ist eine Poolüberdachung?", a: "Verschlossene Überdachungen erhöhen die Sicherheit deutlich, insbesondere gegen unbeaufsichtigten Zugang von Kindern und Haustieren." },
  { q: "Ist eine Poolüberdachung sturmsicher?", a: "Hochwertige Konstruktionen aus stabilen Aluminiumprofilen sind für hohe Windlasten ausgelegt. Beachten Sie stets die Angaben des Herstellers." },
  { q: "Wie reinige ich die Panels richtig?", a: "Mit klarem Wasser oder milden Reinigern und einem weichen Tuch. Aggressive Chemikalien und Scheuerschwämme sollten vermieden werden." },
  { q: "Was muss bei den Schienen beachtet werden?", a: "Schienen sollten frei von Laub und Schmutz gehalten werden. Eine jährliche Kontrolle der Rollen sorgt für langen Laufkomfort." },
  { q: "Kann eine Überdachung nachträglich installiert werden?", a: "Ja, viele Modelle lassen sich auch bei bestehenden Pools nachrüsten. Voraussetzung ist eine geeignete Auflagefläche." },
  { q: "Ist die Konstruktion UV-beständig?", a: "Qualitätsprodukte verwenden UV-stabilisiertes Polycarbonat, das langfristig licht- und witterungsbeständig bleibt." },
  { q: "Wie viel Energie spart eine Überdachung?", a: "Die Ersparnis hängt stark von Modell, Nutzung und Standort ab. Deutliche Reduktionen bei Heizung und Verdunstung sind aber typisch." },
  { q: "Beeinträchtigt die Überdachung die Poolreinigung?", a: "Im Gegenteil: Da deutlich weniger Schmutz ins Wasser gelangt, sinkt der Reinigungsaufwand spürbar." },
  { q: "Welche Farben sind erhältlich?", a: "Die Aluminiumprofile sind in verschiedenen RAL-Farben verfügbar. Anthrazit und Weiß gehören zu den beliebtesten Ausführungen." },
  { q: "Kann ich das Modell individuell anpassen?", a: "Ja. Hersteller wie Paradiso bieten Maßanfertigungen und individuelle Konfigurationen an." },
  { q: "Wie lange dauert die Montage?", a: "Je nach Modell und Größe zwischen einem und mehreren Tagen. Ein professioneller Aufbau spart Zeit und stellt eine korrekte Ausrichtung sicher." },
  { q: "Kann die Überdachung im Winter draußen bleiben?", a: "Ja, die meisten Modelle sind ganzjährig einsetzbar. Wichtig ist, Schnee bei entsprechender Last zu räumen." },
  { q: "Wie umweltfreundlich ist eine Poolüberdachung?", a: "Sie reduziert Wasserverdunstung, Chemiebedarf und Heizenergie – und trägt so aktiv zu einem nachhaltigeren Poolbetrieb bei." },
  { q: "Was tun bei Verschleiß oder Beschädigung?", a: "Ersatzteile wie Dichtungen, Rollen und Panels sind bei seriösen Herstellern langfristig verfügbar. Ein guter Service ist hier entscheidend." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="Häufige Fragen"
        title="Antworten auf über 20 Fragen rund um Poolüberdachungen"
        subtitle="Kompakt, verständlich und ehrlich. Sollten Sie eine Frage vermissen, sprechen Sie uns gern an."
      />

      <section className="container-x mt-14">
        <div className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-soft)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-mist"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-foreground md:text-lg">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Ihre Frage nicht dabei?"
        subtitle="Kontaktieren Sie uns oder direkt Paradiso – Sie erhalten schnell eine persönliche Antwort."
      />
    </>
  );
}
