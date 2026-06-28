import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame, Section } from "@/components/page-frame";
import { capabilities } from "@/data/platform";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation — MATRIX Intelligence Platform" },
      { name: "description", content: "Beautiful, searchable, interactive documentation for every capability, package, and pattern." },
      { property: "og:title", content: "Documentation — MIP" },
    ],
  }),
  component: Docs,
});

const sections = [
  { kicker: "Start", title: "Getting Started", items: ["Install the CLI", "Bootstrap a product", "Compose capabilities", "Ship your first eval"] },
  { kicker: "Guides", title: "Guides", items: ["Designing a capability", "Writing an ADR", "Authoring prompts", "Modeling events", "Working with the graph"] },
  { kicker: "Reference", title: "Reference", items: ["@matrix/context", "@matrix/memory", "@matrix/planner", "@matrix/reasoner", "@matrix/prompts", "@matrix/evaluation"] },
  { kicker: "Patterns", title: "Patterns", items: ["Context Mesh", "Capability Composition", "Event-Sourced Reasoning", "Knowledge-Aware Agents"] },
];

function Docs() {
  return (
    <PageFrame
      part="12"
      kicker="Documentation"
      title="The platform, documented."
      lede="Searchable. Interactive. Honest about edges. Written the way Stripe and Anthropic write — for engineers under deadline pressure."
    >
      <Section number="01" title="Browse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sections.map((s) => (
            <div key={s.title} className="border border-border bg-surface p-6">
              <div className="kicker mb-2">{s.kicker}</div>
              <h3 className="text-lg font-medium tracking-tight">{s.title}</h3>
              <ul className="mt-4 space-y-1.5">
                {s.items.map((i) => (
                  <li key={i} className="text-sm flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                    <ArrowRight className="h-3 w-3 opacity-50" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section number="02" title="Capability reference" description="Direct links into each capability's documentation.">
        <ul className="border-t border-border">
          {capabilities.map((c) => (
            <li key={c.slug}>
              <Link to="/capabilities/$slug" params={{ slug: c.slug }}
                className="grid grid-cols-12 gap-4 py-3 border-b border-border text-sm hover:bg-surface px-2 transition-colors items-center">
                <span className="col-span-4 font-mono text-xs">{c.package}</span>
                <span className="col-span-6 text-muted-foreground">{c.purpose.split(".")[0]}.</span>
                <span className="col-span-2 text-right font-mono text-[10px] text-accent">{c.version}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </PageFrame>
  );
}
