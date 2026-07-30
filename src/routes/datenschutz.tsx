import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SITE_URL } from "@/lib/site";

const TITLE = "Datenschutzerklärung – Poolüberdachung Ratgeber";
const DESCRIPTION =
  "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website gemäß DSGVO: Hosting, Server-Logs, Kontaktaufnahme und Betroffenenrechte.";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex,follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/datenschutz` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/datenschutz` }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <section className="container-x mt-12">
        <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-2xl text-foreground">1. Verantwortlicher</h2>
            <p className="mt-3">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              <br />
              Carsten Fels, 77743 Neuried, Deutschland. Kontaktmöglichkeiten finden Sie im
              Impressum.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">2. Allgemeines zur Datenverarbeitung</h2>
            <p className="mt-3">
              Diese Website ist ein reines Informationsangebot. Personenbezogene Daten werden nur
              in dem Umfang verarbeitet, wie es für die Bereitstellung einer funktionsfähigen und
              sicheren Website erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">3. Hosting und Server-Logfiles</h2>
            <p className="mt-3">
              Die Website wird über die Plattform Lovable (Lovable Labs Incorporated) gehostet.
              Beim Aufruf der Seiten verarbeitet der Hosting-Dienstleister automatisch
              Informationen, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit des
              Zugriffs, aufgerufene Seite, übertragene Datenmenge, Referrer-URL sowie Browser- und
              Betriebssysteminformationen.
            </p>
            <p className="mt-3">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in
              der technisch fehlerfreien Bereitstellung und der Sicherheit der Website. Die Daten
              werden nur so lange gespeichert, wie es für diese Zwecke erforderlich ist. Mit dem
              Hosting-Dienstleister besteht eine Vereinbarung zur Auftragsverarbeitung nach Art. 28
              DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">4. Cookies und Tracking</h2>
            <p className="mt-3">
              Diese Website setzt keine Cookies zu Analyse-, Marketing- oder Trackingzwecken ein.
              Es findet keine Webanalyse und kein Nutzer-Tracking statt. Sofern technisch
              notwendige Cookies zum Betrieb der Website erforderlich sind, erfolgt deren Einsatz
              auf Grundlage von § 25 Abs. 2 Nr. 2 TDDDG.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">5. Schriftarten</h2>
            <p className="mt-3">
              Zur einheitlichen Darstellung werden Schriftarten von Google Fonts geladen. Dabei
              wird Ihre IP-Adresse an den Anbieter übermittelt. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse an einer ansprechenden und einheitlichen
              Darstellung).
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">6. Kontaktaufnahme</h2>
            <p className="mt-3">
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage
              und für den Fall von Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. f DSGVO bzw. bei vertragsbezogenen Anfragen Art. 6 Abs. 1 lit. b DSGVO. Die
              Daten werden gelöscht, sobald sie für die Zweckerreichung nicht mehr erforderlich
              sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">7. Externe Links</h2>
            <p className="mt-3">
              Diese Website enthält Links zu externen Websites, insbesondere zur Website von
              Paradiso. Beim Anklicken solcher Links verlassen Sie dieses Angebot; für die
              Datenverarbeitung auf den Zielseiten ist ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">8. Ihre Rechte</h2>
            <p className="mt-3">
              Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16
              DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
              Datenübertragbarkeit (Art. 20 DSGVO) sowie das Recht auf Widerspruch (Art. 21
              DSGVO). Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde
              zu (Art. 77 DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">9. Aktualität</h2>
            <p className="mt-3">
              Diese Datenschutzerklärung wird bei Änderungen der Website oder der Rechtslage
              angepasst.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
