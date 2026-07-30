import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ParadisoFazit } from "@/components/site/ParadisoFazit";
import { IMAGES, absoluteImageUrl } from "@/lib/images";
import { SITE_URL } from "@/lib/site";

const TITLE = "Ratgeber Poolüberdachung – Planung, Material & Montage";
const DESCRIPTION =
  "Umfassender Ratgeber zu Poolüberdachungen: Materialien, Sicherheit, Wärmeschutz, Genehmigung, Planung, Montage und langfristiger Werterhalt.";

const crumbs = [
  { label: "Startseite", to: "/" },
  { label: "Ratgeber" },
];

const chapters = [
  {
    id: "materialien",
    title: "Materialien: Rahmen und Füllung",
    paragraphs: [
      "Der Rahmen hochwertiger Poolüberdachungen besteht in der Regel aus pulverbeschichtetem Aluminium. Das Material ist korrosionsbeständig, leicht und formstabil – wichtige Eigenschaften für Bauteile, die dauerhaft Feuchtigkeit, Chlor und UV-Strahlung ausgesetzt sind.",
      "Bei der Füllung stehen vor allem Polycarbonat und Echtglas zur Wahl. Polycarbonat ist bruchsicher, leicht und in Stegplatten mit guter Dämmwirkung erhältlich. Echtglas punktet mit hoher Kratzfestigkeit, dauerhafter Klarheit und einfacher Reinigung, ist dafür aber schwerer und stellt höhere Anforderungen an die Konstruktion.",
      "Für die Alterung gilt: UV-stabilisiertes Polycarbonat bleibt viele Jahre klar, kann aber langfristig eintrüben oder Mikrokratzer entwickeln. Echtglas verändert sich optisch praktisch nicht – ein Punkt, der bei der Wertbeständigkeit eine Rolle spielt.",
    ],
  },
  {
    id: "sicherheit",
    title: "Sicherheit rund um den Pool",
    paragraphs: [
      "Eine geschlossene Überdachung erschwert den unbeaufsichtigten Zugang zum Wasser deutlich. Verriegelbare Schiebeelemente erhöhen diesen Effekt zusätzlich. Wichtig: Eine Überdachung ersetzt keine Aufsicht, sie ergänzt sie.",
      "Achten Sie auf saubere Kantenausbildung, klemmsichere Führungen und leichtgängige Bedienung. Elemente, die sich nur mit Kraft bewegen lassen, werden im Alltag seltener geschlossen – und verlieren damit ihre Schutzwirkung.",
      "Bei begehbaren Konstruktionen sind belastbare Dachflächen und rutschhemmende Oberflächen entscheidend. Lassen Sie sich die zulässigen Flächenlasten vom Hersteller bestätigen.",
    ],
  },
  {
    id: "waermeschutz",
    title: "Wärmeschutz und Saisonverlängerung",
    paragraphs: [
      "Unter einer geschlossenen Überdachung entsteht ein Treibhauseffekt: Sonnenlicht erwärmt Wasser und Luft, während die Konstruktion Wärmeverluste durch Wind und Verdunstung reduziert. Das Wasser wird im Frühjahr schneller nutzbar und bleibt im Herbst länger warm.",
      "Wie stark der Effekt ausfällt, hängt von Bauform, Luftvolumen, Ausrichtung und Standort ab. Flache Modelle mit kleinem Luftvolumen erwärmen sich häufig schneller, hohe Modelle bieten dafür mehr Nutzungskomfort.",
      "Nebenbei sinkt die Verdunstung deutlich, was Wasserverbrauch und Chemikalienbedarf reduziert.",
    ],
  },
  {
    id: "genehmigung",
    title: "Genehmigung und Nachbarrecht",
    paragraphs: [
      "Ob eine Poolüberdachung genehmigungspflichtig ist, regeln die Landesbauordnungen. Flache Modelle mit geringer Höhe sind vielerorts verfahrensfrei, hohe und begehbare Konstruktionen häufig nicht.",
      "Relevant sind außerdem Grenzabstände, Bebauungspläne und – bei Reihenhaus- oder Doppelhausgrundstücken – nachbarrechtliche Regelungen. Eine kurze Rückfrage bei der örtlichen Bauaufsicht schafft früh Klarheit.",
      "Planen Sie diesen Schritt vor der Bestellung ein: Maße und Höhen lassen sich vorab leichter anpassen als nach der Fertigung.",
    ],
  },
  {
    id: "planung",
    title: "Planung: Maße, Untergrund und Parkposition",
    paragraphs: [
      "Grundlage jeder Planung sind exakte Maße von Beckenrand, Umgang und verfügbarer Fläche. Ein Aufmaß vor Ort verhindert Überraschungen bei der Montage.",
      "Der Untergrund muss tragfähig, eben und frostsicher sein. Bei schienenlosen Systemen ist zusätzlich auf punktuelle Lasteinleitung zu achten.",
      "Denken Sie an die Parkposition der geöffneten Überdachung: Die zusammengeschobenen Segmente benötigen Platz, der im Gartenkonzept eingeplant sein sollte.",
    ],
  },
  {
    id: "montage",
    title: "Montage und Inbetriebnahme",
    paragraphs: [
      "Die Montagedauer reicht – je nach Größe und Bauform – von einem bis zu mehreren Tagen. Entscheidend für die spätere Leichtgängigkeit ist eine exakte Ausrichtung der Führungen.",
      "Nach dem Aufbau sollten Bedienung, Verriegelung und Endanschläge gemeinsam geprüft und dokumentiert werden. Notieren Sie Modellbezeichnung und Baujahr – diese Angaben erleichtern später die Ersatzteilbeschaffung.",
      "Wie Sie die Anlage anschließend dauerhaft in Funktion halten, beschreibt die Seite zu Pflege und Wartung.",
    ],
  },
];

