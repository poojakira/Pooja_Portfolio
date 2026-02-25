import React, { useState } from "react";
import { SKILLS } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, BrainCircuit, Cloud, Lock, Cpu, Database, Network, Globe } from "lucide-react";

export default function Skills() {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const categories = [
        {
            name: "Languages",
            icon: <Code2 size={16} />,
            items: SKILLS.languages,
            color: "indigo",
            details: "Core development & scripting stack for high-performance systems."
        },
        {
            name: "ML / AI",
            icon: <BrainCircuit size={16} />,
            items: SKILLS.ml,
            color: "emerald",
            details: "Specialized in GANs, Transformers, and RL for orbital mission profiles."
        },
        {
            name: "Infrastructure",
            icon: <Cloud size={16} />,
            items: SKILLS.cloud,
            color: "blue",
            details: "Cloud-native architectures with Docker & Kubernetes orchestration."
        },
        {
            name: "Security",
            icon: <Lock size={16} />,
            items: SKILLS.security,
            color: "amber",
            details: "DevSecOps integration & secure SDLC for enterprise ecosystems."
        }
    ];

    return (
        <aside className="space-y-6 lg:sticky lg:top-8">
            <div className="flex items-center justify-between px-2 mb-2">
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500/80">System_Arsenal.v2</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/20 to-transparent ml-4" />
            </div>

            <div className="grid gap-4">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        onMouseEnter={() => setHoveredCategory(cat.name)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        className="glass-card group relative p-5 transition-all hover:bg-slate-900/60"
                    >
                        {/* Interactive Side Bar */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${cat.color}-500 opacity-0 group-hover:opacity-100 transition-opacity`} />

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg bg-${cat.color}-500/10 text-${cat.color}-400 group-hover:scale-110 transition-transform`}>
                                    {cat.icon}
                                </div>
                                <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest">{cat.name}</h3>
                            </div>

                            <div className="flex gap-1">
                                {[1, 2, 3].map(dot => (
                                    <div key={dot} className={`w-1 h-1 rounded-full bg-${cat.color}-500/20`} />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 relative z-10">
                            {cat.items.map(skill => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className="text-[10px] font-mono px-2.5 py-1 rounded border border-white/5 bg-slate-800/20 text-slate-400 group-hover:text-slate-300 transition-colors cursor-crosshair"
                                >
                                    {skill}
                                </motion.span>

                            ))}
                        </div>

                        {/* Secret Intel Dropdown */}
                        <AnimatePresence>
                            {hoveredCategory === cat.name && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden mt-4 pt-4 border-t border-white/5"
                                >
                                    <p className="text-[10px] italic text-slate-500 font-mono leading-relaxed">
                                        &gt; {cat.details}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}

                {/* Live Telemetry Card */}
                <div className="glass-card p-5 bg-gradient-to-br from-indigo-500/5 to-transparent relative group overflow-hidden">
                    <div className="flex items-center gap-3 mb-4">
                        <Network size={16} className="text-indigo-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Live_Telemetry</span>
                    </div>

                    <div className="space-y-3 font-mono">
                        <div className="flex justify-between items-center text-[9px]">
                            <span className="text-slate-500 uppercase">GPU_CLUSTER:</span>
                            <span className="text-emerald-400 animate-pulse">OPTIMIZED (98.2%)</span>
                        </div>
                        <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "98%" }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                className="h-full bg-emerald-500/50"
                            />
                        </div>

                        <div className="flex justify-between items-center text-[9px]">
                            <span className="text-slate-500 uppercase">MISSION_STATUS:</span>
                            <span className="text-indigo-400">READY_FOR_DEPLOY</span>
                        </div>
                        <div className="flex gap-1 mt-2">
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [4, 12, 4] }}
                                    transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                                    className="w-1 bg-indigo-500/20 rounded-full"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Decorative Grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:8px_8px] pointer-events-none" />
                </div>
            </div>
        </aside>
    );
}
