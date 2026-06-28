import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame, Section, Card } from "@/components/page-frame";
import { layers } from "@/data/platform";
import { ArrowDown } from "lucide-react";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "Architecture — MATRIX Intelligence Platform" },
      { name: "description", content: "Three architectural layers: Enterprise Intelligence Architecture, Product Software Architecture, Product AI Architecture." },
      { property: "og:title", content: "Architecture — MIP" },
    ],
  }),
  component: ArchitecturePage,
});

const stack = [
  {
    code: "EIA",
    name: "Enterprise Intelligence Architecture",
    role: "The shared mind",
    description:
      "Organization-wide principles, ontology, and capability maps. Every product inherits from this layer; no product modifies it without an Architecture Decision Record.",
  },
  {
    code: "PSA",
    name: "Product Software Architecture",
    role: "The product's spine",
    description:
      "Domain models, bounded contexts, services, and contracts specific to a product (DATUM, HUMMING, etc.) — but expressed in the shared ontology and consuming shared capabilities.",
  },
  {
    code: "PAI",
    name: "Product AI Architecture",
    role: "The product's mind",
    description:
      "Agents, planners, prompts, and evaluation suites composed from the AI Platform. Application-specific, but never built from scratch.",
  },
];

export default function ArchitecturePage() {
  return (
    <PageFrame
      part="01"
      kicker="Architecture · Three Layers"
      title="Architecture before implementation."
      lede="MATRIX organizes architecture into three layers. Each layer constrains the one below it and inherits from the one above. Together they ensure every product is recognizably MATRIX."
    >
      <Section number="01" title="The architecture stack" description="How the three layers compose.">
        <div className="space-y-0">
          {stack.map((s, i) => (
            <div key={s.code}>
              <div className="border border-border bg-surface p-7">
                <div className="flex items-baseline justify-between mb-3">
                  <div className="font-mono text-xs tracking-[0.18em] text-accent">
                    {s.code}
                  </div>
                  <span className="kicker">{s.role}</span>
                </div>
                <h3 className="text-2xl font-light tracking-tight">{s.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">
                  {s.description}
                </p>
              </div>
              {i < stack.length - 1 && (
                <div className="flex justify-center py-3">
                  <ArrowDown className="h-5 w-5 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section number="02" title="Architectural principles" description="The seven commitments every MATRIX architecture must hold.">
        <ul className="border-t border-border">
          {[
            "Architecture before implementation.",
            "Capabilities before services.",
            "Shared context over API calls.",
            "Knowledge over data.",
            "Events over request chains.",
            "Context mesh over tight coupling.",
            "Adaptive intelligence over static workflows.",
            "Composable capabilities over monolithic systems.",
          ].map((p, i) => (
            <li key={p} className="grid grid-cols-12 gap-4 py-4 border-b border-border">
              <span className="col-span-1 font-mono text-[11px] text-accent pt-0.5">
                P.{String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-11 text-base">{p}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section number="03" title="The six platform layers" description="Where each capability lives.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {layers.map((l) => (
            <Card key={l.n} title={l.name} meta={`L${l.n}`}>
              {l.purpose}
            </Card>
          ))}
        </div>
      </Section>

      <Section number="04" title="Next" description="">
        <div className="flex flex-wrap gap-3">
          <Link to="/capabilities" className="border border-foreground px-5 py-3 text-sm hover:bg-foreground hover:text-background transition-colors">
            Browse capabilities
          </Link>
          <Link to="/adr" className="border border-border px-5 py-3 text-sm hover:bg-surface transition-colors">
            Read decisions
          </Link>
        </div>
      </Section>
    </PageFrame>
  );
}
