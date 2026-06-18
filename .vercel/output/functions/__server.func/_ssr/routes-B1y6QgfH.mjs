import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { C as Bot, S as Briefcase, T as Bell, _ as ChevronLeft, a as Smartphone, b as Calendar, c as QrCode, d as LayoutGrid, f as Layers, g as ChevronRight, h as Cloud, i as Sparkles, l as Mic, m as Code, n as Users, o as Shield, p as Globe, r as TrendingUp, s as Server, t as X, u as MessageSquare, v as Check, w as BookOpen, x as Calculator, y as ChartNoAxesColumnIncreasing } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B1y6QgfH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var stagger = {
	hidden: {},
	show: { transition: {
		staggerChildren: .08,
		delayChildren: .15
	} }
};
var rise = {
	hidden: {
		opacity: 0,
		y: 20
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function SlideShell({ children, className = "", theme = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
		variants: stagger,
		initial: "hidden",
		animate: "show",
		className: `relative h-full w-full overflow-hidden ${className}`,
		style: { color: theme === "dark" ? "#fff" : "var(--siga-ink)" },
		children
	});
}
function Eyebrow({ children, theme = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		variants: rise,
		className: "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]",
		style: { color: theme === "dark" ? "var(--siga-light)" : "var(--siga-mid)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block h-1.5 w-1.5 rounded-full",
			style: { background: "currentColor" }
		}), children]
	});
}
function Logo({ variant = "dark", size = 28 }) {
	const stroke = variant === "dark" ? "#fff" : "var(--siga-dark)";
	const fill = variant === "dark" ? "var(--siga-light)" : "var(--siga-mid)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: size,
			height: size,
			viewBox: "0 0 32 32",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "2",
					y: "2",
					width: "28",
					height: "28",
					rx: "8",
					stroke,
					strokeWidth: "1.5",
					opacity: "0.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M10 12.5C10 10.567 11.567 9 13.5 9H19a3 3 0 0 1 3 3v.5",
					stroke,
					strokeWidth: "2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M22 19.5c0 1.933-1.567 3.5-3.5 3.5H13a3 3 0 0 1-3-3V19",
					stroke: fill,
					strokeWidth: "2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "16",
					cy: "16",
					r: "2",
					fill
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[15px] font-bold tracking-tight",
			style: { color: variant === "dark" ? "#fff" : "var(--siga-dark)" },
			children: "SIGA"
		})]
	});
}
function YkonMark({ variant = "dark" }) {
	const color = variant === "dark" ? "rgba(255,255,255,0.7)" : "var(--siga-mid)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-2 text-[12px] font-medium tracking-wide",
		style: { color },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: "18",
			height: "18",
			viewBox: "0 0 18 18",
			fill: "none",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M3 3l6 6 6-6M9 9v6",
				stroke: color,
				strokeWidth: "1.5",
				strokeLinecap: "round"
			})
		}), "EURL YKON"]
	});
}
function Slide1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		theme: "dark",
		className: "siga-radial siga-noise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .8
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: 1.6,
					ease: "easeOut"
				},
				className: "absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full",
				style: {
					background: "radial-gradient(circle, rgba(184,212,232,0.35) 0%, transparent 60%)",
					filter: "blur(40px)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: rise,
						className: "flex items-center justify-between px-12 pt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { variant: "dark" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YkonMark, { variant: "dark" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col items-center justify-center px-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: rise,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.2em] text-[color:var(--siga-bg)] backdrop-blur",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 12 }), " Master Professionnel — Informatique - Génie Logiciel"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								variants: rise,
								className: "mt-8 max-w-5xl text-[64px] font-bold leading-[1.05] tracking-[-0.04em] text-white",
								children: [
									"SIGA — Système Intégré de",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "siga-gradient-text",
										children: "Gestion Automatisée"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: rise,
								className: "mt-8 max-w-xl text-[18px] leading-relaxed text-white/70",
								children: "Développement d'un SaaS RH intelligent adapté au marché Algérien"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								variants: rise,
								className: "mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
								children: [
									{
										k: "Réalisé par",
										v: "HAMMACHE Amira",
										v2: "HADJI Melissa"
									},
									{
										k: "Université",
										v: "A/Mira de Béjaïa",
										v2: "MÉMOIRE DE FIN D'ÉTUDES — 2025/2026"
									},
									{
										k: "Encadrant",
										v: "M. ACHROUFENE Achour",
										v2: "Soutenance de Master"
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-[#1e3a5f]/40 px-8 py-5 text-left",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--siga-light)]",
											children: item.k
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-2 text-[14px] font-semibold text-white",
											children: item.v
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[13px] text-white/60",
											children: item.v2
										})
									]
								}, item.k))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: rise,
						className: "px-12 pb-8 text-center text-[11px] uppercase tracking-[0.3em] text-white/40",
						children: "press → to begin"
					})
				]
			})
		]
	});
}
function Slide2() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col px-20 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Sommaire" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
				variants: rise,
				className: "mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]",
				children: [
					"Plan de la",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "var(--siga-mid)" },
						children: "Présentation."
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: rise,
				className: "max-w-xs text-right text-[14px] leading-relaxed",
				style: { color: "var(--siga-mid)" },
				children: "Présenter une solution SaaS RH complète, conforme à la réglementation algérienne et enrichie par l'IA."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid grid-cols-2 gap-6",
			children: [
				{
					n: "01",
					t: "Contexte & Problématique",
					d: "Les défis de la digitalisation RH dans les entreprises algériennes et la solution SIGA"
				},
				{
					n: "02",
					t: "Architecture & Méthodologie",
					d: "Stack technique moderne et approche agile Scrum"
				},
				{
					n: "03",
					t: "Modules Fonctionnels",
					d: "Onboarding, gestion RH, pointage QR et module de paie"
				},
				{
					n: "04",
					t: "Intelligence Artificielle",
					d: "Assistant IA conversationnel, messagerie interne et intelligence métier prédictive"
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: rise,
				className: "group flex gap-6 rounded-2xl border bg-white/60 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg",
				style: { borderColor: "rgba(30,58,95,0.1)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[40px] font-black leading-none opacity-20 transition-opacity group-hover:opacity-100",
					style: { color: "var(--siga-mid)" },
					children: s.n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[20px] font-bold",
					style: { color: "var(--siga-dark)" },
					children: s.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-[15px] leading-snug",
					style: { color: "var(--siga-mid)" },
					children: s.d
				})] })]
			}, s.n))
		})]
	})] });
}
function Slide3() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		theme: "dark",
		className: "siga-radial siga-noise",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full flex-col items-center justify-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: rise,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
							size: 32,
							className: "text-white/80"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					theme: "dark",
					children: "Chapitre 01"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					variants: rise,
					className: "mt-6 text-[64px] font-bold leading-[1.05] tracking-[-0.035em] text-white",
					children: [
						"Contexte &",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "siga-gradient-text",
							children: "Problématique"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					variants: rise,
					className: "mt-6 max-w-xl text-[18px] leading-relaxed text-white/70",
					children: "Les défis de la digitalisation RH dans les entreprises algériennes et l'opportunité d'une solution intégrée — 3 sections"
				})
			]
		})]
	});
}
function Slide4() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid h-full grid-cols-12 gap-12 px-20 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "col-span-5 flex flex-col justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Problématique" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					variants: rise,
					className: "mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]",
					children: [
						"Les Défis RH",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--siga-mid)" },
							children: "en Algérie."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					variants: rise,
					className: "mt-6 text-[16px] leading-relaxed",
					style: { color: "var(--siga-mid)" },
					children: "Les entreprises algériennes, particulièrement les PME, font face à des lacunes critiques :"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: rise,
				className: "rounded-2xl border p-6",
				style: {
					borderColor: "rgba(30,58,95,0.1)",
					background: "var(--siga-bg)"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[12px] font-bold uppercase tracking-[0.1em]",
					style: { color: "var(--siga-dark)" },
					children: "Impact sur les PME"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-3",
					children: [
						{
							l: "Perte de productivité",
							v: "Élevée",
							c: "var(--siga-dark)"
						},
						{
							l: "Risque d'erreurs",
							v: "Élevé",
							c: "var(--siga-mid)"
						},
						{
							l: "Visibilité décisionnelle",
							v: "Faible",
							c: "var(--siga-dark)"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between border-b pb-1 last:border-0",
						style: { borderColor: "rgba(30,58,95,0.1)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[14px] font-medium",
							style: { color: "var(--siga-dark)" },
							children: item.l
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[13px] font-bold",
							style: { color: item.c },
							children: item.v
						})]
					}, item.l))
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "col-span-7 flex flex-col justify-center gap-4",
			children: [[
				{
					t: "Gestion Manuelle",
					d: "Saisie manuelle des bulletins de paie, suivi des absences sur Excel, calcul des cotisations sociales sujet aux erreurs."
				},
				{
					t: "Solutions Fragmentées",
					d: "Absence de solutions intégrées adaptées au contexte algérien. Les ERP (SAP, Oracle) sont trop coûteux pour les PME."
				},
				{
					t: "Conformité Réglementaire",
					d: "Difficultés à assurer la conformité avec les évolutions fréquentes du cadre légal (CNAS, impôts, déclarations sociales)."
				},
				{
					t: "Manque d'Automatisation",
					d: "Les solutions existantes n'exploitent pas les technologies intelligentes."
				}
			].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: rise,
				className: "siga-card group flex items-start gap-4 p-5 transition hover:translate-x-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 flex-none rounded-full p-1",
					style: {
						background: "var(--siga-bg)",
						color: "var(--siga-mid)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[18px] font-bold tracking-tight",
					style: { color: "var(--siga-dark)" },
					children: b.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-[14px] leading-snug",
					style: { color: "var(--siga-mid)" },
					children: b.d
				})] })]
			}, b.t)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: rise,
				className: "mt-2 text-[15px] font-bold text-center p-3 rounded-lg bg-[color:var(--siga-dark)] text-white",
				children: "Constat : Aucune solution ne réunit conformité locale + automatisation + UX moderne"
			})]
		})]
	}) });
}
function Slide5() {
	const pillars = [
		{
			icon: Cloud,
			title: "Architecture SaaS",
			desc: "Multi-entreprises • Sécurisée • Évolutive"
		},
		{
			icon: Shield,
			title: "Conformité",
			desc: "Législation algérienne CNAS, IRG, DAS"
		},
		{
			icon: Bot,
			title: "Intelligence",
			desc: "Assistant IA • Automatisation • Prédictif"
		},
		{
			icon: Users,
			title: "Collaboration",
			desc: "Messagerie • Workflows • Notifications"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col px-20 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Solution Proposée" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						variants: rise,
						className: "mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]",
						children: [
							"SIGA : La Plateforme",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--siga-mid)" },
								children: "SaaS RH."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						variants: rise,
						className: "mt-4 text-[16px] font-medium",
						style: { color: "var(--siga-mid)" },
						children: "Une solution cloud-native, conforme à la réglementation algérienne et enrichie par l'IA."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "flex gap-3 text-[13px] font-semibold",
					style: { color: "var(--siga-dark)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-[color:var(--siga-bg)] px-4 py-1.5",
							children: "Responsables RH"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-[color:var(--siga-bg)] px-4 py-1.5",
							children: "Managers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-[color:var(--siga-bg)] px-4 py-1.5",
							children: "Employés"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-4 gap-6",
				children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "flex flex-col items-center rounded-2xl border bg-white p-8 text-center transition-shadow hover:shadow-lg",
					style: { borderColor: "rgba(30,58,95,0.1)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-16 w-16 place-items-center rounded-2xl",
							style: {
								background: "var(--siga-dark)",
								color: "white"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { size: 28 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 text-[20px] font-bold",
							style: { color: "var(--siga-dark)" },
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-[14px]",
							style: { color: "var(--siga-mid)" },
							children: p.desc
						})
					]
				}, p.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: rise,
				className: "mt-12 flex justify-center gap-8 border-t pt-8",
				style: { borderColor: "rgba(30,58,95,0.1)" },
				children: [
					"Centraliser processus RH & paie",
					"Garantir la conformité",
					"Automatiser les tâches",
					"Offrir une visibilité temps réel"
				].map((obj) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						size: 16,
						style: { color: "var(--siga-mid)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[14px] font-bold uppercase tracking-wide",
						style: { color: "var(--siga-dark)" },
						children: obj
					})]
				}, obj))
			})
		]
	}) });
}
function Slide6() {
	const criteria = [
		"Conformité Algérienne",
		"Architecture Cloud",
		"Couverture RH Complète",
		"Automatisation Avancée",
		"Assistant IA Intelligent",
		"Analyse Prédictive RH"
	];
	const solutions = [
		{
			name: "Excel / Papier",
			vals: [
				0,
				0,
				0,
				0,
				0,
				0
			]
		},
		{
			name: "Silwane Paye",
			vals: [
				1,
				0,
				2,
				0,
				0,
				0
			]
		},
		{
			name: "Winalco Paie",
			vals: [
				1,
				0,
				0,
				0,
				0,
				0
			]
		},
		{
			name: "Talenteo / PayFit",
			vals: [
				0,
				1,
				1,
				2,
				0,
				0
			]
		},
		{
			name: "SIGA",
			vals: [
				1,
				1,
				1,
				1,
				1,
				1
			],
			highlight: true
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full px-20 py-16 flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Étude Comparative" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
				variants: rise,
				className: "mt-4 text-[42px] font-bold leading-[1.05] tracking-[-0.035em]",
				children: ["Analyse des ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: "var(--siga-mid)" },
					children: "Solutions Existantes."
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: rise,
				className: "mt-8 flex-1 overflow-hidden rounded-3xl border",
				style: { borderColor: "rgba(30,58,95,0.1)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr_1.2fr] bg-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), solutions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `px-4 py-4 text-center ${s.highlight ? "siga-glow relative z-10" : ""}`,
						style: {
							background: s.highlight ? "var(--siga-dark)" : "white",
							color: s.highlight ? "#fff" : "var(--siga-dark)"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[14px] font-bold tracking-tight leading-snug",
							children: s.name
						})
					}, s.name))]
				}), criteria.map((crit, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr_1.2fr] border-t",
					style: { borderColor: "rgba(30,58,95,0.08)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-white px-6 py-4 text-[14px] font-medium flex items-center",
						style: { color: "var(--siga-dark)" },
						children: crit
					}), solutions.map((sol, j) => {
						const val = sol.vals[i];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid place-items-center py-4",
							style: { background: sol.highlight ? "rgba(107,163,214,0.18)" : "white" },
							children: val === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-8 w-8 place-items-center rounded-full",
								style: {
									background: sol.highlight ? "var(--siga-dark)" : "var(--siga-bg)",
									color: sol.highlight ? "#fff" : "var(--siga-dark)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									size: 16,
									strokeWidth: 3
								})
							}) : val === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[20px] font-bold",
								style: { color: "var(--siga-mid)" },
								children: "~"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-8 w-8 place-items-center rounded-full bg-[color:var(--siga-bg)]/40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									size: 16,
									className: "opacity-40",
									style: { color: "var(--siga-mid)" }
								})
							})
						}, j);
					})]
				}, crit))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: rise,
				className: "mt-6 text-center text-[18px] font-bold",
				style: { color: "var(--siga-dark)" },
				children: "SIGA = Conformité + Cloud + IA + UX moderne + Analyse prédictive"
			})
		]
	}) });
}
function Slide7() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		theme: "dark",
		className: "siga-radial siga-noise",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full flex-col items-center justify-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: rise,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, {
							size: 32,
							className: "text-white/80"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					theme: "dark",
					children: "Chapitre 02"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					variants: rise,
					className: "mt-6 text-[64px] font-bold leading-[1.05] tracking-[-0.035em] text-white",
					children: [
						"Architecture &",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "siga-gradient-text",
							children: "Méthodologie"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					variants: rise,
					className: "mt-6 max-w-xl text-[18px] leading-relaxed text-white/70",
					children: "Stack technique moderne et approche agile Scrum — 2 sections"
				})
			]
		})]
	});
}
function Slide8() {
	const stack = [
		{
			icon: Server,
			name: "Backend",
			tags: [
				"Next.js API Routes",
				"PostgreSQL",
				"Prisma ORM",
				"NextAuth.js + JWT",
				"Zod"
			],
			tone: "dark"
		},
		{
			icon: LayoutGrid,
			name: "Frontend",
			tags: [
				"Next.js",
				"React",
				"TailwindCSS",
				"Mantine",
				"App Router"
			],
			tone: "mid"
		},
		{
			icon: Bot,
			name: "Intelligence Artificielle",
			tags: [
				"Vercel AI SDK",
				"Llama 3.3 70B (Groq)",
				"Python/FastAPI",
				"PaddleOCR"
			],
			tone: "light"
		},
		{
			icon: Cloud,
			name: "DevOps",
			tags: [
				"Docker",
				"Git/GitHub",
				"Railway (PaaS)",
				"Mailpit"
			],
			tone: "bg"
		}
	];
	const toneMap = {
		dark: {
			bg: "var(--siga-dark)",
			fg: "#fff",
			tag: "rgba(255,255,255,0.15)"
		},
		mid: {
			bg: "var(--siga-mid)",
			fg: "#fff",
			tag: "rgba(255,255,255,0.18)"
		},
		light: {
			bg: "var(--siga-light)",
			fg: "#0f1f33",
			tag: "rgba(255,255,255,0.4)"
		},
		bg: {
			bg: "var(--siga-bg)",
			fg: "var(--siga-dark)",
			tag: "rgba(30,58,95,0.1)"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid h-full grid-cols-12 gap-12 px-20 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "col-span-4 flex flex-col justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Architecture Technique" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
				variants: rise,
				className: "mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]",
				children: [
					"Stack Technique",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "var(--siga-mid)" },
						children: "Moderne."
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: rise,
				className: "space-y-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-xl border bg-white px-4 py-3",
					style: { borderColor: "rgba(30,58,95,0.1)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
						size: 16,
						style: { color: "var(--siga-mid)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[14px] font-medium",
						style: { color: "var(--siga-dark)" },
						children: "Développement Fullstack"
					})]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "col-span-8 flex flex-col justify-center gap-4",
			children: stack.map((l) => {
				const t = toneMap[l.tone];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "group flex flex-col gap-3 rounded-2xl px-6 py-5 transition-transform hover:-translate-y-0.5",
					style: {
						background: t.bg,
						color: t.fg
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 flex-none place-items-center rounded-xl",
							style: { background: t.tag },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { size: 20 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[20px] font-bold tracking-tight",
							children: l.name
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-2 mt-1",
						children: l.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full px-3 py-1 text-[13px] font-medium",
							style: { background: t.tag },
							children: tag
						}, tag))
					})]
				}, l.name);
			})
		})]
	}) });
}
function Slide9() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col px-20 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Méthodologie Agile" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					variants: rise,
					className: "mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]",
					children: [
						"Approche Scrum",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--siga-mid)" },
							children: "en 6 sprints."
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "flex gap-6 text-[12px] font-semibold text-right",
					style: { color: "var(--siga-dark)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--siga-mid)" },
							children: "PO :"
						}), " YAICI Yanis"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--siga-mid)" },
							children: "SM :"
						}), " ACHROUFENE Achour"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--siga-mid)" },
							children: "Devs :"
						}), " HAMMACHE & HADJI"] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: rise,
				className: "mt-6 flex gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl bg-white px-4 py-2 text-[14px] font-bold shadow-sm",
					children: "3 Piliers : Transparence | Inspection | Adaptation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl bg-white px-4 py-2 text-[14px] font-bold shadow-sm",
					children: "4 Événements : Planning | Daily | Review | Retro"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { scaleX: 0 },
					animate: { scaleX: 1 },
					transition: {
						duration: 1.4,
						ease: [
							.22,
							1,
							.36,
							1
						],
						delay: .3
					},
					className: "absolute left-0 right-0 top-[32px] h-[4px] origin-left rounded-full",
					style: { background: "linear-gradient(90deg, var(--siga-dark), var(--siga-mid), var(--siga-light))" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative grid grid-cols-6 gap-4",
					children: [
						{
							n: "S0",
							t: "Planification",
							d: "Charte graphique, stack, backlog"
						},
						{
							n: "S1",
							t: "Onboarding (4s)",
							d: "Auth, abonnements"
						},
						{
							n: "S2-3",
							t: "Core RH (6s)",
							d: "Employés, congés, pointage"
						},
						{
							n: "S4",
							t: "Paie (5s)",
							d: "Moteur de calcul"
						},
						{
							n: "S5",
							t: "IA & Messagerie (3s)",
							d: "Chatbot, web sockets"
						},
						{
							n: "S6",
							t: "Intelligence Métier (4s)",
							d: "ATS, devis, prédiction"
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .5 + i * .12
						},
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-[68px] w-[68px] place-items-center rounded-2xl text-[16px] font-bold text-white",
								style: {
									background: "var(--siga-dark)",
									boxShadow: "0 0 0 6px var(--siga-cream), 0 12px 30px -10px rgba(30,58,95,0.4)"
								},
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 text-[14px] font-bold tracking-tight",
								style: { color: "var(--siga-dark)" },
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-[12px] px-2",
								style: { color: "var(--siga-mid)" },
								children: s.d
							})
						]
					}, s.n))
				})]
			})
		]
	})] });
}
function Slide10() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		theme: "dark",
		className: "siga-radial siga-noise",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full flex-col items-center justify-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: rise,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, {
							size: 32,
							className: "text-white/80"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					theme: "dark",
					children: "Chapitre 03"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					variants: rise,
					className: "mt-6 text-[64px] font-bold leading-[1.05] tracking-[-0.035em] text-white",
					children: [
						"Modules",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "siga-gradient-text",
							children: "Fonctionnels"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					variants: rise,
					className: "mt-6 max-w-xl text-[18px] leading-relaxed text-white/70",
					children: "Du onboarding à la paie, le cœur opérationnel de SIGA — 2 sections"
				})
			]
		})]
	});
}
function Slide11() {
	const cards = [
		{
			t: "Gestion Employés",
			d: "CRUD collaborateurs, fiches, postes, services, types de contrats.",
			i: Users
		},
		{
			t: "Demandes de Congés",
			d: "Workflow complet, règles métier, vérification solde, justificatifs.",
			i: Calendar
		},
		{
			t: "Pointage QR Code",
			d: "Scan sécurisé mobile/PC, historique, correction manuelle.",
			i: QrCode
		},
		{
			t: "Notifications",
			d: "Alertes événements RH, demandes, validations, réunions.",
			i: Bell
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full px-20 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Modules Fonctionnels" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
				variants: rise,
				className: "mt-4 text-[42px] font-bold leading-[1.05] tracking-[-0.035em]",
				children: ["Onboarding & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: "var(--siga-mid)" },
					children: "Core RH."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: rise,
				className: "mt-6 flex items-center gap-4 bg-white px-6 py-4 rounded-xl border shadow-sm",
				style: {
					borderColor: "rgba(30,58,95,0.1)",
					color: "var(--siga-dark)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { size: 20 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[14px] font-bold",
						children: "Processus Onboarding (Sprint 1) :"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[14px] flex items-center gap-2",
						style: { color: "var(--siga-mid)" },
						children: [
							"Démo Commerciale ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "→"
							}),
							" Création Compte ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold",
								children: "→"
							}),
							" Activation avec token sécurisé"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-6",
				children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "siga-card flex items-start gap-4 p-5 transition hover:-translate-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 flex-none place-items-center rounded-xl",
						style: {
							background: "var(--siga-bg)",
							color: "var(--siga-dark)"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.i, { size: 20 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[18px] font-bold tracking-tight",
						style: { color: "var(--siga-dark)" },
						children: c.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-[14px] leading-snug",
						style: { color: "var(--siga-mid)" },
						children: c.d
					})] })]
				}, c.t))
			})
		]
	}) });
}
function Slide12() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full grid grid-cols-12 gap-12 px-20 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "col-span-6 flex flex-col justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Modules Fonctionnels" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						variants: rise,
						className: "mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]",
						children: [
							"Gestion de la",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--siga-mid)" },
								children: "Paie Conforme."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						variants: rise,
						className: "mt-4 text-[16px] font-medium",
						style: { color: "var(--siga-mid)" },
						children: "Moteur de calcul selon la législation algérienne 2026."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "mt-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[14px] font-bold uppercase",
						style: { color: "var(--siga-dark)" },
						children: "Moteur de calcul"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-[14px]",
						style: { color: "var(--siga-mid)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								style: { color: "var(--siga-dark)" },
								children: "Brut :"
							}), " Base + Primes + Heures supp."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								style: { color: "var(--siga-dark)" },
								children: "CNAS :"
							}), " 9% salarié + 26% employeur"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								style: { color: "var(--siga-dark)" },
								children: "IRG :"
							}), " Barème progressif + abattement 40%"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								style: { color: "var(--siga-dark)" },
								children: "Net :"
							}), " Brut - Retenues + Notes frais"] })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "mt-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[14px] font-bold uppercase",
						style: { color: "var(--siga-dark)" },
						children: "Déclarations Légales"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-[color:var(--siga-bg)] px-3 py-1 rounded text-[12px] font-bold",
								style: { color: "var(--siga-dark)" },
								children: "DAS CNAS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-[color:var(--siga-bg)] px-3 py-1 rounded text-[12px] font-bold",
								style: { color: "var(--siga-dark)" },
								children: "État 301-BIS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-[color:var(--siga-bg)] px-3 py-1 rounded text-[12px] font-bold",
								style: { color: "var(--siga-dark)" },
								children: "G50"
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "col-span-6 flex flex-col justify-center gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: rise,
				className: "siga-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[12px] font-bold uppercase mb-4",
					style: { color: "var(--siga-mid)" },
					children: "Cycle de Paie"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-[14px] font-bold",
					style: { color: "var(--siga-dark)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Brouillon" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Validé" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publié" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Payé" })
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: rise,
				className: "siga-card p-6 border-l-4",
				style: { borderLeftColor: "var(--siga-dark)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-4 text-[12px] font-bold uppercase",
					style: { color: "var(--siga-mid)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { size: 16 }), " Simulation (Base 40 000 DA)"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 text-[14px] font-mono",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Salaire Brut" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "46 000 DA" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							style: { color: "var(--siga-mid)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CNAS (9%)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "-3 600 DA" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							style: { color: "var(--siga-mid)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "IRG" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0 DA" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-gray-200 my-2 pt-2 flex justify-between font-bold",
							style: { color: "var(--siga-dark)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Net à payer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[16px]",
								children: "36 400 DA"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between mt-4 text-[12px]",
							style: { color: "var(--siga-mid)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Coût total employeur" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "60 400 DA" })]
						})
					]
				})]
			})]
		})]
	}) });
}
function Slide13() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		theme: "dark",
		className: "siga-radial siga-noise",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full flex-col items-center justify-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: rise,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, {
							size: 32,
							className: "text-white/80"
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					theme: "dark",
					children: "Chapitre 04"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					variants: rise,
					className: "mt-6 text-[64px] font-bold leading-[1.05] tracking-[-0.035em] text-white",
					children: [
						"Intelligence",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "siga-gradient-text",
							children: "Artificielle"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					variants: rise,
					className: "mt-6 max-w-xl text-[18px] leading-relaxed text-white/70",
					children: "L'IA au service des RH : assistant conversationnel, messagerie et analyse prédictive — 2 sections"
				})
			]
		})]
	});
}
function Slide14() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid h-full grid-cols-12 gap-12 px-20 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "col-span-6 flex flex-col justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Intelligence Artificielle" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					variants: rise,
					className: "mt-6 text-[44px] font-bold leading-[1.05] tracking-[-0.035em]",
					children: [
						"Chatbot Métier",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--siga-mid)" },
							children: "SIGA."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[14px] font-bold",
						style: { color: "var(--siga-dark)" },
						children: "Architecture & Sécurité"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-[14px]",
						style: { color: "var(--siga-mid)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Tech:" }), " Vercel AI SDK | Llama 3.3 70B (Groq) | Tool Calling"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Sécurité:" }), " Contrôle d'accès serveur, isolation par entreprise, confirmation base."] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "siga-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[13px] font-bold mb-2",
							style: { color: "var(--siga-dark)" },
							children: "Mode Employé"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[12px]",
							style: { color: "var(--siga-mid)" },
							children: "Consulter congés, pointages, déposer demandes via chat."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "siga-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[13px] font-bold mb-2",
							style: { color: "var(--siga-dark)" },
							children: "Mode RH/Admin"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[12px]",
							style: { color: "var(--siga-mid)" },
							children: "Indicateurs globaux, listes congés, détection absences/retards."
						})]
					})]
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "col-span-6 flex flex-col justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: rise,
				className: "siga-card overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-[color:var(--siga-dark)] px-4 py-3 text-white flex items-center gap-2 text-[13px] font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { size: 16 }), " Exemple Tool Calling"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 bg-[#0f1f33] text-green-400 font-mono text-[12px] leading-relaxed whitespace-pre overflow-x-auto",
					children: `{
  "tool_call": "submit_leave",
  "arguments": {
    "type": "CONGE_PAYE",
    "start": "2026-05-01",
    "end": "2026-05-05",
    "jours": 5
  },
  "message_confirm": "Confirmez-vous ?"
}`
				})]
			})
		})]
	}) });
}
function Slide15() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full px-20 py-16 flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Intelligence Artificielle" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
				variants: rise,
				className: "mt-4 text-[42px] font-bold leading-[1.05] tracking-[-0.035em]",
				children: ["Messagerie & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: "var(--siga-mid)" },
					children: "Analyse Prédictive."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid grid-cols-2 gap-8 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "flex flex-col gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "siga-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-3 text-[18px] font-bold",
							style: { color: "var(--siga-dark)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { size: 20 }), " Messagerie Interne"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[14px]",
							style: { color: "var(--siga-mid)" },
							children: "WebSockets, cloisonnement par entreprise, canaux privés et d'équipe."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "siga-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-3 text-[18px] font-bold",
							style: { color: "var(--siga-dark)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { size: 20 }), " Module ATS & Devis"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "text-[14px] space-y-2",
							style: { color: "var(--siga-mid)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Recrutement :" }), " Pipeline en 6 étapes, score/100, passerelle candidat → collaborateur."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Facturation :" }), " Devis vers facture, PDF, cycle de vie."] })]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "siga-card p-6 border-t-4 flex flex-col justify-between",
					style: { borderTopColor: "var(--siga-dark)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-4 text-[20px] font-bold",
							style: { color: "var(--siga-dark)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartNoAxesColumnIncreasing, { size: 24 }), " Pilotage Préventif RH"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[14px] mb-4",
							style: { color: "var(--siga-mid)" },
							children: "Moteur de règles transparent (Attrition & Burnout). Optimiseur de congés."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-[13px] font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-16 text-green-600",
											children: "Vert"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "< 40%" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-[13px] font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-16 text-orange-500",
											children: "Orange"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "40-70% (Alerte entretien individuel)" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-[13px] font-bold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-16 text-red-600",
											children: "Rouge"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "> 70%" })
									]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 p-3 rounded-lg bg-[color:var(--siga-bg)] text-[12px] font-bold text-center",
						style: { color: "var(--siga-dark)" },
						children: "⚠️ Loi 18-07 : Interdiction des décisions exclusives sur traitement automatisé"
					})]
				})]
			})
		]
	}) });
}
function Slide16() {
	const steps = [
		{
			icon: Mic,
			t: "Intégration vocale",
			d: "Pour l'assistant IA"
		},
		{
			icon: TrendingUp,
			t: "Modèles ML",
			d: "Prédictions avancées"
		},
		{
			icon: Smartphone,
			t: "App Mobile",
			d: "iOS / Android natif"
		},
		{
			icon: Globe,
			t: "Interconnexion",
			d: "Écosystème algérien"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		theme: "dark",
		className: "siga-radial siga-noise",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full flex-col px-20 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					theme: "dark",
					children: "Conclusion & Perspectives"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: rise,
					className: "mt-6 flex gap-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[36px] font-bold leading-[1.1] tracking-[-0.035em] text-white",
							children: "SIGA répond à un besoin structurel des PME algériennes."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [
								"Conformité (CNAS, IRG, DAS)",
								"Intelligence (IA, Prédictif)",
								"Cloud-Native",
								"Collaboration"
							].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white backdrop-blur",
								children: tag
							}, tag))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid grid-cols-4 gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { scaleX: 0 },
							animate: { scaleX: 1 },
							transition: {
								duration: 1.2,
								delay: .4
							},
							className: "absolute left-[8%] right-[8%] top-[32px] h-[2px] origin-left",
							style: { background: "linear-gradient(90deg, var(--siga-dark), var(--siga-light) 50%, transparent)" }
						}), steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .6 + i * .15
							},
							className: "flex flex-col items-center text-center z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-16 w-16 place-items-center rounded-2xl text-white",
									style: {
										background: "var(--siga-dark)",
										boxShadow: "0 0 0 4px var(--siga-cream)"
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { size: 24 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 text-[16px] font-bold text-white",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[13px] text-white/60",
									children: s.d
								})
							]
						}, s.t))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "mt-auto border-t border-white/10 pt-6 flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[18px] font-bold text-white mb-2",
						children: "Merci pour votre attention"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[13px] text-white/60",
						children: "HAMMACHE Amira & HADJI Melissa | Encadrant : M. ACHROUFENE Achour"
					})]
				})
			]
		})]
	});
}
var slides = [
	{
		component: Slide1,
		theme: "dark"
	},
	{ component: Slide2 },
	{
		component: Slide3,
		theme: "dark"
	},
	{ component: Slide4 },
	{ component: Slide5 },
	{ component: Slide6 },
	{
		component: Slide7,
		theme: "dark"
	},
	{ component: Slide8 },
	{ component: Slide9 },
	{
		component: Slide10,
		theme: "dark"
	},
	{ component: Slide11 },
	{ component: Slide12 },
	{
		component: Slide13,
		theme: "dark"
	},
	{ component: Slide14 },
	{ component: Slide15 },
	{
		component: Slide16,
		theme: "dark"
	}
];
function Deck() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [direction, setDirection] = (0, import_react.useState)(1);
	const go = (0, import_react.useCallback)((delta) => {
		setDirection(delta);
		setIndex((i) => Math.max(0, Math.min(slides.length - 1, i + delta)));
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") go(1);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "siga-deck fixed inset-0 overflow-hidden",
		style: { background: (slides[index].theme ?? "light") === "dark" ? "var(--siga-dark)" : "var(--siga-cream)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				custom: direction,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					custom: direction,
					initial: {
						opacity: 0,
						x: direction * 40
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: direction * -40
					},
					transition: {
						duration: .5,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "absolute inset-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Current, {})
				}, index)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute left-0 right-0 top-0 z-50 h-[3px] bg-black/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full",
					style: { background: "var(--siga-light)" },
					initial: false,
					animate: { width: `${(index + 1) / slides.length * 100}%` },
					transition: {
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-white/70 px-3 py-2 backdrop-blur-xl",
				style: { boxShadow: "0 8px 24px -8px rgba(30,58,95,0.25)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go(-1),
						disabled: index === 0,
						"aria-label": "Previous slide",
						className: "grid h-8 w-8 place-items-center rounded-full text-[color:var(--siga-dark)] transition hover:bg-[color:var(--siga-bg)] disabled:opacity-30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { size: 16 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-[64px] text-center text-[12px] font-medium tabular-nums text-[color:var(--siga-dark)]",
						children: [
							String(index + 1).padStart(2, "0"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-1 text-[color:var(--siga-mid)]/40",
								children: "/"
							}),
							String(slides.length).padStart(2, "0")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => go(1),
						disabled: index === slides.length - 1,
						"aria-label": "Next slide",
						className: "grid h-8 w-8 place-items-center rounded-full text-[color:var(--siga-dark)] transition hover:bg-[color:var(--siga-bg)] disabled:opacity-30",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { size: 16 })
					})
				]
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {});
}
//#endregion
export { Index as component };
