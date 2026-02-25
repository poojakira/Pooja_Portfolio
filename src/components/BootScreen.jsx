import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Shield, Terminal, Loader2, Play } from "lucide-react";

export default function BootScreen({ onComplete, onStartAudio }) {
    const [loading, setLoading] = useState(false);
    const [logs, setLogs] = useState([]);

    const bootLogs = [
        "INITIALIZING_KERNEL_V4.2...",
        "SECURE_HANDSHAKE_ESTABLISHED",
        "DECRYPTING_BIO_METRICS...",
        "ML_CORE_LOADED",
        "SYSTEM_STABLE",
        "READY_FOR_DEPLOYMENT"
    ];

    const handleStart = () => {
        // TRIGGER AUDIO IMMEDIATELY ON CLICK TO BYPASS BROWSER BLOCKS
        if (onStartAudio) onStartAudio();

        setLoading(true);
        let i = 0;
        const interval = setInterval(() => {
            if (i < bootLogs.length) {
                setLogs(prev => [...prev.slice(-3), bootLogs[i]]);
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => onComplete(), 500);
            }
        }, 300);
    };

    return (
        <div className="fixed inset-0 z-[500] bg-[#030712] flex items-center justify-center font-mono overflow-hidden">
            <div className="absolute inset-0 noise-overlay opacity-20" />
            <div className="vignette" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 w-[400px] text-center"
            >
                <div className="mb-12 relative inline-flex">
                    <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-900 flex items-center justify-center p-5 shadow-[0_0_50px_rgba(79,70,229,0.4)]">
                        <Cpu className="text-white w-full h-full" />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-6 w-6">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-6 w-6 bg-emerald-500 border-4 border-[#030712]" />
                    </div>
                </div>

                <h1 className="text-xl font-black text-white tracking-[0.4em] mb-2 uppercase">System_Initialize</h1>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-12">Pooja_Kiran_Bharadwaj // OS_V4.2</p>

                <AnimatePresence mode="wait">
                    {!loading ? (
                        <motion.button
                            key="start-btn"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleStart}
                            className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-white text-xs font-black uppercase tracking-[0.3em] transition-all flex items-center gap-4 mx-auto shadow-2xl shadow-indigo-500/20"
                        >
                            <Play size={16} fill="currentColor" />
                            Launch Portfolio
                        </motion.button>
                    ) : (
                        <motion.div
                            key="loading-state"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-4"
                        >
                            <Loader2 className="animate-spin text-indigo-500 mx-auto" size={32} />
                            <div className="h-20 flex flex-col justify-end gap-1">
                                {logs.map((log, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-[9px] text-emerald-400/70 font-bold uppercase tracking-widest text-left flex items-center justify-center gap-2"
                                    >
                                        <span className="text-slate-800">&gt;</span> {log}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-20 flex justify-center gap-10">
                    <div className="flex flex-col items-center gap-2">
                        <Shield className="text-slate-800" size={16} />
                        <div className="text-[8px] text-slate-700 tracking-tighter uppercase">Security_Enabled</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Terminal className="text-slate-800" size={16} />
                        <div className="text-[8px] text-slate-700 tracking-tighter uppercase">ML_System_Ready</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
