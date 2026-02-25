import React from "react";
import { motion } from "framer-motion";
import { Activity, GitBranch } from "lucide-react";

export default function GitHubHeatmap() {
    // Simulated activity data for consistent high-impact look
    const weeks = [...Array(52)];
    const days = [...Array(7)];

    const getLevel = () => {
        const rand = Math.random();
        if (rand > 0.8) return "bg-indigo-500";
        if (rand > 0.6) return "bg-indigo-600/70";
        if (rand > 0.4) return "bg-indigo-700/40";
        if (rand > 0.2) return "bg-indigo-800/20";
        return "bg-slate-900";
    };

    return (
        <section className="glass-card p-6 border-white/5 bg-slate-900/40 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                        <GitBranch size={18} />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-200">Activity_Telemetry</h3>
                </div>
                <div className="flex items-center gap-2 text-[9px] font-mono text-slate-500 uppercase">
                    <Activity size={10} className="text-emerald-500" />
                    Pulse: 100%
                </div>
            </div>

            <div className="flex gap-[3px] overflow-hidden">
                {weeks.map((_, i) => (
                    <div key={i} className="flex flex-col gap-[3px]">
                        {days.map((_, j) => (
                            <motion.div
                                key={j}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (i * 0.01) + (j * 0.005) }}
                                className={`w-2.5 h-2.5 rounded-[2px] ${getLevel()} hover:ring-2 ring-indigo-400/50 transition-all cursor-crosshair`}
                                title={`${i} weeks ago, day ${j}`}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[9px] font-mono text-slate-500 uppercase">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-[1px] bg-slate-900" />
                        <div className="w-2 h-2 rounded-[1px] bg-indigo-800/20" />
                        <div className="w-2 h-2 rounded-[1px] bg-indigo-700/40" />
                        <div className="w-2 h-2 rounded-[1px] bg-indigo-500" />
                    </div>
                    <span>More</span>
                </div>
                <div className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">
                    Real-time contribution audit enabled
                </div>
            </div>

            {/* Matrix Background Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none font-mono text-[6px] leading-none select-none p-1">
                {Array(20).fill("COMMIT_PUSH_MERGE_DEPLOY_AUDIT_VERIFY").join(" ")}
            </div>
        </section>
    );
}
