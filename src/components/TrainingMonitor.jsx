import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, BrainCircuit, Cpu, TrendingUp } from "lucide-react";

export default function TrainingMonitor() {
    const [stats, setStats] = useState({
        epoch: 0,
        loss: 0.85,
        acc: 0.12,
        val_loss: 0.92,
        val_acc: 0.08
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => {
                const nextEpoch = prev.epoch + 1;
                // Logistic decay/growth curves for realism
                const newLoss = Math.max(0.012, prev.loss * 0.98 - (Math.random() * 0.005));
                const newAcc = Math.min(0.994, prev.acc + (1 - prev.acc) * 0.05 + (Math.random() * 0.002));

                return {
                    epoch: nextEpoch > 500 ? 0 : nextEpoch,
                    loss: newLoss,
                    acc: newAcc,
                    val_loss: newLoss * 1.05,
                    val_acc: newAcc * 0.98
                };
            });
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-card p-6 border-indigo-500/20 bg-slate-900/40 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                        <BrainCircuit size={18} />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-200">Neural_Convergence_Monitor</h3>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-emerald-500 font-bold tracking-tighter uppercase whitespace-nowrap">Training_Active</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 relative overflow-hidden">
                    <div className="text-[9px] font-mono text-slate-500 uppercase mb-1">Epoch_Step</div>
                    <div className="text-2xl font-black text-indigo-400 tracking-tighter">{stats.epoch.toString().padStart(3, '0')}</div>
                    <div className="absolute top-2 right-2 opacity-20"><Cpu size={14} /></div>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 relative overflow-hidden">
                    <div className="text-[9px] font-mono text-slate-500 uppercase mb-1">Batch_Loss</div>
                    <div className="text-2xl font-black text-slate-100 tracking-tighter">{stats.loss.toFixed(4)}</div>
                    <div className="absolute top-2 right-2 opacity-20 text-indigo-400"><TrendingUp size={14} /></div>
                </div>
            </div>

            <div className="space-y-4 font-mono">
                <div className="space-y-2">
                    <div className="flex justify-between text-[9px] uppercase">
                        <span className="text-slate-500">Train_Accuracy</span>
                        <span className="text-indigo-400">{(stats.acc * 100).toFixed(2)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${stats.acc * 100}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                        />
                    </div>
                </div>

                <div className="space-y-2 pb-2">
                    <div className="flex justify-between text-[9px] uppercase">
                        <span className="text-slate-500">Validation_Accuracy</span>
                        <span className="text-emerald-400/80">{(stats.val_acc * 100).toFixed(2)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${stats.val_acc * 100}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400/80 shadow-[0_0_10px_rgba(52,211,153,0.3)]"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-1">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [4, 12, 4] }}
                            transition={{ duration: 1 + Math.random(), repeat: Infinity }}
                            className="w-1 bg-indigo-500/10 rounded-full"
                        />
                    ))}
                </div>
                <div className="text-[8px] font-mono text-slate-600 uppercase tracking-widest flex items-center gap-2">
                    <Activity size={10} /> Latency: 1.2ms
                </div>
            </div>

            {/* Matrix Background Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[8px] overflow-hidden leading-tight p-2 break-all">
                {Array(20).fill("011010110010101110101010111010101010111").join(" ")}
            </div>
        </div>
    );
}
