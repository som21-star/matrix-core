import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame, Section, Card } from "@/components/page-frame";
import { layers } from "@/data/platform";

export const Route = createFileRoute("/developer-platform")({
  head: () => ({
    meta: [
      { title: "Developer Platform — MIP" },
      { name: "description", content: "SDKs, templates, CLI, and the surface every MATRIX engineer touches first." },
      { property: "og:title", content: "Developer Platform — MIP" },
    ],
  }),
  component: DeveloperPlatform,
});

function DeveloperPlatform() {
  const layer = layers.find((l) => l.n === "04")!;
  return (
    <PageFrame
      part="05"
      kicker={`L${layer.n} · Developer Surface`}
      title={layer.name}
      lede={layer.purpose}
    >
      <Section number="01" title="The CLI" description="One CLI for every product, every capability.">
        <pre className="bg-ink text-bone p-5 font-mono text-xs overflow-x-auto leading-relaxed">
{`$ matrix new product --name humming --template product-bootstrap
$ matrix add capability @matrix/planner
$ matrix generate adr "Adopt Planner v2 in HUMMING"
$ matrix eval run --suite golden --gate ci
$ matrix release notes --since v0.13.0`}
        </pre>
      </Section>

      <Section number="02" title="What ships with the platform">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {layer.contains.map((c) => (
            <Card key={c} title={c} meta="developer" />
          ))}
        </div>
      </Section>

      <Section number="03" title="Start here">
        <div className="flex flex-wrap gap-3">
          <Link to="/templates" className="border border-foreground px-5 py-3 text-sm hover:bg-foreground hover:text-background transition-colors">Browse templates</Link>
          <Link to="/packages" className="border border-border px-5 py-3 text-sm hover:bg-surface transition-colors">Open the registry</Link>
          <Link to="/docs" className="border border-border px-5 py-3 text-sm hover:bg-surface transition-colors">Read the docs</Link>
        </div>
      </Section>
    </PageFrame>
  );
}
