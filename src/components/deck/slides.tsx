import { motion } from "framer-motion";
import { useState } from "react";
import {
  Users, Cloud, Bot, Shield, Check, X,
  Sparkles, Smartphone, TrendingUp, Mic,
  ChevronRight, Zap, Target, FileText,
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

const TOTAL = 8;

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
            className="mt-8 max-w-5xl text-[62px] font-bold leading-[1.05] tracking-[-0.04em]"
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
              { k: "Réalisé par", v: "HAMMACHE Amira", v2: "HADJI Melissa" },
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
══════════════════════════════════════════════════════════════ */
function Slide2() {
  const sections = [
    {
      n: "01",
      t: "Contexte & Problématique",
      d: "Les défis de la digitalisation RH dans les entreprises algériennes et la solution SIGA",
    },
    {
      n: "02",
      t: "Architecture & Méthodologie",
      d: "Stack technique moderne et approche agile Scrum",
    },
    {
      n: "03",
      t: "Modules Fonctionnels",
      d: "Onboarding, gestion RH, pointage QR et module de paie",
    },
    {
      n: "04",
      t: "Intelligence Artificielle",
      d: "Assistant IA conversationnel, messagerie interne et intelligence métier prédictive",
    },
  ];

  const reveal = {
    hidden: { opacity: 0, x: 14 },
    show: (i: number) => ({ opacity: 1, x: 0, transition: { duration: 0.45, delay: i * 0.08 } }),
  };

  const [visible, setVisible] = useState(1);

  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-30" />
      <SlideNumber n={2} total={TOTAL} />

      <div className="relative flex h-full flex-col px-20 py-16">
        <div className="flex items-end justify-between">
          <div>
            <motion.div
              variants={rise}
              className="inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "var(--siga-mid)" }}
            >
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: "currentColor" }} />
              Sommaire
            </motion.div>
            <motion.h2
              variants={rise}
              className="mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]"
              style={{ color: "var(--siga-dark)" }}
            >
              Plan de la
              <br />
              <span style={{ color: "var(--siga-mid)" }}>Présentation.</span>
            </motion.h2>
          </div>
          <motion.div
            variants={rise}
            className="max-w-xs text-right text-[16px] font-medium leading-relaxed"
            style={{ color: "var(--siga-dark)" }}
          >
            Présenter une solution SaaS RH complète, conforme à la réglementation algérienne et enrichie par l'IA.
          </motion.div>
        </div>
          <div
            className="mt-16 grid grid-cols-2 gap-6 cursor-pointer"
            onClick={() => setVisible((v: number) => Math.min(sections.length, v + 1))}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setVisible((v: number) => Math.min(sections.length, v + 1));
              }
            }}
            role="button"
            tabIndex={0}
          >
            {sections.map((s, i) => (
              <motion.div
                key={s.n}
                initial="hidden"
                animate={i < visible ? "show" : "hidden"}
                variants={reveal}
                custom={i}
                className="flex gap-6 rounded-2xl border bg-white/60 p-6 backdrop-blur-sm shadow-lg"
                style={{ borderColor: "rgba(30,58,95,0.1)" }}
              >
                <div
                  className="text-[40px] font-black leading-none"
                  style={{ color: "var(--siga-mid)" }}
                >
                  {s.n}
                </div>
                <div>
                  <div className="text-[20px] font-bold" style={{ color: "var(--siga-dark)" }}>{s.t}</div>
                  <div className="mt-2 text-[16px] font-medium leading-snug" style={{ color: "var(--siga-dark)" }}>{s.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </SlideShell>
  );
}

/* ══════════════════════════════════════════════════════════════
   SLIDE 3 — CONTEXTE (asymétrique)
══════════════════════════════════════════════════════════════ */
function Slide3() {
  const steps = [
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

  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-25" />
      <SlideNumber n={3} total={TOTAL} />

      <div className="relative flex h-full flex-col px-16 py-14 justify-center">
        <Eyebrow>Partie 1</Eyebrow>

        <div className="mt-5 flex flex-1 gap-14">
          {/* LEFT — big stat */}
          <motion.div variants={rise} className="flex w-[320px] flex-none flex-col justify-center">
            <div
              className="text-[108px] font-black leading-none tracking-[-0.05em]"
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
            <div className="mt-4 text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--siga-mid)", opacity: 0.7 }}>
              Source : analyse de marché — mémoire SIGA 2026
            </div>
            <div className="mt-5 h-1 w-14 rounded-full" style={{ background: "linear-gradient(90deg, var(--siga-dark), var(--siga-light))" }} />
          </motion.div>

          {/* RIGHT — text + frise */}
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <motion.h2
                variants={rise}
                className="text-[46px] font-bold leading-[1.05] tracking-[-0.035em]"
                style={{ color: "var(--siga-dark)" }}
              >
                Contexte<span style={{ color: "var(--siga-mid)" }}>.</span>
              </motion.h2>
              <motion.p variants={rise} className="mt-4 max-w-xl text-[17px] font-medium leading-relaxed" style={{ color: "var(--siga-dark)", opacity: 0.8 }}>
                La digitalisation RH progresse en Algérie, mais les PME restent largement sur Excel et papier. Les ERP existants (SAP, Oracle) sont trop coûteux et peu adaptés au contexte local. Il existe un besoin réel de solutions RH accessibles, modernes et conformes à la réglementation algérienne.
              </motion.p>
            </div>

            {/* frise progression */}
            <motion.div variants={rise} className="mb-2">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "var(--siga-mid)", opacity: 0.6 }}>
                Progression du marché
              </div>
              <div className="flex items-center">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 + i * 0.15 }}
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
                      <div className="text-[13px] mb-1.5 opacity-60" style={{ color: s.highlight ? "white" : "var(--siga-mid)" }}>{s.emoji}</div>
                      <div className="text-[14px] font-bold" style={{ color: s.highlight ? "white" : "var(--siga-dark)" }}>
                        {s.label}
                      </div>
                      <div className="mt-1 text-[11px] font-medium leading-snug" style={{ color: s.highlight ? "rgba(255,255,255,0.6)" : "var(--siga-dark)", opacity: s.highlight ? 1 : 0.6 }}>
                        {s.desc}
                      </div>
                    </motion.div>
                    {s.arrow && (
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                        style={{ transformOrigin: "left" }}
                        className="mx-2.5 flex items-center"
                      >
                        <div className="h-0.5 w-6 rounded-full" style={{ background: "var(--siga-light)" }} />
                        <ChevronRight size={13} style={{ color: "var(--siga-light)", marginLeft: "-3px" }} />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ══════════════════════════════════════════════════════════════
   SLIDE 4 — PROBLÉMATIQUE
══════════════════════════════════════════════════════════════ */
function Slide4() {
  const problems = [
    { t: "Gestion Manuelle", d: "Saisie manuelle des bulletins de paie, suivi des absences sur Excel, calcul des cotisations sociales sujet aux erreurs." },
    { t: "Solutions Fragmentées", d: "Absence de solutions intégrées adaptées au contexte algérien. Les ERP (SAP, Oracle) sont trop coûteux pour les PME." },
    { t: "Conformité Réglementaire", d: "Difficultés à assurer la conformité avec les évolutions fréquentes du cadre légal (CNAS, impôts, déclarations sociales)." },
    { t: "Manque d'Automatisation", d: "Les solutions existantes n'exploitent pas les technologies intelligentes." }
  ];

  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-25" />
      <SlideNumber n={4} total={TOTAL} />

      <div className="relative grid h-full grid-cols-12 gap-12 px-20 py-16">
        <div className="col-span-5 flex flex-col justify-between">
          <div>
            <Eyebrow>Problématique</Eyebrow>
            <motion.h2
              variants={rise}
              className="mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]"
              style={{ color: "var(--siga-dark)" }}
            >
              Les Défis RH
              <br />
              <span style={{ color: "var(--siga-mid)" }}>en Algérie.</span>
            </motion.h2>
            <motion.p
              variants={rise}
              className="mt-6 text-[16px] leading-relaxed"
              style={{ color: "var(--siga-mid)" }}
            >
              Les entreprises algériennes, particulièrement les PME, font face à des lacunes critiques :
            </motion.p>
          </div>

          <motion.div
            variants={rise}
            className="rounded-2xl border p-6"
            style={{ borderColor: "rgba(30,58,95,0.1)", background: "var(--siga-bg)" }}
          >
            <div className="text-[12px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--siga-dark)" }}>
              Impact sur les PME
            </div>
            <div className="mt-4 space-y-3">
              {[
                { l: "Perte de productivité", v: "Élevée", c: "var(--siga-dark)" },
                { l: "Risque d'erreurs", v: "Élevé", c: "var(--siga-mid)" },
                { l: "Visibilité décisionnelle", v: "Faible", c: "var(--siga-dark)" }
              ].map((item) => (
                <div key={item.l} className="flex justify-between border-b pb-1 last:border-0" style={{ borderColor: "rgba(30,58,95,0.1)" }}>
                  <span className="text-[14px] font-medium" style={{ color: "var(--siga-dark)" }}>{item.l}</span>
                  <span className="text-[13px] font-bold" style={{ color: item.c }}>{item.v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="col-span-7 flex flex-col justify-center gap-4">
          {problems.map((b, i) => (
            <motion.div
              key={b.t}
              variants={rise}
              className="siga-card group flex items-start gap-4 p-5 transition hover:translate-x-1"
            >
              <div className="mt-1 flex-none rounded-full p-1" style={{ background: "var(--siga-bg)", color: "var(--siga-mid)" }}>
                <X size={16} />
              </div>
              <div>
                <div className="text-[18px] font-bold tracking-tight" style={{ color: "var(--siga-dark)" }}>{b.t}</div>
                <div className="mt-1 text-[14px] leading-snug" style={{ color: "var(--siga-mid)" }}>{b.d}</div>
              </div>
            </motion.div>
          ))}
          <motion.div
            variants={rise}
            className="mt-2 text-[15px] font-bold text-center p-3 rounded-lg bg-[color:var(--siga-dark)] text-white"
          >
            Constat : Aucune solution ne réunit conformité locale + automatisation + UX moderne
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ══════════════════════════════════════════════════════════════
   SLIDE 5 — SOLUTION SIGA (style screenshot)
══════════════════════════════════════════════════════════════ */
function Slide5() {
  const pillars = [
    { icon: Cloud, title: "Architecture SaaS", desc: "Multi-entreprises • Sécurisée • Évolutive" },
    { icon: Shield, title: "Conformité", desc: "Législation algérienne CNAS, IRG, DAS" },
    { icon: Bot, title: "Intelligence", desc: "Assistant IA • Automatisation • Prédictif" },
    { icon: Users, title: "Collaboration", desc: "Messagerie • Workflows • Notifications" }
  ];

  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-20" />
      <SlideNumber n={5} total={TOTAL} />

      <div className="relative flex h-full flex-col px-20 py-16">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>Solution Proposée</Eyebrow>
            <motion.h2
              variants={rise}
              className="mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]"
              style={{ color: "var(--siga-dark)" }}
            >
              SIGA : La Plateforme
              <br />
              <span style={{ color: "var(--siga-mid)" }}>SaaS RH.</span>
            </motion.h2>
            <motion.p
              variants={rise}
              className="mt-4 text-[16px] font-medium"
              style={{ color: "var(--siga-mid)" }}
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
              <div className="mt-6 text-[20px] font-bold" style={{ color: "var(--siga-dark)" }}>{p.title}</div>
              <div className="mt-3 text-[14px]" style={{ color: "var(--siga-mid)" }}>{p.desc}</div>
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
   SLIDE 6 — APPROCHE SCRUM
══════════════════════════════════════════════════════════════ */
function Slide6() {
  const sprints = [
    { n: "S0", t: "Planification", d: "2s", sub: "Charte graphique, stack, backlog" },
    { n: "S1", t: "Onboarding", d: "4s", sub: "Auth, abonnements" },
    { n: "S2-3", t: "Core RH", d: "6s", sub: "Employés, congés, pointage" },
    { n: "S4", t: "Paie", d: "5s", sub: "Moteur de calcul" },
    { n: "S5", t: "IA & Messagerie", d: "3s", sub: "Chatbot, web sockets" },
    { n: "S6", t: "Intelligence Métier", d: "4s", sub: "ATS, devis, prédiction" },
  ];

  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-30" />
      <SlideNumber n={6} total={TOTAL} />

      <div className="relative flex h-full flex-col px-16 py-14">
        <Eyebrow>Méthodologie Agile</Eyebrow>

        <div>
          <motion.h2
            variants={rise}
            className="mt-4 text-[46px] font-bold leading-[1.05] tracking-[-0.035em]"
            style={{ color: "var(--siga-dark)" }}
          >
            Approche Scrum
            <br />
            <span style={{ color: "var(--siga-mid)" }}>en 6 sprints.</span>
          </motion.h2>
        </div>

        {/* Scrum pills removed per request */}

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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.5 + i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="grid h-[64px] w-[64px] place-items-center rounded-2xl text-[15px] font-bold text-white"
                  style={{ background: "var(--siga-dark)", boxShadow: "0 0 0 5px var(--siga-cream)" }}
                >
                  {s.n}
                </div>
                <div className="mt-4 text-[13px] font-bold" style={{ color: "var(--siga-dark)" }}>
                  {s.t} ({s.d})
                </div>
                <div className="mt-1 text-[12px] font-medium" style={{ color: "var(--siga-mid)" }}>
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
   SLIDE 7 — DÉMONSTRATION
══════════════════════════════════════════════════════════════ */
function Slide7() {
  const steps = [
    "Création d'une entreprise",
    "Ajout d'employés",
    "Demande de congé",
    "Pointage",
    "Gestion de la paie",
    "Assistant IA",
    "ATS",
    "Tableau de bord intelligent",
  ];

  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-25" />
      <SlideNumber n={7} total={TOTAL} />

      <div className="relative flex h-full flex-col items-center px-16 py-14">
        <Eyebrow>Démonstration</Eyebrow>
        <motion.h2
          variants={rise}
          className="mt-5 text-[50px] font-bold leading-[1.05] tracking-[-0.035em] text-center"
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

          {/* Parcours conseillé retired as requested */}
        </div>
      </div>
    </SlideShell>
  );
}

/* ══════════════════════════════════════════════════════════════
   SLIDE 8 — CONCLUSION + MERCI
══════════════════════════════════════════════════════════════ */
function Slide8() {
  const perspectives = [
    { icon: Mic, label: "Intégration vocale pour l'assistant IA" },
    { icon: TrendingUp, label: "Modèles prédictifs avancés avec Machine Learning" },
    { icon: Smartphone, label: "Application mobile native iOS/Android" },
  ];

  return (
    <SlideShell theme="dark">
      <div className="siga-radial siga-noise absolute inset-0" />
      <div className="siga-grid-bg absolute inset-0 opacity-10" />
      <SlideNumber n={8} total={TOTAL} dark />

      <div className="relative flex h-full flex-col px-16 py-14">
        <motion.div variants={rise} className="flex-1 flex flex-col justify-center">
          <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">Conclusion</div>
          <h2 className="text-[34px] font-bold leading-[1.15] tracking-[-0.03em] text-white max-w-3xl">
            SIGA répond à un besoin structurel des PME algériennes : une solution SaaS RH complète, conforme à la réglementation, enrichie par l'IA.
          </h2>

          <div className="mt-10">
            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-white/40 mb-5">Perspectives</div>
            <div className="relative grid grid-cols-3 gap-6">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="absolute left-[10%] right-[10%] top-[28px] h-[2px] origin-left"
                style={{ background: "linear-gradient(90deg, var(--siga-mid), var(--siga-light) 50%, transparent)" }}
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
                    style={{ background: "rgba(107,163,214,0.2)", boxShadow: "0 0 0 4px var(--siga-dark)" }}
                  >
                    <p.icon size={22} />
                  </div>
                  <div className="mt-4 text-[14px] font-bold text-white/80 leading-snug max-w-[200px]">{p.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={rise}
          className="border-t pt-6 flex flex-col items-center text-center"
          style={{ borderColor: "rgba(107,163,214,0.15)" }}
        >
          <div className="siga-gradient-text text-[42px] font-bold tracking-[-0.03em]">
            Merci pour votre attention
          </div>
          <div className="mt-2 text-[15px] font-medium text-white/50">
            HAMMACHE Amira &amp; HADJI Melissa — Encadrant : M. ACHROUFENE Achour
          </div>
          {/* Place aux questions pill removed per request */}
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
  { component: Slide8, theme: "dark" },
];