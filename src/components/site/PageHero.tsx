import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--gradient-subtle)]">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_10%,color-mix(in_oklab,var(--navy)_18%,transparent),transparent_50%),radial-gradient(circle_at_80%_90%,color-mix(in_oklab,var(--accent)_15%,transparent),transparent_45%)]" />
      <div className="container-x relative py-16 md:py-24">
        {eyebrow && (
          <span className="mb-4 inline-block rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground fade-up">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-4xl text-balance text-4xl leading-[1.05] text-foreground md:text-6xl fade-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl fade-up">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 fade-up">{children}</div>}
      </div>
    </section>
  );
}
