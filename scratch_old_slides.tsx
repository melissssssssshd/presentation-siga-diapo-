import { motion } from "framer-motion";
import {
  QrCode,
  Calculator,
  Bot,
  Activity,
  Check,
  X,
  Cloud,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Shield,
  Smartphone,
  Mic,
  Globe,
  TrendingUp,
  Heart,
} from "lucide-react";
import { SlideShell, Eyebrow, Logo, YkonMark, rise } from "./primitives";

/* ============ SLIDE 1 ÔÇö HERO ============ */
function Slide1() {
  return (
    <SlideShell theme="dark" className="siga-radial siga-noise">
      <div className="siga-grid-bg absolute inset-0 opacity-40" />
      {/* glow orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,212,232,0.35) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative flex h-full flex-col">
        {/* Top bar */}
        <motion.div variants={rise} className="flex items-center justify-between px-12 pt-10">
          <Logo variant="dark" />
          <YkonMark variant="dark" />
        </motion.div>

        {/* Center */}
        <div className="flex flex-1 flex-col items-center justify-center px-12 text-center">
          <motion.div variants={rise}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.2em] text-[color:var(--siga-bg)] backdrop-blur">
              <Sparkles size={12} /> M├®moire de Master ┬À G├®nie Logiciel
            </span>
          </motion.div>

          <motion.h1
            variants={rise}
            className="mt-8 max-w-5xl text-[72px] font-bold leading-[1.02] tracking-[-0.04em] text-white"
          >
            SaaS RH intelligent
            <br />
            <span className="siga-gradient-text">pour le march├® alg├®rien.</span>
          </motion.h1>

          <motion.p variants={rise} className="mt-8 max-w-xl text-[18px] leading-relaxed text-white/70">
            Une plateforme cloud-native, conforme ├á la r├®glementation locale,
            augment├®e par l'intelligence artificielle.
          </motion.p>

          <motion.div variants={rise} className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            {[
              { k: "Pr├®sent├® par", v: "HAMMACHE Amira", v2: "HADJI Melissa" },
              { k: "Universit├®", v: "A/Mira de B├®ja├»a", v2: "Facult├® des Sciences Exactes" },
              { k: "Soutenance", v: "22 / 06 / 2026", v2: "EURL YKON" },
            ].map((item) => (
              <div key={item.k} className="bg-[#1e3a5f]/40 px-8 py-5 text-left">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--siga-light)]">
                  {item.k}
                </div>
                <div className="mt-2 text-[14px] font-semibold text-white">{item.v}</div>
                <div className="text-[13px] text-white/60">{item.v2}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={rise} className="px-12 pb-8 text-center text-[11px] uppercase tracking-[0.3em] text-white/40">
          press ÔåÆ to begin
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 2 ÔÇö INTRODUCTION & PROBLEM ============ */
function Slide2() {
  const bullets = [
    { t: "Processus manuels", d: "Saisies r├®p├®t├®es, erreurs fr├®quentes, perte de temps." },
    { t: "Solutions locales obsol├¿tes", d: "Outils dat├®s, sans cloud, sans IA, sans mobile." },
    { t: "Solutions internationales", d: "Non conformes ├á la r├®glementation alg├®rienne (IRG, CNAS, Loi 18-07)." },
  ];
  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-50" />
      <div className="relative grid h-full grid-cols-12 gap-12 px-20 py-16">
        <div className="col-span-5 flex flex-col justify-between">
          <div>
            <Eyebrow>01 ┬À Le probl├¿me</Eyebrow>
            <motion.h2 variants={rise} className="mt-6 text-[56px] font-bold leading-[1.05] tracking-[-0.035em]">
              Les PME alg├®riennes
              <br />
              g├¿rent encore leurs RH
              <br />
              avec{" "}
              <span className="relative inline-block">
                <span style={{ color: "var(--siga-mid)" }}>Excel</span>
              </span>{" "}
              et{" "}
              <span style={{ color: "var(--siga-mid)" }}>papier.</span>
            </motion.h2>
          </div>

          <motion.div
            variants={rise}
            className="rounded-2xl border-l-4 p-6"
            style={{
              borderColor: "var(--siga-mid)",
              background: "var(--siga-bg)",
            }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--siga-dark)" }}>
              Question de recherche
            </div>
            <p className="mt-2 text-[18px] font-medium leading-snug" style={{ color: "var(--siga-dark)" }}>
              Comment concevoir une plateforme SaaS RH conforme au contexte
              alg├®rien et intelligente ?
            </p>
          </motion.div>
        </div>

        <div className="col-span-7 flex flex-col justify-center gap-4">
          {bullets.map((b, i) => (
            <motion.div
              key={b.t}
              variants={rise}
              className="siga-card group flex items-start gap-5 p-6 transition hover:translate-x-1"
            >
              <div
                className="grid h-12 w-12 flex-none place-items-center rounded-xl text-[15px] font-bold"
                style={{ background: "var(--siga-bg)", color: "var(--siga-dark)" }}
              >
                0{i + 1}
              </div>
              <div>
                <div className="text-[20px] font-semibold tracking-tight" style={{ color: "var(--siga-dark)" }}>
                  {b.t}
                </div>
                <div className="mt-1 text-[15px]" style={{ color: "var(--siga-mid)" }}>
                  {b.d}
                </div>
              </div>
              <X size={18} className="ml-auto mt-1 flex-none opacity-30" style={{ color: "var(--siga-mid)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 3 ÔÇö MARKET GAP ============ */
function Slide3() {
  const rows = ["Conformit├® alg├®rienne", "Cloud SaaS", "IA int├®gr├®e", "UX moderne", "Co├╗t adapt├® PME"];
  const data = [
    [false, false, false, false, true], // Local
    [true, true, true, true, false],    // Intl partial
    [true, true, true, true, true],     // SIGA
  ];
  const cols = [
    { name: "Solutions locales", note: "Excel, logiciels dat├®s" },
    { name: "Solutions internationales", note: "BambooHR, Workday" },
    { name: "SIGA", note: "Notre proposition", highlight: true },
  ];

  return (
    <SlideShell>
      <div className="relative h-full px-20 py-16">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>02 ┬À ├ëcart de march├®</Eyebrow>
            <motion.h2 variants={rise} className="mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]">
              Un vide strat├®gique
              <br />
              <span style={{ color: "var(--siga-mid)" }}>├á combler.</span>
            </motion.h2>
          </div>
          <motion.div variants={rise} className="max-w-xs text-right text-[14px] leading-relaxed" style={{ color: "var(--siga-mid)" }}>
            Ni le local, ni l'international ne couvrent l'ensemble des besoins
            d'une PME alg├®rienne moderne.
          </motion.div>
        </div>

        <motion.div variants={rise} className="mt-12 overflow-hidden rounded-3xl border" style={{ borderColor: "rgba(30,58,95,0.1)" }}>
          {/* header */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div />
            {cols.map((c) => (
              <div
                key={c.name}
                className={`px-6 py-5 text-center ${c.highlight ? "siga-glow relative z-10" : ""}`}
                style={{
                  background: c.highlight ? "var(--siga-dark)" : "white",
                  color: c.highlight ? "#fff" : "var(--siga-dark)",
                }}
              >
                <div className="text-[15px] font-bold tracking-tight">{c.name}</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider opacity-60">{c.note}</div>
              </div>
            ))}
          </div>
          {/* rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row}
              variants={rise}
              className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-t"
              style={{ borderColor: "rgba(30,58,95,0.08)" }}
            >
              <div className="bg-white px-6 py-5 text-[15px] font-medium" style={{ color: "var(--siga-dark)" }}>
                {row}
              </div>
              {data.map((col, j) => {
                const ok = col[i];
                const highlight = j === 2;
                return (
                  <div
                    key={j}
                    className="grid place-items-center py-5"
                    style={{
                      background: highlight ? "rgba(107,163,214,0.18)" : "white",
                    }}
                  >
                    {ok ? (
                      <div
                        className="grid h-9 w-9 place-items-center rounded-full"
                        style={{
                          background: highlight ? "var(--siga-dark)" : "var(--siga-bg)",
                          color: highlight ? "#fff" : "var(--siga-dark)",
                        }}
                      >
                        <Check size={16} strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--siga-bg)]/40">
                        <X size={16} className="opacity-40" style={{ color: "var(--siga-mid)" }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={rise} className="mt-10 text-center text-[20px] font-semibold tracking-tight" style={{ color: "var(--siga-dark)" }}>
          ÔåÆ Il existe un <span style={{ color: "var(--siga-mid)" }}>vide strat├®gique</span> sur le march├®.
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 4 ÔÇö ARCHITECTURE ============ */
function Slide4() {
  const layers = [
    {
      icon: Sparkles,
      name: "AI Layer",
      tags: ["Pr├®diction", "Assistant LLM", "OCR"],
      tone: "dark",
    },
    {
      icon: Layers,
      name: "Business Layer",
      tags: ["RH", "Paie", "Recrutement", "Pr├®sence"],
      tone: "mid",
    },
    {
      icon: Database,
      name: "Database Layer",
      tags: ["PostgreSQL", "Prisma ORM"],
      tone: "light",
    },
    {
      icon: Cloud,
      name: "Tech / Infra Layer",
      tags: ["Next.js", "FastAPI", "Docker", "Railway"],
      tone: "bg",
    },
  ];
  const toneMap: Record<string, { bg: string; fg: string; tag: string }> = {
    dark: { bg: "var(--siga-dark)", fg: "#fff", tag: "rgba(255,255,255,0.15)" },
    mid: { bg: "var(--siga-mid)", fg: "#fff", tag: "rgba(255,255,255,0.18)" },
    light: { bg: "var(--siga-light)", fg: "#0f1f33", tag: "rgba(255,255,255,0.35)" },
    bg: { bg: "var(--siga-bg)", fg: "var(--siga-dark)", tag: "rgba(30,58,95,0.1)" },
  };

  return (
    <SlideShell>
      <div className="relative grid h-full grid-cols-12 gap-12 px-20 py-16">
        <div className="col-span-4 flex flex-col justify-between">
          <div>
            <Eyebrow>03 ┬À Architecture</Eyebrow>
            <motion.h2 variants={rise} className="mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]">
              Un syst├¿me
              <br />
              <span style={{ color: "var(--siga-mid)" }}>en 4 couches.</span>
            </motion.h2>
            <motion.p variants={rise} className="mt-6 text-[15px] leading-relaxed" style={{ color: "var(--siga-mid)" }}>
              Architecture modulaire, scalable et multi-tenant. Chaque couche
              est isol├®e, testable et d├®ployable ind├®pendamment.
            </motion.p>
          </div>

          <motion.div variants={rise} className="space-y-2.5">
            {[
              { icon: Cloud, label: "Cloud-native" },
              { icon: Cpu, label: "AI-powered" },
              { icon: Shield, label: "Legally compliant" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 rounded-xl border bg-white px-4 py-3"
                style={{ borderColor: "rgba(30,58,95,0.1)" }}
              >
                <b.icon size={16} style={{ color: "var(--siga-mid)" }} />
                <span className="text-[14px] font-medium" style={{ color: "var(--siga-dark)" }}>{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="col-span-8 flex flex-col justify-center gap-3">
          {layers.map((l) => {
            const t = toneMap[l.tone];
            return (
              <motion.div
                key={l.name}
                variants={rise}
                className="group flex items-center gap-5 rounded-2xl px-7 py-5 transition-transform hover:-translate-y-0.5"
                style={{ background: t.bg, color: t.fg }}
              >
                <div
                  className="grid h-12 w-12 flex-none place-items-center rounded-xl"
                  style={{ background: t.tag }}
                >
                  <l.icon size={22} />
                </div>
                <div className="text-[22px] font-bold tracking-tight">{l.name}</div>
                <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
                  {l.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-[12px] font-medium"
                      style={{ background: t.tag }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 5 ÔÇö METHODOLOGY (SCRUM) ============ */
function Slide5() {
  const sprints = [
    { n: "S0", t: "Planning", d: "Cadrage, backlog" },
    { n: "S1", t: "Onboarding", d: "Auth, tenants" },
    { n: "S2-3", t: "RH + Pr├®sence", d: "QR code attendance" },
    { n: "S4", t: "Paie", d: "IRG ┬À CNAS" },
    { n: "S5", t: "Assistant IA", d: "LLM, OCR" },
    { n: "S6", t: "D├®ploiement", d: "Railway prod" },
  ];
  return (
    <SlideShell>
      <div className="siga-grid-bg absolute inset-0 opacity-40" />
      <div className="relative flex h-full flex-col px-20 py-16">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>04 ┬À M├®thodologie</Eyebrow>
            <motion.h2 variants={rise} className="mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]">
              SCRUM, livr├® en
              <br />
              <span style={{ color: "var(--siga-mid)" }}>6 sprints.</span>
            </motion.h2>
          </div>
          <motion.div variants={rise} className="rounded-full border px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wider"
            style={{ borderColor: "var(--siga-mid)", color: "var(--siga-mid)" }}>
            Agile ┬À It├®ratif ┬À Livr├®
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 flex-1">
          {/* line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute left-0 right-0 top-[44px] h-[3px] origin-left rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--siga-dark), var(--siga-mid), var(--siga-light))",
            }}
          />

          <div className="relative grid grid-cols-6 gap-4">
            {sprints.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="grid h-[88px] w-[88px] place-items-center rounded-2xl text-[18px] font-bold text-white"
                  style={{
                    background: "var(--siga-dark)",
                    boxShadow:
                      "0 0 0 6px var(--siga-cream), 0 12px 30px -10px rgba(30,58,95,0.4)",
                  }}
                >
                  {s.n}
                </div>
                <div className="mt-5 text-[16px] font-semibold tracking-tight" style={{ color: "var(--siga-dark)" }}>
                  {s.t}
                </div>
                <div className="mt-1 text-[13px]" style={{ color: "var(--siga-mid)" }}>
                  {s.d}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 6 ÔÇö DEMO FEATURES ============ */
function Slide6() {
  const features = [
    {
      icon: QrCode,
      tag: "Pr├®sence",
      title: "QR Code Attendance",
      desc: "Pointage instantan├®, g├®olocalis├® et anti-fraude.",
      mock: (
        <div className="grid place-items-center">
          <div className="grid grid-cols-7 gap-[3px] rounded-xl bg-white p-3 shadow-md">
            {Array.from({ length: 49 }).map((_, i) => (
              <div
                key={i}
                className="h-[10px] w-[10px] rounded-[2px]"
                style={{
                  background:
                    [0, 6, 7, 13, 14, 35, 41, 42, 48].includes(i) || Math.random() > 0.55
                      ? "var(--siga-dark)"
                      : "transparent",
                }}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: Calculator,
      tag: "Paie",
      title: "Paie automatis├®e",
      desc: "Calcul IRG + CNAS en moins de 10 ms par bulletin.",
      mock: (
        <div className="w-full space-y-2 rounded-xl bg-white p-4 text-[11px] shadow-md">
          {[
            ["Salaire brut", "85 000,00"],
            ["CNAS (9%)", "ÔêÆ7 650,00"],
            ["IRG", "ÔêÆ9 240,00"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between" style={{ color: "var(--siga-mid)" }}>
              <span>{k}</span><span className="font-mono">{v}</span>
            </div>
          ))}
          <div className="mt-2 flex justify-between border-t pt-2 font-semibold" style={{ borderColor: "var(--siga-bg)", color: "var(--siga-dark)" }}>
            <span>Net ├á payer</span><span className="font-mono">68 110,00</span>
          </div>
        </div>
      ),
    },
    {
      icon: Bot,
      tag: "Assistant",
      title: "Assistant IA conversationnel",
      desc: "Questions RH en langage naturel, 24/7.",
      mock: (
        <div className="w-full space-y-2 text-[11px]">
          <div className="ml-auto w-[80%] rounded-2xl rounded-br-sm bg-[color:var(--siga-dark)] px-3 py-2 text-white shadow">
            Combien de cong├®s restent ├á Karim ?
          </div>
          <div className="w-[85%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow" style={{ color: "var(--siga-dark)" }}>
            Karim a <b>14 jours</b> restants sur 30.
          </div>
        </div>
      ),
    },
    {
      icon: Activity,
      tag: "Pr├®dictif",
      title: "Dashboard pr├®dictif",
      desc: "D├®tection burnout & attrition avant qu'il ne soit trop tard.",
      mock: (
        <div className="w-full rounded-xl bg-white p-3 shadow-md">
          <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--siga-mid)" }}>
            Risque attrition
          </div>
          <div className="mt-2 flex items-end gap-1.5 h-[60px]">
            {[30, 45, 35, 60, 55, 75, 50, 90, 70, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: h > 70 ? "var(--siga-dark)" : "var(--siga-light)",
                }}
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <SlideShell>
      <div className="relative h-full px-20 py-14">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>05 ┬À D├®mo</Eyebrow>
            <motion.h2 variants={rise} className="mt-5 text-[44px] font-bold leading-[1.05] tracking-[-0.035em]">
              Quatre fonctionnalit├®s
              <br />
              <span style={{ color: "var(--siga-mid)" }}>qui font la diff├®rence.</span>
            </motion.h2>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-5">
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={rise}
              className="siga-card flex flex-col overflow-hidden p-5 transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-2">
                <div
                  className="grid h-9 w-9 place-items-center rounded-lg"
                  style={{ background: "var(--siga-bg)", color: "var(--siga-dark)" }}
                >
                  <f.icon size={18} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: "var(--siga-mid)" }}>
                  {f.tag}
                </span>
              </div>
              <div className="mt-4 text-[18px] font-bold leading-tight tracking-tight" style={{ color: "var(--siga-dark)" }}>
                {f.title}
              </div>
              <div className="mt-2 text-[13px] leading-snug" style={{ color: "var(--siga-mid)" }}>
                {f.desc}
              </div>
              <div
                className="mt-5 flex h-[150px] items-center justify-center rounded-xl p-3"
                style={{ background: "var(--siga-bg)" }}
              >
                {f.mock}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 7 ÔÇö RESULTS ============ */
function Slide7() {
  const results = [
    { k: "Conformit├®", v: "IRG ┬À CNAS", s: "Valid├®" },
    { k: "Performance", v: "< 10 ms", s: "Calcul paie / bulletin" },
    { k: "Pr├®cision OCR", v: "~ 70%", s: "Documents RH scann├®s" },
    { k: "D├®ploiement", v: "Railway", s: "Production-ready" },
  ];
  return (
    <SlideShell>
      <div className="relative h-full px-20 py-16">
        <Eyebrow>06 ┬À R├®sultats</Eyebrow>
        <motion.h2 variants={rise} className="mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]">
          Mesur├®.{" "}
          <span style={{ color: "var(--siga-mid)" }}>Livr├®.</span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-4 gap-5">
          {results.map((r) => (
            <motion.div
              key={r.k}
              variants={rise}
              className="rounded-2xl p-7"
              style={{ background: "var(--siga-dark)", color: "#fff" }}
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--siga-light)]">
                {r.k}
              </div>
              <div className="mt-4 text-[40px] font-bold leading-none tracking-tight">{r.v}</div>
              <div className="mt-3 text-[13px] text-white/70">{r.s}</div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={rise} className="mt-12 rounded-2xl border p-6"
          style={{ borderColor: "rgba(30,58,95,0.15)", background: "var(--siga-bg)" }}>
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full" style={{ background: "var(--siga-dark)" }}>
              <span className="text-[14px] font-bold text-white">!</span>
            </div>
            <div className="text-[15px] font-semibold uppercase tracking-wider" style={{ color: "var(--siga-dark)" }}>
              Limitations
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-6 text-[15px]" style={{ color: "var(--siga-dark)" }}>
            <div className="flex items-start gap-3">
              <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--siga-mid)" }} />
              <span>OCR ├á am├®liorer pour atteindre une pr├®cision &gt; 90% sur les documents manuscrits.</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full" style={{ background: "var(--siga-mid)" }} />
              <span>Mod├¿le pr├®dictif n├®cessite des donn├®es long-terme pour gagner en pr├®cision.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 8 ÔÇö INNOVATION ============ */
function Slide8() {
  const items = [
    { n: "01", t: "Premier assistant IA RH en Alg├®rie", d: "Con├ºu pour le contexte local, en fran├ºais." },
    { n: "02", t: "IA pr├®dictive explicable", d: "Conforme ├á la Loi 18-07 sur la protection des donn├®es." },
    { n: "03", t: "Plateforme RH + Paie + Recrutement", d: "Une seule solution, un seul abonnement." },
    { n: "04", t: "Architecture multi-tenant", d: "Scalable jusqu'├á des milliers d'entreprises." },
  ];
  return (
    <SlideShell theme="dark" className="siga-radial siga-noise">
      <div className="siga-grid-bg absolute inset-0 opacity-30" />
      <div className="relative grid h-full grid-cols-12 gap-12 px-20 py-16">
        <div className="col-span-5 flex flex-col justify-center">
          <Eyebrow theme="dark">07 ┬À Innovation</Eyebrow>
          <motion.h2 variants={rise} className="mt-6 text-[64px] font-bold leading-[0.98] tracking-[-0.04em] text-white">
            Premier
            <br />
            <span className="siga-gradient-text">en son genre.</span>
          </motion.h2>
          <motion.p variants={rise} className="mt-8 max-w-md text-[16px] leading-relaxed text-white/70">
            SIGA n'est pas une copie. C'est une r├®ponse sp├®cifique ├á un march├®
            qui n'a jamais eu sa solution.
          </motion.p>
        </div>

        <div className="col-span-7 grid grid-cols-2 gap-5">
          {items.map((it) => (
            <motion.div
              key={it.n}
              variants={rise}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
            >
              <div className="text-[12px] font-bold tracking-wider text-[color:var(--siga-light)]">{it.n}</div>
              <div className="mt-3 text-[22px] font-bold leading-tight tracking-tight text-white">
                {it.t}
              </div>
              <div className="mt-3 text-[14px] leading-relaxed text-white/60">{it.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 9 ÔÇö FUTURE WORK ============ */
function Slide9() {
  const steps = [
    { icon: Smartphone, t: "Application mobile", d: "iOS ┬À Android natif" },
    { icon: Mic, t: "Assistant vocal", d: "Commandes RH en voix" },
    { icon: TrendingUp, t: "ML avanc├®", d: "Mod├¿les pr├®dictifs profonds" },
    { icon: Globe, t: "Multilingue", d: "FR ┬À AR ┬À EN" },
  ];
  return (
    <SlideShell>
      <div className="relative flex h-full flex-col px-20 py-16">
        <Eyebrow>08 ┬À Perspectives</Eyebrow>
        <motion.h2 variants={rise} className="mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]">
          La suite,{" "}
          <span style={{ color: "var(--siga-mid)" }}>maintenant.</span>
        </motion.h2>

        <div className="mt-20 flex-1">
          <div className="relative grid grid-cols-4 gap-6">
            {/* connector line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-[8%] right-[8%] top-[40px] h-[2px] origin-left"
              style={{
                background:
                  "linear-gradient(90deg, var(--siga-dark), var(--siga-light) 50%, transparent)",
              }}
            />

            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="grid h-20 w-20 place-items-center rounded-2xl text-white"
                  style={{
                    background: "var(--siga-dark)",
                    boxShadow:
                      "0 0 0 6px var(--siga-cream), 0 12px 30px -10px rgba(30,58,95,0.35)",
                  }}
                >
                  <s.icon size={28} />
                </div>
                <div className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--siga-mid)" }}>
                  ├ëtape {i + 1}
                </div>
                <div className="mt-2 text-[20px] font-bold tracking-tight" style={{ color: "var(--siga-dark)" }}>
                  {s.t}
                </div>
                <div className="mt-1 text-[14px]" style={{ color: "var(--siga-mid)" }}>
                  {s.d}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}

/* ============ SLIDE 10 ÔÇö CONCLUSION ============ */
function Slide10() {
  const thanks = ["Encadrant", "Universit├® A/Mira de B├®ja├»a", "EURL YKON", "Membres du jury", "Familles"];
  return (
    <SlideShell theme="dark" className="siga-radial siga-noise">
      <div className="siga-grid-bg absolute inset-0 opacity-30" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,212,232,0.25) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative flex h-full flex-col items-center justify-center px-20 text-center">
        <Eyebrow theme="dark">09 ┬À Conclusion</Eyebrow>

        <motion.h2
          variants={rise}
          className="mt-8 max-w-5xl text-[64px] font-bold leading-[1.02] tracking-[-0.04em] text-white"
        >
          SIGA transforme la gestion RH en Alg├®rie
          <br />
          en une plateforme{" "}
          <span className="siga-gradient-text">intelligente, conforme</span>
          <br />
          et{" "}
          <span className="siga-gradient-text">souveraine.</span>
        </motion.h2>

        <motion.div variants={rise} className="mt-16 flex items-center gap-3">
          <Heart size={14} className="text-[color:var(--siga-light)]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/60">
            Merci
          </span>
          <Heart size={14} className="text-[color:var(--siga-light)]" />
        </motion.div>

        <motion.div variants={rise} className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {thanks.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[13px] font-medium text-white/80 backdrop-blur"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div variants={rise} className="mt-20 flex items-center gap-8 opacity-80">
          <Logo variant="dark" size={24} />
          <div className="h-4 w-px bg-white/20" />
          <YkonMark variant="dark" />
        </motion.div>
      </div>
    </SlideShell>
  );
}

import type { ComponentType } from "react";

export const slides: { component: ComponentType; theme?: "light" | "dark" }[] = [
  { component: Slide1, theme: "dark" },
  { component: Slide2 },
  { component: Slide3 },
  { component: Slide4 },
  { component: Slide5 },
  { component: Slide6 },
  { component: Slide7 },
  { component: Slide8, theme: "dark" },
  { component: Slide9 },
  { component: Slide10, theme: "dark" },
];
