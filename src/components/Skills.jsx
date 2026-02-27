import React, { useState, useEffect, useMemo } from "react";
import { SKILLS } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Database, Layers, Sparkles, Code2, Cloud, Shield, BookOpen, Globe, ChevronDown, ChevronUp, Zap, Radar, ScanLine } from "lucide-react";

const CATEGORY_CONFIG = {
    "ML / Deep Learning": { icon: <BrainCircuit size={14} />, color: "indigo", hex: "#6366f1" },
    "NLP & Transformers": { icon: <Globe size={14} />, color: "violet", hex: "#8b5cf6" },
    "Frameworks & Tools": { icon: <Layers size={14} />, color: "cyan", hex: "#06b6d4" },
    "Cloud & MLOps": { icon: <Cloud size={14} />, color: "blue", hex: "#3b82f6" },
    "Security": { icon: <Shield size={14} />, color: "emerald", hex: "#10b981" },
    "Languages": { icon: <Code2 size={14} />, color: "amber", hex: "#f59e0b" },
    "Research": { icon: <BookOpen size={14} />, color: "rose", hex: "#f43f5e" }
};

const CATEGORY_ORDER = [
    "ML / Deep Learning", "NLP & Transformers", "Frameworks & Tools",
    "Cloud & MLOps", "Security", "Languages", "Research"
];

// ─── Animated Radar Chart ────────────────────────────────────
function CategoryRadar({ grouped }) {
    const cats = CATEGORY_ORDER.filter(c => grouped[c]);
    const n = cats.length;
    const size = 200;
    const center = size / 2;
    const radius = 75;

    const getPoint = (i, r) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        return { x: center + r * Math.cos(angle), y: center + r * Math.sin(angle) };
    };

    const catAvgs = cats.map(cat => {
        const skills = grouped[cat];
        return Math.round(skills.reduce((a, s) => a + s.level, 0) / skills.length);
    });

    return (
        <div className="relative">
            {/* Rotating scanner line */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none z-10"
                style={{ transformOrigin: "center center" }}
            >
                <div className="absolute top-1/2 left-1/2 w-px h-1/2 origin-top"
                    style={{ background: "linear-gradient(to bottom, rgba(99,102,241,0.6) 0%, transparent 100%)" }}
                />
            </motion.div>

            <svg viewBox={`0 0 ${size} ${size}`} className="w-full">
                <defs>
                    <radialGradient id="radar-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(99,102,241,0.15)" />
                        <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                    </radialGradient>
                </defs>

                {/* Background glow */}
                <circle cx={center} cy={center} r={radius} fill="url(#radar-glow)" />

                {/* Grid rings */}
                {[0.25, 0.5, 0.75, 1].map((r, i) => (
                    <polygon
                        key={i}
                        points={Array.from({ length: n }, (_, j) => {
                            const p = getPoint(j, radius * r);
                            return `${p.x},${p.y}`;
                        }).join(" ")}
                        fill="none"
                        stroke={`rgba(99,102,241,${0.06 + i * 0.03})`}
                        strokeWidth="0.5"
                    />
                ))}

                {/* Axis lines + labels */}
                {cats.map((cat, i) => {
                    const p = getPoint(i, radius);
                    const lp = getPoint(i, radius + 20);
                    const config = CATEGORY_CONFIG[cat];
                    return (
                        <g key={cat}>
                            <line x1={center} y1={center} x2={p.x} y2={p.y}
                                stroke="rgba(99,102,241,0.08)" strokeWidth="0.5" />
                            <circle cx={p.x} cy={p.y} r="1.5" fill={config.hex} opacity="0.3" />
                            <text x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="middle"
                                className="text-[5px] font-bold uppercase fill-slate-600">
                                {cat.split(' ')[0]}
                            </text>
                        </g>
                    );
                })}

                {/* Data area */}
                <motion.polygon
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    points={catAvgs.map((avg, i) => {
                        const p = getPoint(i, radius * (avg / 100));
                        return `${p.x},${p.y}`;
                    }).join(" ")}
                    fill="rgba(99,102,241,0.12)"
                    stroke="rgba(99,102,241,0.7)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />

                {/* Data points with glow */}
                {catAvgs.map((avg, i) => {
                    const p = getPoint(i, radius * (avg / 100));
                    const config = CATEGORY_CONFIG[cats[i]];
                    return (
                        <g key={i}>
                            <motion.circle
                                initial={{ r: 0, opacity: 0 }}
                                animate={{ r: 3, opacity: 1 }}
                                transition={{ delay: 0.8 + i * 0.1 }}
                                cx={p.x} cy={p.y}
                                fill={config.hex}
                                stroke="#030712" strokeWidth="1.5"
                            />
                            <circle cx={p.x} cy={p.y} r="8" fill={config.hex} opacity="0.1">
                                <animate attributeName="r" values="6;12;6" dur="3s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" repeatCount="indefinite" />
                            </circle>
                        </g>
                    );
                })}

                {/* Center ping */}
                <circle cx={center} cy={center} r="2" fill="#6366f1" />
                <circle cx={center} cy={center} r="6" fill="none" stroke="#6366f1" strokeWidth="0.5" opacity="0.3">
                    <animate attributeName="r" values="4;14;4" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
            </svg>
        </div>
    );
}

