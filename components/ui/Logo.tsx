interface LogoProps {
  dark?: boolean;
}

export function Logo({ dark = false }: LogoProps) {
  return (
    <a href="#home" className="flex items-center gap-2.5 font-extrabold text-lg tracking-tight">
      <span className="relative h-10 w-10 rounded-xl bg-[var(--gradient-blue)] grid place-items-center text-white shadow-[var(--shadow-soft)]">
        <span className="text-[11px] font-black tracking-tighter">EPS</span>
      </span>
      <span className={dark ? "text-navy" : "text-white"}>
        EPS <span className="font-medium opacity-75">Services</span>
      </span>
    </a>
  );
}