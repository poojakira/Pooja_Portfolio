import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Activity, Zap, HardDrive } from "lucide-react";

export default function SystemMetrics() {
    const [stats, setStats] = useState({
        gpu: 42,
        mem: 6.4,
        tps: 1240,
        temp: 58
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                gpu: Math.max(30, Math.min(95, prev.gpu + (Math.random() * 10 - 5))),
                mem: Math.max(4, Math.min(12, prev.mem + (Math.random() * 0.4 - 0.2))),
                tps: Math.max(800, Math.min(2000, prev.tps + Math.floor(Math.random() * 100 - 50))),
                temp: Math.max(50, Math.min(85, prev.temp + (Math.random() * 2 - 1)))
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="glass-card p-6 border-white/5 bg-slate-900/40 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                        <Activity size={18} />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-200">System_Health_v5</h3>
                </div>
                <div className="text-[8px] font-mono text-slate-500 uppercase">Audit_Locked</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                    <div className="space-y-1">
                        <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 uppercase">
                            <span className="flex items-center gap-1">
                                <Cpu size={10} className="text-indigo-400" /> GPU_LOAD
                            </span>
                            <span className="font-bold text-slate-300">{stats.gpu.toFixed(1)}%</span>
                        </div>
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: `${stats.gpu}%` }}
                                className="h-full bg-indigo-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 uppercase">
                            <span className="flex items-center gap-1">
                                <Zap size={10} className="text-amber-400" /> CORE_TEMP
                            </span>
                            <span className="font-bold text-slate-300">{stats.temp.toFixed(1)}°C</span>
                        </div>
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: `${(stats.temp / 100) * 100}%` }}
                                className="h-full bg-amber-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-end items-end gap-2">
                    <div className="text-right">
                        <div className="text-[7px] font-black text-slate-600 uppercase tracking-widest">Inference_Throughput</div>
                        <div className="text-xl font-mono font-bold text-indigo-400">{stats.tps}<span className="text-[10px] ml-1">TX/s</span></div>
                    </div>
                    <div className="text-right">
                        <div className="text-[7px] font-black text-slate-600 uppercase tracking-widest">VRAM_Utilization</div>
                        <div className="text-xl font-mono font-bold text-slate-200">{stats.mem.toFixed(1)}<span className="text-[10px] ml-1">GB</span></div>
                    </div>
                </div>
            </div>

            {/* Simulated Live Feed Pulse */}
            <div className="mt-8 flex gap-1 items-end h-8">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: [4, Math.random() * 24 + 4, 4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                        className="w-1 bg-slate-800 rounded-full"
                    />
                ))}
            </div>
        </section>
    );
}
