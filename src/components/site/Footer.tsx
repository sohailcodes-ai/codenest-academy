import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
              <span className="text-base font-semibold">
                <span className="text-primary">C</span>
                <span className="text-white">N</span>
              </span>
            </div>
            <span className="text-[15px] font-semibold tracking-tight">CodeNest Academy</span>
          </div>
          <p className="mt-3 text-sm text-white/60">Learn Real. Build Real.</p>
        </div>
        <p className="text-sm text-white/50">© 2025 CodeNest Academy · Hyderabad</p>
      </div>
    </footer>
  );
}
