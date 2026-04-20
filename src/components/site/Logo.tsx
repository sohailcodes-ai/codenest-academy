export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/[0.03] ring-1 ring-border">
        <span className="text-base font-semibold tracking-tight">
          <span className="text-primary">C</span>
          <span className="text-navy">N</span>
        </span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight">
          CodeNest <span className="text-muted-foreground font-normal">Academy</span>
        </span>
      </div>
    </div>
  );
}
