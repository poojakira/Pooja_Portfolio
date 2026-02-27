import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, GitBranch, ShieldCheck, Activity, Cpu, ExternalLink, CheckCircle2, AlertTriangle, Loader2, Rocket } from "lucide-react";

const MODELS = [
    {
        name: "APEX_SURROGATE_T1",
        version: "v4.2.0",
        status: "production",
        acc: 98.2,
        latency: 10.11,
        framework: "PyTorch",
        params: "42M",
        lastDeploy: "2h ago",
        requests: 12840,
        errors: 3
    },
    {
        name: "AEGIS_GAN_Denoise",
        version: "v2.1.1",
        status: "production",
        acc: 94.0,
        latency: 4.5,
        framework: "TensorFlow",
        params: "18M",
        lastDeploy: "1d ago",
        requests: 8420,
        errors: 0
    },
    {
        name: "ORBIT_IQ_DISTILL",
        version: "v1.0.5",
        status: "staging",
        acc: 95.8,
        latency: 8.1,
        framework: "PyTorch",
        params: "7.5M",
        lastDeploy: "4h ago",
        requests: 3210,
        errors: 1
    }
];

export default function ModelRegistry() {
    const [selectedModel, setSelectedModel] = useState(null);
    const [liveRequests, setLiveRequests] = useState({});
    const [deploying, setDeploying] = useState(false);
    const [pipelineStage, setPipelineStage] = useState(5);

    // Simulate live request counters
    useEffect(() => {
        const initial = {};
        MODELS.forEach(m => { initial[m.name] = m.requests; });
        setLiveRequests(initial);

        const interval = setInterval(() => {
            setLiveRequests(prev => {
                const next = { ...prev };
                MODELS.forEach(m => {
                    if (m.status === "production") {
                        next[m.name] = (prev[m.name] || m.requests) + Math.floor(Math.random() * 5);
                    }
                });
                return next;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Simulate deployment pipeline
    const triggerDeploy = () => {
        if (deploying) return;
        setDeploying(true);
        setPipelineStage(0);
        const timer = setInterval(() => {
            setPipelineStage(prev => {
                if (prev >= 7) { setDeploying(false); clearInterval(timer); return 7; }
                return prev + 1;
            });
        }, 500);
    };

    const statusColors = {
        production: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400", dot: "bg-emerald-400" },
        staging: { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400", dot: "bg-amber-400" },
        retired: { bg: "bg-slate-500/10", border: "border-slate-500/20", text: "text-slate-400", dot: "bg-slate-400" }
    };

    return (
        <section className="glow-card p-8 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-indigo-500/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <Database size={18} />
                    </div>
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-widest text-white">Model Registry</h3>
                        <p className="text-[8px] text-slate-500 uppercase tracking-[0.3em] mt-0.5">{MODELS.length} Deployed</p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[8px] font-black text-emerald-400 uppercase tracking-wider">Active</span>
                </div>
            </div>

            {/* Model Cards */}
            <div className="space-y-3">
                {MODELS.map((model, i) => {
                    const sc = statusColors[model.status];
                    const isSelected = selectedModel === model.name;
                    const reqs = liveRequests[model.name] || model.requests;

                    return (
                        <motion.div
                            key={model.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.08 }}
                            onClick={() => setSelectedModel(isSelected ? null : model.name)}
                            className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${isSelected
                                    ? "bg-white/[0.05] border-indigo-500/25 shadow-[0_0_20px_rgba(99,102,241,0.08)]"
                                    : "bg-black/40 border-white/5 hover:border-indigo-500/15 hover:bg-white/[0.02]"
                                }`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="text-[9px] font-mono text-indigo-400 leading-none mb-1">{model.version}</div>
                                    <h4 className="text-xs font-bold text-slate-200">{model.name}</h4>
                                </div>
                                <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border flex items-center gap-1 ${sc.border} ${sc.text} ${sc.bg}`}>
                                    <span className={`w-1 h-1 rounded-full ${sc.dot} ${model.status === 'production' ? 'animate-pulse' : ''}`} />
                                    {model.status}
                                </span>
                            </div>

                            <div className="flex gap-4 pt-2 border-t border-white/5">
                                <div className="text-center">
                                    <div className="text-[7px] text-slate-600 uppercase font-black">Accuracy</div>
                                    <div className="text-[11px] font-mono font-bold text-emerald-400">{model.acc}%</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[7px] text-slate-600 uppercase font-black">Latency</div>
                                    <div className="text-[11px] font-mono font-bold text-slate-300">{model.latency}ms</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[7px] text-slate-600 uppercase font-black">Requests</div>
                                    <div className="text-[11px] font-mono font-bold text-indigo-400">{reqs.toLocaleString()}</div>
                                </div>
                                <div className="ml-auto flex items-center gap-1">
                                    <ShieldCheck size={10} className="text-indigo-500/40" />
                                    <span className="text-[8px] font-mono text-slate-700">SHA-256</span>
                                </div>
                            </div>

                            {/* Expanded Details */}
                            <AnimatePresence>
                                {isSelected && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-3 mt-3 border-t border-white/5 grid grid-cols-2 gap-2">
                                            <div className="metric-cell p-2 text-center">
                                                <div className="text-[7px] text-slate-600 uppercase font-black">Framework</div>
                                                <div className="text-[10px] font-bold text-white">{model.framework}</div>
                                            </div>
                                            <div className="metric-cell p-2 text-center">
                                                <div className="text-[7px] text-slate-600 uppercase font-black">Params</div>
                                                <div className="text-[10px] font-bold text-white">{model.params}</div>
                                            </div>
                                            <div className="metric-cell p-2 text-center">
                                                <div className="text-[7px] text-slate-600 uppercase font-black">Deploy</div>
                                                <div className="text-[10px] font-bold text-indigo-400">{model.lastDeploy}</div>
                                            </div>
                                            <div className="metric-cell p-2 text-center">
                                                <div className="text-[7px] text-slate-600 uppercase font-black">Errors</div>
                                                <div className={`text-[10px] font-bold ${model.errors === 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                                                    {model.errors === 0 ? '0 ✓' : model.errors}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>

            {/* Interactive Deployment Pipeline */}
            <div className="mt-6 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <GitBranch size={12} className="text-indigo-400" />
                        <span className="text-[10px] font-bold text-slate-300 uppercase">Deployment Pipeline</span>
                    </div>
                    <motion.button
                        onClick={triggerDeploy}
                        disabled={deploying}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-1 px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-wider transition-all ${deploying
                                ? "bg-indigo-500/20 text-indigo-400 cursor-wait"
                                : "bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 cursor-pointer"
                            }`}
                    >
                        {deploying ? <Loader2 size={9} className="animate-spin" /> : <Rocket size={9} />}
                        {deploying ? "Deploying..." : "Trigger Deploy"}
                    </motion.button>
                </div>

                <div className="flex gap-1">
                    {["Build", "Test", "Lint", "Scan", "Stage", "Canary", "Deploy"].map((stage, i) => (
                        <div key={stage} className="flex-1 relative group/stage">
                            <motion.div
                                animate={{
                                    backgroundColor: i < pipelineStage
                                        ? "rgba(99,102,241,0.8)"
                                        : i === pipelineStage && deploying
                                            ? "rgba(99,102,241,0.4)"
                                            : "rgba(30,41,59,0.5)"
                                }}
                                className="h-2 rounded-full"
                            />
                            <div className="text-[5px] font-black text-slate-600 uppercase text-center mt-1 opacity-0 group-hover/stage:opacity-100 transition-opacity">
                                {stage}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
