import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { IMAGES, absoluteImageUrl } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

const TITLE = "Über diese Website – Poolüberdachung Ratgeber";
const DESCRIPTION =
  "Ziel, Arbeitsweise und Kooperationshinweis des Informationsportals rund um Poolüberdachungen.";

const crumbs = [
  { label: "Startseite", to: "/" },
  { label: "Über diese Website" },
];

export const Route = createFileRoute("/ueber-diese-website")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/ueber-diese-website` },
      { property: "og:image", content: absoluteImageUrl(IMAGES.fertigung) },
      { name: "twitter:image", content: absoluteImageUrl(IMAGES.fertigung) },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ueber-diese-website` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd(crumbs)),
      },
    ],
  }),
  component: UeberDieseWebsite,
});

function UeberDieseWebsite() {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Über diese Website"
        title="Ein Ratgeber, kein Verkaufsportal"
        subtitle="Diese Website erklärt Technik, Bauformen und Betrieb von Poolüberdachungen – ohne Preisangaben, Rankings oder Bewertungen einzelner Anbieter."
      />

      <section className="container-x mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="space-y-5 text-muted-foreground md:text-lg">
          <h2 className="text-3xl text-foreground md:text-4xl">Anspruch</h2>
          <p>
            Wer sich mit einer Poolüberdachung beschäftigt, findet online viele Angebote, aber
            wenig sachliche Erklärungen. Diese Website schließt diese Lücke: Sie beschreibt, wie
            die Bauformen funktionieren, welche Materialien sich wie verhalten und worauf im
            Betrieb zu achten ist.
          </p>
          <p>
            Alle Inhalte werden nach bestem Wissen erstellt und regelmäßig überarbeitet. Sie
            ersetzen keine individuelle Planung oder Beratung vor Ort.
          </p>
          <h2 className="pt-4 text-3xl text-foreground md:text-4xl">Kooperationshinweis</h2>
          <p>
            Diese Website entsteht in Zusammenarbeit mit Paradiso. Das verwendete Bildmaterial
            stammt von Paradiso und wird mit Genehmigung eingesetzt. Empfehlungen sind als solche
            gekennzeichnet und stehen jeweils am Ende einer Seite – der informierende Teil bleibt
            davon unabhängig.
          </p>
        </div>

        <figure className="overflow-hidden rounded-3xl border border-border bg-mist shadow-[var(--shadow-soft)]">
          <img
            src={IMAGES.fertigung.src}
            alt={IMAGES.fertigung.alt}
            title={IMAGES.fertigung.title}
            width={IMAGES.fertigung.width}
            height={IMAGES.fertigung.height}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="p-4 text-sm text-muted-foreground">
            {IMAGES.fertigung.title}
          </figcaption>
        </figure>
      </section>
    </>
  );
}
