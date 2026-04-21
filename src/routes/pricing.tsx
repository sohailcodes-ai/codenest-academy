import { createFileRoute } from "@tanstack/react-router";
import { Layout, WHATSAPP_URL } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — CodeNest Academy" },
      { name: "description", content: "Free first class. ₹499/month online. ₹799/month for home visits in Hyderabad. No hidden fees." },
      { property: "og:title", content: "Pricing — CodeNest Academy" },
      { property: "og:description", content: "Simple, honest pricing. First class always free." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  { name: "Free Trial", price: "₹0", per: "first class", features: ["1 free demo class", "Try before you commit", "No card, no signup", "Online or home visit"], cta: "Book Free Demo", featured: false },
  { name: "Online", price: "₹499", per: "per month", features: ["Live 1-on-1 on Google Meet", "Real project at the end", "WhatsApp doubt support", "Flexible timings", "Recordings on request"], cta: "Start Online", featured: true },
  { name: "Home Visit", price: "₹799", per: "per month", features: ["₹499 + ₹300 home visit charge", "I come to your home", "Hyderabad area only", "1-on-1 personal attention", "Parent updates included", "Flexible schedule"], cta: "Book Home Visit", featured: false },
];

function PricingPage() {
  return (
    <Layout>
      <section className="border-b border-border bg-soft/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Pricing</span>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Simple, honest pricing.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">No hidden fees. Cancel anytime. First class is always free.</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`relative rounded-2xl bg-card p-7 transition-all ${p.featured ? "border-2 border-primary shadow-card-hover md:-translate-y-2" : "border border-border hover:shadow-card"}`}>
                {p.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                  <span className="text-sm text-muted-foreground">/ {p.per}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                   className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${p.featured ? "bg-primary text-primary-foreground hover:brightness-105" : "border border-border bg-background text-foreground hover:bg-muted"}`}>
                  {p.cta} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
