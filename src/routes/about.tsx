import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";
import sohail from "@/assets/sohail.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Md Sohail Ali · CodeNest Academy" },
      { name: "description", content: "Md Sohail Ali — BCA student & independent developer from Hyderabad. Built Nexos Desktop Web OS and live platforms solo." },
      { property: "og:title", content: "About — Md Sohail Ali · CodeNest Academy" },
      { property: "og:description", content: "I don't just teach coding — I build real products." },
    ],
  }),
  component: AboutPage,
});

const skills = ["Python", "HTML & CSS", "JavaScript", "Java", "Web Dev", "MS Office", "Game Dev"];
const projects = [
  { name: "Nexos Desktop", desc: "A fully working desktop-style web OS — windows, apps, file system, all built solo." },
  { name: "Live Platforms", desc: "Multiple deployed web platforms — full-stack, shipped end-to-end." },
  { name: "Games from Scratch", desc: "Custom-built browser games using JavaScript and game logic." },
];

function AboutPage() {
  return (
    <Layout>
      <section className="border-b border-border bg-soft/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[320px_1fr] md:gap-14">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-navy/20 ring-1 ring-border shadow-card">
              <img src={sohail} alt="Md Sohail Ali" className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">About the Instructor</span>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Md Sohail Ali</h1>
              <p className="mt-1 text-muted-foreground">Founder & Instructor · CodeNest Academy</p>
              <p className="mt-6 text-lg italic text-foreground/80">
                "I don't just teach coding — I build real products. Every course ends with a real project you built yourself."
              </p>
              <p className="mt-6 leading-relaxed text-foreground/80">
                I'm a BCA student and independent developer from Hyderabad. While most tutors only know theory, I build and ship real products. I've built a fully working web OS (Nexos Desktop), deployed live platforms solo, and created multiple games from scratch.
              </p>
              <p className="mt-3 leading-relaxed text-foreground/80">
                I started CodeNest Academy because students deserve someone who teaches what actually works — not just what's in the syllabus. Every course ends with a real project you can show your parents, your teachers, and one day, your employer.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/80">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Real Work</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Things I've actually built.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-card">
                <h3 className="text-base font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
