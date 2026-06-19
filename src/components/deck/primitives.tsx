import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

export const rise: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SlideShell({
  children,
  className = "",
  theme = "light",
}: {
  children: ReactNode;
  className?: string;
  theme?: "light" | "dark";
}) {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{
        color: theme === "dark" ? "#fff" : "var(--siga-ink)",
      }}
    >
      {children}
    </motion.section>
  );
}

export function Eyebrow({ children, theme = "light" }: { children: ReactNode; theme?: "light" | "dark" }) {
  return (
    <motion.div
      variants={rise}
      className="inline-flex items-center gap-2 text-[16px] font-semibold uppercase tracking-[0.18em]"
      style={{ color: theme === "dark" ? "var(--siga-light)" : "var(--siga-mid)" }}
    >
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{ background: "currentColor" }}
      />
      {children}
    </motion.div>
  );
}

export function Logo({ variant = "dark", size = 28 }: { variant?: "dark" | "light"; size?: number }) {
  const stroke = variant === "dark" ? "#fff" : "var(--siga-dark)";
  const fill = variant === "dark" ? "var(--siga-light)" : "var(--siga-mid)";
  return (
    <div className="inline-flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="8" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
        <path d="M10 12.5C10 10.567 11.567 9 13.5 9H19a3 3 0 0 1 3 3v.5" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M22 19.5c0 1.933-1.567 3.5-3.5 3.5H13a3 3 0 0 1-3-3V19" stroke={fill} strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2" fill={fill} />
      </svg>
      <span
        className="text-[15px] font-bold tracking-tight"
        style={{ color: variant === "dark" ? "#fff" : "var(--siga-dark)" }}
      >
        SIGA
      </span>
    </div>
  );
}

export function YkonMark({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "dark" ? "rgba(255,255,255,0.7)" : "var(--siga-mid)";
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-medium tracking-wide" style={{ color }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 3l6 6 6-6M9 9v6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {/* EURL YKON removed as requested */}
    </div>
  );
}