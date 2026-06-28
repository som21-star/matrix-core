import { createFileRoute } from "@tanstack/react-router";
import { PageFrame, Section } from "@/components/page-frame";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — MIP" },
      { name: "description", content: "Platform settings, identity, and developer preferences." },
      { property: "og:title", content: "Settings — MIP" },
    ],
  }),
  component: Settings,
});

function Settings() {
  return (
    <PageFrame
      part="15"
      kicker="Settings"
      title="Platform settings."
      lede="Local preferences. Identity. Telemetry. Environment."
    >
      <Section number="01" title="Identity">
        <dl className="border-y border-border divide-y divide-border">
          {[
            ["Operator", "you@matrix.ai"],
            ["Role", "Platform · Engineer"],
            ["Workspace", "matrix-intelligence-platform"],
            ["Environment", "main · stable"],
          ].map(([k, v]) => (
            <div key={k} className="grid grid-cols-3 py-3 gap-4">
              <dt className="kicker">{k}</dt>
              <dd className="col-span-2 text-sm font-mono">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section number="02" title="Preferences">
        <div className="space-y-3">
          {[
            ["Telemetry", "Send anonymized capability usage to Platform Operations."],
            ["Eval gate", "Block merges on failed evaluation deltas."],
            ["Prompt linting", "Reject inline string prompts in pull requests."],
            ["Strict ontology", "Reject events referencing unregistered entity types."],
          ].map(([label, desc]) => (
            <div key={label} className="border border-border bg-surface p-5 flex items-start justify-between gap-6">
              <div>
                <div className="text-sm font-medium">{label}</div>
                <div className="text-xs text-muted-foreground mt-1">{desc}</div>
              </div>
              <div className="mt-1 h-5 w-9 rounded-full bg-accent relative shrink-0">
                <span className="absolute top-0.5 right-0.5 h-4 w-4 bg-bone rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageFrame>
  );
}
