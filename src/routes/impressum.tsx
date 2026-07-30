import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

const TITLE = "Impressum – Poolüberdachung Ratgeber";
const DESCRIPTION = "Angaben gemäß § 5 DDG und Verantwortlichkeit für den Inhalt dieser Website.";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex,follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/impressum` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/impressum` }],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <section className="container-x mt-12">
        <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
          <div>
            <h2 className="text-2xl text-foreground">Angaben gemäß § 5 DDG</h2>
            <p className="mt-3">
              Carsten Fels
              <br />
              77743 Neuried
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Kontakt</h2>
            <p className="mt-3">
              E-Mail:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline-offset-4 hover:underline">
                {CONTACT_EMAIL}
              </a>
              <br />
              Telefonnummer und weitere Kontaktdaten werden vom Betreiber ergänzt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">
              Carsten Fels, 77743 Neuried, Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Hosting</h2>
            <p className="mt-3">
              Diese Website wird über die Plattform Lovable (Lovable Labs Incorporated) gehostet.
              Beim Aufruf der Website werden technisch notwendige Server-Logdaten verarbeitet.
              Näheres dazu finden Sie in der{" "}
              <a href="/datenschutz" className="text-primary underline-offset-4 hover:underline">
                Datenschutzerklärung
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Haftung für Inhalte</h2>
            <p className="mt-3">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Die Inhalte dieser Website wurden mit größter
              Sorgfalt erstellt; für Richtigkeit, Vollständigkeit und Aktualität kann jedoch keine
              Gewähr übernommen werden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Haftung für Links</h2>
            <p className="mt-3">
              Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen
              entfernen wir derartige Links umgehend.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Urheberrecht</h2>
            <p className="mt-3">
              Die durch den Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen
              Urheberrecht. Das verwendete Bildmaterial stammt von Paradiso und wird mit
              Genehmigung verwendet; eine weitere Nutzung ist nicht gestattet.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Verbraucherstreitbeilegung</h2>
            <p className="mt-3">
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Kooperationshinweis</h2>
            <p className="mt-3">
              Diese Website entsteht in Zusammenarbeit mit Paradiso. Links zur Paradiso Website
              sind als solche erkennbar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
