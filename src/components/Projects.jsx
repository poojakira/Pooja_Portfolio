import React, { useState } from "react";
import { PROJECTS } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu, Activity, BarChart3, Binary, Zap, X, Shield, Terminal } from "lucide-react";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

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
                        onClick={() => setSelectedProject(p)}
                        className="group glass-card flex flex-col p-6 min-h-[300px] hover:border-indigo-500/30 transition-all duration-500 cursor-pointer relative"
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
                            <div className="p-2 rounded-lg bg-white/5 text-slate-500 group-hover:text-indigo-400 transition-colors">
                                <Activity size={16} />
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-1">
                            {p.desc}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                                <div className="text-[8px] text-slate-500 font-bold uppercase mb-1">Performance</div>
                                <div className="text-xs font-mono font-bold text-emerald-400">{p.metric}</div>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5">
                                <div className="text-[8px] text-slate-500 font-bold uppercase mb-1">Complexity</div>
                                <div className="text-xs font-mono font-bold text-indigo-300">{p.complexity}%</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-400 uppercase tracking-widest group-hover:gap-4 transition-all mt-auto">
                            Analyze Mission <ChevronRight size={14} />
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* Mission Briefing Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                        >
                            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-indigo-500/5">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
                                        <Shield size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Project_Deep_Dive</div>
                                        <h4 className="text-lg font-bold text-white">{selectedProject.title}</h4>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-8 space-y-8 overflow-y-auto max-h-[70vh] custom-scrollbar">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-2">
                                                <Terminal size={12} className="text-indigo-500" /> System Architecture
                                            </div>
                                            <p className="text-sm text-slate-300 bg-black/40 p-4 rounded-xl border border-white/5">
                                                {selectedProject.briefing.architecture}
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-2">
                                                <Activity size={12} className="text-emerald-500" /> Engineering Challenge
                                            </div>
                                            <p className="text-sm text-slate-300 italic">
                                                "{selectedProject.briefing.challenges}"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-2">
                                                <Cpu size={12} className="text-amber-500" /> Technical Solution
                                            </div>
                                            <p className="text-sm text-slate-300">
                                                {selectedProject.briefing.solution}
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-2">
                                                <Activity size={12} className="text-indigo-500" /> LIVE_METRICS_FEED
                                            </div>
                                            <LiveDashboard project={selectedProject} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-white/10 bg-black/20 flex justify-between items-center">
                                <div className="flex gap-2">
                                    {selectedProject.tech.map(t => (
                                        <span key={t} className="px-2 py-1 rounded bg-slate-800 text-[9px] font-mono text-slate-500 uppercase border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 rounded-xl bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-indigo-500 transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-950/50 group/btn"
                                    >
                                        TRANSFER_TO_GITHUB
                                        <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
}

function LiveDashboard({ project }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setData(prev => [...prev.slice(-15), Math.random() * 100]);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const renderVisual = () => {
        switch (project.id) {
            case 'apex':
                return (
                    <div className="space-y-4">
                        <div className="flex justify-between text-[8px] font-mono text-indigo-400">
                            <span>SURROGATE_INFERENCE_ENGINE</span>
                            <span>CPU_LOAD: 12%</span>
                        </div>
                        <div className="grid grid-cols-8 gap-1 h-12">
                            {data.map((v, i) => (
                                <div key={i} className="flex-1 bg-indigo-500/20 rounded-sm" style={{ height: `${v}%` }} />
                            ))}
                        </div>
                        <div className="p-3 bg-black/60 rounded-lg border border-indigo-500/20">
                            <div className="text-[7px] text-slate-500 uppercase mb-2">Tactical_Surrogate_Flow</div>
                            <div className="h-10 flex items-center justify-center gap-2">
                                <Activity size={12} className="text-emerald-500 animate-pulse" />
                                <div className="text-[10px] font-mono text-emerald-400">LOGIT_SYNC: ACTIVE</div>
                            </div>
                        </div>
                    </div>
                );
            case 'orbi':
                return (
                    <div className="space-y-4">
                        <div className="flex justify-between text-[8px] font-mono text-emerald-400">
                            <span>TELEMETRY_MLOPS_STREAM</span>
                            <span>SYNC_RATE: 8ms</span>
                        </div>
                        <div className="h-24 bg-black/60 rounded-xl border border-emerald-500/20 p-2 overflow-hidden">
                            <div className="flex flex-col gap-1">
                                {data.slice(-5).map((v, i) => (
                                    <div key={i} className="flex justify-between text-[7px] font-mono text-slate-500 border-b border-white/5 pb-1">
                                        <span>PKT_{Math.floor(v * 1000)}</span>
                                        <span className="text-emerald-400">VALID</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="space-y-4">
                        <div className="flex justify-between text-[8px] font-mono text-indigo-400">
                            <span>SYSTEM_METRICS_MONITOR</span>
                            <span>STABLE</span>
                        </div>
                        <div className="h-20 flex items-end gap-1 px-2">
                            {data.map((v, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${v}%` }}
                                    className="flex-1 bg-gradient-to-t from-indigo-500/20 to-indigo-500 rounded-t-sm"
                                />
                            ))}
                        </div>
                        <div className="text-center text-[8px] text-slate-600 font-mono tracking-widest">
                            REAL_TIME_NODE_ANALYTICS // ID_{project.id.toUpperCase()}
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5 shadow-inner">
            {renderVisual()}
        </div>
    );
}

function ChevronRight({ size, className }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}
