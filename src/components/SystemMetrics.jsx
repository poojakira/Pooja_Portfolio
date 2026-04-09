import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Activity, Zap, HardDrive, Thermometer, Gauge } from "lucide-react";

export default function SystemMetrics() {
    const [stats, setStats] = useState({
        gpu: 42,
        mem: 6.4,
        tps: 1240,
        temp: 58,
        bandwidth: 2.4,
        uptime: 99.98
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                gpu: Math.max(30, Math.min(95, prev.gpu + (Math.random() * 8 - 4))),
                mem: Math.max(4, Math.min(12, prev.mem + (Math.random() * 0.3 - 0.15))),
                tps: Math.max(800, Math.min(2200, prev.tps + Math.floor(Math.random() * 80 - 40))),
                temp: Math.max(48, Math.min(82, prev.temp + (Math.random() * 1.5 - 0.75))),
                bandwidth: Math.max(1.5, Math.min(3.5, prev.bandwidth + (Math.random() * 0.2 - 0.1))),
                uptime: 99.98
            }));
        }, 1800);
        return () => clearInterval(interval);
    }, []);

    const getTemperatureColor = (t) => {
        if (t > 75) return "text-rose-400";
        if (t > 65) return "text-amber-400";
        return "text-rose-400";
    };

    const getGPUColor = (g) => {
        if (g > 80) return "from-rose-600 to-rose-400";
        if (g > 60) return "from-amber-600 to-amber-400";
        return "from-orange-600 to-orange-400";
    };

    return (
        <section className="glow-card p-8 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-amber-500/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Activity size={18} />
                    </div>
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-widest text-white">System Health</h3>
                        <p className="text-[8px] text-slate-500 uppercase tracking-[0.3em] mt-0.5">Hardware Telemetry</p>
                    </div>
                </div>
                <div className="text-[8px] font-mono text-rose-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    {stats.uptime}%
                </div>
            </div>

            {/* GPU + Temperature Row */}
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="metric-cell">
                    <div className="flex items-center gap-1.5 text-[7px] font-mono text-slate-500 uppercase mb-2">
                        <Cpu size={9} className="text-orange-400" /> GPU Load
                    </div>
                    <div className="text-2xl font-black tracking-tighter font-mono text-white">{stats.gpu.toFixed(0)}%</div>
                    <div className="progress-bar mt-2">
                        <motion.div
                            animate={{ width: `${stats.gpu}%` }}
                            className={`h-full rounded-full bg-gradient-to-r ${getGPUColor(stats.gpu)} shadow-[0_0_8px_rgba(99,102,241,0.4)]`}
                        />
                    </div>
                </div>
                <div className="metric-cell">
                    <div className="flex items-center gap-1.5 text-[7px] font-mono text-slate-500 uppercase mb-2">
                        <Zap size={9} className="text-amber-400" /> Core Temp
                    </div>
                    <div className={`text-2xl font-black tracking-tighter font-mono ${getTemperatureColor(stats.temp)}`}>
                        {stats.temp.toFixed(0)}°C
                    </div>
                    <div className="progress-bar mt-2">
                        <motion.div
                            animate={{ width: `${stats.temp}%` }}
                            className="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-400"
                        />
                    </div>
                </div>
            </div>

            {/* TPS + VRAM Row */}
            <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="metric-cell text-center">
                    <div className="text-[7px] font-black text-slate-600 uppercase tracking-widest mb-1">Throughput</div>
                    <div className="text-xl font-mono font-black text-orange-400">
                        {stats.tps}<span className="text-[9px] text-slate-500 ml-1">TX/s</span>
                    </div>
                </div>
                <div className="metric-cell text-center">
                    <div className="text-[7px] font-black text-slate-600 uppercase tracking-widest mb-1">VRAM</div>
                    <div className="text-xl font-mono font-black text-white">
                        {stats.mem.toFixed(1)}<span className="text-[9px] text-slate-500 ml-1">GB</span>
                    </div>
                </div>
            </div>

            {/* Bandwidth */}
            <div className="metric-cell mb-4">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-[7px] font-mono text-slate-500 uppercase flex items-center gap-1">
                        <HardDrive size={9} className="text-rose-400" /> HBM Bandwidth
                    </span>
                    <span className="text-[9px] font-mono font-bold text-rose-400">{stats.bandwidth.toFixed(1)} TB/s</span>
                </div>
                <div className="progress-bar">
                    <motion.div
                        animate={{ width: `${(stats.bandwidth / 3.5) * 100}%` }}
                        className="h-full rounded-full bg-gradient-to-r from-rose-600 to-rose-400 shadow-[0_0_8px_rgba(52,211,153,0.3)]"
                    />
                </div>
            </div>

            {/* Audio Bars */}
            <div className="flex gap-[2px] items-end h-6">
                {[...Array(28)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: [2, Math.random() * 20 + 3, 2] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.06 }}
                        className="flex-1 bg-slate-800 rounded-full min-h-[2px]"
                    />
                ))}
            </div>
        </section>
    );
}
