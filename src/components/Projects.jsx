import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data";
import {
    Activity, Binary, ZoomIn, ExternalLink
} from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
                <div className="space-y-1">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">Selected_Projects</h2>
                    <h3 className="text-3xl font-bold tracking-tight">Main Deployments</h3>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                    <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    NODE_STABLE
                </div>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-2">
                {PROJECTS.map((p, i) => (
                    <motion.a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={p.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group glass-card flex flex-col p-6 min-h-[280px] cursor-pointer hover:border-orange-500/30 transition-all duration-500 relative"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <Binary size={12} className="text-orange-400 opacity-50" />
                                    <span className="text-[9px] font-mono text-orange-400 font-bold uppercase tracking-tighter">
                                        ID_{p.id.toUpperCase()}_LOG
                                    </span>
                                </div>
                                <h4 className="text-lg font-bold leading-tight group-hover:text-white transition-colors">{p.title}</h4>
                            </div>
                            <div className="p-2 rounded-lg bg-white/5 text-slate-500 group-hover:text-orange-400 transition-colors">
                                <ExternalLink size={16} />
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{p.desc}</p>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                                <div className="text-[8px] text-slate-500 font-bold uppercase mb-1">Performance</div>
                                <div className="text-xs font-mono font-bold text-rose-400">{p.metric}</div>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                                <div className="text-[8px] text-slate-500 font-bold uppercase mb-1">Complexity</div>
                                <div className="text-xs font-mono font-bold text-orange-300">{p.complexity}%</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-[10px] font-bold text-orange-400 uppercase tracking-widest group-hover:gap-4 transition-all mt-auto">
                            Transfer to GitHub <ZoomIn size={14} />
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
