import React from "react";
import { EXPERIENCE } from "../data";
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section id="experience" className="space-y-8">
            <div className="flex items-end justify-between px-2">
                <div className="space-y-1">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Work_Experience</h2>
                    <h3 className="text-3xl font-bold tracking-tight">Professional Chronology</h3>
                </div>
                <Terminal size={18} className="text-slate-800" />
            </div>

            <div className="relative space-y-6">
                {/* Visual Timeline Path */}
                <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-indigo-500/50 via-slate-800 to-transparent hidden md:block" />

                {EXPERIENCE.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative md:pl-20"
                    >
                        {/* Timeline Node */}
                        <div className="absolute left-6 top-8 w-4 h-4 rounded-full border-4 border-[#030712] bg-indigo-500 z-10 hidden md:block group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(79,70,229,0.5)]" />

                        <div className="glass-card p-8 hover:bg-slate-900/60 transition-all border-l-2 md:border-l-0 border-indigo-500/20">
                            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-8">
                                <div className="flex gap-5">
                                    <div className="min-w-[56px] h-[56px] rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:rotate-12 transition-transform shadow-inner">
                                        <Briefcase size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-xl text-white tracking-tight uppercase">{exp.role}</h4>
                                        <p className="text-indigo-400 font-bold text-sm tracking-widest">{exp.company}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/50 border border-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <Calendar size={12} className="text-indigo-500" />
                                        {exp.period}
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/50 border border-white/5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <MapPin size={12} className="text-emerald-500" />
                                        AZ / REMOTE
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {exp.description.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-indigo-500/40" />
                                        <p className="text-sm text-slate-400 leading-[1.6] font-medium selection:bg-indigo-500/40">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                {exp.tags.map(tag => (
                                    <div
                                        key={tag}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/5 text-indigo-300 border border-indigo-500/10 group-hover:border-indigo-500/30 transition-all cursor-default"
                                    >
                                        <Code size={10} className="text-indigo-500/50" />
                                        <span className="text-[10px] font-black uppercase tracking-tighter">
                                            {tag}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Grid Marker */}
                            <div className="absolute bottom-4 right-4 text-[9px] font-mono text-slate-800 select-none">
                                SEC_CLEARANCE: POSITIVE
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
