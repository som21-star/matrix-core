import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame, Section, Card } from "@/components/page-frame";
import { capabilities, layers } from "@/data/platform";

export const Route = createFileRoute("/ai-platform")({
  head: () => ({
    meta: [
      { title: "AI Platform — MATRIX Intelligence Platform" },
      { name: "description", content: "Reusable cognitive capabilities: context, memory, planner, reasoner, evaluation, prompt compiler." },
      { property: "og:title", content: "AI Platform — MIP" },
    ],
  }),
  component: AIPlatform,
});

function AIPlatform() {
  const layer = layers.find((l) => l.n === "02")!;
  const items = capabilities.filter((c) => c.domain === "AI Platform");
  return (
    <PageFrame
      part="03"
      kicker={`L${layer.n} · Cognition`}
      title={layer.name}
      lede={layer.purpose}
    >
      <Section number="01" title="Capabilities" description="The reasoning primitives every product composes.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((c) => (
            <Link key={c.slug} to="/capabilities/$slug" params={{ slug: c.slug }}>
              <Card title={c.name} meta={c.version}>{c.purpose}</Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section number="02" title="Runtime contract" description="How a capability hosts itself inside an agent runtime.">
        <pre className="bg-ink text-bone p-5 font-mono text-xs overflow-x-auto leading-relaxed">
{`const runtime = matrix.runtime({
  context:   "@matrix/context",
  memory:    "@matrix/memory",
  planner:   "@matrix/planner",
  reasoner:  "@matrix/reasoner",
  prompts:   "@matrix/prompts",
  evaluate:  "@matrix/evaluation",
  guardrails: ["pii", "policy", "rate"],
});

await runtime.act({ goal, signals });`}
        </pre>
      </Section>
    </PageFrame>
  );
}
