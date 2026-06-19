import { motion, AnimatePresence, useAnimation, type Variants } from "framer-motion";
import { useState, useCallback } from "react";
import {
  Users, Cloud, Bot, Shield, Check, X,
  Sparkles, Smartphone, TrendingUp, Mic,
  ChevronRight, Zap, Target, FileText, PlayCircle,
} from "lucide-react";
import { SlideShell, Eyebrow, Logo, rise } from "./primitives";
import type { ComponentType } from "react";

/* ─── Slide number badge ────────────────────────────────────── */
function SlideNumber({ n, total, dark = false }: { n: number; total: number; dark?: boolean }) {
  return (
    <div
      className="absolute top-7 right-10 z-20 flex items-baseline gap-1.5 font-mono select-none"
      style={{ color: dark ? "rgba(255,255,255,0.3)" : "var(--siga-mid)" }}
    >
      <span className="text-[26px] font-black leading-none">{String(n).padStart(2, "0")}</span>
      <span className="text-[12px] font-semibold opacity-50">/ {String(total).padStart(2, "0")}</span>
    </div>
  );
}

const TOTAL = 7;

/* ══════════════════════════════════════════════════════════════
   SLIDE 1 — PAGE DE TITRE
══════════════════════════════════════════════════════════════ */
function Slide1() {
  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-30" />
      <SlideNumber n={1} total={TOTAL} />

      <div className="relative flex h-full flex-col">
        <motion.div variants={rise} className="flex items-center justify-between px-12 pt-10">
          <Logo variant="light" />
        </motion.div>

        <div className="flex flex-1 flex-col items-center justify-center px-12 text-center">
          <motion.div variants={rise}>
            <span
              className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-[13px] font-bold uppercase tracking-[0.18em]"
              style={{ borderColor: "rgba(30,58,95,0.1)", color: "var(--siga-dark)" }}
            >
              <Sparkles size={13} /> Mémoire de Fin d'Études — 2025/2026
            </span>
          </motion.div>

          <motion.h1
            variants={rise}
            className="mt-8 max-w-5xl text-[54px] font-bold leading-[1.05] tracking-[-0.04em]"
            style={{ color: "var(--siga-dark)" }}
          >
            SIGA — Système Intégré de
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, var(--siga-dark) 0%, var(--siga-mid) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Gestion Automatisée
            </span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-5 max-w-xl text-[19px] font-medium leading-relaxed"
            style={{ color: "var(--siga-dark)" }}
          >
            Développement d'un SaaS RH intelligent adapté au marché Algérien
          </motion.p>

          <motion.div variants={rise} className="mt-4 h-px w-20 rounded-full" style={{ background: "var(--siga-light)" }} />

          <motion.p variants={rise} className="mt-3 text-[14px] font-semibold tracking-wide" style={{ color: "var(--siga-mid)" }}>
            Master Professionnel — Informatique - Génie Logiciel — Université A/Mira de Béjaïa
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-white shadow-sm"
            style={{ borderColor: "rgba(30,58,95,0.1)" }}
          >
            {[
              { k: "Réalisé par", v: "HAMMACHE Amira", v2: "HADJI Melissaaaaa" },
              { k: "Encadrant", v: "M. ACHROUFENE Achour", v2: "Soutenance de Master" },
            ].map((item) => (
              <div key={item.k} className="border-r px-10 py-5 text-left last:border-0" style={{ borderColor: "rgba(30,58,95,0.05)" }}>
                <div className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--siga-dark)", opacity: 0.6 }}>{item.k}</div>
                <div className="mt-2 text-[16px] font-bold" style={{ color: "var(--siga-dark)" }}>{item.v}</div>
                <div className="text-[14px] font-medium" style={{ color: "var(--siga-dark)", opacity: 0.7 }}>{item.v2}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={rise} className="px-12 pb-8 text-center text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--siga-dark)", opacity: 0.4 }}>
          Appuyez sur → pour commencer
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ══════════════════════════════════════════════════════════════
   SLIDE 2 — SOMMAIRE
   Navigation par flèche uniquement (révélation carte par carte)
══════════════════════════════════════════════════════════════ */
const SOMMAIRE_SECTIONS = [
  {
    n: "01",
    icon: Target,
    t: "Contexte & Problématique",
    d: "Les défis de la digitalisation RH en Algérie",
  },
  {
    n: "02",
    icon: Zap,
    t: "Solution",
    d: "SIGA : plateforme SaaS RH cloud-native conforme et intelligente",
  },
  {
    n: "03",
    icon: FileText,
    t: "Méthodologie",
    d: "Approche Scrum agile en 6 sprints — stack technique moderne",
  },
  {
    n: "04",
    icon: PlayCircle,
    t: "Présentation Vidéo",
    d: "Démonstration complète de la plateforme SIGA (6 minutes)",
  },
  {
    n: "05",
    icon: Check,
    t: "Conclusion",
    d: "Bilan, perspectives et ouverture vers les questions",
  },
];

// This state is managed externally so Deck can drive it via arrow keys
// We export a ref-based mechanism through a shared module
let _slide2Advance: (() => boolean) | null = null;
let _slide2GoBack: (() => boolean) | null = null;

export function getSlide2Advance() { return _slide2Advance; }
export function getSlide2GoBack() { return _slide2GoBack; }

function Slide2() {
  const [visible, setVisible] = useState(0);

  // Register advance/back callbacks for Deck to call
  _slide2Advance = () => {
    if (visible < SOMMAIRE_SECTIONS.length - 1) {
      setVisible((v) => v + 1);
      return true; // consumed the event (don't go to next slide)
    }
    return false; // let Deck navigate to next slide
  };
  _slide2GoBack = () => {
    if (visible > 0) {
      setVisible((v) => v - 1);
      return true;
    }
    return false;
  };

  const reveal: Variants = {
    hidden: { opacity: 0, x: 30, scale: 0.96 },
    show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-30" />
      <SlideNumber n={2} total={TOTAL} />

      <div className="relative flex h-full flex-col px-20 py-14">
        {/* Header */}
        <motion.div variants={rise} className="flex items-end justify-between mb-10">
          <div>
            <Eyebrow>Sommaire</Eyebrow>
            <h2
              className="mt-4 text-[44px] font-black leading-[1.05] tracking-[-0.04em]"
              style={{ color: "var(--siga-dark)" }}
            >
              Plan de la
              <br />
              <span style={{ color: "var(--siga-mid)" }}>Présentation.</span>
            </h2>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-5 gap-5 flex-1 items-stretch">
          {SOMMAIRE_SECTIONS.map((s, i) => {
            const Icon = s.icon;
            const isVisible = i <= visible;
            const isActive = i === visible;
            return (
              <motion.div
                key={s.n}
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
                variants={reveal}
                className="flex flex-col rounded-3xl border p-7 transition-all duration-300"
                style={{
                  background: "white",
                  borderColor: isActive ? "var(--siga-mid)" : "rgba(30,58,95,0.1)",
                  borderWidth: isActive ? "2px" : "1px",
                  boxShadow: isActive
                    ? "0 16px 36px -10px rgba(30,58,95,0.18), 0 0 0 0 transparent"
                    : "0 2px 8px rgba(30,58,95,0.06)",
                  transform: isActive ? "translateY(-6px)" : "translateY(0)",
                }}
              >
                {/* Number */}
                <div
                  className="text-[40px] font-black leading-none mb-4"
                  style={{ color: isActive ? "var(--siga-mid)" : "rgba(30,58,95,0.15)" }}
                >
                  {s.n}
                </div>
                {/* Icon */}
                <div
                  className="mb-5 grid h-12 w-12 place-items-center rounded-2xl"
                  style={{
                    background: isActive ? "var(--siga-dark)" : "var(--siga-bg)",
                    color: isActive ? "white" : "var(--siga-mid)",
                  }}
                >
                  <Icon size={22} />
                </div>
                {/* Title */}
                <div
                  className="text-[20px] font-black leading-tight tracking-[-0.02em]"
                  style={{ color: "var(--siga-dark)" }}
                >
                  {s.t}
                </div>
                {/* Description */}
                <div
                  className="mt-3 text-[13px] font-medium leading-snug"
                  style={{ color: "rgba(30,58,95,0.55)" }}
                >
                  {s.d}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hint */}
        <motion.div
          variants={rise}
          className="mt-6 text-center text-[11px] font-bold uppercase tracking-[0.25em]"
          style={{ color: "var(--siga-dark)", opacity: 0.3 }}
        >
          {visible < SOMMAIRE_SECTIONS.length - 1
            ? `${SOMMAIRE_SECTIONS.length - 1 - visible} section(s) restante(s)`
            : "Appuyez sur → pour continuer"}
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ══════════════════════════════════════════════════════════════
   SLIDE 3 — CONTEXTE & PROBLÉMATIQUE
   Transition : porte tournante (spinning door) sur axe vertical central
══════════════════════════════════════════════════════════════ */
let _slide3Advance: (() => boolean) | null = null;
let _slide3GoBack: (() => boolean) | null = null;

export function getSlide3Advance() { return _slide3Advance; }
export function getSlide3GoBack() { return _slide3GoBack; }

const contextSteps = [
  {
    emoji: "📊",
    label: "Excel & papier",
    desc: "Suivi manuel, erreurs fréquentes, zéro traçabilité",
    arrow: true,
    highlight: false,
  },
  {
    emoji: "💰",
    label: "ERP coûteux",
    desc: "SAP, Oracle — inadaptés, hors budget PME algériennes",
    arrow: true,
    highlight: false,
  },
  {
    emoji: "✦",
    label: "SIGA",
    desc: "Solution locale, accessible, conforme et intelligente",
    arrow: false,
    highlight: true,
  },
];

const problems = [
  { t: "Gestion Manuelle", d: "Saisie manuelle des bulletins de paie, suivi des absences sur Excel, calcul des cotisations sociales sujet aux erreurs." },
  { t: "Solutions Fragmentées", d: "Absence de solutions intégrées adaptées au contexte algérien. Les ERP (SAP, Oracle) sont trop coûteux pour les PME." },
  { t: "Conformité Réglementaire", d: "Difficultés à assurer la conformité avec les évolutions fréquentes du cadre légal (CNAS, impôts, déclarations sociales)." },
  { t: "Manque d'Automatisation", d: "Les solutions existantes n'exploitent pas les technologies intelligentes." },
];

function Slide3() {
  const [tab, setTab] = useState<"context" | "problems">("context");
  const [dir, setDir] = useState<1 | -1>(1); // 1 = forward (→), -1 = backward (←)
  const [probStep, setProbStep] = useState(0);

  // ── Animation controllers ──────────────────────────────────
  const panelCtrl = useAnimation(); // the content flip

  // Sequence: content page-turns with slow crossfade
  const switchTab = useCallback(async (next: "context" | "problems", direction: 1 | -1) => {
    setDir(direction);

    // 1. Content softly folds away — slower, deeper rotation + fade + blur
    await panelCtrl.start({
      rotateY: direction * 22,
      x: direction * -40,
      opacity: 0,
      scale: 0.96,
      filter: "blur(4px)",
      transition: { duration: 0.55, ease: [0.4, 0, 0.6, 1] },
    });

    // 2. Small breathing pause
    await new Promise(r => setTimeout(r, 100));

    // 3. Swap content (invisible)
    setTab(next);

    // 4. Position new content on the opposite side
    panelCtrl.set({
      rotateY: direction * -22,
      x: direction * 40,
      opacity: 0,
      scale: 0.96,
      filter: "blur(4px)",
    });

    // 5. New content gracefully unfolds in
    panelCtrl.start({
      rotateY: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    });
  }, [panelCtrl]);

  // Register callbacks for Deck arrow-key navigation
  _slide3Advance = () => {
    if (tab === "context") { 
      setProbStep(0);
      switchTab("problems", 1); 
      return true; 
    }
    if (tab === "problems" && probStep < 6) {
      setProbStep(p => p + 1);
      return true;
    }
    return false;
  };
  _slide3GoBack = () => {
    if (tab === "problems") { 
      if (probStep > 0) {
        setProbStep(p => p - 1);
        return true;
      }
      switchTab("context", -1); 
      return true; 
    }
    return false;
  };

  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-25" />
      <SlideNumber n={3} total={TOTAL} />

      <div className="relative flex h-full flex-col px-16 py-14">

        {/* ── Header (fixed — doesn't transition) ─────────── */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Eyebrow>Analyse du Marché</Eyebrow>
            <h2
              className="mt-4 text-[44px] font-black leading-[1.05] tracking-[-0.04em]"
              style={{ color: "var(--siga-dark)" }}
            >
              {tab === "context" ? (
                <>Contexte<br /><span style={{ color: "var(--siga-mid)" }}>du Marché.</span></>
              ) : (
                <>Problé<span style={{ color: "var(--siga-mid)" }}>matique.</span></>
              )}
            </h2>
          </div>

        </div>

        {/* ── Stage : perspective container ──────────────── */}
        <div
          className="flex-1 relative overflow-hidden"
          style={{ perspective: "1400px", perspectiveOrigin: "50% 50%" }}
        >
          {/* CONTENT PANEL — flips slowly */}
          <motion.div
            animate={panelCtrl}
            initial={{ rotateY: 0, opacity: 1 }}
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              transformOrigin: "50% 50%",
              position: "absolute",
              inset: 0,
            }}
          >
            {tab === "context" ? (
              /* ── CONTEXTE content ─────────────────────── */
              <div className="flex h-full gap-14">
                {/* LEFT — big stat */}
                <div className="flex w-[300px] flex-none flex-col justify-center">
                  <div
                    className="text-[100px] font-black leading-none tracking-[-0.05em]"
                    style={{
                      background: "linear-gradient(135deg, var(--siga-dark) 0%, var(--siga-mid) 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    97%
                  </div>
                  <div className="mt-3 text-[18px] font-bold leading-snug" style={{ color: "var(--siga-dark)" }}>
                    des PME algériennes gèrent leur RH sans outil digital dédié.
                  </div>
                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--siga-mid)", opacity: 0.7 }}>
                    Source : analyse de marché — mémoire SIGA 2026
                  </div>
                  <div className="mt-5 h-1 w-14 rounded-full" style={{ background: "linear-gradient(90deg, var(--siga-dark), var(--siga-light))" }} />
                </div>

                {/* RIGHT — text + frise */}
                <div className="flex flex-1 flex-col justify-between">
                  <p className="max-w-2xl text-[17px] font-medium leading-relaxed" style={{ color: "var(--siga-dark)", opacity: 0.8 }}>
                    La digitalisation RH progresse en Algérie, mais les PME restent largement sur Excel et papier.
                    Les ERP existants (SAP, Oracle) sont trop coûteux et peu adaptés au contexte local.
                    Il existe un besoin réel de solutions RH accessibles, modernes et conformes à la réglementation algérienne.
                  </p>

                  {/* frise progression */}
                  <div className="mb-2">
                    <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--siga-dark)", opacity: 0.6 }}>
                      Progression du marché
                    </div>
                    <div className="flex items-center">
                      {contextSteps.map((s, i) => (
                        <div key={i} className="flex items-center">
                          <div
                            className="flex flex-col rounded-xl p-4"
                            style={{
                              background: s.highlight ? "var(--siga-dark)" : "white",
                              border: s.highlight ? "none" : "1px solid rgba(30,58,95,0.1)",
                              boxShadow: s.highlight
                                ? "0 0 0 1px rgba(107,163,214,0.3), 0 10px 24px -8px rgba(30,58,95,0.35)"
                                : "0 1px 4px rgba(30,58,95,0.06)",
                              minWidth: "138px",
                            }}
                          >
                            <div className="text-[13px] mb-1.5 opacity-60" style={{ color: s.highlight ? "white" : "var(--siga-dark)" }}>{s.emoji}</div>
                            <div className="text-[14px] font-bold" style={{ color: s.highlight ? "white" : "var(--siga-dark)" }}>{s.label}</div>
                            <div className="mt-1 text-[11px] font-medium leading-snug"
                              style={{ color: s.highlight ? "rgba(255,255,255,0.6)" : "var(--siga-dark)", opacity: s.highlight ? 1 : 0.6 }}>
                              {s.desc}
                            </div>
                          </div>
                          {s.arrow && (
                            <div className="mx-2.5 flex items-center">
                              <div className="h-0.5 w-6 rounded-full" style={{ background: "var(--siga-light)" }} />
                              <ChevronRight size={13} style={{ color: "var(--siga-light)", marginLeft: "-3px" }} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ── PROBLÉMATIQUE content ────────────────── */
              <div className="relative flex h-full gap-12">
                {/* LEFT SIDE */}
                <div className="flex w-[340px] flex-none flex-col py-2">
                  <div>
                    <p className="text-[17px] font-medium leading-relaxed" style={{ color: "var(--siga-dark)", opacity: 0.85 }}>
                      Les entreprises algériennes, particulièrement les PME, font face à des lacunes critiques :
                    </p>
                  </div>
                </div>

                {/* CENTERED IMPACT CARD */}
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ 
                    opacity: probStep === 6 ? 1 : 0, 
                    y: probStep === 6 ? 0 : 30,
                    scale: probStep === 6 ? 1 : 0.95,
                    pointerEvents: probStep === 6 ? "auto" : "none"
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] p-8 shadow-2xl" 
                  style={{ 
                    background: "white", 
                    border: "2px solid rgba(107,163,214,0.15)",
                    boxShadow: "0 20px 40px -15px rgba(30,58,95,0.2)",
                    width: "480px" 
                  }}
                >
                  <div className="mb-6 text-center text-[12px] font-black uppercase tracking-[0.2em]" style={{ color: "var(--siga-mid)" }}>
                    Impact sur les PME
                  </div>
                  <div className="space-y-4">
                    {[
                      { l: "Perte de productivité", v: "Élevée" },
                      { l: "Risque d'erreurs", v: "Élevé" },
                      { l: "Visibilité décisionnelle", v: "Faible" }
                    ].map(item => (
                      <div key={item.l} className="flex justify-between items-center text-[15px] border-b pb-4 last:border-0 last:pb-0" style={{ borderColor: "rgba(30,58,95,0.06)" }}>
                        <span className="font-semibold" style={{ color: "var(--siga-dark)", opacity: 0.8 }}>{item.l}</span>
                        <span className="font-black" style={{ color: "var(--siga-dark)" }}>{item.v}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* RIGHT SIDE (CARDS) */}
                <div className="flex flex-1 flex-col justify-center space-y-3.5">
                  {problems.map((b, i) => (
                    <motion.div
                      key={b.t}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ 
                        opacity: probStep > i && probStep < 6 ? 1 : 0, 
                        x: probStep === 6 ? -20 : (probStep > i ? 0 : 20) 
                      }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-5 rounded-[20px] bg-white px-7 py-4 shadow-sm"
                      style={{ border: "1px solid rgba(30,58,95,0.06)" }}
                    >
                      <div className="flex-none rounded-full p-1.5" style={{ background: "var(--siga-bg)", color: "var(--siga-mid)" }}>
                        <X size={18} strokeWidth={3} />
                      </div>
                      <div className="text-[18px] font-bold tracking-tight" style={{ color: "var(--siga-dark)" }}>
                        {b.t}
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: probStep >= 5 && probStep < 6 ? 1 : 0, 
                      y: probStep === 6 ? -20 : (probStep >= 5 ? 0 : 20) 
                    }}
                    transition={{ duration: 0.5 }}
                    className="mt-3 rounded-[16px] p-4 text-center text-[14px] font-bold text-white shadow-lg"
                    style={{ background: "var(--siga-dark)" }}
                  >
                    Constat : Aucune solution ne réunit conformité locale + automatisation + UX moderne
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ══════════════════════════════════════════════════════════════
   SLIDE 4 — SOLUTION SIGA (style screenshot)
══════════════════════════════════════════════════════════════ */
function Slide4() {
  const pillars = [
    { icon: Cloud, title: "Architecture SaaS", desc: "Multi-entreprises • Sécurisée • Évolutive" },
    { icon: Shield, title: "Conformité", desc: "Législation algérienne CNAS, IRG, DAS" },
    { icon: Bot, title: "Intelligence", desc: "Assistant IA • Automatisation • Prédictif" },
    { icon: Users, title: "Collaboration", desc: "Messagerie • Workflows • Notifications" },
  ];

  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-20" />
      <SlideNumber n={4} total={TOTAL} />

      <div className="relative flex h-full flex-col px-20 py-16">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>Solution Proposée</Eyebrow>
            <motion.h2
              variants={rise}
              className="mt-6 text-[44px] font-black leading-[1.05] tracking-[-0.04em]"
              style={{ color: "var(--siga-dark)" }}
            >
              SIGA : La Plateforme
              <br />
              <span style={{ color: "var(--siga-mid)" }}>SaaS RH.</span>
            </motion.h2>
            <motion.p
              variants={rise}
              className="mt-4 text-[16px] font-medium"
              style={{ color: "var(--siga-dark)" }}
            >
              Une solution cloud-native, conforme à la réglementation algérienne et enrichie par l'IA.
            </motion.p>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={rise}
              className="flex flex-col items-center rounded-2xl border bg-white p-8 text-center transition-shadow hover:shadow-lg"
              style={{ borderColor: "rgba(30,58,95,0.1)" }}
            >
              <div className="grid h-16 w-16 place-items-center rounded-2xl" style={{ background: "var(--siga-dark)", color: "white" }}>
                <p.icon size={28} />
              </div>
              <div className="mt-6 text-[22px] font-black" style={{ color: "var(--siga-dark)" }}>{p.title}</div>
              <div className="mt-3 text-[14px]" style={{ color: "var(--siga-dark)" }}>{p.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={rise}
          className="mt-12 flex justify-center gap-8 border-t pt-8"
          style={{ borderColor: "rgba(30,58,95,0.1)" }}
        >
          {["Centraliser processus RH & paie", "Garantir la conformité", "Automatiser les tâches", "Offrir une visibilité temps réel"].map((obj) => (
            <div key={obj} className="flex items-center gap-2">
              <Check size={16} style={{ color: "var(--siga-mid)" }} />
              <span className="text-[14px] font-bold uppercase tracking-wide" style={{ color: "var(--siga-dark)" }}>{obj}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ══════════════════════════════════════════════════════════════
   SLIDE 5 — APPROCHE SCRUM
══════════════════════════════════════════════════════════════ */
let _slide5Advance: (() => boolean) | null = null;
let _slide5GoBack: (() => boolean) | null = null;

export function getSlide5Advance() { return _slide5Advance; }
export function getSlide5GoBack() { return _slide5GoBack; }

function Slide5() {
  const sprints = [
    { n: "S0", t: "Planification", d: "2s", sub: "Charte graphique, stack, backlog" },
    { n: "S1", t: "Onboarding", d: "4s", sub: "Auth, abonnements" },
    { n: "S2-3", t: "Core RH", d: "6s", sub: "Employés, congés, pointage" },
    { n: "S4", t: "Paie", d: "5s", sub: "Moteur de calcul" },
    { n: "S5", t: "IA & Messagerie", d: "3s", sub: "Chatbot, web sockets" },
    { n: "S6", t: "Intelligence Métier", d: "4s", sub: "ATS, devis, prédiction" },
  ];

  const [step, setStep] = useState(0);

  _slide5Advance = () => {
    if (step < sprints.length - 1) {
      setStep(s => s + 1);
      return true;
    }
    return false;
  };
  _slide5GoBack = () => {
    if (step > 0) {
      setStep(s => s - 1);
      return true;
    }
    return false;
  };

  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-30" />
      <SlideNumber n={5} total={TOTAL} />

      <div className="relative flex h-full flex-col px-16 py-14">
        <Eyebrow>Méthodologie Agile</Eyebrow>

        <div>
          <motion.h2
            variants={rise}
            className="mt-4 text-[44px] font-black leading-[1.05] tracking-[-0.04em]"
            style={{ color: "var(--siga-dark)" }}
          >
            Approche Scrum
            <br />
            <span style={{ color: "var(--siga-mid)" }}>en 6 sprints.</span>
          </motion.h2>
        </div>

        {/* sprint timeline */}
        <div className="relative mt-16 flex-1">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute left-0 right-0 top-[56px] h-[3px] origin-left rounded-full"
            style={{ background: "linear-gradient(90deg, var(--siga-dark), var(--siga-mid), var(--siga-light))" }}
          />

          <div className="relative grid grid-cols-6 gap-2">
            {sprints.map((s, i) => (
              <motion.div
                key={s.n}
                initial={false}
                animate={{ 
                  opacity: i <= step ? 1 : 0, 
                  y: i <= step ? 0 : 20,
                  scale: i === step ? 1.05 : (i < step ? 1 : 0.95)
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="grid h-[64px] w-[64px] place-items-center rounded-2xl text-[15px] font-bold text-white transition-colors duration-300"
                  style={{ 
                    background: i <= step ? "var(--siga-dark)" : "var(--siga-light)", 
                    boxShadow: "0 0 0 5px var(--siga-cream)" 
                  }}
                >
                  {s.n}
                </div>
                <div className="mt-4 text-[13px] font-bold transition-opacity duration-300" style={{ color: "var(--siga-dark)", opacity: i <= step ? 1 : 0.4 }}>
                  {s.t} ({s.d})
                </div>
                <div className="mt-1 text-[12px] font-medium transition-opacity duration-300" style={{ color: "var(--siga-dark)", opacity: i <= step ? 1 : 0.4 }}>
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ══════════════════════════════════════════════════════════════
   SLIDE 6 — DÉMONSTRATION
══════════════════════════════════════════════════════════════ */
function Slide6() {
  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-25" />
      <SlideNumber n={6} total={TOTAL} />

      <div className="relative flex h-full flex-col items-center px-16 py-14">
        <Eyebrow>Démonstration</Eyebrow>
        <motion.h2
          variants={rise}
          className="mt-5 text-[44px] font-black leading-[1.05] tracking-[-0.04em] text-center"
          style={{ color: "var(--siga-dark)" }}
        >
          Démonstration de la
          <br />
          <span style={{ color: "var(--siga-mid)" }}>Plateforme SIGA.</span>
        </motion.h2>

        <div className="mt-8 flex w-full flex-1 items-center gap-12">
          <motion.div variants={rise} className="flex flex-1 flex-col items-center justify-center">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 rounded-full opacity-20 blur-xl transition-all group-hover:opacity-40 group-hover:blur-2xl" style={{ background: "var(--siga-mid)" }} />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full text-white shadow-xl transition-transform group-hover:scale-110" style={{ background: "var(--siga-dark)" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
            <motion.p variants={rise} className="mt-5 text-[18px] font-bold" style={{ color: "var(--siga-dark)" }}>
              Lancer la vidéo (6 minutes)
            </motion.p>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ══════════════════════════════════════════════════════════════
   SLIDE 7 — CONCLUSION + MERCI
══════════════════════════════════════════════════════════════ */
function Slide7() {
  const perspectives = [
    { icon: Mic, label: "Intégration vocale pour l'assistant IA" },
    { icon: TrendingUp, label: "Modèles prédictifs avancés avec Machine Learning" },
    { icon: Smartphone, label: "Application mobile native iOS/Android" },
  ];

  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-25" />
      <SlideNumber n={7} total={TOTAL} />

      <div className="relative flex h-full flex-col px-16 py-14">
        <motion.div variants={rise} className="flex-1 flex flex-col justify-center">
          <div className="text-[14px] font-black uppercase tracking-[0.2em] mb-4" style={{ color: "var(--siga-dark)", opacity: 0.4 }}>Conclusion</div>
          <h2 className="text-[36px] font-black leading-[1.15] tracking-[-0.03em] max-w-3xl" style={{ color: "var(--siga-dark)" }}>
            SIGA répond à un besoin structurel des PME algériennes : une solution SaaS RH complète, conforme à la réglementation, enrichie par l'IA.
          </h2>

          <div className="mt-10">
            <div className="text-[13px] font-black uppercase tracking-[0.18em] mb-5" style={{ color: "var(--siga-dark)", opacity: 0.4 }}>Perspectives</div>
            <div className="relative grid grid-cols-3 gap-6">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="absolute left-[10%] right-[10%] top-[28px] h-[2px] origin-left"
                style={{ background: "linear-gradient(90deg, var(--siga-dark), var(--siga-mid), transparent)" }}
              />
              {perspectives.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                  className="flex flex-col items-center text-center z-10"
                >
                  <div
                    className="grid h-14 w-14 place-items-center rounded-2xl text-white"
                    style={{ background: "var(--siga-dark)", boxShadow: "0 0 0 4px var(--siga-cream)" }}
                  >
                    <p.icon size={22} />
                  </div>
                  <div className="mt-4 text-[14px] font-bold leading-snug max-w-[200px]" style={{ color: "var(--siga-dark)", opacity: 0.8 }}>{p.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={rise}
          className="border-t pt-6 flex flex-col items-center text-center"
          style={{ borderColor: "rgba(30,58,95,0.1)" }}
        >
          <div 
            className="text-[42px] font-black tracking-[-0.03em]"
            style={{
              background: "linear-gradient(135deg, var(--siga-dark) 0%, var(--siga-mid) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Merci pour votre attention
          </div>
          <div className="mt-2 text-[15px] font-medium" style={{ color: "var(--siga-dark)", opacity: 0.5 }}>
            HAMMACHE Amira &amp; HADJI Melissa — Encadrant : M. ACHROUFENE Achour
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ══════════════════════════════════════════════════════════════
   EXPORT
══════════════════════════════════════════════════════════════ */
export const slides: { component: ComponentType; theme?: "light" | "dark" }[] = [
  { component: Slide1 },
  { component: Slide2 },
  { component: Slide3 },
  { component: Slide4 },
  { component: Slide5 },
  { component: Slide6 },
  { component: Slide7 },
];