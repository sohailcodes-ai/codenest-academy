import { WHATSAPP_URL, PHONE, EMAIL } from "./Layout";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const items = [
  { icon: MessageCircle, label: "WhatsApp", value: PHONE, href: WHATSAPP_URL, accent: true },
  { icon: Phone, label: "Phone", value: PHONE, href: `tel:+919346003989` },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: "Location", value: "Hyderabad, Telangana", href: undefined },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Contact</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Let's talk.</h2>
          <p className="mt-3 text-white/60">
            First class is FREE — message us on WhatsApp to book.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => {
            const inner = (
              <div className={`group h-full rounded-2xl border p-6 transition-all ${it.accent ? "border-primary/40 bg-primary/10 hover:bg-primary/15" : "border-white/10 bg-white/5 hover:bg-white/10"}`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${it.accent ? "bg-primary text-primary-foreground" : "bg-white/10 text-white"}`}>
                  <it.icon size={18} />
                </div>
                <div className="mt-4 text-xs uppercase tracking-wider text-white/50">{it.label}</div>
                <div className="mt-1 text-sm font-medium text-white">{it.value}</div>
              </div>
            );
            return it.href ? (
              <a key={it.label} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {inner}
              </a>
            ) : (
              <div key={it.label}>{inner}</div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/10 p-6 md:flex-row md:items-center">
          <div>
            <div className="text-base font-semibold">Ready to start? First class is on us.</div>
            <div className="text-sm text-white/60">A 30-min free demo — see how we teach before you decide.</div>
          </div>
          <a
            href={WHATSAPP_URL} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:brightness-105"
          >
            Message on WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
