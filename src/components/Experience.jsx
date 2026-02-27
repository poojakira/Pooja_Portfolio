import React from "react";
import { EXPERIENCE } from "../data";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, ArrowUpRight, Zap } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="space-y-12">
            {/* Section Header */}
            <div className="flex items-end justify-between px-2">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="h-px w-10 bg-gradient-to-r from-indigo-500 to-transparent" />
                        <h2 className="section-label">Mission_Chronology</h2>
                    </div>
                    <h3 className="section-title">Career Trajectory</h3>
                </div>
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">Active</span>
                </div>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px">
                    <div className="w-full h-full bg-gradient-to-b from-indigo-500/60 via-indigo-500/20 to-transparent" />
                </div>

                <div className="space-y-8">
                    {EXPERIENCE.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            className="relative pl-20 md:pl-28 group"
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-[22px] md:left-[38px] top-8 z-10">
                                <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-500">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400" />
                                </div>
                            </div>

                            {/* Card */}
                            <div className="glow-card p-8 relative overflow-hidden">
                                {/* Background decoration */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/3 rounded-full blur-[60px] pointer-events-none" />

                                {/* Header */}
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6 relative">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-500">
                                            <Briefcase size={22} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-white mb-1 tracking-tight group-hover:text-indigo-300 transition-colors duration-500">
                                                {exp.role}
                                            </h4>
                                            <div className="text-xs font-black uppercase text-indigo-500/70 tracking-[0.2em]">
                                                {exp.company}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/60 border border-white/5 text-[10px] font-mono text-slate-400">
                                        <Calendar size={12} className="text-indigo-400" />
                                        {exp.period}
                                    </div>
                                </div>

                                {/* Responsibilities */}
                                <ul className="space-y-4 mb-8 relative">
                                    {exp.description.map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + idx * 0.08 }}
                                            className="flex gap-4 group/item"
                                        >
                                            <div className="mt-1.5 shrink-0">
                                                <div className="w-6 h-6 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover/item:bg-indigo-500/20 transition-colors">
                                                    <ChevronRight size={12} className="text-indigo-400" />
                                                </div>
                                            </div>
                                            <p className="text-[13px] text-slate-400 leading-relaxed group-hover/item:text-slate-300 transition-colors">
                                                {item}
                                            </p>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="pill-indigo flex items-center gap-1.5">
                                            <Zap size={8} />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
