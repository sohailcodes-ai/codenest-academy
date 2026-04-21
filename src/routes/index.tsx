import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, WHATSAPP_URL } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";
import { FAQ } from "@/components/site/FAQ";
import sohail from "@/assets/sohail.png";
import {
  Hammer, Home, Video, Eye, Rocket, MessageCircle,
  Code2, Globe, FileCode, Braces, Coffee, FileText,
  Check, ArrowRight, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeNest Academy — Learn Real Coding from a Real Builder" },
      {
        name: "description",
        content:
          "Hyderabad coding classes by an independent developer. Python, Web Dev, JavaScript, Java, MS Office. First class free. Online & home visits.",
      },
      { property: "og:title", content: "CodeNest Academy — Learn Real Coding" },
      {
        property: "og:description",
        content:
          "No boring lectures. No fake certificates. Just real skills and a real project at the end of every course.",
      },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Hammer, title: "Builder, not a teacher", text: "Learn from someone who actually ships products — not just slides.", tone: "primary" },
  { icon: Home, title: "Home visit option", text: "Prefer in-person? ₹499 + ₹300 home visit charge in Hyderabad.", tone: "navy" },
  { icon: Video, title: "Online via Google Meet", text: "Live 1-on-1 sessions from anywhere. Screen-share, code together.", tone: "primary" },
  { icon: Eye, title: "Parent transparency", text: "Regular updates on progress — parents always in the loop.", tone: "navy" },
  { icon: Rocket, title: "Real project every course", text: "End each course with something you actually built and can show off.", tone: "primary" },
  { icon: MessageCircle, title: "WhatsApp support", text: "Stuck on something? Message me anytime — replies, not auto-bots.", tone: "navy" },
];

const courses = [
  { icon: Code2, name: "Python Basics", level: "Beginner", desc: "Variables, logic, loops, functions — build a calculator and a small game.", color: "primary" },
  { icon: Globe, name: "Web Development", level: "Intermediate", desc: "HTML + CSS + JS together. Ship a real responsive website by the end.", color: "navy" },
  { icon: FileCode, name: "HTML & CSS", level: "Beginner", desc: "Structure, style, layout. Build clean modern pages from scratch.", color: "primary" },
  { icon: Braces, name: "JavaScript", level: "Intermediate", desc: "DOM, events, fetch — make pages interactive with real mini apps.", color: "navy" },
  { icon: Coffee, name: "Java Basics", level: "Beginner", desc: "OOP fundamentals with hands-on examples — exam & college ready.", color: "primary" },
  { icon: FileText, name: "MS Office", level: "Beginner", desc: "Word, Excel, PowerPoint — practical skills for school, work, life.", color: "navy" },
];

const trustPills = [
  "First class free",
  "Parents welcome",
  "No hidden fees",
  "Home visits available",
];

const skills = ["Python", "HTML & CSS", "JavaScript", "Java", "Web Dev", "MS Office", "Game Dev"];

