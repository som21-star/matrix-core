import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/page-frame";

export const Route = createFileRoute("/adr")({
  head: () => ({
    meta: [
      { title: "Architecture Decisions — MIP" },
      { name: "description", content: "The recorded architectural decisions that shaped MATRIX Intelligence Platform." },
      { property: "og:title", content: "Architecture Decisions — MIP" },
    ],
  }),
  component: ADR,
});

const adrs = [
  { n: "001", title: "Capabilities as the central organizing concept", status: "Accepted", date: "2025-03-04", supersedes: null, by: "Architecture Council" },
  { n: "002", title: "Shared context over API calls", status: "Accepted", date: "2025-03-18", supersedes: null, by: "Architecture Council" },
  { n: "003", title: "Adopt Kafka as the platform event spine", status: "Accepted", date: "2025-04-02", supersedes: null, by: "Platform · Runtime" },
  { n: "004", title: "Neo4j + pgvector for Knowledge substrate", status: "Accepted", date: "2025-04-29", supersedes: null, by: "Knowledge · Platform" },
  { n: "005", title: "Prompt Compiler over inline strings", status: "Accepted", date: "2025-06-11", supersedes: null, by: "Platform · Intelligence" },
  { n: "006", title: "ADR required for any cross-product capability change", status: "Accepted", date: "2025-07-22", supersedes: null, by: "Architecture Council" },
  { n: "007", title: "Reasoner v2 — pluggable strategy interface", status: "Accepted", date: "2026-01-15", supersedes: "—", by: "Platform · Intelligence" },
  { n: "008", title: "Capability Registry replaces Service Registry", status: "Accepted", date: "2026-02-20", supersedes: "—", by: "Architecture Council" },
  { n: "009", title: "Evaluation gates all model + prompt changes in CI", status: "Accepted", date: "2026-04-08", supersedes: null, by: "Platform · Quality" },
  { n: "010", title: "Single design language across every MATRIX product", status: "Proposed", date: "2026-06-01", supersedes: null, by: "Design · MATRIX" },
];

function ADR() {
  return (
    <PageFrame
      part="11"
      kicker="Governance · Decision History"
      title="Architecture Decision Records."
      lede="Every architectural choice — recorded, dated, attributed, immutable. New context creates a new ADR; it does not silently rewrite history."
    >
      <div className="border border-border">
        <div className="grid grid-cols-12 px-5 py-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground border-b border-border bg-surface">
          <div className="col-span-1">ADR</div>
          <div className="col-span-6">TITLE</div>
          <div className="col-span-2">STATUS</div>
          <div className="col-span-2">AUTHOR</div>
          <div className="col-span-1 text-right">DATE</div>
        </div>
        {adrs.map((a) => (
          <div key={a.n} className="grid grid-cols-12 px-5 py-4 border-b border-border last:border-0 hover:bg-surface transition-colors items-center"
               style={{ transitionTimingFunction: "var(--ease-matrix)" }}>
            <div className="col-span-1 font-mono text-xs text-accent">#{a.n}</div>
            <div className="col-span-6 text-sm">{a.title}</div>
            <div className="col-span-2">
              <span className={`font-mono text-[10px] tracking-wider uppercase ${a.status === "Accepted" ? "text-accent" : "text-muted-foreground"}`}>
                {a.status}
              </span>
            </div>
            <div className="col-span-2 text-xs text-muted-foreground">{a.by}</div>
            <div className="col-span-1 text-right font-mono text-xs text-muted-foreground">{a.date}</div>
          </div>
        ))}
      </div>
    </PageFrame>
  );
}