export const Route = createFileRoute("/ratgeber")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/ratgeber` },
      { property: "og:image", content: absoluteImageUrl(IMAGES.detail) },
      { name: "twitter:image", content: absoluteImageUrl(IMAGES.detail) },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/ratgeber` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          breadcrumbJsonLd(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: TITLE,
            description: DESCRIPTION,
            inLanguage: "de-DE",
            image: absoluteImageUrl(IMAGES.detail),
            author: { "@type": "Person", name: "Carsten Fels" },
          },
        ]),
      },
    ],
  }),
  component: Ratgeber,
});

function Ratgeber() {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Ratgeber"
        title="Poolüberdachungen planen, verstehen und richtig auswählen"
        subtitle="Von der Materialwahl über Sicherheit und Wärmeschutz bis zu Genehmigung, Planung und Montage – die wichtigsten Grundlagen kompakt erklärt."
      />

      <div className="container-x mt-14 grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Inhalt
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {chapters.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="text-muted-foreground transition-colors hover:text-foreground">
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <div className="max-w-3xl">
          <figure className="mb-12 overflow-hidden rounded-3xl border border-border bg-mist">
            <img
              src={IMAGES.detail.src}
              alt={IMAGES.detail.alt}
              title={IMAGES.detail.title}
              width={IMAGES.detail.width}
              height={IMAGES.detail.height}
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full object-cover"
            />
          </figure>

          {chapters.map((c) => (
            <section key={c.id} id={c.id} className="mb-14 scroll-mt-28">
              <h2 className="text-2xl md:text-3xl">{c.title}</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                {c.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <div className="rounded-2xl border border-border bg-mist p-6 text-sm text-muted-foreground">
            Vertiefende Themen:{" "}
            <Link to="/schienenlose-poolueberdachungen" className="text-primary underline-offset-4 hover:underline">
              schienenlose Systeme
            </Link>
            ,{" "}
            <Link to="/pflege-wartung" className="text-primary underline-offset-4 hover:underline">
              Pflege &amp; Wartung
            </Link>{" "}
            und{" "}
            <Link to="/ersatzteile" className="text-primary underline-offset-4 hover:underline">
              Ersatzteilversorgung
            </Link>
            .
          </div>
        </div>
      </div>

      <ParadisoFazit text="Eine Poolüberdachung ist eine langfristige Investition. Wer bei Material, Konstruktion und Service auf Qualität achtet, profitiert über viele Jahre von geringem Aufwand und stabiler Funktion." />
    </>
  );
}
