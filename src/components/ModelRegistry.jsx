import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, GitBranch, ShieldCheck, Activity, Cpu } from "lucide-react";

const MODELS = [
    { name: "APEX_SURROGATE_T1", version: "v4.2.0", status: "production", acc: "98.2%", latency: "10.2ms" },
    { name: "AEGIS_GAN_Denoise", version: "v2.1.1", status: "production", acc: "94.0%", latency: "4.5ms" },
    { name: "ORBIT_IQ_DISTILL", version: "v1.0.5", status: "staging", acc: "95.8%", latency: "8.1ms" }
];

export default function ModelRegistry() {
    return (
        <section className="glass-card p-6 border-white/5 bg-slate-900/40 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                        <Database size={18} />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-200">Model_Registry_v2</h3>
                </div>
                <div className="flex items-center gap-2 text-[9px] font-mono text-emerald-500 uppercase font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Registry_Active
                </div>
            </div>

            <div className="space-y-3">
                {MODELS.map((model, i) => (
                    <motion.div
                        key={model.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-indigo-500/20 transition-all group/model"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <div className="text-[9px] font-mono text-indigo-400 leading-none mb-1">{model.version}</div>
                                <h4 className="text-xs font-bold text-slate-200">{model.name}</h4>
                            </div>
                            <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border ${model.status === 'production' ? 'border-emerald-500/20 text-emerald-500' : 'border-amber-500/20 text-amber-500'
                                }`}>
                                {model.status}
                            </span>
                        </div>

                        <div className="flex gap-4 mt-3 pt-3 border-t border-white/5">
                            <div className="text-center">
                                <div className="text-[7px] text-slate-600 uppercase font-black">Accuracy</div>
                                <div className="text-[10px] font-mono font-bold text-slate-400">{model.acc}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-[7px] text-slate-600 uppercase font-black">Inference</div>
                                <div className="text-[10px] font-mono font-bold text-slate-400">{model.latency}</div>
                            </div>
                            <div className="ml-auto flex items-center gap-1">
                                <ShieldCheck size={10} className="text-indigo-500/50" />
                                <span className="text-[8px] font-mono text-slate-700">SHA-256</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                <div className="flex items-center gap-2 mb-2">
                    <GitBranch size={12} className="text-indigo-400" />
                    <span className="text-[10px] font-bold text-slate-300 uppercase">Deployment Pipeline</span>
                </div>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6, 7].map(i => (
                        <div key={i} className={`h-1.5 flex-1 rounded-full ${i < 6 ? 'bg-indigo-500' : 'bg-slate-800'}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}
