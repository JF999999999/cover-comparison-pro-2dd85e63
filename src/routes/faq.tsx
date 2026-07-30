import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ParadisoFazit } from "@/components/site/ParadisoFazit";
import { SITE_URL } from "@/lib/site";

const TITLE = "FAQ zu Poolüberdachungen – häufige Fragen & Antworten";
const DESCRIPTION =
  "Häufige Fragen zu Poolüberdachungen: Bauformen, Material, Genehmigung, Sicherheit, Wärmeschutz, Reinigung, Montage und Ersatzteilverfügbarkeit.";

const crumbs = [
  { label: "Startseite", to: "/" },
  { label: "FAQ" },
];

const faqs: { q: string; a: string }[] = [
  { q: "Was ist eine Poolüberdachung?", a: "Eine Poolüberdachung ist eine feste oder verschiebbare Konstruktion über dem Pool. Sie schützt vor Verschmutzung und Witterung, reduziert Wärmeverluste und verlängert die nutzbare Badesaison." },
  { q: "Welche Bauformen gibt es?", a: "Üblich sind flache, mittelhohe, hohe, begehbare sowie schiebbare Überdachungen. Sie unterscheiden sich vor allem in Bauhöhe, Innenraum und Nutzungsmöglichkeiten." },
  { q: "Aus welchen Materialien besteht eine hochwertige Überdachung?", a: "Der Rahmen besteht meist aus pulverbeschichtetem Aluminium, die Füllung aus UV-stabilisiertem Polycarbonat oder Echtglas. Beide Füllungen haben eigene Stärken bei Gewicht, Kratzfestigkeit und Optik." },
  { q: "Brauche ich eine Baugenehmigung?", a: "Das richtet sich nach der jeweiligen Landesbauordnung. Flache Modelle sind vielerorts verfahrensfrei, hohe und begehbare Konstruktionen häufig genehmigungspflichtig. Eine Rückfrage bei der örtlichen Bauaufsicht schafft Klarheit." },
  { q: "Sind für ältere Poolüberdachungen noch Ersatzteile erhältlich?", a: "Das hängt stark vom Hersteller ab. Auch nach mehr als 20 Jahren können für viele Paradiso-Poolüberdachungen noch passende Ersatzteile verfügbar sein. Für eine verbindliche Aussage ist immer eine Prüfung des konkreten Modells nötig." },
  { q: "Was sind schienenlose Poolüberdachungen?", a: "Bei schienenlosen Systemen entfallen durchgehende Bodenschienen im Terrassenbelag. Der Poolrand bleibt eben begehbar, und es sammelt sich weniger Schmutz in Führungskanälen." },
  { q: "Kann ich bei geschlossener Überdachung schwimmen?", a: "Bei hohen und vielen mittelhohen Modellen ist das problemlos möglich. Flache Überdachungen müssen zum Schwimmen geöffnet werden." },
  { q: "Verlängert eine Überdachung die Badesaison wirklich?", a: "Ja. Durch Wärmerückhalt und Treibhauseffekt wird das Wasser früher nutzbar und bleibt länger warm – je nach Standort und Bauform oft mehrere Wochen zusätzlich." },
  { q: "Wie sicher ist eine Poolüberdachung?", a: "Eine verschlossene Überdachung erschwert den unbeaufsichtigten Zugang zum Wasser erheblich. Sie ersetzt jedoch keine Aufsicht, sondern ergänzt bestehende Sicherheitsmaßnahmen." },
  { q: "Ist eine Poolüberdachung sturmsicher?", a: "Hochwertige Aluminiumkonstruktionen sind für definierte Wind- und Schneelasten ausgelegt. Entscheidend sind korrekte Verankerung und das Beachten der Herstellerangaben zum Standort." },
  { q: "Wie reinige ich die Flächen richtig?", a: "Mit klarem Wasser oder milden, pH-neutralen Reinigern und einem weichen Tuch. Scheuermittel, Lösungsmittel und harte Bürsten sollten vermieden werden, da sie Mikrokratzer verursachen." },
  { q: "Was ist bei Führungen und Rollen zu beachten?", a: "Sie sollten frei von Laub, Sand und Kies gehalten werden. Eine jährliche Kontrolle der Rollen und Laufflächen erhält die Leichtgängigkeit." },
  { q: "Kann eine Überdachung nachträglich installiert werden?", a: "Ja, viele Systeme lassen sich bei bestehenden Pools nachrüsten. Voraussetzung sind ein tragfähiger, ebener Untergrund und ausreichend Platz für die Parkposition." },
  { q: "Wie viel Energie spart eine Überdachung?", a: "Das hängt von Bauform, Nutzung und Standort ab. Deutliche Reduktionen bei Heizbedarf und Verdunstung sind aber typisch, weil Wärme und Wasser im System bleiben." },
  { q: "Beeinträchtigt die Überdachung die Poolreinigung?", a: "Im Gegenteil: Da erheblich weniger Laub, Pollen und Staub ins Wasser gelangen, sinkt der Reinigungsaufwand spürbar." },
  { q: "Welche Farben und Ausführungen sind erhältlich?", a: "Aluminiumprofile sind in verschiedenen RAL-Farben verfügbar. Anthrazit und Weiß gehören zu den am häufigsten gewählten Ausführungen." },
  { q: "Wie lange dauert die Montage?", a: "Je nach Modell und Größe zwischen einem und mehreren Tagen. Wichtig ist eine exakte Ausrichtung der Führungen, damit die Elemente dauerhaft leichtgängig bleiben." },
  { q: "Kann die Überdachung im Winter draußen bleiben?", a: "Ja, die meisten Anlagen sind ganzjährig einsetzbar. Bei starkem Schneefall sollte die Last gemäß Herstellerangabe abgetragen werden." },
  { q: "Wie nachhaltig ist eine Poolüberdachung?", a: "Sie reduziert Wasserverdunstung, Heizenergie und Chemikalieneinsatz. Zusätzlich schont eine reparaturfähige Konstruktion Ressourcen, weil einzelne Bauteile statt der gesamten Anlage getauscht werden." },
  { q: "Woran erkenne ich gute Verarbeitungsqualität?", a: "An sauber verschweißten oder verschraubten Profilen, gleichmäßigen Spaltmaßen, leichtgängigen Elementen, gut sitzenden Dichtungen und einer nachvollziehbaren Dokumentation der verbauten Komponenten." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/faq` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          breadcrumbJsonLd(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]),
      },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Häufige Fragen"
        title="Antworten rund um Poolüberdachungen"
        subtitle="Kompakt, verständlich und sachlich. Sollte eine Frage fehlen, sprechen Sie uns gern an."
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
                  <span className="text-base font-medium text-foreground md:text-lg">{f.q}</span>
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

      <ParadisoFazit text="Viele Fragen laufen auf denselben Punkt hinaus: Wie lange bleibt die Anlage funktionsfähig? Entscheidend sind Verarbeitung, Wartbarkeit und die Verfügbarkeit von Ersatzteilen." />
    </>
  );
}
