import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Layers,
  Cpu,
  Network,
  Wrench,
  ShieldCheck,
  FileCode2,
  Package,
  BookOpen,
  GitBranch,
  FileText,
  FlaskConical,
  Scale,
  Settings,
  Workflow,
  Search,
  Command,
} from "lucide-react";
import { MatrixMark } from "@/components/matrix-mark";

type NavItem = {
  label: string;
  to: string;
  icon: typeof Home;
  code: string;
};

type NavSection = { label: string; items: NavItem[] };

const NAV: NavSection[] = [
  {
    label: "Platform",
    items: [
      { label: "Home", to: "/", icon: Home, code: "00" },
      { label: "Architecture", to: "/architecture", icon: Layers, code: "01" },
      { label: "Capabilities", to: "/capabilities", icon: Workflow, code: "02" },
    ],
  },
  {
    label: "Intelligence Layers",
    items: [
      { label: "AI Platform", to: "/ai-platform", icon: Cpu, code: "03" },
      { label: "Knowledge Platform", to: "/knowledge-platform", icon: Network, code: "04" },
      { label: "Developer Platform", to: "/developer-platform", icon: Wrench, code: "05" },
      { label: "Engineering Standards", to: "/engineering-standards", icon: ShieldCheck, code: "06" },
    ],
  },
  {
    label: "Registry",
    items: [
      { label: "Packages", to: "/packages", icon: Package, code: "07" },
      { label: "Templates", to: "/templates", icon: FileCode2, code: "08" },
      { label: "Ontology", to: "/ontology", icon: BookOpen, code: "09" },
      { label: "Knowledge Graph", to: "/knowledge-graph", icon: GitBranch, code: "10" },
    ],
  },
  {
    label: "Governance",
    items: [
      { label: "Architecture Decisions", to: "/adr", icon: FileText, code: "11" },
      { label: "Documentation", to: "/docs", icon: BookOpen, code: "12" },
      { label: "Experiments", to: "/experiments", icon: FlaskConical, code: "13" },
      { label: "Governance", to: "/governance", icon: Scale, code: "14" },
      { label: "Settings", to: "/settings", icon: Settings, code: "15" },
    ],
  },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="hidden md:flex w-[260px] flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border sticky top-0 h-screen">
        <div className="px-6 pt-7 pb-6 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-3">
            <MatrixMark className="h-7 w-7 text-[var(--gold)]" />
            <div className="leading-tight">
              <div className="text-[11px] tracking-[0.22em] text-[var(--gold)] font-mono">
                MATRIX
              </div>
              <div className="text-sm text-bone font-medium tracking-wide">
                Intelligence Platform
              </div>
            </div>
          </Link>
        </div>

        <div className="px-4 pt-5 pb-3">
          <button
            className="w-full flex items-center justify-between gap-2 border border-sidebar-border bg-sidebar-accent/40 px-3 py-2 text-xs text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
            style={{ transitionTimingFunction: "var(--ease-matrix)" }}
          >
            <span className="flex items-center gap-2">
              <Search className="h-3.5 w-3.5" />
              Search capabilities
            </span>
            <span className="flex items-center gap-1 text-[10px] opacity-70">
              <Command className="h-3 w-3" />K
            </span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 pb-6">
          {NAV.map((section) => (
            <div key={section.label} className="mt-5 first:mt-0">
              <div className="px-4 pb-2 text-[10px] tracking-[0.22em] text-sidebar-foreground/50 font-mono uppercase">
                {section.label}
              </div>
              <ul>
                {section.items.map((item) => {
                  const active =
                    item.to === "/"
                      ? pathname === "/"
                      : pathname === item.to || pathname.startsWith(item.to + "/");
                  const Icon = item.icon;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className={`group flex items-center gap-3 px-4 py-2 text-[13px] border-l-2 transition-colors ${
                          active
                            ? "border-[var(--gold)] bg-sidebar-accent text-bone"
                            : "border-transparent text-sidebar-foreground hover:text-bone hover:bg-sidebar-accent/60"
                        }`}
                        style={{ transitionTimingFunction: "var(--ease-matrix)" }}
                      >
                        <span
                          className={`font-mono text-[10px] ${
                            active ? "text-[var(--gold)]" : "opacity-50"
                          }`}
                        >
                          {item.code}
                        </span>
                        <Icon className="h-3.5 w-3.5 opacity-80" />
                        <span className="tracking-wide">{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-sidebar-border px-5 py-4 text-[10px] font-mono text-sidebar-foreground/60 leading-relaxed">
          <div className="flex items-center justify-between">
            <span>v0.14.0 · main</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
          </div>
          <div className="mt-1 opacity-70">build 2026.06 · stable</div>
        </div>
      </aside>

      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
