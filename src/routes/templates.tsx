import { createFileRoute } from "@tanstack/react-router";
import { PageFrame, Card } from "@/components/page-frame";
import { Download } from "lucide-react";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "Template Library — MIP" },
      { name: "description", content: "Reusable starting points for capabilities, AI modules, ADRs, reviews, prompts, evaluations, products." },
      { property: "og:title", content: "Template Library — MIP" },
    ],
  }),
  component: Templates,
});

const templates = [
  { name: "Capability Template", code: "T-01", desc: "Bootstrap a new capability with registry entry, contract tests, eval suite, ADR.", weight: "core" },
  { name: "AI Module Template", code: "T-02", desc: "Agent skeleton: context, planner, reasoner, prompts, guardrails, telemetry.", weight: "core" },
  { name: "ADR Template", code: "T-03", desc: "Architecture Decision Record — context, decision, consequences, status.", weight: "doc" },
  { name: "Architecture Review Template", code: "T-04", desc: "Pre-merge checklist for cross-team architectural changes.", weight: "doc" },
  { name: "Prompt Template", code: "T-05", desc: "Typed, versioned prompt with variables, model targets, and eval anchors.", weight: "ai" },
  { name: "Evaluation Template", code: "T-06", desc: "Golden set, LLM-judge rubric, regression diff, CI gate.", weight: "ai" },
  { name: "Product Bootstrap Template", code: "T-07", desc: "New product scaffold — domain model, capabilities wired, ontology imported.", weight: "core" },
  { name: "Knowledge Graph Template", code: "T-08", desc: "Ontology-aligned graph schema, lineage, and reasoning hooks.", weight: "knowledge" },
  { name: "DDD Template", code: "T-09", desc: "Bounded contexts, aggregates, domain events — mapped to capabilities.", weight: "doc" },
  { name: "Event Modeling Template", code: "T-10", desc: "Command → Event → Read Model, with schema registry stubs.", weight: "doc" },
];

function Templates() {
  return (
    <PageFrame
      part="08"
      kicker="Library · Reusable Starting Points"
      title="Template library."
      lede="Templates encode the platform's principles. Use them — and the eval, ADR, and registry entries appear by default."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {templates.map((t) => (
          <div key={t.code} className="border border-border bg-surface p-6 hover:border-accent/60 transition-colors" style={{ transitionTimingFunction: "var(--ease-matrix)" }}>
            <div className="flex items-baseline justify-between">
              <div className="font-mono text-[11px] text-accent">{t.code}</div>
              <span className="kicker">{t.weight}</span>
            </div>
            <h3 className="mt-3 text-lg font-medium tracking-tight">{t.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            <button className="mt-5 inline-flex items-center gap-2 text-xs font-mono text-foreground border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors">
              <Download className="h-3 w-3" />
              matrix new from {t.code}
            </button>
          </div>
        ))}
      </div>
    </PageFrame>
  );
}