const pricing = [
  {
    name: "Free Trial", price: "₹0", per: "first class",
    features: ["1 free demo class", "Try before you commit", "No card, no signup", "Online or home visit"],
    cta: "Book Free Demo", featured: false,
  },
  {
    name: "Online", price: "₹499", per: "per month",
    features: ["Live 1-on-1 on Google Meet", "Real project at the end", "WhatsApp doubt support", "Flexible timings"],
    cta: "Start Online", featured: true,
  },
  {
    name: "Home Visit", price: "₹799", per: "per month",
    features: ["₹499 + ₹300 home visit charge", "I come to your home", "Hyderabad area", "1-on-1 personal attention", "Parent updates included"],
    cta: "Book Home Visit", featured: false,
  },
];

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.97_0.04_40),transparent)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Hyderabad · Online & Home Visits
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Learn Real Coding from a{" "}
              <span className="text-primary">Real Builder</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              No boring lectures. No fake certificates. Just practical skills that actually work.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105"
              >
                Book Free Demo <ArrowRight size={16} />
              </a>
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                See Courses
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustPills.map((p) => (
                <span key={p} className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  <Check size={12} className="text-primary" /> {p}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-background to-navy/20 ring-1 ring-border shadow-card">
              <img
                src={sohail}
                alt="Md Sohail Ali — Founder & Instructor"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -left-3 top-10 rounded-xl bg-background px-3 py-2 text-xs font-medium shadow-card ring-1 ring-border md:-left-6">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Sparkles size={14} />
                </span>
                BCA Developer
              </div>
            </div>
            <div className="absolute -right-3 bottom-12 rounded-xl bg-background px-3 py-2 text-xs font-medium shadow-card ring-1 ring-border md:-right-6">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-navy/10 text-navy">
                  <Rocket size={14} />
                </span>
                Real Projects
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CODENEST */}
      <section className="border-t border-border bg-soft/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Why CodeNest</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              Built different — because students deserve better.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${f.tone === "primary" ? "bg-primary/10 text-primary" : "bg-navy/10 text-navy"}`}>
                  <f.icon size={20} />
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Courses</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Pick what you want to learn.
              </h2>
              <p className="mt-3 text-muted-foreground">All courses ₹499/month. First class free.</p>
            </div>
            <Link to="/courses" className="text-sm font-medium text-primary hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <CourseCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT INSTRUCTOR */}
      <section className="border-t border-border bg-soft/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 md:grid-cols-[280px_1fr] md:gap-12 md:p-10">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-navy/20 ring-1 ring-border">
              <img src={sohail} alt="Md Sohail Ali" className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">About the Instructor</span>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Md Sohail Ali</h2>
              <p className="text-sm text-muted-foreground">Founder & Instructor · CodeNest Academy</p>
              <p className="mt-5 leading-relaxed text-foreground/80">
                I'm a BCA student and independent developer from Hyderabad. While most tutors only know theory, I build and ship real products. I've built a fully working web OS (Nexos Desktop), deployed live platforms solo, and created multiple games from scratch.
              </p>
              <p className="mt-3 leading-relaxed text-foreground/80">
                I started CodeNest Academy because students deserve someone who teaches what actually works — not just what's in the syllabus. Every course ends with a real project you can show your parents, your teachers, and one day, your employer.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/80">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                <Stat n="5+" l="Live Projects" />
                <Stat n="100%" l="Practical" />
                <Stat n="Free" l="First Demo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Pricing</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Simple, honest pricing.</h2>
            <p className="mt-3 text-muted-foreground">No hidden fees. Cancel anytime. First class always free.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {pricing.map((p) => <PricingCard key={p.name} {...p} />)}
          </div>
        </div>
      </section>

      {/* INSTITUTE QUOTE */}
      <section className="border-t border-border bg-navy text-navy-foreground">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our mission</span>
          <blockquote className="mt-4 text-2xl font-medium leading-relaxed tracking-tight md:text-3xl">
            "CodeNest Academy was founded with one goal — to teach coding the way it should be taught. Not from outdated textbooks. Not with fake certificates. But with real skills, real projects, and honest teaching."
          </blockquote>
          <p className="mt-6 text-sm text-white/60">— Md Sohail Ali, Founder</p>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CONTACT */}
      <ContactSection />
    </Layout>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight">{n}</div>
      <div className="text-xs text-muted-foreground">{l}</div>
    </div>
  );
}

function CourseCard({ icon: Icon, name, level, desc, color }: typeof courses[number]) {
  const isPrimary = color === "primary";
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className={`h-1 w-full ${isPrimary ? "bg-primary" : "bg-navy"}`} />
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${isPrimary ? "bg-primary/10 text-primary" : "bg-navy/10 text-navy"}`}>
            <Icon size={18} />
          </div>
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            {level}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-semibold">{name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <div>
            <span className="text-xl font-semibold">₹499</span>
            <span className="text-xs text-muted-foreground">/month</span>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
            Enroll →
          </a>
        </div>
      </div>
    </div>
  );
}

function PricingCard({ name, price, per, features, cta, featured }: typeof pricing[number]) {
  return (
    <div className={`relative rounded-2xl bg-card p-7 transition-all ${featured ? "border-2 border-primary shadow-card-hover md:-translate-y-2" : "border border-border hover:shadow-card"}`}>
      {featured && (
        <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="mt-4 flex items-baseline gap-1.5">
        <span className="text-4xl font-semibold tracking-tight">{price}</span>
        <span className="text-sm text-muted-foreground">/ {per}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check size={16} className="mt-0.5 shrink-0 text-primary" />
            <span className="text-foreground/80">{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={WHATSAPP_URL} target="_blank" rel="noreferrer"
        className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
          featured
            ? "bg-primary text-primary-foreground hover:brightness-105"
            : "border border-border bg-background text-foreground hover:bg-muted"
        }`}
      >
        {cta} <ArrowRight size={14} />
      </a>
    </div>
  );
}
export { CourseCard, PricingCard };
