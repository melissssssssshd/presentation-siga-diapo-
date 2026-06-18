import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { a as Smartphone, c as Cloud, d as Check, f as Bot, i as Sparkles, l as ChevronRight, n as Users, o as Shield, r as TrendingUp, s as Mic, t as X, u as ChevronLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D5k9JP9M.js
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
function SlideNumber({ n, total, dark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute top-7 right-10 z-20 flex items-baseline gap-1.5 font-mono select-none",
		style: { color: dark ? "rgba(255,255,255,0.3)" : "var(--siga-mid)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[26px] font-black leading-none",
			children: String(n).padStart(2, "0")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-[12px] font-semibold opacity-50",
			children: ["/ ", String(total).padStart(2, "0")]
		})]
	});
}
var TOTAL = 8;
function Slide1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-30" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideNumber, {
			n: 1,
			total: TOTAL
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "flex items-center justify-between px-12 pt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { variant: "light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YkonMark, { variant: "light" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col items-center justify-center px-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: rise,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-[13px] font-bold uppercase tracking-[0.18em]",
								style: {
									borderColor: "rgba(30,58,95,0.1)",
									color: "var(--siga-dark)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 13 }), " Mémoire de Fin d'Études — 2025/2026"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							variants: rise,
							className: "mt-8 max-w-5xl text-[62px] font-bold leading-[1.05] tracking-[-0.04em]",
							style: { color: "var(--siga-dark)" },
							children: [
								"SIGA — Système Intégré de",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										background: "linear-gradient(135deg, var(--siga-dark) 0%, var(--siga-mid) 100%)",
										WebkitBackgroundClip: "text",
										backgroundClip: "text",
										color: "transparent"
									},
									children: "Gestion Automatisée"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: rise,
							className: "mt-5 max-w-xl text-[19px] font-medium leading-relaxed",
							style: { color: "var(--siga-dark)" },
							children: "Développement d'un SaaS RH intelligent adapté au marché Algérien"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: rise,
							className: "mt-4 h-px w-20 rounded-full",
							style: { background: "var(--siga-light)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: rise,
							className: "mt-3 text-[14px] font-semibold tracking-wide",
							style: { color: "var(--siga-mid)" },
							children: "Master Professionnel — Informatique - Génie Logiciel — Université A/Mira de Béjaïa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: rise,
							className: "mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-white shadow-sm",
							style: { borderColor: "rgba(30,58,95,0.1)" },
							children: [{
								k: "Réalisé par",
								v: "HAMMACHE Amira",
								v2: "HADJI Melissa"
							}, {
								k: "Encadrant",
								v: "M. ACHROUFENE Achour",
								v2: "Soutenance de Master"
							}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-r px-10 py-5 text-left last:border-0",
								style: { borderColor: "rgba(30,58,95,0.05)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] font-bold uppercase tracking-[0.18em]",
										style: {
											color: "var(--siga-dark)",
											opacity: .6
										},
										children: item.k
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 text-[16px] font-bold",
										style: { color: "var(--siga-dark)" },
										children: item.v
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[14px] font-medium",
										style: {
											color: "var(--siga-dark)",
											opacity: .7
										},
										children: item.v2
									})
								]
							}, item.k))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: rise,
					className: "px-12 pb-8 text-center text-[11px] font-bold uppercase tracking-[0.3em]",
					style: {
						color: "var(--siga-dark)",
						opacity: .4
					},
					children: "Appuyez sur → pour commencer"
				})
			]
		})
	] });
}
function Slide2() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-30" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideNumber, {
			n: 2,
			total: TOTAL
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full flex-col px-20 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Sommaire" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					variants: rise,
					className: "mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]",
					style: { color: "var(--siga-dark)" },
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
		})
	] });
}
function Slide3() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-25" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideNumber, {
			n: 3,
			total: TOTAL
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full flex-col px-16 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Partie 1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-1 gap-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "flex w-[320px] flex-none flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[108px] font-black leading-none tracking-[-0.05em]",
							style: {
								background: "linear-gradient(135deg, var(--siga-dark) 0%, var(--siga-mid) 100%)",
								WebkitBackgroundClip: "text",
								backgroundClip: "text",
								color: "transparent"
							},
							children: "97%"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-[18px] font-bold leading-snug",
							style: { color: "var(--siga-dark)" },
							children: "des PME algériennes gèrent leur RH sans outil digital dédié."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 text-[12px] font-semibold uppercase tracking-[0.14em]",
							style: {
								color: "var(--siga-mid)",
								opacity: .7
							},
							children: "Source : analyse de marché — mémoire SIGA 2026"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 h-1 w-14 rounded-full",
							style: { background: "linear-gradient(90deg, var(--siga-dark), var(--siga-light))" }
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						variants: rise,
						className: "text-[46px] font-bold leading-[1.05] tracking-[-0.035em]",
						style: { color: "var(--siga-dark)" },
						children: ["Contexte", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--siga-mid)" },
							children: "."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						variants: rise,
						className: "mt-4 max-w-xl text-[17px] font-medium leading-relaxed",
						style: {
							color: "var(--siga-dark)",
							opacity: .8
						},
						children: "La digitalisation RH progresse en Algérie, mais les PME restent largement sur Excel et papier. Les ERP existants (SAP, Oracle) sont trop coûteux et peu adaptés au contexte local. Il existe un besoin réel de solutions RH accessibles, modernes et conformes à la réglementation algérienne."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: rise,
						className: "mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 text-[11px] font-bold uppercase tracking-[0.18em]",
							style: {
								color: "var(--siga-mid)",
								opacity: .6
							},
							children: "Progression du marché"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center",
							children: [
								{
									emoji: "📊",
									label: "Excel & papier",
									desc: "Suivi manuel, erreurs fréquentes, zéro traçabilité",
									arrow: true,
									highlight: false
								},
								{
									emoji: "💰",
									label: "ERP coûteux",
									desc: "SAP, Oracle — inadaptés, hors budget PME algériennes",
									arrow: true,
									highlight: false
								},
								{
									emoji: "✦",
									label: "SIGA",
									desc: "Solution locale, accessible, conforme et intelligente",
									arrow: false,
									highlight: true
								}
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 12
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .5,
										delay: .35 + i * .15
									},
									className: "flex flex-col rounded-xl p-4",
									style: {
										background: s.highlight ? "var(--siga-dark)" : "white",
										border: s.highlight ? "none" : "1px solid rgba(30,58,95,0.1)",
										boxShadow: s.highlight ? "0 0 0 1px rgba(107,163,214,0.3), 0 10px 24px -8px rgba(30,58,95,0.35)" : "0 1px 4px rgba(30,58,95,0.06)",
										minWidth: "138px"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[13px] mb-1.5 opacity-60",
											style: { color: s.highlight ? "white" : "var(--siga-mid)" },
											children: s.emoji
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[14px] font-bold",
											style: { color: s.highlight ? "white" : "var(--siga-dark)" },
											children: s.label
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-[11px] font-medium leading-snug",
											style: {
												color: s.highlight ? "rgba(255,255,255,0.6)" : "var(--siga-dark)",
												opacity: s.highlight ? 1 : .6
											},
											children: s.desc
										})
									]
								}), s.arrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										scaleX: 0
									},
									animate: {
										opacity: 1,
										scaleX: 1
									},
									transition: {
										duration: .4,
										delay: .5 + i * .15
									},
									style: { transformOrigin: "left" },
									className: "mx-2.5 flex items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-0.5 w-6 rounded-full",
										style: { background: "var(--siga-light)" }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
										size: 13,
										style: {
											color: "var(--siga-light)",
											marginLeft: "-3px"
										}
									})]
								})]
							}, i))
						})]
					})]
				})]
			})]
		})
	] });
}
function Slide4() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-25" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideNumber, {
			n: 4,
			total: TOTAL
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative grid h-full grid-cols-12 gap-12 px-20 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "col-span-5 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Problématique" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						variants: rise,
						className: "mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]",
						style: { color: "var(--siga-dark)" },
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
		})
	] });
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-20" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideNumber, {
			n: 5,
			total: TOTAL
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full flex-col px-20 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Solution Proposée" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
							variants: rise,
							className: "mt-6 text-[48px] font-bold leading-[1.05] tracking-[-0.035em]",
							style: { color: "var(--siga-dark)" },
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
		})
	] });
}
function Slide6() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-30" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideNumber, {
			n: 6,
			total: TOTAL
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full flex-col px-16 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Méthodologie Agile" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						variants: rise,
						className: "mt-4 text-[46px] font-bold leading-[1.05] tracking-[-0.035em]",
						style: { color: "var(--siga-dark)" },
						children: [
							"Approche Scrum",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--siga-mid)" },
								children: "en 6 sprints."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: rise,
						className: "text-right text-[13px] font-bold",
						style: {
							color: "var(--siga-dark)",
							opacity: .6
						},
						children: "PO : YAICI Yanis \xA0|\xA0 SM : ACHROUFENE Achour \xA0|\xA0 Devs : HAMMACHE & HADJI"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "mt-5 flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border bg-white px-5 py-2 text-[13px] font-bold shadow-sm",
						style: {
							borderColor: "rgba(30,58,95,0.1)",
							color: "var(--siga-dark)"
						},
						children: "3 Piliers : Transparence | Inspection | Adaptation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border bg-white px-5 py-2 text-[13px] font-bold shadow-sm",
						style: {
							borderColor: "rgba(30,58,95,0.1)",
							color: "var(--siga-dark)"
						},
						children: "4 Événements : Planning | Daily | Review | Retro"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-10 flex-1",
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
						className: "absolute left-0 right-0 top-[32px] h-[3px] origin-left rounded-full",
						style: { background: "linear-gradient(90deg, var(--siga-dark), var(--siga-mid), var(--siga-light))" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid grid-cols-6 gap-2",
						children: [
							{
								n: "S0",
								t: "Planification",
								d: "2s",
								sub: "Charte graphique, stack, backlog"
							},
							{
								n: "S1",
								t: "Onboarding",
								d: "4s",
								sub: "Auth, abonnements"
							},
							{
								n: "S2-3",
								t: "Core RH",
								d: "6s",
								sub: "Employés, congés, pointage"
							},
							{
								n: "S4",
								t: "Paie",
								d: "5s",
								sub: "Moteur de calcul"
							},
							{
								n: "S5",
								t: "IA & Messagerie",
								d: "3s",
								sub: "Chatbot, web sockets"
							},
							{
								n: "S6",
								t: "Intelligence Métier",
								d: "4s",
								sub: "ATS, devis, prédiction"
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
								duration: .55,
								delay: .5 + i * .1
							},
							className: "flex flex-col items-center text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-[64px] w-[64px] place-items-center rounded-2xl text-[15px] font-bold text-white",
									style: {
										background: "var(--siga-dark)",
										boxShadow: "0 0 0 5px var(--siga-cream)"
									},
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 text-[13px] font-bold",
									style: { color: "var(--siga-dark)" },
									children: [
										s.t,
										" (",
										s.d,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-[12px] font-medium",
									style: { color: "var(--siga-mid)" },
									children: s.sub
								})
							]
						}, s.n))
					})]
				})
			]
		})
	] });
}
function Slide7() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-25" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideNumber, {
			n: 7,
			total: TOTAL
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full flex-col items-center px-16 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Démonstration" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					variants: rise,
					className: "mt-5 text-[50px] font-bold leading-[1.05] tracking-[-0.035em] text-center",
					style: { color: "var(--siga-dark)" },
					children: [
						"Démonstration de la",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--siga-mid)" },
							children: "Plateforme SIGA."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex w-full flex-1 items-center gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: rise,
						className: "flex flex-1 flex-col items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative group cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 rounded-full opacity-20 blur-xl transition-all group-hover:opacity-40 group-hover:blur-2xl",
								style: { background: "var(--siga-mid)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative flex h-24 w-24 items-center justify-center rounded-full text-white shadow-xl transition-transform group-hover:scale-110",
								style: { background: "var(--siga-dark)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									width: "32",
									height: "32",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 5v14l11-7z" })
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							variants: rise,
							className: "mt-5 text-[18px] font-bold",
							style: { color: "var(--siga-dark)" },
							children: "Lancer la vidéo (6 minutes)"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: rise,
						className: "w-[380px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[12px] font-bold uppercase tracking-[0.15em] mb-3",
							style: { color: "var(--siga-mid)" },
							children: "Parcours conseillé"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2",
							children: [
								"Création d'une entreprise",
								"Ajout d'employés",
								"Demande de congé",
								"Pointage",
								"Gestion de la paie",
								"Assistant IA",
								"ATS",
								"Tableau de bord intelligent"
							].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: 14
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: {
									duration: .4,
									delay: .2 + i * .07
								},
								className: "flex items-center gap-3 rounded-xl border bg-white px-4 py-2.5 shadow-sm",
								style: { borderColor: "rgba(30,58,95,0.1)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-[28px] text-[12px] font-black",
										style: {
											color: "var(--siga-mid)",
											opacity: .5
										},
										children: String(i + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
										size: 12,
										style: {
											color: "var(--siga-light)",
											flexShrink: 0
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[14px] font-bold",
										style: { color: "var(--siga-dark)" },
										children: s
									})
								]
							}, i))
						})]
					})]
				})
			]
		})
	] });
}
function Slide8() {
	const perspectives = [
		{
			icon: Mic,
			label: "Intégration vocale pour l'assistant IA"
		},
		{
			icon: TrendingUp,
			label: "Modèles prédictifs avancés avec Machine Learning"
		},
		{
			icon: Smartphone,
			label: "Application mobile native iOS/Android"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideShell, {
		theme: "dark",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-radial siga-noise absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "siga-grid-bg absolute inset-0 opacity-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideNumber, {
				n: 8,
				total: TOTAL,
				dark: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col px-16 py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "flex-1 flex flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[12px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4",
							children: "Conclusion"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[34px] font-bold leading-[1.15] tracking-[-0.03em] text-white max-w-3xl",
							children: "SIGA répond à un besoin structurel des PME algériennes : une solution SaaS RH complète, conforme à la réglementation, enrichie par l'IA."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[12px] font-bold uppercase tracking-[0.18em] text-white/40 mb-5",
								children: "Perspectives"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid grid-cols-3 gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: { scaleX: 0 },
									animate: { scaleX: 1 },
									transition: {
										duration: 1.2,
										delay: .4
									},
									className: "absolute left-[10%] right-[10%] top-[28px] h-[2px] origin-left",
									style: { background: "linear-gradient(90deg, var(--siga-mid), var(--siga-light) 50%, transparent)" }
								}), perspectives.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-14 w-14 place-items-center rounded-2xl text-white",
										style: {
											background: "rgba(107,163,214,0.2)",
											boxShadow: "0 0 0 4px var(--siga-dark)"
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { size: 22 })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 text-[14px] font-bold text-white/80 leading-snug max-w-[200px]",
										children: p.label
									})]
								}, p.label))]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: rise,
					className: "border-t pt-6 flex flex-col items-center text-center",
					style: { borderColor: "rgba(107,163,214,0.15)" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "siga-gradient-text text-[42px] font-bold tracking-[-0.03em]",
							children: "Merci pour votre attention"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-[15px] font-medium text-white/50",
							children: "HAMMACHE Amira & HADJI Melissa — Encadrant : M. ACHROUFENE Achour"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 rounded-xl px-6 py-2",
							style: { background: "rgba(255,255,255,0.06)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[14px] font-bold text-white/50",
								children: "Place aux questions 💬"
							})
						})
					]
				})]
			})
		]
	});
}
var slides = [
	{ component: Slide1 },
	{ component: Slide2 },
	{ component: Slide3 },
	{ component: Slide4 },
	{ component: Slide5 },
	{ component: Slide6 },
	{ component: Slide7 },
	{
		component: Slide8,
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
