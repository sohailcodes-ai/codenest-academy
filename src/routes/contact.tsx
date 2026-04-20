import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CodeNest Academy" },
      { name: "description", content: "WhatsApp +91 93460 03989 or email sohailali8480@gmail.com. First class is free." },
      { property: "og:title", content: "Contact — CodeNest Academy" },
      { property: "og:description", content: "Message us on WhatsApp to book your free first class." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="border-b border-border bg-soft/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Contact</span>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">Let's talk.</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            The fastest way to reach us is WhatsApp. We usually reply within an hour.
          </p>
        </div>
      </section>
      <ContactSection />
    </Layout>
  );
}
