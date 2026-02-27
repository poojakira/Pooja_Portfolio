import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, BrainCircuit, Cpu, TrendingUp, TrendingDown } from "lucide-react";

export default function TrainingMonitor() {
    const [stats, setStats] = useState({
        epoch: 0,
        loss: 0.85,
        acc: 0.12,
        val_loss: 0.92,
        val_acc: 0.08,
        lr: 0.001
    });
    const [lossHistory, setLossHistory] = useState(Array(30).fill(0.8));

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => {
                const nextEpoch = prev.epoch + 1;
                const newLoss = Math.max(0.008, prev.loss * 0.98 - (Math.random() * 0.004));
                const newAcc = Math.min(0.997, prev.acc + (1 - prev.acc) * 0.05 + (Math.random() * 0.001));
                const newLR = prev.lr * (nextEpoch % 100 === 0 ? 0.5 : 1);

                return {
                    epoch: nextEpoch > 500 ? 0 : nextEpoch,
                    loss: newLoss,
                    acc: newAcc,
                    val_loss: newLoss * (1 + Math.random() * 0.08),
                    val_acc: newAcc * (0.97 + Math.random() * 0.02),
                    lr: newLR
                };
            });
            setLossHistory(prev => [...prev.slice(1), stats.loss]);
        }, 1200);
        return () => clearInterval(interval);
    }, [stats.loss]);

    const maxLoss = Math.max(...lossHistory);

    return (
        <div className="glow-card p-8 relative overflow-hidden group">
            {/* Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <BrainCircuit size={18} />
                    </div>
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-widest text-white">Neural Convergence</h3>
                        <p className="text-[8px] text-slate-500 uppercase tracking-[0.3em] mt-0.5">Live Training Feed</p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[8px] font-black text-emerald-400 uppercase tracking-wider">Training</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="metric-cell">
                    <div className="text-[7px] font-mono text-slate-500 uppercase mb-1">Epoch</div>
                    <div className="text-xl font-black text-indigo-400 tracking-tighter font-mono">{stats.epoch.toString().padStart(3, '0')}</div>
                </div>
                <div className="metric-cell">
                    <div className="text-[7px] font-mono text-slate-500 uppercase mb-1 flex items-center gap-1">
                        <TrendingDown size={8} className="text-emerald-500" /> Loss
                    </div>
                    <div className="text-xl font-black text-white tracking-tighter font-mono">{stats.loss.toFixed(4)}</div>
                </div>
                <div className="metric-cell">
                    <div className="text-[7px] font-mono text-slate-500 uppercase mb-1">LR</div>
                    <div className="text-lg font-black text-amber-400 tracking-tighter font-mono">{stats.lr.toFixed(4)}</div>
                </div>
            </div>

            {/* Mini Loss Chart */}
            <div className="mb-6 p-3 rounded-xl bg-black/30 border border-white/5">
                <div className="text-[7px] font-mono text-slate-600 uppercase mb-2">Loss Convergence</div>
                <div className="flex items-end gap-[2px] h-12">
                    {lossHistory.map((loss, i) => (
                        <div
                            key={i}
                            className="flex-1 bg-indigo-500/30 rounded-t-sm min-h-[2px] transition-all duration-300"
                            style={{
                                height: `${Math.max(4, (loss / maxLoss) * 100)}%`,
                                backgroundColor: i === lossHistory.length - 1 ? 'rgba(99,102,241,0.8)' : undefined
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-4 font-mono">
                <div className="space-y-2">
                    <div className="flex justify-between text-[9px] uppercase">
                        <span className="text-slate-500 flex items-center gap-1"><TrendingUp size={9} className="text-indigo-400" /> Train_Accuracy</span>
                        <span className="text-indigo-400 font-bold">{(stats.acc * 100).toFixed(2)}%</span>
                    </div>
                    <div className="progress-bar">
                        <motion.div
                            animate={{ width: `${stats.acc * 100}%` }}
                            transition={{ duration: 0.8 }}
                            className="progress-fill"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between text-[9px] uppercase">
                        <span className="text-slate-500 flex items-center gap-1"><TrendingUp size={9} className="text-emerald-400" /> Val_Accuracy</span>
                        <span className="text-emerald-400/80 font-bold">{(stats.val_acc * 100).toFixed(2)}%</span>
                    </div>
                    <div className="progress-bar">
                        <motion.div
                            animate={{ width: `${stats.val_acc * 100}%` }}
                            transition={{ duration: 0.8 }}
                            className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]"
                        />
                    </div>
                </div>
            </div>

            {/* Audio Visualizer */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-[3px] items-end h-6">
                    {[...Array(24)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [3, Math.random() * 20 + 4, 3] }}
                            transition={{ duration: 0.8 + Math.random() * 0.5, repeat: Infinity, delay: i * 0.04 }}
                            className="w-[3px] bg-indigo-500/20 rounded-full"
                        />
                    ))}
                </div>
                <div className="text-[8px] font-mono text-slate-600 uppercase tracking-widest flex items-center gap-2">
                    <Activity size={10} className="text-indigo-500/50" /> Latency: 0.8ms
                </div>
            </div>
        </div>
    );
}
