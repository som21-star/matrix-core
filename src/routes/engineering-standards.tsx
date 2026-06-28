import { createFileRoute } from "@tanstack/react-router";
import { PageFrame, Section, Card } from "@/components/page-frame";
import { layers } from "@/data/platform";

export const Route = createFileRoute("/engineering-standards")({
  head: () => ({
    meta: [
      { title: "Engineering Standards — MIP" },
      { name: "description", content: "How MATRIX writes, reviews, ships, and evaluates intelligent software." },
      { property: "og:title", content: "Engineering Standards — MIP" },
    ],
  }),
  component: Standards,
});

const checklist = [
  { id: "S.01", title: "Capability registered before merge", text: "Every new capability lives in the Capability Registry before its first consumer ships." },
  { id: "S.02", title: "Evaluation suite gates CI", text: "No model, prompt, or planner change merges without a passing eval delta." },
  { id: "S.03", title: "ADR for any architectural change", text: "Cross-team or cross-product change requires a recorded decision." },
  { id: "S.04", title: "Prompts compiled, not strings", text: "All prompts go through @matrix/prompts. Inline string prompts fail review." },
  { id: "S.05", title: "Events typed, schemas registered", text: "Every produced event has a published schema in the registry before first emit." },
  { id: "S.06", title: "Telemetry on every agent turn", text: "Each agent run emits a span tree consumable by Platform Operations." },
  { id: "S.07", title: "Policy gate on every tool", text: "No tool ships without a policy expression in @matrix/security." },
];

function Standards() {
  const layer = layers.find((l) => l.n === "05")!;
  return (
    <PageFrame
      part="06"
      kicker={`L${layer.n} · Engineering Excellence`}
      title={layer.name}
      lede={layer.purpose}
    >
      <Section number="01" title="The review checklist" description="What every change is measured against.">
        <ul className="border-t border-border">
          {checklist.map((c) => (
            <li key={c.id} className="grid grid-cols-12 gap-4 py-5 border-b border-border">
              <span className="col-span-1 font-mono text-[11px] text-accent pt-0.5">{c.id}</span>
              <div className="col-span-11">
                <div className="text-base font-medium">{c.title}</div>
                <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{c.text}</div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section number="02" title="Standards index">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {layer.contains.map((c) => <Card key={c} title={c} meta="standard" />)}
        </div>
      </Section>
    </PageFrame>
  );
}
