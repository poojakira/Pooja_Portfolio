import React, { useState } from "react";
import { PROJECTS } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu, Activity, BarChart3, Binary, Zap, ChevronRight } from "lucide-react";

export default function Projects() {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <section id="projects" className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
                <div className="space-y-1">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Selected_Projects</h2>
                    <h3 className="text-3xl font-bold tracking-tight">Main Deployments</h3>
                </div>
                <div className="flex gap-4 text-[10px] font-mono text-slate-500">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        NODE_STABLE
                    </div>
                    <div className="flex items-center gap-2">
                        <Activity size={12} className="text-indigo-500" />
                        LATENCY: 4.8ms
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {PROJECTS.map((p, i) => (
                    <motion.article
                        key={p.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        onMouseEnter={() => setActiveProject(p.id)}
                        onMouseLeave={() => setActiveProject(null)}
                        className="group glass-card flex flex-col p-6 min-h-[300px] hover:border-indigo-500/30 transition-all duration-500"
                    >
                        {/* Project Header */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Binary size={14} className="text-indigo-400 opacity-50" />
                                    <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-tighter">
                                        ID_{p.id.toUpperCase()}_LOG
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold leading-tight group-hover:text-white transition-colors">
                                    {p.title}
                                </h4>
                            </div>
                            <div className="flex gap-2">
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-white/5 hover:bg-indigo-500/20 text-slate-400 hover:text-white transition-all transform hover:rotate-12"
                                >
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Analysis Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 space-y-1">
                                <div className="text-[9px] text-slate-500 font-bold uppercase flex items-center gap-1.5">
                                    <Zap size={10} className="text-amber-400" />
                                    Performance
                                </div>
                                <div className="text-xs font-mono font-bold text-emerald-400">{p.metric}</div>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 space-y-1">
                                <div className="text-[9px] text-slate-500 font-bold uppercase flex items-center gap-1.5">
                                    <BarChart3 size={10} className="text-indigo-400" />
                                    Complexity
                                </div>
                                <div className="text-xs font-mono font-bold text-indigo-300">{p.complexity}%</div>
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">
                            {p.desc}
                        </p>

                        {/* Tech Stack Visualizer */}
                        <div className="mt-auto pt-6 border-t border-white/5">
                            <div className="flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[9px] font-mono font-bold px-2 py-1 rounded bg-indigo-500/5 text-indigo-300/80 border border-indigo-500/10 group-hover:border-indigo-500/30 transition-colors"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Futuristic Scanner Effect on Hover */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent -translate-x-full group-hover:animate-[scan_2s_linear_infinite]" />
                    </motion.article>
                ))}
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </section>
    );
}
