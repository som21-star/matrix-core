import { createFileRoute } from "@tanstack/react-router";
import { PageFrame, Section, Card } from "@/components/page-frame";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Governance — MIP" },
      { name: "description", content: "How the platform evolves: councils, reviews, ownership, RFC process." },
      { property: "og:title", content: "Governance — MIP" },
    ],
  }),
  component: Governance,
});

function Governance() {
  return (
    <PageFrame
      part="14"
      kicker="Governance · Stewardship"
      title="Who decides what."
      lede="The platform is a long-lived asset. It is governed, not owned by any one team."
    >
      <Section number="01" title="Councils" description="Standing bodies that own the platform's evolution.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Card title="Architecture Council" meta="weekly">
            Owns the Capability Registry, ADR backlog, and the boundary between platform and product.
          </Card>
          <Card title="Intelligence Council" meta="bi-weekly">
            Owns @matrix/context, memory, planner, reasoner, prompts, evaluation.
          </Card>
          <Card title="Knowledge Council" meta="weekly">
            Owns the ontology, the graph, lineage, and the semantic layer.
          </Card>
          <Card title="Security & Policy" meta="weekly">
            Owns @matrix/security, policy expressions, identity, and audit.
          </Card>
        </div>
      </Section>

      <Section number="02" title="RFC process" description="How a change enters the platform.">
        <ol className="border-t border-border">
          {[
            "Draft an RFC against an existing capability — or propose a new one.",
            "Run the eval suite against the capability's golden set.",
            "Architecture Review — capability impact, dependencies, ontology delta.",
            "ADR recorded. Versions bumped. Registry updated.",
            "Capability ships. Consumers migrated on their own cadence.",
          ].map((s, i) => (
            <li key={s} className="grid grid-cols-12 gap-4 py-4 border-b border-border">
              <span className="col-span-1 font-mono text-[11px] text-accent pt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <span className="col-span-11 text-sm">{s}</span>
            </li>
          ))}
        </ol>
      </Section>
    </PageFrame>
  );
}
