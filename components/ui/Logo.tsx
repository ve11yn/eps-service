import Image from "next/image";

interface LogoProps {
  dark?: boolean;
}

export function Logo({ dark = false }: LogoProps) {
  return (
    <a href="#home" className="flex items-center gap-2.5 text-lg tracking-tight">
      <Image
        src="/logo-temp.png"
        alt="EPS Services logo"
        width={40}
        height={40}
        className="h-10 w-10 shrink-0"
        priority
      />
      <span className={dark ? "text-slate-900 font-medium" : "text-white font-medium"}>
        EPS <span className="font-medium opacity-75">Services</span>
      </span>
    </a>
  );
}
