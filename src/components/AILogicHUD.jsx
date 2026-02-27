import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cpu, Activity, Zap, Layers } from "lucide-react";

export default function AILogicHUD() {
    const [tokens, setTokens] = useState([]);
    const [inferenceStats, setInferenceStats] = useState({
        tps: 84.2,
        latency: 12,
        memory: "4.2GB",
        activeLayers: 0
    });

    const sampleTokens = [
        "Transformer", "Attention", "Weight", "Bias", "Activation",
        "Gradient", "Inference", "Kernel", "Vector", "Embedding",
        "Normalization", "Dropout", "Softmax", "ReLU", "Adam"
    ];

    useEffect(() => {
        const tokenInterval = setInterval(() => {
            const newToken = sampleTokens[Math.floor(Math.random() * sampleTokens.length)];
            setTokens(prev => [...prev.slice(-8), { text: newToken, id: Math.random() }]);

            setInferenceStats(prev => ({
                ...prev,
                tps: (Math.random() * 20 + 80).toFixed(1),
                latency: Math.floor(Math.random() * 5 + 10),
                activeLayers: Math.floor(Math.random() * 12)
            }));
        }, 800);

        return () => clearInterval(tokenInterval);
    }, []);

    return (
        <div className="glass-card p-6 border-l-4 border-indigo-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-2 opacity-10">
                <Brain size={48} className="text-indigo-400" />
            </div>

            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Cpu size={14} />
                    </div>
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">
                        GenAI_Core_Inference
                    </span>
                </div>
                <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                        />
                    ))}
                </div>
            </div>

            {/* Inference Stream */}
            <div className="bg-black/40 rounded-xl p-4 mb-6 font-mono border border-white/5 min-h-[120px]">
                <div className="text-[8px] text-slate-600 mb-2 uppercase tracking-widest border-b border-white/5 pb-1">
                    Token_Stream_Live
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                    <AnimatePresence>
                        {tokens.map((token) => (
                            <motion.span
                                key={token.id}
                                initial={{ opacity: 0, scale: 0.8, x: -10 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="text-[9px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                            >
                                {token.text}
                            </motion.span>
                        ))}
                    </AnimatePresence>
                    <motion.span
                        animate={{ opacity: [0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.5 }}
                        className="w-1.5 h-3 bg-indigo-400 mt-0.5"
                    />
                </div>
            </div>

            {/* Detailed Metrics */}
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-[8px] font-mono mb-1">
                            <span className="text-slate-500 uppercase">Attention_Map</span>
                            <span className="text-indigo-400">0.98</span>
                        </div>
                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: ["30%", "85%", "60%"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="h-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-[8px] font-mono mb-1">
                            <span className="text-slate-500 uppercase">Latency</span>
                            <span className="text-emerald-400">{inferenceStats.latency}ms</span>
                        </div>
                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: ["10%", "40%", "20%"] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="h-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between border-l border-white/5 pl-4">
                    <div className="flex items-center gap-3">
                        <Activity size={14} className="text-indigo-400" />
                        <div>
                            <div className="text-[7px] text-slate-600 uppercase">Throughput</div>
                            <div className="text-xs font-black text-white">{inferenceStats.tps} <span className="text-[8px] text-slate-500">T/s</span></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Layers size={14} className="text-emerald-400" />
                        <div>
                            <div className="text-[7px] text-slate-600 uppercase">Active_Nodes</div>
                            <div className="text-xs font-black text-white">{inferenceStats.activeLayers} <span className="text-[8px] text-slate-500">Layers</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Zap size={10} className="text-amber-400 animate-pulse" />
                    <span className="text-[8px] font-mono text-slate-500">CUDA_CORE: [H100_OPTIMIZED]</span>
                </div>
                <div className="text-[8px] font-mono text-indigo-400/50">
                    MEM: {inferenceStats.memory}
                </div>
            </div>
        </div>
    );
}
