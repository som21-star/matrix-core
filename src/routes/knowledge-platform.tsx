import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame, Section, Card } from "@/components/page-frame";
import { capabilities, layers } from "@/data/platform";

export const Route = createFileRoute("/knowledge-platform")({
  head: () => ({
    meta: [
      { title: "Knowledge Platform — MATRIX Intelligence Platform" },
      { name: "description", content: "The shared semantic substrate every product reasons against — ontology, graph, lineage." },
      { property: "og:title", content: "Knowledge Platform — MIP" },
    ],
  }),
  component: KnowledgePlatform,
});

function KnowledgePlatform() {
  const layer = layers.find((l) => l.n === "03")!;
  const items = capabilities.filter((c) => c.domain === "Knowledge");
  return (
    <PageFrame
      part="04"
      kicker={`L${layer.n} · Semantic Substrate`}
      title={layer.name}
      lede={layer.purpose}
    >
      <Section number="01" title="Capabilities">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((c) => (
            <Link key={c.slug} to="/capabilities/$slug" params={{ slug: c.slug }}>
              <Card title={c.name} meta={c.version}>{c.purpose}</Card>
            </Link>
          ))}
        </div>
      </Section>
      <Section number="02" title="The shared vocabulary" description="Everything below the platform speaks one language.">
        <ul className="border-t border-border">
          {layer.contains.map((c) => (
            <li key={c} className="flex items-center justify-between border-b border-border py-3 text-sm">
              <span>{c}</span>
              <span className="kicker">term</span>
            </li>
          ))}
        </ul>
      </Section>
    </PageFrame>
  );
}
