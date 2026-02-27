import React, { useState } from "react";
import { SKILLS } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Database, Layers, Sparkles, Code2, Cloud, Shield, BookOpen, Globe, ChevronDown, ChevronUp } from "lucide-react";

const CATEGORY_CONFIG = {
    "ML / Deep Learning": { icon: <BrainCircuit size={15} />, color: "indigo", accent: "from-indigo-600 to-indigo-400" },
    "NLP & Transformers": { icon: <Globe size={15} />, color: "violet", accent: "from-violet-600 to-violet-400" },
    "Frameworks & Tools": { icon: <Layers size={15} />, color: "cyan", accent: "from-cyan-600 to-cyan-400" },
    "Cloud & MLOps": { icon: <Cloud size={15} />, color: "blue", accent: "from-blue-600 to-blue-400" },
    "Security": { icon: <Shield size={15} />, color: "emerald", accent: "from-emerald-600 to-emerald-400" },
    "Languages": { icon: <Code2 size={15} />, color: "amber", accent: "from-amber-600 to-amber-400" },
    "Research": { icon: <BookOpen size={15} />, color: "rose", accent: "from-rose-600 to-rose-400" }
};

const CATEGORY_ORDER = [
    "ML / Deep Learning",
    "NLP & Transformers",
    "Frameworks & Tools",
    "Cloud & MLOps",
    "Security",
    "Languages",
    "Research"
];

export default function Skills() {
    const [expandedCat, setExpandedCat] = useState(null);

    // Group skills by category
    const grouped = {};
    SKILLS.forEach(skill => {
        const cat = skill.category || "Other";
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(skill);
    });

    // Sort categories by defined order
    const categories = CATEGORY_ORDER.filter(cat => grouped[cat]);

    const totalSkills = SKILLS.length;
    const avgLevel = Math.round(SKILLS.reduce((a, s) => a + s.level, 0) / totalSkills);

    const toggleCategory = (cat) => {
        setExpandedCat(expandedCat === cat ? null : cat);
    };

    return (
        <section id="skills" className="glow-card p-8 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 blur-[60px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <div className="h-px w-6 bg-gradient-to-r from-indigo-500 to-transparent" />
                        <h2 className="section-label">Expertise_Matrix</h2>
                    </div>
                    <h3 className="text-xl font-black tracking-tight gradient-text">Technical Proficiency</h3>
                </div>
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/15">
                    <Sparkles size={16} />
                </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="metric-cell text-center py-2">
                    <div className="text-lg font-black text-indigo-400 font-mono">{totalSkills}</div>
                    <div className="text-[7px] font-black text-slate-600 uppercase tracking-widest">Skills</div>
                </div>
                <div className="metric-cell text-center py-2">
                    <div className="text-lg font-black text-emerald-400 font-mono">{categories.length}</div>
                    <div className="text-[7px] font-black text-slate-600 uppercase tracking-widest">Domains</div>
                </div>
                <div className="metric-cell text-center py-2">
                    <div className="text-lg font-black text-white font-mono">{avgLevel}%</div>
                    <div className="text-[7px] font-black text-slate-600 uppercase tracking-widest">Avg Level</div>
                </div>
            </div>

            {/* Category List */}
            <div className="space-y-2">
                {categories.map((cat, i) => {
                    const config = CATEGORY_CONFIG[cat] || { icon: <Database size={15} />, color: "slate", accent: "from-slate-600 to-slate-400" };
                    const skills = grouped[cat];
                    const catAvg = Math.round(skills.reduce((a, s) => a + s.level, 0) / skills.length);
                    const isExpanded = expandedCat === cat;

                    return (
                        <motion.div
                            key={cat}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                        >
                            {/* Category Header Button */}
                            <button
                                onClick={() => toggleCategory(cat)}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 text-left group ${isExpanded
                                        ? "bg-white/[0.04] border border-indigo-500/20"
                                        : "bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.03]"
                                    }`}
                            >
                                <div className={`p-2 rounded-lg bg-${config.color}-500/10 text-${config.color}-400 border border-${config.color}-500/15 group-hover:scale-110 transition-transform`}>
                                    {config.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-white truncate">{cat}</span>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className="text-[9px] font-mono text-slate-500">{skills.length} skills</span>
                                            <span className={`text-[9px] font-mono font-bold text-${config.color}-400`}>{catAvg}%</span>
                                            {isExpanded ? (
                                                <ChevronUp size={12} className="text-slate-500" />
                                            ) : (
                                                <ChevronDown size={12} className="text-slate-600" />
                                            )}
                                        </div>
                                    </div>
                                    {/* Mini bar showing category average */}
                                    <div className="h-0.5 w-full bg-slate-800/40 rounded-full mt-1.5 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${catAvg}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: i * 0.05 }}
                                            className={`h-full rounded-full bg-gradient-to-r ${config.accent}`}
                                        />
                                    </div>
                                </div>
                            </button>

                            {/* Expanded Skills */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-2 pb-1 pl-12 pr-2 space-y-3">
                                            {skills.sort((a, b) => b.level - a.level).map((skill, j) => (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: j * 0.04 }}
                                                    className="group/skill"
                                                >
                                                    <div className="flex justify-between items-center mb-1.5">
                                                        <span className="text-[11px] font-bold text-slate-300 group-hover/skill:text-white transition-colors">
                                                            {skill.name}
                                                        </span>
                                                        <span className={`text-[10px] font-mono font-bold text-${config.color}-400/70`}>
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                    <div className="progress-bar">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${skill.level}%` }}
                                                            transition={{ duration: 0.8, delay: j * 0.06, ease: [0.23, 1, 0.32, 1] }}
                                                            className={`h-full rounded-full bg-gradient-to-r ${config.accent} shadow-[0_0_8px_rgba(99,102,241,0.3)]`}
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
                    Source: Resume • GitHub • Certifications
                </span>
                <span className="text-[8px] font-mono text-indigo-500/50 uppercase tracking-wider">
                    Live Audit
                </span>
            </div>
        </section>
    );
}
