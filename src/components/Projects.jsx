import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../data";
import {
    ExternalLink, Cpu, Activity, BarChart3, Binary,
    X, Shield, Terminal, Radar, ZoomIn
} from "lucide-react";

/* ─── Live Dashboard ──────────────────────────────────────────────── */
function LiveDashboard({ project }) {
    const [ticks, setTicks] = useState(0);
    const [radarAngle, setRadarAngle] = useState(0);
    const [barData] = useState([92, 98, 95, 99, 97, 94, 98, 96, 99, 95]);

    useEffect(() => {
        const id = setInterval(() => {
            setTicks(t => t + 1);
            setRadarAngle(a => (a + 15) % 360);
        }, 800);
        return () => clearInterval(id);
    }, []);

    if (project.id === "apex") {
        return (
            <div className="space-y-3">
                <div className="flex justify-between items-center text-[8px] font-mono text-indigo-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Cpu size={10} /> PINN_SURROGATE_MATRIX</span>
                    <span className="text-emerald-400 animate-pulse">OPTIMIZED · 10.11ms</span>
                </div>
                <div className="grid grid-cols-5 gap-1 h-28 p-2 bg-black/40 rounded-xl border border-indigo-500/10">
                    {Array.from({ length: 15 }, (_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                opacity: [(i + ticks) % 3 === 0 ? 0.8 : 0.15, (i + ticks) % 3 === 0 ? 0.15 : 0.8],
                                backgroundColor: (i + ticks) % 3 === 0 ? "rgba(79,70,229,0.5)" : "rgba(79,70,229,0.08)"
                            }}
                            transition={{ duration: 0.8 }}
                            className="rounded-md flex items-center justify-center text-[6px] text-white/20 font-mono"
                        >
                            {((i * 7 + ticks * 3) % 99).toString().padStart(2, "0")}
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-between text-[7px] font-mono text-slate-500">
                    <span>TRAJECTORY_NODES: 15/15</span>
                    <span>LOSS: 0.00012</span>
                </div>
            </div>
        );
    }

    if (project.id === "orbi") {
        return (
            <div className="space-y-3">
                <div className="flex justify-between items-center text-[8px] font-mono text-emerald-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Radar size={10} /> ORBITAL_PROXIMITY_RADAR</span>
                    <span className="text-amber-400 animate-pulse">DEBRIS_SCAN_ACTIVE</span>
                </div>
                <div className="relative h-28 bg-black/40 rounded-xl border border-emerald-500/10 overflow-hidden flex items-center justify-center">
                    {/* rings */}
                    {[40, 60, 80].map(d => (
                        <div key={d} className="absolute rounded-full border border-emerald-500/10" style={{ width: d + "%", height: d + "%" }} />
                    ))}
                    {/* sweep line */}
                    <div
                        className="absolute origin-bottom rounded-full"
                        style={{
                            width: 2, height: "42%", bottom: "50%", left: "calc(50% - 1px)",
                            background: "linear-gradient(to top, #10b981, transparent)",
                            transformOrigin: "bottom center",
                            transform: `rotate(${radarAngle}deg)`
                        }}
                    />
                    {/* center dot */}
                    <div className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#10b981]" />
                    {/* debris dots */}
                    {[{ x: 28, y: 22 }, { x: 65, y: 40 }, { x: 45, y: 70 }].map((p, i) => (
                        <motion.div
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 1.5, delay: i * 0.4, repeat: Infinity }}
                            className="absolute w-1 h-1 bg-red-500 rounded-full"
                            style={{ left: p.x + "%", top: p.y + "%" }}
                        />
                    ))}
                </div>
                <div className="flex justify-between text-[7px] font-mono text-slate-500">
                    <span>ACCURACY: 95.8%</span>
                    <span>LATENCY: 8.24ms</span>
                </div>
            </div>
        );
    }

    if (project.id === "cmdx") {
        return (
            <div className="space-y-3">
                <div className="flex justify-between items-center text-[8px] font-mono text-blue-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><BarChart3 size={10} /> MONTE_CARLO_IV_V_SUITE</span>
                    <span className="text-blue-300">PASS ≥ 98%</span>
                </div>
                <div className="h-28 bg-black/40 rounded-xl border border-blue-500/10 p-3 flex items-end gap-1">
                    {barData.map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.8, delay: i * 0.05 }}
                                className={`w-full rounded-t-sm border-t ${h >= 98 ? "bg-blue-500/50 border-blue-400" : "bg-blue-500/10 border-blue-500/30"}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-between text-[7px] font-mono text-slate-500">
                    <span>DOCKING_SIMS: 1,000</span>
                    <span>FAILED: 2</span>
                </div>
            </div>
        );
    }

    if (project.id === "eco") {
        return (
            <div className="space-y-3">
                <div className="flex justify-between items-center text-[8px] font-mono text-emerald-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Activity size={10} /> LIFECYCLE_ANOMALY_SHIELD</span>
                    <span className="text-emerald-300">R²: 0.9952</span>
                </div>
                <div className="h-28 bg-black/40 rounded-xl border border-emerald-500/10 p-4 space-y-3">
                    {[
                        { label: "Input Reliability", value: "99%", pct: 99, color: "bg-emerald-500" },
                        { label: "Prediction Variance", value: "1.5%", pct: 2, color: "bg-indigo-500" },
                    ].map(row => (
                        <div key={row.label} className="flex items-center gap-3">
                            <span className="text-[7px] text-slate-500 w-28 uppercase shrink-0">{row.label}</span>
                            <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ width: row.value }}
                                    transition={{ duration: 1 }}
                                    className={`h-full ${row.color} rounded-full`}
                                    style={{ width: row.pct + "%" }}
                                />
                            </div>
                            <span className="text-[7px] font-mono text-slate-400">{row.value}</span>
                        </div>
                    ))}
                    <div className="flex items-center justify-between bg-emerald-500/5 px-3 py-1.5 rounded-lg mt-1">
                        <span className="text-[8px] font-mono text-emerald-400 animate-pulse">NO_ANOMALY_DETECTED</span>
                        <Shield size={10} className="text-emerald-400" />
                    </div>
                </div>
                <div className="flex justify-between text-[7px] font-mono text-slate-500">
                    <span>MICROSERVICE: 100%</span>
                    <span>P90 LATENCY: 281ms</span>
                </div>
            </div>
        );
    }

    // fallback
    return (
        <div className="space-y-3">
            <div className="text-[8px] font-mono text-indigo-400 uppercase tracking-widest">SYSTEM_METRICS_MONITOR</div>
            <div className="h-20 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center">
                <Activity size={20} className="text-indigo-400 animate-pulse" />
            </div>
        </div>
    );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function Projects() {
    const [selected, setSelected] = useState(null);

    return (
        <section id="projects" className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
                <div className="space-y-1">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Selected_Projects</h2>
                    <h3 className="text-3xl font-bold tracking-tight">Main Deployments</h3>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    NODE_STABLE
                </div>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-2">
                {PROJECTS.map((p, i) => (
                    <motion.article
                        key={p.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => setSelected(p)}
                        className="group glass-card flex flex-col p-6 min-h-[280px] cursor-pointer hover:border-indigo-500/30 transition-all duration-500 relative"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <Binary size={12} className="text-indigo-400 opacity-50" />
                                    <span className="text-[9px] font-mono text-indigo-400 font-bold uppercase tracking-tighter">
                                        ID_{p.id.toUpperCase()}_LOG
                                    </span>
                                </div>
                                <h4 className="text-lg font-bold leading-tight group-hover:text-white transition-colors">{p.title}</h4>
                            </div>
                            <div className="p-2 rounded-lg bg-white/5 text-slate-500 group-hover:text-indigo-400 transition-colors">
                                <Activity size={16} />
                            </div>
                        </div>

                        <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{p.desc}</p>

                        <div className="grid grid-cols-2 gap-3 mb-6">
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
                            Analyse Mission <ZoomIn size={14} />
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelected(null)}
                    >
                        {/* backdrop */}
                        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" />

                        {/* panel */}
                        <motion.div
                            key="panel"
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            onClick={e => e.stopPropagation()}
                            className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl shadow-[0_0_60px_rgba(79,70,229,0.35)] overflow-hidden"
                        >
                            {/* top bar */}
                            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-indigo-500/5">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400">
                                        <Shield size={22} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-0.5">
                                            Project_Deep_Dive
                                        </div>
                                        <h4 className="text-2xl font-bold text-white tracking-tight">{selected.title}</h4>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelected(null)}
                                    className="p-3 hover:bg-white/10 rounded-xl text-slate-400 hover:text-white transition-all bg-white/5"
                                >
                                    <X size={22} />
                                </button>
                            </div>

                            {/* body */}
                            <div className="p-6 md:p-10 space-y-8 overflow-y-auto max-h-[75vh]">

                                {/* Main Points */}
                                {selected.mainPoints && (
                                    <div className="space-y-3">
                                        <div className="text-[9px] font-mono text-slate-500 uppercase flex items-center gap-2 tracking-widest">
                                            <Terminal size={12} className="text-indigo-400" /> Mission_Key_Points
                                        </div>
                                        <div className="grid gap-2">
                                            {selected.mainPoints.map((pt, i) => (
                                                <div key={i} className="flex items-start gap-3 p-3 bg-black/30 rounded-xl border border-white/5">
                                                    <div className="mt-0.5 w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shrink-0">
                                                        <span className="text-[8px] font-black text-indigo-400">{i + 1}</span>
                                                    </div>
                                                    <p className="text-[12px] text-slate-300 leading-relaxed">{pt}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Architecture */}
                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <div className="text-[9px] font-mono text-slate-500 uppercase flex items-center gap-2 tracking-widest">
                                            <Cpu size={12} className="text-amber-400" /> System_Architecture
                                        </div>
                                        <p className="text-sm text-slate-300 bg-black/40 p-4 rounded-xl border border-white/5 leading-relaxed">
                                            {selected.briefing.architecture}
                                        </p>

                                        <div className="text-[9px] font-mono text-slate-500 uppercase flex items-center gap-2 tracking-widest mt-4">
                                            <Activity size={12} className="text-emerald-400" /> Engineering_Challenge
                                        </div>
                                        <p className="text-sm text-slate-300 italic border-l-4 border-emerald-500/50 pl-4 py-2 bg-emerald-500/5 rounded-r-xl">
                                            "{selected.briefing.challenges}"
                                        </p>
                                    </div>

                                    {/* Dashboard Screenshot or Live Visual */}
                                    <div className="space-y-3">
                                        <div className="text-[9px] font-mono text-slate-500 uppercase flex items-center gap-2 tracking-widest">
                                            <Activity size={12} className="text-indigo-400" /> Live_Dashboard_Preview
                                        </div>
                                        {selected.dashboardImg ? (
                                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/30">
                                                <img
                                                    src={selected.dashboardImg}
                                                    alt={`${selected.title} live dashboard`}
                                                    className="w-full object-cover rounded-2xl"
                                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                                                />
                                                <div style={{ display: 'none' }} className="p-5 bg-slate-900/60 rounded-2xl border border-white/5">
                                                    <LiveDashboard project={selected} />
                                                </div>
                                                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 to-transparent">
                                                    <div className="text-[8px] font-mono text-indigo-400 uppercase tracking-widest animate-pulse">● LIVE_DASHBOARD_SCREENSHOT</div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="p-5 bg-slate-900/60 rounded-2xl border border-white/5 shadow-inner">
                                                <LiveDashboard project={selected} />
                                            </div>
                                        )}

                                        {/* Key Metrics row */}
                                        <div className="grid grid-cols-3 gap-2 mt-2">
                                            {selected.briefing.metrics.map(m => (
                                                <div key={m} className="p-2 rounded-xl bg-black/40 border border-white/5 text-center">
                                                    <div className="text-[8px] font-mono text-indigo-300 font-bold leading-tight">{m}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* footer */}
                            <div className="p-6 border-t border-white/10 bg-black/30 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="flex flex-wrap gap-2">
                                    {selected.tech.map(t => (
                                        <span key={t} className="px-3 py-1 rounded-full bg-slate-800/60 text-[9px] font-mono text-indigo-300 border border-indigo-500/20 uppercase">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={selected.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-auto px-8 py-3 rounded-xl bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.25em] hover:bg-indigo-500 transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-900/40 hover:scale-[1.02] active:scale-95"
                                >
                                    TRANSFER_TO_GITHUB
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
