import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides, getSlide2Advance, getSlide2GoBack, getSlide3Advance, getSlide3GoBack, getSlide5Advance, getSlide5GoBack } from "./slides";

export function Deck() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (delta: number) => {
      // Slide 2 (index 1): intercept arrow for internal card reveal
      if (index === 1) {
        if (delta === 1) {
          const consumed = getSlide2Advance()?.();
          if (consumed) return;
        } else if (delta === -1) {
          const consumed = getSlide2GoBack()?.();
          if (consumed) return;
        }
      }

      // Slide 3 (index 2): intercept arrow for Contexte → Problématique
      if (index === 2) {
        if (delta === 1) {
          const consumed = getSlide3Advance()?.();
          if (consumed) return;
        } else if (delta === -1) {
          const consumed = getSlide3GoBack()?.();
          if (consumed) return;
        }
      }

      // Slide 5 (index 4): intercept arrow for internal sprint reveal
      if (index === 4) {
        if (delta === 1) {
          const consumed = getSlide5Advance()?.();
          if (consumed) return;
        } else if (delta === -1) {
          const consumed = getSlide5GoBack()?.();
          if (consumed) return;
        }
      }

      setDirection(delta);
      setIndex((i) => Math.max(0, Math.min(slides.length - 1, i + delta)));
    },
    [index],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") go(1);
      else if (e.key === "ArrowLeft" || e.key === "PageUp") go(-1);
      else if (e.key === "Home") {
        setDirection(-1);
        setIndex(0);
      } else if (e.key === "End") {
        setDirection(1);
        setIndex(slides.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const Current = slides[index].component;
  const theme = slides[index].theme ?? "light";

  return (
    <div
      className="siga-deck fixed inset-0 overflow-hidden"
      style={{
        background: theme === "dark" ? "var(--siga-dark)" : "var(--siga-cream)",
      }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, x: direction * 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Current />
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-50 h-[3px] bg-black/5">
        <motion.div
          className="h-full"
          style={{ background: "var(--siga-light)" }}
          initial={false}
          animate={{ width: `${((index + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Controls — arrows only */}
      <div
        className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-white/70 px-3 py-2 backdrop-blur-xl"
        style={{ boxShadow: "0 8px 24px -8px rgba(30,58,95,0.25)" }}
      >
        <button
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Previous slide"
          className="grid h-8 w-8 place-items-center rounded-full text-[color:var(--siga-dark)] transition hover:bg-[color:var(--siga-bg)] disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="min-w-[64px] text-center text-[12px] font-medium tabular-nums text-[color:var(--siga-dark)]">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-1 text-[color:var(--siga-mid)]/40">/</span>
          {String(slides.length).padStart(2, "0")}
        </div>
        <button
          onClick={() => go(1)}
          disabled={index === slides.length - 1}
          aria-label="Next slide"
          className="grid h-8 w-8 place-items-center rounded-full text-[color:var(--siga-dark)] transition hover:bg-[color:var(--siga-bg)] disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}