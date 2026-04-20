import { createFileRoute } from "@tanstack/react-router";
import { Layout, WHATSAPP_URL } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";
import { ExternalLink, ArrowRight, Monitor, MessageSquare, Brain, Salad, Globe } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — CodeNest Academy" },
      { name: "description", content: "Real products built solo by Md Sohail Ali — Nexos Desktop web OS, uncensored.chat, uncensored.ai, NutriWise, nexao.in." },
      { property: "og:title", content: "Projects — Real things, shipped solo" },
      { property: "og:description", content: "A web OS, AI tools, and live platforms — all built by your instructor." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    name: "Nexos Desktop",
    tag: "Web OS",
    icon: Monitor,
    url: undefined,
    tone: "primary" as const,
    summary: "A fully working desktop operating system that runs in your browser — windows, apps, file system, the works.",
    case: "Built from scratch with vanilla JavaScript and React. Implements draggable/resizable windows, a taskbar, multiple bundled apps (notes, browser, terminal), and a virtual file system stored in the browser. The hardest part was getting window z-index, focus and minimize behavior to feel native.",
    stack: ["React", "TypeScript", "IndexedDB", "Custom WM"],
  },
  {
    name: "uncensored.chat",
    tag: "Live Platform",
    icon: MessageSquare,
    url: "https://uncensored.chat",
    tone: "navy" as const,
    summary: "A live chat platform deployed and running in production — real users, real uptime.",
    case: "End-to-end build: front-end, backend API, auth, message persistence and deployment. Designed the schema, set up the streaming responses, and shipped it solo. Taught me how production differs from tutorials — rate limiting, abuse handling, and cost control matter.",
    stack: ["Next.js", "Node", "Postgres", "Streaming"],
  },
  {
    name: "uncensored.ai",
    tag: "AI Tool",
    icon: Brain,
    url: "https://uncensored.ai",
    tone: "primary" as const,
    summary: "An AI-powered tool live on the web — built solo, deployed solo, maintained solo.",
    case: "Wired up multiple model providers behind a single clean interface. Handled prompt design, API key rotation, and a usage tier system. The interesting engineering was making the streaming UI feel instant on slow networks.",
    stack: ["React", "AI APIs", "Edge Functions"],
  },
  {
    name: "NutriWise Online",
    tag: "Live Web App",
    icon: Salad,
    url: "https://nutriwise-online.vercel.app",
    tone: "navy" as const,
    summary: "A nutrition and meal-planning web app with a clean, friendly UI.",
    case: "Designed and built the entire UX — onboarding, food logging, daily summaries. Focused on making the app usable on phones first, then desktop. Good practice in turning a vague idea into a shippable product.",
    stack: ["React", "Tailwind", "Vercel"],
  },
  {
    name: "nexao.in",
    tag: "Live Website",
    icon: Globe,
    url: "https://nexao.in",
    tone: "primary" as const,
    summary: "A production website live on a real .in domain — responsive, fast, SEO-ready.",
    case: "Set up the domain, hosting, analytics and content from scratch. Used semantic HTML and proper meta tags so the site actually shows up in search. Small project, but a complete one from idea to live URL.",
    stack: ["HTML", "CSS", "JS", "DNS"],
  },
];

function ProjectsPage() {
  return (
    <Layout>
      <section className="border-b border-border bg-soft/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Projects</span>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
            Real things, shipped solo.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A web OS, AI tools and live platforms — all designed, coded and deployed by me. This is what I teach from.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => {
              const isPrimary = p.tone === "primary";
              return (
                <article
                  key={p.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  {/* Visual header */}
                  <div className={`relative aspect-[16/9] w-full overflow-hidden ${isPrimary ? "bg-gradient-to-br from-primary/15 via-background to-primary/5" : "bg-gradient-to-br from-navy/15 via-background to-navy/5"}`}>
                    <div className="absolute inset-0 [background-image:linear-gradient(to_right,oklch(0.93_0.005_260)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.93_0.005_260)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
                    <div className="absolute left-5 top-5 flex items-center gap-2">
                      <span className="inline-flex h-3 w-3 rounded-full bg-destructive/70" />
                      <span className="inline-flex h-3 w-3 rounded-full bg-primary/70" />
                      <span className="inline-flex h-3 w-3 rounded-full bg-navy/40" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ring-1 ring-border shadow-card ${isPrimary ? "bg-primary text-primary-foreground" : "bg-navy text-navy-foreground"}`}>
                        <p.icon size={36} />
                      </div>
                    </div>
                    <div className="absolute right-5 top-5">
                      <span className="rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/70 backdrop-blur ring-1 ring-border">
                        {p.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-xl font-semibold tracking-tight">{p.name}</h2>
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-primary hover:underline"
                        >
                          Visit <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.summary}</p>

                    <div className="mt-4 rounded-xl bg-muted/60 p-4">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Case study</div>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground/75">{p.case}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-foreground/70">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6 md:flex-row md:items-center">
            <div>
              <div className="text-base font-semibold">Want your child to build something like this?</div>
              <div className="text-sm text-muted-foreground">Every course ends with a real project they can show off.</div>
            </div>
            <a
              href={WHATSAPP_URL} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:brightness-105"
            >
              Book Free Demo <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
