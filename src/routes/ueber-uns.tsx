import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTA";
import { ShieldCheck, Handshake, Search } from "lucide-react";

const TITLE = "Über uns – Poolüberdachung Vergleich";
const DESCRIPTION =
  "Wer wir sind und wie unser Vergleich entsteht: transparent, sachlich und in Zusammenarbeit mit Paradiso.";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/ueber-uns" },
    ],
    links: [{ rel: "canonical", href: "/ueber-uns" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Unabhängige Orientierung im Poolüberdachungs-Markt"
        subtitle="Wir helfen Poolbesitzern, die passende Überdachung zu finden – mit strukturierten Vergleichen, verständlichen Ratgebern und ehrlichen Empfehlungen."
      />

      <section className="container-x mt-16 grid gap-10 md:grid-cols-3">
        {[
          {
            icon: Search,
            title: "Recherche",
            text: "Wir werten öffentlich zugängliche Informationen und Herstellerangaben systematisch aus – nachvollziehbar und aktuell.",
          },
          {
            icon: ShieldCheck,
            title: "Transparenz",
            text: "Wo Daten fehlen, sagen wir das. Wir behaupten keine Spitzenplatzierungen ohne belastbare Grundlage.",
          },
          {
            icon: Handshake,
            title: "Partnerschaft",
            text: "Diese Seite wird in Zusammenarbeit mit Paradiso betrieben. Empfehlungen erfolgen offen und nachvollziehbar.",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-white p-8">
            <c.icon className="h-6 w-6 text-primary" />
            <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
            <p className="mt-3 text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </section>

      <section className="container-x mt-20">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <h2 className="text-3xl text-foreground md:text-4xl">Unser Ansatz</h2>
          <p>
            Der Markt für Poolüberdachungen ist unübersichtlich. Zwischen Herstellerangaben,
            Marketingversprechen und Fachbegriffen ist es für Käufer schwer, die tatsächlich
            relevanten Unterschiede zu erkennen.
          </p>
          <p>
            Wir bündeln die wichtigsten Informationen an einer Stelle: Bauformen, Materialien,
            typische Ausstattungsmerkmale und Auswahlkriterien. Unser Ziel ist es, dass Sie
            gut informiert in ein Beratungsgespräch gehen und die für Sie passende Lösung
            finden.
          </p>
          <p>
            Als Partner von Paradiso profitieren wir von tiefem Praxiswissen aus dem Bau und
            der Montage von Poolüberdachungen. Diese Nähe machen wir transparent – Empfehlungen
            werden klar als solche gekennzeichnet.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
