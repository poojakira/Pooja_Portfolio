import React from "react";
import { EXPERIENCE } from "../data";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="space-y-12">
            <div className="space-y-1 px-2">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Mission_Chronology</h2>
                <h3 className="text-3xl font-bold tracking-tight text-white">Career Trajectory</h3>
            </div>

            <div className="relative pl-8 md:pl-0">
                {/* Vertical Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-slate-800 to-transparent md:-translate-x-px" />

                <div className="space-y-16">
                    {EXPERIENCE.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Milestone Pulse */}
                            <div className="absolute left-[-32px] md:left-1/2 top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 md:-translate-x-1/2 z-10">
                                <span className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-20" />
                            </div>

                            <div className="md:w-1/2 space-y-4">
                                <div className={`glass-card p-6 border-white/5 hover:border-indigo-500/20 transition-all group ${i % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                                            <Briefcase size={18} />
                                        </div>
                                        <div className="flex items-center gap-2 text-[9px] font-mono text-slate-500 uppercase font-bold">
                                            <Calendar size={10} />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                                        {exp.role}
                                    </h4>
                                    <div className="text-xs font-black uppercase text-indigo-500/70 tracking-widest mb-6">
                                        {exp.company}
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx} className="flex gap-3 text-sm text-slate-400 leading-relaxed font-sans">
                                                <ChevronRight size={14} className="text-indigo-500 shrink-0 mt-1" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 flex flex-wrap gap-2">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-mono font-bold px-2 py-1 rounded bg-slate-800/50 text-slate-500 border border-white/5 uppercase">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
