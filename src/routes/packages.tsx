import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame } from "@/components/page-frame";
import { capabilities } from "@/data/platform";
import { Package as PackageIcon } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Package Registry — MIP" },
      { name: "description", content: "Internal MATRIX package registry. Every @matrix/* package, its purpose, version, and consumers." },
      { property: "og:title", content: "Package Registry — MIP" },
    ],
  }),
  component: Packages,
});

function Packages() {
  return (
    <PageFrame
      part="07"
      kicker="Registry · Internal Packages"
      title="@matrix · internal package registry."
      lede="Every shared package, with its real version, owner, dependents, and roadmap. Discoverability is a platform-level concern."
    >
      <div className="border border-border">
        <div className="grid grid-cols-12 px-5 py-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground border-b border-border bg-surface">
          <div className="col-span-1">·</div>
          <div className="col-span-4">PACKAGE</div>
          <div className="col-span-3">CAPABILITY</div>
          <div className="col-span-2">VERSION</div>
          <div className="col-span-2 text-right">DEPENDENTS</div>
        </div>
        {capabilities.map((c) => (
          <Link
            key={c.slug}
            to="/capabilities/$slug"
            params={{ slug: c.slug }}
            className="grid grid-cols-12 items-center px-5 py-4 border-b border-border last:border-0 hover:bg-surface transition-colors"
            style={{ transitionTimingFunction: "var(--ease-matrix)" }}
          >
            <div className="col-span-1">
              <PackageIcon className="h-4 w-4 text-accent" />
            </div>
            <div className="col-span-4 font-mono text-sm">{c.package}</div>
            <div className="col-span-3 text-sm">{c.name}</div>
            <div className="col-span-2 font-mono text-xs text-muted-foreground">{c.version}</div>
            <div className="col-span-2 text-right text-xs text-muted-foreground">
              {c.consumers.length} consumers
            </div>
          </Link>
        ))}
      </div>
    </PageFrame>
  );
}
