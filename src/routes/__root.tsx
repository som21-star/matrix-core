import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AppShell } from "../components/app-shell";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md">
        <div className="kicker mb-6">Error · 404</div>
        <h1 className="text-5xl font-light tracking-tight text-foreground">
          Capability not found.
        </h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          The route you requested is not registered in the Capability Registry.
          Check the URL, or return to the platform home.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-foreground px-4 py-2 text-sm hover:bg-foreground hover:text-background transition-colors"
            style={{ transitionTimingFunction: "var(--ease-matrix)" }}
          >
            Return to platform
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md">
        <div className="kicker mb-6">Runtime · Exception</div>
        <h1 className="text-3xl font-light tracking-tight">This surface failed to load.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          A capability boundary caught an unhandled exception. You can retry, or
          return to the platform home.
        </p>
        <div className="mt-8 flex gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-foreground px-4 py-2 text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Retry
          </button>
          <a
            href="/"
            className="border border-border px-4 py-2 text-sm hover:bg-secondary transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MATRIX Intelligence Platform" },
      {
        name: "description",
        content:
          "The Enterprise Intelligence Operating System — shared capabilities, knowledge, and architecture for every MATRIX product.",
      },
      { name: "author", content: "MATRIX" },
      { property: "og:title", content: "MATRIX Intelligence Platform" },
      {
        property: "og:description",
        content: "Intelligence. Architecture. Impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "MATRIX Intelligence Platform" },
      { name: "description", content: "MATRIX Intelligence Platform (MIP) is an enterprise intelligence operating system providing shared intelligence capabilities for all MATRIX products." },
      { property: "og:description", content: "MATRIX Intelligence Platform (MIP) is an enterprise intelligence operating system providing shared intelligence capabilities for all MATRIX products." },
      { name: "twitter:description", content: "MATRIX Intelligence Platform (MIP) is an enterprise intelligence operating system providing shared intelligence capabilities for all MATRIX products." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7f8b8902-6dac-4d9e-90a1-ee63841cdd78/id-preview-9ea8646e--6be6ccd6-f869-4231-9ac4-23a7dacbb010.lovable.app-1782622398780.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7f8b8902-6dac-4d9e-90a1-ee63841cdd78/id-preview-9ea8646e--6be6ccd6-f869-4231-9ac4-23a7dacbb010.lovable.app-1782622398780.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AppShell>
        <Outlet />
      </AppShell>
    </QueryClientProvider>
  );
}
