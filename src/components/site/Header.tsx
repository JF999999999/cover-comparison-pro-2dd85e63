import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Award, ExternalLink } from "lucide-react";
import { NAV_LINKS, PARADISO_URL, PARADISO_REFERENZEN_URL, SITE_NAME } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="group flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            <span className="font-display text-lg leading-none">P</span>
          </span>
          <span className="truncate">
            <span className="block text-sm font-semibold leading-tight text-foreground">
              {SITE_NAME}
            </span>
            <span className="hidden text-[11px] uppercase tracking-widest text-muted-foreground sm:block">
              Unabhängig · Transparent
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PARADISO_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)] md:inline-flex"
          >
            Zu Paradiso
          </a>
          <button
            type="button"
            aria-label="Menü"
            className="grid h-10 w-10 place-items-center rounded-md border border-border text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <nav className="container-x flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={PARADISO_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Zur Paradiso Website
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
