import type { ReactNode } from "react";

export function PageFrame({
  part,
  kicker,
  title,
  lede,
  children,
  actions,
}: {
  part: string;
  kicker: string;
  title: string;
  lede?: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="border-b border-border bg-surface/40">
        <div className="max-w-[1200px] mx-auto px-10 lg:px-16 py-14 lg:py-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[11px] tracking-[0.22em] text-accent">
              PART {part}
            </span>
            <span className="h-px w-12 bg-accent" />
            <span className="kicker">{kicker}</span>
          </div>
          <div className="flex items-start justify-between gap-10">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight max-w-3xl leading-[1.05]">
              {title}
            </h1>
            {actions}
          </div>
          {lede && (
            <p className="mt-8 max-w-2xl text-base lg:text-lg text-muted-foreground leading-relaxed font-light">
              {lede}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-10 lg:px-16 py-16">{children}</div>
    </div>
  );
}

export function Section({
  number,
  title,
  description,
  children,
}: {
  number?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 gap-8 py-12 border-t border-border first:border-t-0 first:pt-0">
      <div className="col-span-12 lg:col-span-4">
        <div className="lg:sticky lg:top-10">
          {number && (
            <div className="font-mono text-[11px] tracking-[0.22em] text-accent mb-3">
              § {number}
            </div>
          )}
          <h2 className="text-2xl font-light tracking-tight leading-tight">{title}</h2>
          {description && (
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8">{children}</div>
    </section>
  );
}

export function Card({
  title,
  meta,
  children,
}: {
  title: string;
  meta?: string;
  children?: ReactNode;
}) {
  return (
    <div className="bg-surface border border-border p-6 transition-colors hover:border-accent/60"
      style={{ transitionTimingFunction: "var(--ease-matrix)" }}>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base font-medium tracking-tight">{title}</h3>
        {meta && <span className="font-mono text-[10px] text-muted-foreground">{meta}</span>}
      </div>
      {children && (
        <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{children}</div>
      )}
    </div>
  );
}

export function KeyValue({ items }: { items: Array<[string, ReactNode]> }) {
  return (
    <dl className="divide-y divide-border border-y border-border">
      {items.map(([k, v]) => (
        <div key={k} className="grid grid-cols-3 gap-4 py-3">
          <dt className="kicker col-span-1">{k}</dt>
          <dd className="col-span-2 text-sm">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
