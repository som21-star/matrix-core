import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { capabilities } from "@/data/platform";
import { PageFrame, Section, KeyValue, Card } from "@/components/page-frame";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/capabilities/$slug")({
  loader: ({ params }) => {
    const cap = capabilities.find((c) => c.slug === params.slug);
    if (!cap) throw notFound();
    return { cap };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.cap.name ?? "Capability"} — MIP Registry` },
      { name: "description", content: loaderData?.cap.purpose ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <PageFrame part="02" kicker="Registry" title="Capability not registered." lede="">
      <Link to="/capabilities" className="text-accent underline">Back to registry</Link>
    </PageFrame>
  ),
  component: CapabilityDetail,
});

function CapabilityDetail() {
  const { cap } = Route.useLoaderData();

  return (
    <PageFrame
      part="02"
      kicker={`Capability · ${cap.domain}`}
      title={cap.name}
      lede={cap.purpose}
      actions={
        <Link
          to="/capabilities"
          className="hidden lg:inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" />
          Registry
        </Link>
      }
    >
      <Section number="01" title="Identity" description="The capability's place in the registry.">
        <KeyValue
          items={[
            ["Package", <code className="font-mono text-sm">{cap.package}</code>],
            ["Version", <span className="font-mono text-sm">{cap.version}</span>],
            ["Status", <span className="font-mono text-sm uppercase tracking-wider text-accent">{cap.status}</span>],
            ["Owner", cap.owner],
            ["Domain", cap.domain],
          ]}
        />
      </Section>

      <Section number="02" title="Dependencies" description="What this capability composes from elsewhere in the platform.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cap.dependencies.length === 0 ? (
            <p className="text-sm text-muted-foreground italic">No platform dependencies.</p>
          ) : (
            cap.dependencies.map((d: string) => <Card key={d} title={d} meta="package" />)
          )}
        </div>
      </Section>

      <Section number="03" title="Consumers" description="Products that compose this capability today.">
        <ul className="border-t border-border">
          {cap.consumers.map((c) => (
            <li key={c} className="flex items-center justify-between border-b border-border py-3 text-sm">
              <span>{c}</span>
              <span className="font-mono text-[10px] text-muted-foreground">prod</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section number="04" title="Events" description="Contract on the shared event bus.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-border p-5">
            <div className="kicker mb-3">Produced</div>
            {cap.events.produced.length === 0 ? (
              <p className="text-xs text-muted-foreground italic">None</p>
            ) : (
              <ul className="font-mono text-xs space-y-1.5">
                {cap.events.produced.map((e) => <li key={e}>↑ {e}</li>)}
              </ul>
            )}
          </div>
          <div className="border border-border p-5">
            <div className="kicker mb-3">Consumed</div>
            {cap.events.consumed.length === 0 ? (
              <p className="text-xs text-muted-foreground italic">None</p>
            ) : (
              <ul className="font-mono text-xs space-y-1.5">
                {cap.events.consumed.map((e) => <li key={e}>↓ {e}</li>)}
              </ul>
            )}
          </div>
        </div>
      </Section>

      <Section number="05" title="Install" description="How an engineer brings this capability into a product.">
        <pre className="bg-ink text-bone p-5 font-mono text-xs overflow-x-auto leading-relaxed">
{`# inside any MATRIX product
pnpm add ${cap.package}

import { create${cap.name.replace(/\s/g, "")} } from "${cap.package}";

const ${cap.slug.replace(/-/g, "_")} = create${cap.name.replace(/\s/g, "")}({
  context: matrix.context,
  events:  matrix.events,
});`}
        </pre>
      </Section>
    </PageFrame>
  );
}
