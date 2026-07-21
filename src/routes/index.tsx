import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Sun, Droplets, Lock, TrendingUp } from "lucide-react";
import heroPool from "@/assets/hero-pool.jpg";
import modelFlach from "@/assets/model-flach.jpg";
import modelMittel from "@/assets/model-mittel.jpg";
import modelHoch from "@/assets/model-hoch.jpg";
import modelBegehbar from "@/assets/model-begehbar.jpg";
import modelSchiebe from "@/assets/model-schiebe.jpg";

const TITLE = "Die besten Poolüberdachungen im Vergleich | Unabhängiger Ratgeber";
const DESCRIPTION =
  "Poolüberdachungen im großen Vergleich: Materialien, Qualität, Ausstattung und Preis-Leistung. Modellübersicht, Kaufratgeber und Empfehlungen.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const benefits = [
  { icon: Sun, title: "Längere Badesaison", text: "Bis zu 3 Monate mehr Badevergnügen pro Jahr durch spürbar wärmeres Wasser." },
  { icon: Droplets, title: "Sauberes Wasser", text: "Weniger Laub, Schmutz und Verdunstung – geringerer Reinigungsaufwand." },
  { icon: Lock, title: "Mehr Sicherheit", text: "Zusätzlicher Schutz für Kinder und Haustiere bei geschlossener Überdachung." },
  { icon: TrendingUp, title: "Werterhalt", text: "Ein gepflegter Pool steigert die Attraktivität und den Wert Ihres Gartens." },
];

const modelPreviews = [
  { title: "Flache Modelle", text: "Diskret, elegant, ideal für moderne Gärten.", to: "/modelle#flach", img: modelFlach, alt: "Flache Poolüberdachung aus Aluminium und Glas" },
  { title: "Mittelhohe Modelle", text: "Guter Kompromiss aus Komfort und Optik.", to: "/modelle#mittel", img: modelMittel, alt: "Mittelhohe Poolüberdachung über einem Gartenpool" },
  { title: "Hohe & begehbare Modelle", text: "Maximaler Komfort, ganzjährig nutzbar.", to: "/modelle#hoch", img: modelHoch, alt: "Hohe, begehbare Poolüberdachung mit Glasfront" },
];

const galleryImages = [
  { src: modelSchiebe, alt: "Schiebe-Poolüberdachung geöffnet" },
  { src: modelBegehbar, alt: "Begehbare Poolüberdachung mit Aluminiumprofilen" },
  { src: modelFlach, alt: "Elegante flache Poolüberdachung" },
  { src: modelMittel, alt: "Mittelhohe Poolüberdachung im Garten" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroPool}
            alt="Moderne flache Poolüberdachung aus Aluminium und Polycarbonat über einem Pool bei Sonnenuntergang"
            width={1920}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        </div>

        <div className="container-x flex min-h-[86vh] flex-col justify-end pb-16 pt-32 text-white md:min-h-[92vh] md:pb-24">
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/90 backdrop-blur fade-up">
            <Sparkles className="h-3.5 w-3.5" /> Unabhängiger Vergleich · Hersteller im Überblick
          </span>
          <h1 className="max-w-4xl text-balance text-4xl leading-[1.02] md:text-7xl fade-up">
            Die besten Poolüberdachungen im Vergleich
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl fade-up">
            Vergleichen Sie Materialien, Qualität, Ausstattung und Preis-Leistung verschiedener
            Anbieter – transparent, sachlich und mit Blick auf das, was wirklich zählt.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 fade-up">
            <Link
              to="/vergleich"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5"
            >
              Jetzt vergleichen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/modelle"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              Modelle entdecken
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 text-white/85 md:grid-cols-4 md:gap-8">
            {[
              ["5 Modelltypen", "im Direktvergleich"],
              ["8 Kriterien", "objektiv bewertet"],
              ["20+ FAQ", "beantwortet"],
              ["Ratgeber", "vom Kauf bis Wartung"],
            ].map(([k, v]) => (
              <div key={k} className="min-w-0">
                <div className="text-lg font-semibold md:text-2xl">{k}</div>
                <div className="text-xs text-white/60 md:text-sm">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / Benefits */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Warum eine Poolüberdachung
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl">
              Mehr Saison. Weniger Aufwand. Sicherer Genuss.
            </h2>
          </div>
          <p className="text-muted-foreground md:text-lg">
            Eine hochwertige Poolüberdachung ist eine der wirksamsten Investitionen für jeden
            privaten Pool. Sie spart Energie, hält das Wasser sauber, verlängert die Badesaison
            und erhöht die Sicherheit – bei richtiger Ausführung ein Leben lang.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Model preview strip – now with images */}
      <section className="container-x py-8 md:py-16">
        <div className="mb-10">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Modellübersicht
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl">Für jeden Garten die passende Bauart</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {modelPreviews.map((m) => (
            <Link
              key={m.to}
              to={m.to as any}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{m.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">{m.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Impressionen
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl">Poolüberdachungen in der Praxis</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Ein visueller Eindruck verschiedener Bauformen – von flach und puristisch bis
            hoch und begehbar.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((g, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-mist"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Trust / transparency */}
      <section className="container-x my-16">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-mist to-white p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div className="min-w-0">
              <h2 className="text-2xl md:text-3xl">Transparent und ehrlich</h2>
              <p className="mt-3 text-muted-foreground md:text-lg">
                Wir vergleichen nach nachvollziehbaren Kriterien und veröffentlichen nur Aussagen,
                die sich auf öffentlich zugängliche Informationen stützen. Wo Daten fehlen, weisen
                wir das ausdrücklich aus, statt Spitzenplatzierungen zu behaupten.
              </p>
              <Link
                to="/vergleich"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
              >
                Zum Vergleich
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