// ─── Floating Skill Cloud ────────────────────────────────────
function SkillCloud({ skills }) {
    // Pick top skills for the cloud
    const topSkills = useMemo(() =>
        [...skills].sort((a, b) => b.level - a.level).slice(0, 12),
        [skills]);

    return (
        <div className="relative h-20 overflow-hidden">
            <div className="flex gap-2 animate-marquee whitespace-nowrap">
                {[...topSkills, ...topSkills].map((skill, i) => {
                    const config = CATEGORY_CONFIG[skill.category] || { color: "slate", hex: "#64748b" };
                    return (
                        <span
                            key={`${skill.name}-${i}`}
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold border whitespace-nowrap
                                bg-${config.color}-500/10 border-${config.color}-500/20 text-${config.color}-400
                                hover:bg-${config.color}-500/20 hover:scale-110 transition-all cursor-default`}
                        >
                            <Zap size={7} />
                            {skill.name}
                        </span>
                    );
                })}
            </div>
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[rgba(10,15,35,1)] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[rgba(10,15,35,1)] to-transparent z-10 pointer-events-none" />
        </div>
    );
}

// ─── Animated Counter ────────────────────────────────────────
function AnimCounter({ target, suffix = "", duration = 1.5 }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const step = target / (duration * 60);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.round(start));
        }, 1000 / 60);
        return () => clearInterval(timer);
    }, [target, duration]);
    return <span>{count}{suffix}</span>;
}

// ─── Main Component ──────────────────────────────────────────
export default function Skills() {
    const [expandedCat, setExpandedCat] = useState(null);
    const [scanActive, setScanActive] = useState(true);

    const grouped = {};
    SKILLS.forEach(skill => {
        const cat = skill.category || "Other";
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(skill);
    });

    const categories = CATEGORY_ORDER.filter(cat => grouped[cat]);
    const totalSkills = SKILLS.length;
    const avgLevel = Math.round(SKILLS.reduce((a, s) => a + s.level, 0) / totalSkills);

    return (
        <section id="skills" className="glow-card relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

            <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className="h-px w-6 bg-gradient-to-r from-indigo-500 to-transparent" />
                            <h2 className="section-label">Expertise_Matrix</h2>
                        </div>
                        <h3 className="text-xl font-black tracking-tight gradient-text">Technical Proficiency</h3>
                    </div>
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/15"
                    >
                        <Sparkles size={16} />
                    </motion.div>
                </div>

                {/* Radar Chart */}
                <div className="mb-6 relative">
                    <CategoryRadar grouped={grouped} />
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="metric-cell text-center py-3 group hover:border-indigo-500/20 transition-colors cursor-default">
                        <div className="text-xl font-black text-indigo-400 font-mono">
                            <AnimCounter target={totalSkills} />
                        </div>
                        <div className="text-[7px] font-black text-slate-600 uppercase tracking-widest">Skills</div>
                    </div>
                    <div className="metric-cell text-center py-3 group hover:border-emerald-500/20 transition-colors cursor-default">
                        <div className="text-xl font-black text-emerald-400 font-mono">
                            <AnimCounter target={categories.length} duration={0.8} />
                        </div>
                        <div className="text-[7px] font-black text-slate-600 uppercase tracking-widest">Domains</div>
                    </div>
                    <div className="metric-cell text-center py-3 group hover:border-amber-500/20 transition-colors cursor-default">
                        <div className="text-xl font-black text-white font-mono">
                            <AnimCounter target={avgLevel} suffix="%" />
                        </div>
                        <div className="text-[7px] font-black text-slate-600 uppercase tracking-widest">Avg Level</div>
                    </div>
                </div>

                {/* Scrolling Skill Cloud */}
                <div className="mb-6">
                    <SkillCloud skills={SKILLS} />
                </div>

                {/* Category Accordion */}
                <div className="space-y-1.5">
                    {categories.map((cat, i) => {
                        const config = CATEGORY_CONFIG[cat] || { icon: <Database size={14} />, color: "slate", hex: "#64748b" };
                        const skills = grouped[cat];
                        const catAvg = Math.round(skills.reduce((a, s) => a + s.level, 0) / skills.length);
                        const isExpanded = expandedCat === cat;

                        return (
                            <motion.div
                                key={cat}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04, duration: 0.3 }}
                            >
                                <button
                                    onClick={() => setExpandedCat(isExpanded ? null : cat)}
                                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 text-left group ${isExpanded
                                        ? "bg-white/[0.05] border border-indigo-500/25 shadow-[0_0_20px_rgba(99,102,241,0.08)]"
                                        : "bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.03]"
                                        }`}
                                >
                                    <div className={`p-2 rounded-lg bg-${config.color}-500/10 text-${config.color}-400 border border-${config.color}-500/15 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        {config.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[11px] font-bold text-white truncate">{cat}</span>
                                            <div className="flex items-center gap-2 shrink-0 ml-2">
                                                <span className="text-[8px] font-mono text-slate-600">{skills.length}</span>
                                                <span className={`text-[9px] font-mono font-bold text-${config.color}-400`}>{catAvg}%</span>
                                                <motion.div
                                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown size={12} className="text-slate-500" />
                                                </motion.div>
                                            </div>
                                        </div>
                                        <div className="h-0.5 w-full bg-slate-800/40 rounded-full mt-1.5 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${catAvg}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: i * 0.05 }}
                                                className="h-full rounded-full"
                                                style={{ background: `linear-gradient(90deg, ${config.hex}88, ${config.hex})` }}
                                            />
                                        </div>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-2 pb-2 pl-12 pr-2 space-y-3">
                                                {skills.sort((a, b) => b.level - a.level).map((skill, j) => (
                                                    <motion.div
                                                        key={skill.name}
                                                        initial={{ opacity: 0, x: -15 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: j * 0.04 }}
                                                        className="group/skill"
                                                    >
                                                        <div className="flex justify-between items-center mb-1.5">
                                                            <span className="text-[11px] font-bold text-slate-300 group-hover/skill:text-white transition-colors flex items-center gap-1.5">
                                                                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: config.hex }} />
                                                                {skill.name}
                                                            </span>
                                                            <span className="text-[10px] font-mono font-bold" style={{ color: `${config.hex}aa` }}>
                                                                {skill.level}%
                                                            </span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${skill.level}%` }}
                                                                transition={{ duration: 0.7, delay: j * 0.05, ease: [0.23, 1, 0.32, 1] }}
                                                                className="h-full rounded-full"
                                                                style={{
                                                                    background: `linear-gradient(90deg, ${config.hex}88, ${config.hex})`,
                                                                    boxShadow: `0 0 8px ${config.hex}40`
                                                                }}
                                                            />
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">
                        Resume • GitHub • Certifications
                    </span>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[8px] font-mono text-emerald-500/60 uppercase tracking-wider">
                            Live Scan
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
