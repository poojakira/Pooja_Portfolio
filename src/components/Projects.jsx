import React, { useState } from "react";
import { PROJECTS } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Cpu, Activity, BarChart3, Binary, Zap, X, Shield, Terminal, Radar } from "lucide-react";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (p) => {
        console.log("Card clicked:", p.id);
        setSelectedProject(p);
    };

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
                        onClick={() => handleCardClick(p)}
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
            <AnimatePresence mode="wait">
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(79,70,229,0.3)] overflow-hidden z-10"
                        >
                            <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-indigo-500/5">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-1">Project_Deep_Dive</div>
                                        <h4 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h4>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-3 hover:bg-white/10 rounded-2xl text-slate-400 hover:text-white transition-all bg-white/5"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-8 md:p-12 space-y-12 overflow-y-auto max-h-[80vh] custom-scrollbar">
                                <div className="grid lg:grid-cols-2 gap-12">
                                    <div className="space-y-10">
                                        <div className="space-y-4">
                                            <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-3 tracking-widest">
                                                <Terminal size={14} className="text-indigo-500" /> System_Architecture
                                            </div>
                                            <p className="text-sm text-slate-300 bg-black/40 p-6 rounded-2xl border border-white/5 leading-relaxed font-sans shadow-inner">
                                                {selectedProject.briefing.architecture}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-3 tracking-widest">
                                                <Activity size={14} className="text-emerald-500" /> Engineering_Challenge
                                            </div>
                                            <p className="text-sm text-slate-300 italic border-l-4 border-emerald-500/50 pl-6 py-2 bg-emerald-500/5 rounded-r-2xl font-sans">
                                                "{selectedProject.briefing.challenges}"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="space-y-4">
                                            <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-3 tracking-widest">
                                                <Cpu size={14} className="text-amber-500" /> Technical_Solution
                                            </div>
                                            <p className="text-sm text-slate-300 font-sans leading-relaxed">
                                                {selectedProject.briefing.solution}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-3 tracking-widest">
                                                <Activity size={14} className="text-indigo-500" /> LIVE_METRICS_FEED
                                            </div>
                                            <LiveDashboard project={selectedProject} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 border-t border-white/10 bg-black/40 flex flex-col md:flex-row justify-between items-center gap-8">
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.tech.map(t => (
                                        <span key={t} className="px-4 py-1.5 rounded-full bg-slate-800/50 text-[10px] font-mono text-indigo-300 border border-indigo-500/20 uppercase tracking-tighter">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-auto px-10 py-4 rounded-2xl bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-indigo-500 transition-all flex items-center justify-center gap-4 shadow-xl shadow-indigo-900/40 hover:scale-[1.02] active:scale-95 group/btn"
                                >
                                    TRANSFER_TO_GITHUB
                                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}

function LiveDashboard({ project }) {
    const [data, setData] = useState([]);
    const [radarPoints, setRadarPoints] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setData(prev => [...prev.slice(-15), Math.random() * 100]);
            if (project.id === 'orbi') {
                setRadarPoints(Array.from({ length: 4 }, () => ({
                    angle: Math.random() * 360,
                    radius: 20 + Math.random() * 60,
                    id: Math.random()
                })));
            }
        }, 800);
        return () => clearInterval(interval);
    }, [project.id]);

    const renderVisual = () => {
        switch (project.id) {
            case 'apex':
                return (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-[8px] font-mono text-indigo-400 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Cpu size={10} /> PINN_SURROGATE_MATRIX</span>
                            <span className="text-emerald-500 animate-pulse">OPTIMIZED (10.11ms)</span>
                        </div>
                        <div className="grid grid-cols-5 gap-1.5 h-32 p-2 bg-black/40 rounded-xl border border-indigo-500/10">
                            {[...Array(15)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        opacity: [0.1, 0.6, 0.2],
                                        scale: [0.95, 1.05, 0.95],
                                        backgroundColor: i % 3 === 0 ? "rgba(79, 70, 229, 0.4)" : "rgba(79, 70, 229, 0.1)"
                                    }}
                                    transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                                    className="rounded-lg relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-[6px] text-white/20 font-mono">
                                        {Math.floor(Math.random() * 99)}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-between text-[7px] font-mono text-slate-500">
                            <span>TRAJECTORY_NODES: 15/15</span>
                            <span>LOSS_GRADIENT: 0.00012</span>
                        </div>
                    </div>
                );
            case 'orbi':
                return (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-[8px] font-mono text-emerald-400 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Radar size={10} /> ORBITAL_PROXIMITY_RADAR</span>
                            <span className="text-amber-500 animate-pulse">DEBRIS_SCAN_ACTIVE</span>
                        </div>
                        <div className="relative h-32 bg-black/40 rounded-xl border border-emerald-500/10 flex items-center justify-center overflow-hidden">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute w-28 h-28 border border-emerald-500/20 rounded-full"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1/2 bg-gradient-to-t from-transparent to-emerald-500/50" />
                            </motion.div>
                            <div className="absolute w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981]" />
                            {radarPoints.map((p) => (
                                <motion.div
                                    key={p.id}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    style={{
                                        left: `calc(50% + ${Math.cos(p.angle * Math.PI / 180) * p.radius}px)`,
                                        top: `calc(50% + ${Math.sin(p.angle * Math.PI / 180) * p.radius}px)`,
                                    }}
                                    className="absolute w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_5px_#ef4444]"
                                />
                            ))}
                        </div>
                        <div className="flex justify-between text-[7px] font-mono text-slate-500">
                            <span>ACCURACY: 95.8%</span>
                            <span>LATENCY: 8.24ms</span>
                        </div>
                    </div>
                );
            case 'cmdx':
                return (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-[8px] font-mono text-blue-400 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><BarChart3 size={10} /> MONTE_CARLO_IV_V_SUITE</span>
                            <span className="text-blue-500">PASS_THRESHOLD: 98%</span>
                        </div>
                        <div className="h-32 bg-black/40 rounded-xl border border-blue-500/10 p-3 flex items-end gap-1.5">
                            {[92, 98, 95, 99, 97, 94, 98, 96, 99, 95].map((h, i) => (
                                <div key={i} className="flex-1 relative group">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        className={`w-full rounded-t-lg border-t ${h >= 98 ? 'bg-blue-500/40 border-blue-400' : 'bg-blue-500/10 border-blue-500/30'}`}
                                    />
                                    {i === 9 && <div className="absolute -top-4 right-0 text-[6px] text-blue-400">σ-3</div>}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between text-[7px] font-mono text-slate-500">
                            <span>DOCKING_SIMS: 1,000</span>
                            <span>FAILED_TRIALS: 2</span>
                        </div>
                    </div>
                );
            case 'eco':
                return (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-[8px] font-mono text-emerald-400 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Activity size={10} /> LIFECYCLE_ANOMALY_SHIELD</span>
                            <span className="text-emerald-500">R²: 0.9952</span>
                        </div>
                        <div className="h-32 bg-black/40 rounded-xl border border-emerald-500/10 p-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[7px] text-slate-500 uppercase">Input_Reliability</span>
                                <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div animate={{ width: "99%" }} className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[7px] text-slate-500 uppercase">Prediction_Variance</span>
                                <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div animate={{ width: "1.5%" }} className="h-full bg-indigo-500" />
                                </div>
                            </div>
                            <div className="pt-2 border-t border-white/5">
                                <div className="flex justify-between items-center bg-emerald-500/5 p-2 rounded-lg">
                                    <div className="text-[8px] font-mono text-emerald-400 animate-pulse">NO_ANOMALY_DETECTED</div>
                                    <Shield size={10} className="text-emerald-500" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between text-[7px] font-mono text-slate-500">
                            <span>MICROSERVICE_HEALTH: 100%</span>
                            <span>LATENCY: 281ms (P90)</span>
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
