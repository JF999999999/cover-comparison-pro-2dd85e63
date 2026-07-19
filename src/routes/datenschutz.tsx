import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

const TITLE = "Datenschutz – Poolüberdachung Vergleich";
const DESCRIPTION = "Informationen zum Datenschutz auf Poolüberdachung Vergleich.";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex,follow" },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <section className="container-x mt-12">
        <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website verarbeitet
            personenbezogene Daten ausschließlich im Rahmen der geltenden gesetzlichen
            Bestimmungen (DSGVO, BDSG, TTDSG).
          </p>
          <h2 className="text-2xl text-foreground">Verarbeitung von Daten</h2>
          <p>
            Beim Besuch dieser Website werden technisch notwendige Daten (z. B. IP-Adresse,
            Zeitpunkt des Zugriffs, aufgerufene Seiten) verarbeitet. Diese Daten dienen der
            Bereitstellung und Sicherheit der Website.
          </p>
          <h2 className="text-2xl text-foreground">Externe Links</h2>
          <p>
            Diese Website enthält Links zur offiziellen Paradiso Website. Für Inhalte
            externer Websites sind ausschließlich deren Betreiber verantwortlich.
          </p>
          <h2 className="text-2xl text-foreground">Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
            der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich hierfür
            an die im Impressum genannte Kontaktadresse.
          </p>
          <div className="rounded-2xl border border-border bg-mist p-6 text-sm">
            <strong className="text-foreground">Hinweis:</strong> Dies ist ein Basistext. Vor
            Livegang bitte durch eine vollständige, auf den konkreten Einsatz angepasste
            Datenschutzerklärung ersetzen.
          </div>
        </div>
      </section>
    </>
  );
}
