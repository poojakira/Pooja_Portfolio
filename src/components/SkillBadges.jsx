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
            {/* Live Visualizer HUD */}
            <div className="p-6 bg-black/60 rounded-2xl border border-indigo-500/30 shadow-[inset_0_0_20px_rgba(79,70,229,0.2)] overflow-hidden relative">
                <div className="absolute top-0 right-0 p-2 opacity-20">
                    <Terminal size={40} className="text-indigo-500" />
                </div>

                {isBert ? (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-[8px] font-mono text-indigo-400 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Activity size={10} /> Model_Attention_Heads</span>
                            <span className="bg-indigo-500/20 px-2 py-0.5 rounded">LAYER_12_SYNC</span>
                        </div>
                        <div className="grid grid-cols-12 gap-1.5 h-16">
                            {[...Array(24)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        height: [Math.random() * 40 + 20 + "%", Math.random() * 80 + 20 + "%", Math.random() * 40 + 20 + "%"],
                                        opacity: [0.3, 1, 0.3],
                                        backgroundColor: ["rgba(99, 102, 241, 0.2)", "rgba(99, 102, 241, 0.6)", "rgba(99, 102, 241, 0.2)"]
                                    }}
                                    transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                                    className="w-full rounded-full"
                                />
                            ))}
                        </div>
                        <div className="flex justify-between text-[7px] font-mono text-slate-500">
                            <span>TRANSFORMER_SURROGATE_V4</span>
                            <span>PARAMS: 110M_UNCASED</span>
                        </div>
                    </div>
                ) : isOps ? (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-[8px] font-mono text-emerald-400 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Cpu size={10} /> MLOps_Pipeline_Telemetry</span>
                            <span className="text-emerald-500 animate-pulse">DEPLOYMENT_STABLE</span>
                        </div>
                        <div className="flex items-end gap-2 h-16 px-2">
                            {[60, 80, 45, 90, 70, 85, 50, 95, 75, 80].map((h, i) => (
                                <div key={i} className="flex-1 relative group">
                                    <motion.div
                                        animate={{ height: [`${h}%`, `${h - 20}%`, `${h}%`] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                        className="w-full bg-gradient-to-t from-emerald-500/10 to-emerald-500/40 rounded-t-lg border-t border-emerald-500/50"
                                    />
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[6px] text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {h}%
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between text-[7px] font-mono text-slate-500">
                            <span>CI/CD_AUTO_SYNC: ON</span>
                            <span>GPU_CLUSTER_H100: READY</span>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4 py-2">
                        <div className="flex justify-center mb-2">
                            <div className="relative">
                                <Shield size={32} className="text-amber-500/20" />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-2 border-dashed border-amber-500/40 rounded-full"
                                />
                            </div>
                        </div>
                        <div className="text-center space-y-1">
                            <div className="text-[9px] font-mono text-amber-400 animate-pulse tracking-[0.2em]">CLOUD_ENGINEER_VERIFICATION_SYNC</div>
                            <div className="text-[7px] font-mono text-slate-500">AUTH_TOKEN: AWS_ACAD_PRO_2026_X91</div>
                        </div>
                        <div className="flex justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                                    className="w-8 h-1 bg-amber-500/30 rounded-full"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Code Environment Container */}
            <div className="space-y-3">
                <div className="flex justify-between items-center px-1">
                    <div className="text-[9px] font-mono text-slate-500 uppercase flex items-center gap-2 tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                        Implementation_Kernel_Source
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/30" />
                        <div className="w-2 h-2 rounded-full bg-amber-500/30" />
                        <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
                    </div>
                </div>
                <div className="bg-[#020617] rounded-2xl border border-white/5 font-mono text-[11px] overflow-hidden shadow-2xl relative group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/50 group-hover:bg-indigo-500 transition-colors" />
                    <div className="p-6 overflow-x-auto text-indigo-300 custom-scrollbar leading-relaxed">
                        {isBert ? (
                            <pre><code className="language-python">{`# Advanced Transformer Configuration
from transformers import BertConfig, BertModel

config = BertConfig.from_pretrained('bert-base-uncased', 
    output_attentions=True,
    hidden_dropout_prob=0.1,
    attention_probs_dropout_prob=0.1
)

# Initializing multi-modal head for semantic mapping
model = BertModel(config)
attention_heads = model.get_attention_vectors(layer=12)`}</code></pre>
                        ) : isOps ? (
                            <pre><code className="language-yaml">{`# MLOps Deployment Orchestration
pipeline:
  name: GenAI_Inference_Sync
  stages:
    - build:
        image: poojakira/inference-core:latest
        hardware: NVIDIA_H100_80GB
    - test:
        suite: Latency_Stress_V4
        threshold: 12ms
    - deploy:
        strategy: Blue_Green
        canary_weight: 10%`}</code></pre>
                        ) : (
                            <pre><code className="language-python">{`# Cloud ML Architecture Definition
class ML_Infrastructure:
    provider = "AWS_Sagemaker"
    instance = "ml.p4d.24xlarge"
    security = "IAM_Role_V3"

    def deploy_optimized(self, model_uri):
        return self.engine.launch(
            tensor_parallel=True,
            quantization="int8",
            encryption=True
        )`}</code></pre>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
                <div className="p-1.5 bg-indigo-500/20 rounded-lg text-indigo-400">
                    <Shield size={14} />
                </div>
                <p className="text-[10px] text-slate-400 leading-relaxed font-sans mt-0.5">
                    "This certification validates extensive hands-on experience in architecting and deploying secure, scalable, and optimized AI/ML solutions using industry-standard enterprise frameworks."
                </p>
            </div>
        </div>
    );
}
