import { createFileRoute } from "@tanstack/react-router";
import { PageFrame, Section } from "@/components/page-frame";

export const Route = createFileRoute("/knowledge-graph")({
  head: () => ({
    meta: [
      { title: "Knowledge Graph — MIP" },
      { name: "description", content: "The graph-native substrate where entities, lineage, and reasoning live." },
      { property: "og:title", content: "Knowledge Graph — MIP" },
    ],
  }),
  component: KnowledgeGraph,
});

function KnowledgeGraph() {
  return (
    <PageFrame
      part="10"
      kicker="Knowledge · Graph Substrate"
      title="The shared knowledge graph."
      lede="A live representation of every entity, relationship, lineage, and reasoning trace MATRIX has ever recorded. The Knowledge Graph is the platform's long memory."
    >
      <Section number="01" title="Topology" description="A schematic of the graph as it exists today.">
        <div className="border border-border bg-surface p-10">
          <svg viewBox="0 0 600 360" className="w-full">
            <defs>
              <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--gold)" />
              </marker>
            </defs>
            {[
              ["Capability", 110, 60],
              ["Product", 300, 30],
              ["Event", 490, 60],
              ["Plan", 110, 180],
              ["Decision", 300, 180],
              ["Policy", 490, 180],
              ["Evidence", 110, 300],
              ["Reasoning", 300, 300],
              ["Insight", 490, 300],
            ].map(([label, x, y]) => (
              <g key={label as string}>
                <circle cx={x as number} cy={y as number} r="34" fill="var(--bone)" stroke="var(--ink)" strokeWidth="1.25" />
                <text x={x as number} y={(y as number) + 4} fontFamily="Sora" fontSize="11" textAnchor="middle" fill="var(--ink)">
                  {label as string}
                </text>
              </g>
            ))}
            {[
              [110, 60, 300, 30],
              [300, 30, 490, 60],
              [110, 60, 110, 180],
              [300, 30, 300, 180],
              [300, 180, 110, 180],
              [490, 60, 490, 180],
              [110, 180, 110, 300],
              [110, 300, 300, 300],
              [300, 300, 490, 300],
              [490, 180, 300, 300],
            ].map((c, i) => (
              <line key={i} x1={c[0]} y1={c[1]} x2={c[2]} y2={c[3]} stroke="var(--gold)" strokeWidth="0.75" markerEnd="url(#arr)" opacity="0.7" />
            ))}
          </svg>
          <div className="mt-6 grid grid-cols-3 gap-6 font-mono text-[11px] text-muted-foreground">
            <div>Nodes · 184,920</div>
            <div>Edges · 612,406</div>
            <div>Lineage depth · 17</div>
          </div>
        </div>
      </Section>

      <Section number="02" title="Query interface" description="The graph is queryable from any product via @matrix/knowledge.">
        <pre className="bg-ink text-bone p-5 font-mono text-xs overflow-x-auto leading-relaxed">
{`import { graph } from "@matrix/knowledge";

const lineage = await graph.path({
  from: { type: "Insight", id: insightId },
  to:   { type: "Evidence" },
  via:  ["cites", "is_output_of"],
});`}
        </pre>
      </Section>
    </PageFrame>
  );
}
