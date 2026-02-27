import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";

const BADGES = [
    {
        title: "Transformer Models and BERT Model",
        date: "Earned Feb 26, 2026 EST",
        issuer: "Google Cloud",
        color: "blue"
    },
    {
        title: "Machine Learning Operations (MLOps) for Generative AI",
        date: "Earned Feb 26, 2026 EST",
        issuer: "Google Cloud",
        color: "indigo"
    },
    {
        title: "Professional Machine Learning Engineer Study Guide",
        date: "Earned Feb 26, 2026 EST",
        issuer: "Google Cloud",
        color: "cyan"
    }
];

export default function SkillBadges() {
    const [selectedBadge, setSelectedBadge] = React.useState(null);

    return (
        <section id="badges" className="py-20 border-t border-white/5">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-1px w-12 bg-indigo-500/50" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                    Certified_Credentials
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BADGES.map((badge, i) => (
                    <motion.div
                        key={badge.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center group cursor-pointer"
                        onClick={() => setSelectedBadge(badge)}
                    >
                        {/* Badge Card */}
                        <div className="relative w-full aspect-square max-w-[240px] bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                            <div className="absolute inset-0 border-[8px] border-slate-50 rounded-lg pointer-events-none" />

                            {/* Google Cloud Logo Mockup */}
                            <div className="flex items-center gap-1 mb-4">
                                <div className="flex gap-0.5">
                                    <div className="w-1.5 h-3 bg-[#4285F4] rounded-full" />
                                    <div className="w-1.5 h-3 bg-[#EA4335] rounded-full" />
                                    <div className="w-1.5 h-3 bg-[#FBBC05] rounded-full" />
                                    <div className="w-1.5 h-3 bg-[#34A853] rounded-full" />
                                </div>
                                <span className="text-[10px] font-bold text-slate-600">Google Cloud</span>
                            </div>

                            <h3 className="text-sm font-bold text-slate-800 leading-tight mb-4 px-2">
                                {badge.title}
                            </h3>

                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-[1px] bg-slate-200" />
                                <CheckCircle2 className="text-[#4285F4]" size={20} fill="#4285F4" stroke="white" />
                                <div className="w-8 h-[1px] bg-slate-200" />
                            </div>

                            <span className="text-[7px] font-black uppercase tracking-widest text-slate-400">
                                Completion Badge
                            </span>
                        </div>

                        {/* Labels below */}
                        <div className="mt-6 text-center">
                            <h4 className="text-xs font-bold text-white mb-1 px-4">{badge.title}</h4>
                            <p className="text-[9px] text-slate-500 mb-4">{badge.date}</p>

                            <button className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-[10px] font-bold hover:bg-white/10 transition-all">
                                Learn more
                                <ExternalLink size={10} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Credential Detail Modal */}
            <AnimatePresence>
                {selectedBadge && (
                    <div className="fixed inset-0 z-[600] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedBadge(null)}
                            className="absolute inset-0 bg-[#030712]/90 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl glass-card p-10 holographic-card"
                        >
                            <div className="flex flex-col md:flex-row gap-10 items-center">
                                <div className="w-48 h-48 bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-2xl shrink-0">
                                    <h3 className="text-xs font-bold text-slate-800 mb-4 tracking-tight">{selectedBadge.title}</h3>
                                    <CheckCircle2 className="text-[#4285F4] mb-2" size={32} fill="#4285F4" stroke="white" />
                                    <span className="text-[6px] font-black uppercase tracking-widest text-slate-400">Verified_By_Google</span>
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="text-indigo-400 font-mono text-[9px] mb-2 uppercase tracking-[0.3em]">SECURE_CREDENTIAL_V3</div>
                                    <h2 className="text-2xl font-black text-white mb-4 tracking-tight uppercase leading-tight">{selectedBadge.title}</h2>

                                    {/* Advanced Certification Dashboard */}
                                    <AdvancedCertDashboard badge={selectedBadge} />

                                    <div className="flex items-center gap-6 mt-8">
                                        <div className="space-y-1">
                                            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Issued_On</div>
                                            <div className="text-xs font-bold text-slate-200">{selectedBadge.date}</div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">ID_Reference</div>
                                            <div className="text-xs font-bold text-slate-200">GCP-AI-{Math.floor(Math.random() * 900000)}</div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedBadge(null)}
                                        className="mt-10 w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[10px] uppercase tracking-[0.3em] rounded-xl transition-all shadow-xl shadow-indigo-950/50"
                                    >
                                        Close_Session
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </section>
    );
}

function AdvancedCertDashboard({ badge }) {
    const isBert = badge.title.toLowerCase().includes("bert");
    const isOps = badge.title.toLowerCase().includes("mlops");

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* Live Visualizer */}
            <div className="p-5 bg-black/40 rounded-xl border border-indigo-500/20 shadow-inner overflow-hidden">
                {isBert ? (
                    <div className="space-y-3">
                        <div className="flex justify-between text-[7px] font-mono text-indigo-400 uppercase">
                            <span>Attention_Head_Matrix</span>
                            <span>Scale: 0.82</span>
                        </div>
                        <div className="grid grid-cols-6 gap-1">
                            {[...Array(18)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        opacity: [0.1, 0.8, 0.4],
                                        backgroundColor: ["rgba(99, 102, 241, 0.1)", "rgba(99, 102, 241, 0.4)", "rgba(99, 102, 241, 0.2)"]
                                    }}
                                    transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                                    className="aspect-square rounded-sm"
                                />
                            ))}
                        </div>
                    </div>
                ) : isOps ? (
                    <div className="space-y-3">
                        <div className="flex justify-between text-[7px] font-mono text-emerald-400 uppercase">
                            <span>Pipeline_Stability_Index</span>
                            <span>99.9% Uptime</span>
                        </div>
                        <div className="flex items-end gap-1 h-12">
                            {[10, 40, 30, 80, 50, 90, 60, 40, 70].map((h, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [`${h}%`, `${h + 10}%`, `${h}%`] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                    className="flex-1 bg-emerald-500/30 rounded-t-sm"
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3 text-center py-4">
                        <div className="text-[10px] font-mono text-amber-400 animate-pulse">DEPLOYMENT_ARCHITECTURE_VALIDATED</div>
                        <div className="flex justify-center gap-4">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            <div className="h-px w-12 bg-white/10 mt-2" />
                            <CheckCircle2 size={16} className="text-emerald-500" />
                        </div>
                    </div>
                )}
            </div>

            {/* Code Snippet Area */}
            <div className="space-y-2">
                <div className="text-[9px] font-mono text-slate-500 uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    Technical_Implementation_Snippet
                </div>
                <div className="bg-[#030712] p-4 rounded-xl border border-white/5 font-mono text-[10px] overflow-x-auto text-indigo-300">
                    {isBert ? (
                        <pre><code>{`tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base')
# Multi-head Attention weights mapped`}</code></pre>
                    ) : isOps ? (
                        <pre><code>{`# CI/CD MLOps Pipeline
- step: Dockerize_Inference_Core
- step: Deploy_to_H100_Cluster
- step: Automated_Health_Sync`}</code></pre>
                    ) : (
                        <pre><code>{`config = AWS.Academy.MLConfig(
    engine="SageMaker_V2",
    instance="p4d.24xlarge",
    optimized=True
)`}</code></pre>
                    )}
                </div>
            </div>

            <p className="text-slate-400 text-[10px] leading-relaxed italic border-l-2 border-indigo-500/50 pl-4 bg-white/5 py-3 rounded-r-lg">
                "Verified competency in architecting advanced technical solutions using industry-standard ML frameworks."
            </p>
        </div>
    );
}
