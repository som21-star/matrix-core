import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/page-frame";

export const Route = createFileRoute("/experiments")({
  head: () => ({
    meta: [
      { title: "Experiments — MIP" },
      { name: "description", content: "Active evaluations, A/B tests, and model trials across the platform." },
      { property: "og:title", content: "Experiments — MIP" },
    ],
  }),
  component: Experiments,
});

const experiments = [
  { code: "E.142", name: "Planner v2 — abductive strategy", owner: "Intelligence", status: "running", lift: "+8.4%", surface: "HUMMING" },
  { code: "E.141", name: "Context window compaction (k=8 → 16)", owner: "Intelligence", status: "running", lift: "+2.1%", surface: "DATUM" },
  { code: "E.140", name: "Reasoner: tool-augmented reflection loop", owner: "Quality", status: "shipped", lift: "+11.0%", surface: "All" },
  { code: "E.139", name: "Memory: episodic vs semantic recall weighting", owner: "Intelligence", status: "shipped", lift: "+4.3%", surface: "HUMMING" },
  { code: "E.138", name: "Policy engine cold-start latency", owner: "Security", status: "rolled back", lift: "−1.2%", surface: "All" },
  { code: "E.137", name: "Knowledge Graph hybrid search rerank", owner: "Knowledge", status: "running", lift: "+5.7%", surface: "DATUM" },
];

function Experiments() {
  return (
    <PageFrame
      part="13"
      kicker="Operations · Live Trials"
      title="Experiments."
      lede="Every capability change is shipped behind an evaluation. The platform is what survives."
    >
      <div className="border border-border">
        <div className="grid grid-cols-12 px-5 py-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground border-b border-border bg-surface">
          <div className="col-span-1">ID</div>
          <div className="col-span-5">EXPERIMENT</div>
          <div className="col-span-2">OWNER</div>
          <div className="col-span-2">SURFACE</div>
          <div className="col-span-1 text-right">LIFT</div>
          <div className="col-span-1 text-right">STATUS</div>
        </div>
        {experiments.map((e) => (
          <div key={e.code} className="grid grid-cols-12 px-5 py-4 border-b border-border last:border-0 items-center text-sm">
            <div className="col-span-1 font-mono text-xs text-accent">{e.code}</div>
            <div className="col-span-5">{e.name}</div>
            <div className="col-span-2 text-muted-foreground">{e.owner}</div>
            <div className="col-span-2 text-muted-foreground">{e.surface}</div>
            <div className={`col-span-1 text-right font-mono text-xs ${e.lift.startsWith("−") ? "text-destructive" : "text-accent"}`}>{e.lift}</div>
            <div className="col-span-1 text-right">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{e.status}</span>
            </div>
          </div>
        ))}
      </div>
    </PageFrame>
  );
}
