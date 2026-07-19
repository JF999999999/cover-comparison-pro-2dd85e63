import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

const TITLE = "Impressum – Poolüberdachung Vergleich";
const DESCRIPTION = "Impressum und rechtliche Angaben von Poolüberdachung Vergleich.";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex,follow" },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <section className="container-x mt-12">
        <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
          <p>
            Die vollständigen Angaben nach § 5 TMG werden vom Betreiber dieser Seite ergänzt.
            Bitte tragen Sie hier Firmenname, Anschrift, vertretungsberechtigte Person,
            Kontaktdaten sowie ggf. Handelsregister- und Umsatzsteuer-ID ein.
          </p>
          <div className="rounded-2xl border border-border bg-mist p-6">
            <p className="text-sm">
              <strong>Hinweis:</strong> Dieser Platzhalter ersetzt keine rechtsverbindliche
              Impressumsangabe. Vor Livegang bitte durch die tatsächlichen Angaben des
              Betreibers ersetzen.
            </p>
          </div>
          <h2 className="text-2xl text-foreground">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte kann keine Gewähr übernommen werden.
            Vergleichsangaben basieren auf öffentlich verfügbaren Informationen zum Zeitpunkt
            der Veröffentlichung.
          </p>
          <h2 className="text-2xl text-foreground">Transparenzhinweis</h2>
          <p>
            Diese Website wird in Zusammenarbeit mit Paradiso betrieben. Links zur offiziellen
            Paradiso Website sind als solche gekennzeichnet.
          </p>
        </div>
      </section>
    </>
  );
}
