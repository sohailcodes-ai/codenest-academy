import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const WA = "https://wa.me/919346003989";

const links = [
  { to: "/courses", label: "Courses" },
  { to: "/projects", label: "Projects" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105 md:inline-flex"
          >
            Book Free Demo
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Book Free Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
