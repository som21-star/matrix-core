import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { layers, capabilities } from "@/data/platform";
import { MatrixMark } from "@/components/matrix-mark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MATRIX Intelligence Platform — Intelligence. Architecture. Impact." },
      {
        name: "description",
        content:
          "The shared intelligence kernel for every MATRIX product. Six architectural layers — one operating system for intelligence.",
      },
      {
        property: "og:title",
        content: "MATRIX Intelligence Platform",
      },
      {
        property: "og:description",
        content:
          "The shared intelligence kernel for every MATRIX product. Capabilities, knowledge, and architecture as a single platform.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative border-b border-border overflow-hidden">
        <BackgroundGrid />
        <div className="relative max-w-[1200px] mx-auto px-10 lg:px-16 pt-20 lg:pt-28 pb-24">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-[11px] tracking-[0.22em] text-accent">
              MATRIX · MIP · v0.14.0
            </span>
            <span className="h-px w-12 bg-accent" />
            <span className="kicker">The Design Constitution · Active</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="text-5xl lg:text-7xl xl:text-[88px] font-extralight tracking-[-0.02em] leading-[0.98]">
                The Intelligence
                <br />
                Operating System
                <br />
                of <span className="italic font-light text-accent">MATRIX.</span>
              </h1>
              <p className="mt-10 max-w-xl text-base lg:text-lg text-muted-foreground font-light leading-relaxed">
                Not an application. Not a service. The foundational kernel that every
                MATRIX product consumes — shared intelligence, shared knowledge, shared
                context, shared architecture.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/capabilities"
                  className="group inline-flex items-center gap-3 bg-foreground text-background px-5 py-3 text-sm tracking-wide hover:bg-accent hover:text-accent-foreground transition-colors"
                  style={{ transitionTimingFunction: "var(--ease-matrix)" }}
                >
                  Browse the Capability Registry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    style={{ transitionTimingFunction: "var(--ease-matrix)" }} />
                </Link>
                <Link
                  to="/architecture"
                  className="inline-flex items-center gap-3 border border-foreground px-5 py-3 text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
                  style={{ transitionTimingFunction: "var(--ease-matrix)" }}
                >
                  Read the architecture
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:pl-8">
              <div className="border border-border bg-surface p-6">
                <div className="kicker mb-4">Principle · 01</div>
                <p className="text-sm leading-relaxed">
                  Capabilities before services. Shared context over API calls. Knowledge
                  over data. Events over request chains. Adaptive intelligence over
                  static workflows.
                </p>
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                  <span className="kicker">Status</span>
                  <span className="text-xs font-mono flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    16 capabilities · stable
                  </span>
                </div>
              </div>

              <div className="mt-4 border border-border bg-surface p-6">
                <div className="kicker mb-4">Consumed by</div>
                <ul className="text-sm space-y-2">
                  {["DATUM — AI Native Data Platform", "HUMMING — Operations Intelligence", "Sustainability Intelligence", "Supply Chain Intelligence", "Risk Intelligence"].map((p) => (
                    <li key={p} className="flex items-center justify-between gap-2 border-b border-border last:border-0 pb-2 last:pb-0">
                      <span>{p}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-50" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIX LAYERS */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-10 lg:px-16 py-20">
          <div className="flex items-end justify-between gap-8 mb-12">
            <div>
              <div className="kicker mb-4">Part II · The Platform</div>
              <h2 className="text-4xl font-light tracking-tight max-w-xl leading-tight">
                Six architectural layers. One operating system.
              </h2>
            </div>
            <p className="hidden lg:block max-w-sm text-sm text-muted-foreground leading-relaxed">
              The platform is organized the way an operating system is organized — by
              kernel, runtime, libraries, developer surface, and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
            {layers.map((l) => (
              <div
                key={l.n}
                className="group border-r border-b border-border p-7 bg-surface/30 hover:bg-surface transition-colors relative"
                style={{ transitionTimingFunction: "var(--ease-matrix)" }}
              >
                <div className="flex items-baseline justify-between">
                  <div className="font-mono text-accent text-sm tracking-wider">
                    L{l.n}
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="mt-4 text-xl font-light tracking-tight leading-tight">
                  {l.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {l.purpose}
                </p>
                <ul className="mt-5 space-y-1.5 text-[12px] text-foreground/75">
                  {l.contains.slice(0, 6).map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span className="h-px w-3 bg-accent/70" />
                      {c}
                    </li>
                  ))}
                  {l.contains.length > 6 && (
                    <li className="text-muted-foreground font-mono text-[11px] pl-5">
                      + {l.contains.length - 6} more
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITY REGISTRY HIGHLIGHT */}
      <section className="border-b border-border bg-ink text-bone">
        <div className="max-w-[1200px] mx-auto px-10 lg:px-16 py-24">
          <div className="grid grid-cols-12 gap-10 items-start">
            <div className="col-span-12 lg:col-span-5">
              <div className="font-mono text-[11px] tracking-[0.22em] text-[var(--gold)] mb-6">
                THE HEART · CAPABILITY REGISTRY
              </div>
              <h2 className="text-4xl lg:text-5xl font-extralight tracking-tight leading-[1.05]">
                Don't ask <span className="line-through opacity-40">what services exist.</span>
                <br />
                Ask <span className="text-[var(--gold)] italic">what capabilities exist.</span>
              </h2>
              <p className="mt-8 text-sm text-bone/70 leading-relaxed max-w-md">
                The Capability Registry is the catalog of organizational intelligence —
                not just reusable code. When HUMMING needs a Planner, it does not build
                one. It discovers it here.
              </p>
              <Link
                to="/capabilities"
                className="mt-10 inline-flex items-center gap-3 text-[var(--gold)] border-b border-[var(--gold)] pb-1 text-sm tracking-wide hover:gap-4 transition-all"
                style={{ transitionTimingFunction: "var(--ease-matrix)" }}
              >
                Explore all {capabilities.length} capabilities
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="border border-bone/15">
                <div className="grid grid-cols-12 px-5 py-3 font-mono text-[10px] tracking-[0.18em] text-bone/50 border-b border-bone/15">
                  <div className="col-span-5">CAPABILITY</div>
                  <div className="col-span-4">PACKAGE</div>
                  <div className="col-span-2">VERSION</div>
                  <div className="col-span-1 text-right">·</div>
                </div>
                {capabilities.slice(0, 8).map((c) => (
                  <Link
                    key={c.slug}
                    to="/capabilities/$slug"
                    params={{ slug: c.slug }}
                    className="grid grid-cols-12 px-5 py-3.5 border-b border-bone/10 last:border-0 hover:bg-bone/5 transition-colors items-center"
                    style={{ transitionTimingFunction: "var(--ease-matrix)" }}
                  >
                    <div className="col-span-5 text-sm">{c.name}</div>
                    <div className="col-span-4 font-mono text-xs text-bone/60">
                      {c.package}
                    </div>
                    <div className="col-span-2 font-mono text-xs text-bone/60">
                      {c.version}
                    </div>
                    <div className="col-span-1 text-right">
                      <span
                        className={`inline-block h-1.5 w-1.5 rounded-full ${
                          c.status === "stable" ? "bg-[var(--gold)]" : "bg-bone/40"
                        }`}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT INTEGRATION */}
      <section className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-10 lg:px-16 py-20">
          <div className="kicker mb-4">Part III · Integration</div>
          <h2 className="text-4xl font-light tracking-tight max-w-xl">
            How products consume intelligence.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Each product composes capabilities from the platform rather than reinventing
            them. The same Planner that schedules data lineage in DATUM optimizes
            operations in HUMMING.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <ProductFlow
              code="P-01"
              name="DATUM"
              tagline="AI-native data platform"
              flow={["Context Engine", "Memory", "Knowledge Graph", "Planner", "Reasoner", "Insights"]}
            />
            <ProductFlow
              code="P-02"
              name="HUMMING"
              tagline="Operations intelligence"
              flow={["Planner", "Optimization", "Simulation", "Memory", "Knowledge", "Decision Intelligence"]}
            />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-ink text-bone">
        <div className="max-w-[1200px] mx-auto px-10 lg:px-16 py-24 flex flex-col items-center text-center">
          <MatrixMark className="h-12 w-12 text-[var(--gold)] mb-10" />
          <p className="text-2xl lg:text-3xl font-extralight tracking-tight max-w-2xl leading-snug">
            MATRIX is not a technology company. It is the invisible architecture through
            which intelligence becomes impact.
          </p>
          <div className="mt-10 font-mono text-[11px] tracking-[0.32em] text-[var(--gold)]">
            INTELLIGENCE · ARCHITECTURE · IMPACT
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductFlow({
  code,
  name,
  tagline,
  flow,
}: {
  code: string;
  name: string;
  tagline: string;
  flow: string[];
}) {
  return (
    <div className="border border-border bg-surface p-7">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="font-mono text-[11px] tracking-[0.2em] text-accent">
            {code}
          </div>
          <h3 className="mt-1 text-2xl font-light tracking-tight">{name}</h3>
          <p className="text-sm text-muted-foreground">{tagline}</p>
        </div>
      </div>
      <ol className="mt-6 space-y-0">
        {flow.map((step, i) => (
          <li key={step} className="flex items-center gap-4 py-2.5 border-t border-border first:border-0">
            <span className="font-mono text-[10px] text-muted-foreground w-6">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm">{step}</span>
            {i === flow.length - 1 && (
              <span className="ml-auto text-[10px] font-mono text-accent">↦ OUT</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 opacity-[0.35] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--rule) 1px, transparent 1px), linear-gradient(to bottom, var(--rule) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 70%)",
      }}
    />
  );
}
