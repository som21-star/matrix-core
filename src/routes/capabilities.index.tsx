import { createFileRoute, Link } from "@tanstack/react-router";
import { capabilities } from "@/data/platform";
import { PageFrame } from "@/components/page-frame";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capability Registry — MATRIX Intelligence Platform" },
      { name: "description", content: "The catalog of organizational intelligence. Every reusable capability, its dependencies, consumers, and version." },
      { property: "og:title", content: "Capability Registry — MIP" },
    ],
  }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  const byDomain = capabilities.reduce<Record<string, typeof capabilities>>((acc, c) => {
    (acc[c.domain] ||= []).push(c);
    return acc;
  }, {});

  return (
    <PageFrame
      part="02"
      kicker="Registry · The Heart"
      title="Capability Registry."
      lede="Capabilities are the central organizing concept of MATRIX. Every product discovers, composes, and depends on capabilities here — not services, not microservices, not features."
    >
      {Object.entries(byDomain).map(([domain, items]) => (
        <div key={domain} className="mb-16">
          <div className="flex items-baseline justify-between border-b border-border pb-3 mb-0">
            <h2 className="text-xl font-light tracking-tight">{domain}</h2>
            <span className="font-mono text-[11px] text-muted-foreground">
              {items.length} capabilities
            </span>
          </div>
          <div className="grid grid-cols-12 px-1 py-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground border-b border-border">
            <div className="col-span-4">CAPABILITY</div>
            <div className="col-span-3">PACKAGE</div>
            <div className="col-span-2">OWNER</div>
            <div className="col-span-1">VER</div>
            <div className="col-span-2 text-right">STATUS</div>
          </div>
          {items.map((c) => (
            <Link
              key={c.slug}
              to="/capabilities/$slug"
              params={{ slug: c.slug }}
              className="grid grid-cols-12 px-1 py-5 border-b border-border hover:bg-surface transition-colors items-start group"
              style={{ transitionTimingFunction: "var(--ease-matrix)" }}
            >
              <div className="col-span-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{c.name}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed pr-6">
                  {c.purpose}
                </p>
              </div>
              <div className="col-span-3 font-mono text-xs text-muted-foreground pt-0.5">
                {c.package}
              </div>
              <div className="col-span-2 text-xs text-muted-foreground pt-0.5">
                {c.owner}
              </div>
              <div className="col-span-1 font-mono text-xs pt-0.5">{c.version}</div>
              <div className="col-span-2 text-right pt-0.5">
                <StatusPill status={c.status} />
              </div>
            </Link>
          ))}
        </div>
      ))}
    </PageFrame>
  );
}

function StatusPill({ status }: { status: string }) {
  const color =
    status === "stable"
      ? "bg-accent/15 text-accent border-accent/30"
      : status === "beta"
      ? "bg-slate/10 text-slate border-slate/30"
      : "bg-muted text-muted-foreground border-border";
  return (
    <span
      className={`inline-block border px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase ${color}`}
    >
      {status}
    </span>
  );
}
