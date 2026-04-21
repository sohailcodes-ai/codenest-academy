import { createFileRoute } from "@tanstack/react-router";
import { Layout, WHATSAPP_URL } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";
import { ExternalLink, ArrowRight } from "lucide-react";
import nexosImg from "@/assets/projects/nexos.jpg";
import uncensoredChatImg from "@/assets/projects/uncensored-chat.png";
import uncensoredAiImg from "@/assets/projects/uncensored-ai.png";
import nutriwiseImg from "@/assets/projects/nutriwise.png";
import nexaoImg from "@/assets/projects/nexao.png";

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
    image: nexosImg,
    url: undefined,
    tone: "primary" as const,
    summary: "A fully working desktop operating system that runs in your browser — windows, apps, file system, the works.",
    case: "Built from scratch with vanilla JavaScript and React. Implements draggable/resizable windows, a taskbar, multiple bundled apps (notes, browser, terminal), and a virtual file system stored in the browser. The hardest part was getting window z-index, focus and minimize behavior to feel native.",
    stack: ["React", "TypeScript", "IndexedDB", "Custom WM"],
  },
  {
    name: "uncensored.chat",
    tag: "Live Platform",
    image: uncensoredChatImg,
    url: "https://uncensored.chat",
    tone: "navy" as const,
    summary: "A live AI chat platform with 1000+ characters — voice, image and video features, real users in production.",
    case: "End-to-end build: front-end, backend API, auth, message persistence and deployment. Designed the schema, integrated streaming responses, and shipped solo. Taught me how production differs from tutorials — rate limiting, abuse handling, and cost control matter.",
    stack: ["Laravel", "Inertia", "Postgres", "Streaming"],
  },
  {
    name: "uncensored.ai",
    tag: "AI Tool",
    image: uncensoredAiImg,
    url: "https://uncensored.ai",
    tone: "primary" as const,
    summary: "An AI-powered ask-anything tool live on the web — clean dark UI, available on the App Store too.",
    case: "Wired up multiple model providers behind a single minimal interface. Handled prompt design, API key rotation, and a usage tier system. The interesting engineering was making the streaming UI feel instant on slow networks.",
    stack: ["Next.js", "AI APIs", "Edge Functions"],
  },
  {
    name: "NutriWise Online",
    tag: "Live Web App",
    image: nutriwiseImg,
    url: "https://nutri-wise.online",
    tone: "navy" as const,
    summary: "A nutrition and meal-planning web app with a clean, friendly UI — calories, macros, and daily plans.",
    case: "Designed and built the entire UX — onboarding, food logging, daily summaries, macro tracking. Focused on making it usable on phones first, then desktop. Good practice in turning a vague idea into a shippable product.",
    stack: ["React", "Tailwind", "Charts"],
  },
  {
    name: "nexao.in",
    tag: "Live Website",
    image: nexaoImg,
    url: "https://nexao.in",
    tone: "primary" as const,
    summary: "A production business-suite website live on a real .in domain — responsive, fast, SEO-ready.",
    case: "Set up the domain, hosting, analytics and content from scratch. Used Next.js for SSR, semantic HTML and proper meta tags so the site actually shows up in search. A complete project from idea to live URL.",
    stack: ["Next.js", "Tailwind", "Nginx", "DNS"],
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
                  {/* Screenshot header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <div className="absolute right-4 top-4">
                      <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur ring-1 ${isPrimary ? "bg-primary/90 text-primary-foreground ring-primary/40" : "bg-navy/90 text-navy-foreground ring-navy/40"}`}>
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
