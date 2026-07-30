import { Link } from "@tanstack/react-router";
import { NAV_LINKS, PARADISO_URL, SITE_NAME } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-[var(--gradient-subtle)]">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <span className="font-display text-lg leading-none">P</span>
            </span>
            <span className="text-sm font-semibold">{SITE_NAME}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Unabhängiges Informationsportal rund um Poolüberdachungen: Bauformen, Technik,
            Materialien, Pflege und Ersatzteile – sachlich aufbereitet und ohne Preisangaben.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Inhalte</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV_LINKS.slice(1, 8).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Rechtliches</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/impressum" className="hover:text-foreground">
                Impressum
              </Link>
            </li>
            <li>
              <Link to="/datenschutz" className="hover:text-foreground">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link to="/ueber-diese-website" className="hover:text-foreground">
                Über diese Website
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="hover:text-foreground">
                Kontakt
              </Link>
            </li>
            <li>
              <a
                href={PARADISO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                Paradiso Website ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {year} {SITE_NAME}. Alle Rechte vorbehalten.</span>
          <span>
            Kooperationshinweis: Diese Website entsteht in Zusammenarbeit mit Paradiso.
            Bildmaterial wird mit Genehmigung verwendet.
          </span>
        </div>
      </div>
    </footer>
  );
}
