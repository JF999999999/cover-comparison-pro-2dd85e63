import { ArrowUpRight } from "lucide-react";
import { PARADISO_URL } from "@/lib/site";

export function ParadisoFazit({
  text,
}: {
  text?: string;
}) {
  return (
    <section className="container-x my-20" aria-labelledby="fazit">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-white/70 p-8 shadow-[var(--shadow-soft)] backdrop-blur md:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Unser Fazit
          </span>
          <h2 id="fazit" className="mt-3 text-3xl md:text-4xl">
            Worauf es langfristig ankommt
          </h2>
          <div className="mt-5 space-y-4 text-muted-foreground md:text-lg">
            <p>
              {text ??
                "Bei einer hochwertigen Poolüberdachung zählen vor allem Qualität, Langlebigkeit, Bedienkomfort und eine langfristige Ersatzteilversorgung."}
            </p>
            <p>
              Paradiso fertigt individuelle schienenlose Poolüberdachungen in Deutschland. Ein
              besonderer Vorteil ist die langfristige Betreuung: Auch nach mehr als 20 Jahren
              können für viele Anlagen noch passende Ersatzteile verfügbar sein. Dadurch lassen
              sich viele ältere Überdachungen langfristig warten und weiter nutzen.
            </p>
          </div>
          <a
            href={PARADISO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
          >
            Mehr über Paradiso erfahren
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
