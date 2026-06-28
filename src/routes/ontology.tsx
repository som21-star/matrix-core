import { createFileRoute } from "@tanstack/react-router";
import { PageFrame, Section, Card } from "@/components/page-frame";

export const Route = createFileRoute("/ontology")({
  head: () => ({
    meta: [
      { title: "Enterprise Ontology — MIP" },
      { name: "description", content: "The canonical vocabulary of entities, relationships, and events shared across every MATRIX product." },
      { property: "og:title", content: "Enterprise Ontology — MIP" },
    ],
  }),
  component: Ontology,
});

const entities = [
  { name: "Capability", desc: "A reusable unit of organizational intelligence with contract, owner, and version." },
  { name: "Product", desc: "A composition of capabilities packaged for a domain (DATUM, HUMMING, etc.)." },
  { name: "Decision", desc: "A recorded architectural choice. Immutable once published; superseded only by another Decision." },
  { name: "Plan", desc: "A typed, evaluable sequence of steps produced by the Planner." },
  { name: "Evidence", desc: "A signal — observation, document, measurement — referenced by a Reasoning trace." },
  { name: "Reasoning", desc: "A directed graph of inferences linking Evidence to Insight." },
  { name: "Insight", desc: "A first-class output of reasoning, addressable, versioned, traceable." },
  { name: "Policy", desc: "An expression evaluated by @matrix/security on every capability invocation." },
];

function Ontology() {
  return (
    <PageFrame
      part="09"
      kicker="Knowledge · Canonical Vocabulary"
      title="Enterprise ontology."
      lede="Every product, every capability, every event speaks this vocabulary. Disagreement is allowed in implementation — never in terms."
    >
      <Section number="01" title="Core entities" description="The nouns the platform understands.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {entities.map((e) => (
            <Card key={e.name} title={e.name} meta="entity">{e.desc}</Card>
          ))}
        </div>
      </Section>

      <Section number="02" title="Core relationships" description="How the nouns connect.">
        <ul className="font-mono text-sm border-t border-border">
          {[
            "Product —composes→ Capability",
            "Capability —produces→ Event",
            "Capability —consumes→ Event",
            "Decision —governs→ Capability",
            "Plan —is_produced_by→ Capability(Planner)",
            "Reasoning —cites→ Evidence",
            "Insight —is_output_of→ Reasoning",
            "Policy —gates→ Capability",
          ].map((r) => (
            <li key={r} className="py-3 border-b border-border">{r}</li>
          ))}
        </ul>
      </Section>
    </PageFrame>
  );
}
