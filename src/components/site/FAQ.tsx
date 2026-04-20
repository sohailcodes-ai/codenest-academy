import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Are home visits safe? Who comes to our house?",
    a: "Md Sohail Ali (the founder) personally conducts every home visit — no third-party tutors. Parents are welcome to sit in for the first session. ID and references can be shared on request, and classes happen in your living/study area, not behind closed doors.",
  },
  {
    q: "What's the refund policy?",
    a: "The first class is completely free — no card, no commitment. After that, fees are paid monthly. If you decide to stop within the first week of a paid month, we refund the unused portion. No long-term contracts, ever.",
  },
  {
    q: "How flexible is the schedule?",
    a: "Very. Classes are scheduled around your child's school, exams and other activities. We do mornings, evenings and weekends. If you need to reschedule a class, just message on WhatsApp at least a few hours in advance.",
  },
  {
    q: "What's the right age range for these courses?",
    a: "Students from age 10 up to college level. MS Office and HTML/CSS work well for younger learners (10–13). Python, JavaScript and Java are best for 13+. Adults and working professionals are welcome too.",
  },
  {
    q: "Do you provide a certificate?",
    a: "We focus on real projects over paper certificates. At the end of each course your child has something they actually built — far more valuable in interviews and college applications than a printed certificate.",
  },
  {
    q: "What does my child need to start?",
    a: "A laptop or desktop with internet. For online classes, Google Meet (free). For home visits in Hyderabad, we just need a quiet table. That's it — no expensive software or setup required.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-border bg-soft/40">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">FAQs</span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Questions parents ask.
          </h2>
          <p className="mt-3 text-muted-foreground">Honest answers — message on WhatsApp for anything else.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border bg-card transition-all ${isOpen ? "border-primary/40 shadow-card" : "border-border"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-foreground md:text-base">{f.q}</span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${isOpen ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
