import { createFileRoute } from "@tanstack/react-router";
import { Layout, WHATSAPP_URL } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";
import { Code2, Globe, FileCode, Braces, Coffee, FileText, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — CodeNest Academy" },
      { name: "description", content: "Python, Web Dev, HTML & CSS, JavaScript, Java, MS Office. ₹500/month with a real project at the end. First class free." },
      { property: "og:title", content: "Courses — CodeNest Academy" },
      { property: "og:description", content: "Real, project-based coding courses in Hyderabad. ₹500/month." },
    ],
  }),
  component: CoursesPage,
});

const courses = [
  { icon: Code2, name: "Python Basics", level: "Beginner", desc: "Variables, loops, functions, OOP basics. Build a calculator and a small game.", outcomes: ["Calculator app", "Number guessing game", "File handling"], color: "primary" },
  { icon: Globe, name: "Web Development", level: "Intermediate", desc: "HTML + CSS + JavaScript together. Build a real responsive website.", outcomes: ["Personal portfolio site", "Responsive layouts", "Deployed live"], color: "navy" },
  { icon: FileCode, name: "HTML & CSS", level: "Beginner", desc: "Structure and style modern web pages — Flexbox, Grid, animations.", outcomes: ["Landing page clone", "Animations & transitions", "Mobile-first design"], color: "primary" },
  { icon: Braces, name: "JavaScript", level: "Intermediate", desc: "DOM, events, fetch, ES6+. Make pages interactive with real mini apps.", outcomes: ["To-do app", "Weather app (API)", "Quiz game"], color: "navy" },
  { icon: Coffee, name: "Java Basics", level: "Beginner", desc: "Core syntax + OOP fundamentals. Perfect for college and exam prep.", outcomes: ["Console banking app", "OOP exercises", "Exam-ready notes"], color: "primary" },
  { icon: FileText, name: "MS Office", level: "Beginner", desc: "Word, Excel, PowerPoint — practical skills for school, work, and life.", outcomes: ["Excel formulas", "Pro presentations", "Resume in Word"], color: "navy" },
];

function CoursesPage() {
  return (
    <Layout>
      <section className="border-b border-border bg-soft/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Courses</span>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">All courses, one flat price.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every course is ₹500/month. First class free. End each one with a real project you built yourself.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-5 md:grid-cols-2">
            {courses.map((c) => {
              const isPrimary = c.color === "primary";
              return (
                <div key={c.name} className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
                  <div className={`h-1 ${isPrimary ? "bg-primary" : "bg-navy"}`} />
                  <div className="p-7">
                    <div className="flex items-start justify-between">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${isPrimary ? "bg-primary/10 text-primary" : "bg-navy/10 text-navy"}`}>
                        <c.icon size={20} />
                      </div>
                      <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{c.level}</span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{c.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {c.outcomes.map((o) => (
                        <li key={o} className="flex items-center gap-2 text-sm text-foreground/80">
                          <Check size={14} className="text-primary" /> {o}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                      <div>
                        <span className="text-2xl font-semibold">₹500</span>
                        <span className="text-xs text-muted-foreground">/month</span>
                      </div>
                      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-105">
                        Enroll <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
