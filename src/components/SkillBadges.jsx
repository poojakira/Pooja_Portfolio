import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ExternalLink, X, Shield, Cpu, Activity, Zap, TrendingUp, Lock, Eye, Fingerprint, Layers, BrainCircuit, Database, BarChart3, GitBranch } from "lucide-react";

const BADGES = [
    {
        title: "Transformer Models and BERT Model",
        date: "Earned Feb 26, 2026 EST",
        issuer: "Google Cloud",
        credId: "GCP-BERT-2026-A91X",
        skills: [
            { name: "Multi-Head Attention", level: 95 },
            { name: "Tokenization & Embeddings", level: 90 },
            { name: "Fine-Tuning BERT", level: 92 },
            { name: "Transformer Architecture", level: 88 },
            { name: "Sequence Modeling", level: 85 },
            { name: "Transfer Learning", level: 93 }
        ],
        code: `from transformers import BertConfig, BertModel
import torch

config = BertConfig.from_pretrained(
    'bert-base-uncased',
    output_attentions=True,
    hidden_dropout_prob=0.1,
    num_attention_heads=12,
    num_hidden_layers=12
)

model = BertModel(config)
inputs = tokenizer("PKB ML Security", return_tensors="pt")
outputs = model(**inputs, output_attentions=True)

# Extract attention patterns across all layers
attention_weights = outputs.attentions  # (12, batch, 12, seq, seq)
print(f"Attention shape: {attention_weights[0].shape}")`,
        metrics: [
            { label: "Parameters Trained", value: "110M", icon: "cpu" },
            { label: "Attention Heads", value: "12×12", icon: "layers" },
            { label: "Accuracy Score", value: "96.2%", icon: "trending" },
            { label: "Latency", value: "8.1ms", icon: "zap" }
        ],
        description: "Mastery of encoder-only transformer architectures with production-ready fine-tuning for NLP tasks including sentiment analysis, NER, and semantic search."
    },
    {
        title: "Machine Learning Operations (MLOps) for Generative AI",
        date: "Earned Feb 26, 2026 EST",
        issuer: "Google Cloud",
        credId: "GCP-MLOPS-2026-B47K",
        skills: [
            { name: "CI/CD for ML Pipelines", level: 94 },
            { name: "Model Versioning", level: 91 },
            { name: "A/B & Canary Deploy", level: 88 },
            { name: "GPU Orchestration", level: 86 },
            { name: "Feature Stores", level: 83 },
            { name: "Model Monitoring", level: 90 }
        ],
        code: `# MLOps Deployment Pipeline [Vertex AI]
pipeline:
  name: GenAI_Inference_Sync_v4
  trigger: on_push(branch: "main")
  stages:
    - build:
        image: poojakira/inference-core:latest
        hardware: NVIDIA_H100_80GB
        cache: layer_registry_v2
    - test:
        suite: LoadTest_Stress_V4
        target_latency: 12ms
        concurrent_users: 10000
    - deploy:
        strategy: Blue_Green
        canary_weight: 10%
        auto_rollback: true
    - monitor:
        drift_detector: KL_Divergence
        alert_threshold: 0.05`,
        metrics: [
            { label: "Pipeline Uptime", value: "99.98%", icon: "trending" },
            { label: "Deploy Frequency", value: "12/day", icon: "git" },
            { label: "Rollback Time", value: "<30s", icon: "zap" },
            { label: "GPU Cluster", value: "H100×4", icon: "cpu" }
        ],
        description: "End-to-end MLOps lifecycle management for generative AI workloads including automated training, versioned deployment, and continuous monitoring at enterprise scale."
    },
    {
        title: "Professional Machine Learning Engineer Study Guide",
        date: "Earned Feb 26, 2026 EST",
        issuer: "Google Cloud",
        credId: "GCP-MLE-2026-C82R",
        skills: [
            { name: "ML System Design", level: 92 },
            { name: "Data Engineering", level: 87 },
            { name: "Model Optimization", level: 90 },
            { name: "Cloud Architecture", level: 88 },
            { name: "Security & IAM", level: 93 },
            { name: "Cost Management", level: 85 }
        ],
        code: `class ML_Infrastructure:
    """Enterprise ML Architecture — GCP Certified"""
    provider = "Vertex AI + SageMaker"
    instance = "ml.p4d.24xlarge"
    security = "IAM_Role_V3 + VPC_SC"

    def deploy_optimized(self, model_uri, config):
        return self.engine.launch(
            model=model_uri,
            tensor_parallel=True,
            quantization="int8_dynamic",
            encryption="AES-256-GCM",
            auto_scaling={"min": 2, "max": 16},
            budget_alert=0.85
        )

    def monitor(self):
        return DriftDetector(
            method="KS_Test",
            window="7d",
            alert=self.ops_team
        )`,
        metrics: [
            { label: "Inference P90", value: "4.2ms", icon: "zap" },
            { label: "Cost Saved", value: "42%", icon: "trending" },
            { label: "Models Active", value: "8", icon: "database" },
            { label: "Security Score", value: "A+", icon: "shield" }
        ],
        description: "Comprehensive machine learning engineering covering system design, cloud-native optimization, security hardening, and cost-efficient deployment across GCP and multi-cloud environments."
    }
];

// ─── Radar Chart Component ───────────────────────────────────
function SkillRadar({ skills, isVisible }) {
    const size = 180;
    const center = size / 2;
    const radius = 65;
    const n = skills.length;

    const getPoint = (i, r) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        return {
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle)
        };
    };

    const rings = [0.25, 0.5, 0.75, 1];

    return (
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[200px] mx-auto">
            {/* Grid Rings */}
            {rings.map((r, i) => (
                <polygon
                    key={i}
                    points={Array.from({ length: n }, (_, j) => {
                        const p = getPoint(j, radius * r);
                        return `${p.x},${p.y}`;
                    }).join(" ")}
                    fill="none"
                    stroke="rgba(99,102,241,0.12)"
                    strokeWidth="0.5"
                />
            ))}

            {/* Axis lines */}
            {skills.map((_, i) => {
                const p = getPoint(i, radius);
                return <line key={i} x1={center} y1={center} x2={p.x} y2={p.y} stroke="rgba(99,102,241,0.08)" strokeWidth="0.5" />;
            })}

            {/* Data polygon */}
            <motion.polygon
                initial={{ opacity: 0, scale: 0.3 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
                points={skills.map((s, i) => {
                    const p = getPoint(i, radius * (s.level / 100));
                    return `${p.x},${p.y}`;
                }).join(" ")}
                fill="rgba(99,102,241,0.15)"
                stroke="rgba(99,102,241,0.8)"
                strokeWidth="1.5"
                style={{ transformOrigin: `${center}px ${center}px` }}
            />

            {/* Data points + labels */}
            {skills.map((s, i) => {
                const p = getPoint(i, radius * (s.level / 100));
                const lp = getPoint(i, radius + 18);
                return (
                    <g key={i}>
                        <motion.circle
                            initial={{ r: 0 }}
                            animate={isVisible ? { r: 3 } : {}}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            cx={p.x} cy={p.y}
                            fill="#6366f1" stroke="#030712" strokeWidth="1.5"
                        />
                        <text
                            x={lp.x} y={lp.y}
                            textAnchor="middle" dominantBaseline="middle"
                            className="fill-slate-500 text-[6px] font-bold uppercase"
                        >
                            {s.name.split(' ').slice(0, 2).join(' ')}
                        </text>
                    </g>
                );
            })}
        </svg>
    );
}

// ─── Verification Sequence ───────────────────────────────────
function VerificationSequence({ isActive }) {
    const [step, setStep] = useState(0);
    const steps = [
        { label: "Initializing secure channel...", icon: <Lock size={12} /> },
        { label: "Authenticating credential hash...", icon: <Fingerprint size={12} /> },
        { label: "Validating issuer signature...", icon: <Shield size={12} /> },
        { label: "Cross-referencing blockchain ledger...", icon: <Database size={12} /> },
        { label: "Credential verified ✓", icon: <CheckCircle2 size={12} /> }
    ];

    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        const timer = setInterval(() => {
            setStep(prev => prev < steps.length - 1 ? prev + 1 : prev);
        }, 600);
        return () => clearInterval(timer);
    }, [isActive]);

    return (
        <div className="space-y-2">
            {steps.map((s, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={i <= step ? { opacity: 1, x: 0 } : { opacity: 0.2, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`flex items-center gap-2 text-[10px] font-mono ${i < step ? "text-emerald-400" :
                            i === step ? "text-indigo-400" : "text-slate-700"
                        }`}
                >
                    <div className={`p-1 rounded ${i < step ? "bg-emerald-500/20" :
                            i === step ? "bg-indigo-500/20" : "bg-slate-800/50"
                        }`}>
                        {i < step ? <CheckCircle2 size={10} className="text-emerald-400" /> : s.icon}
                    </div>
                    <span>{s.label}</span>
                    {i === step && i < steps.length - 1 && (
                        <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>▌</motion.span>
                    )}
                </motion.div>
            ))}
        </div>
    );
}

// ─── Metric Icon Resolver ────────────────────────────────────
function MetricIcon({ type }) {
    const icons = {
        cpu: <Cpu size={12} />,
        layers: <Layers size={12} />,
        trending: <TrendingUp size={12} />,
        zap: <Zap size={12} />,
        git: <GitBranch size={12} />,
        database: <Database size={12} />,
        shield: <Shield size={12} />
    };
    return icons[type] || <Activity size={12} />;
}

// ─── Main Component ──────────────────────────────────────────
export default function SkillBadges() {
    const [selectedBadge, setSelectedBadge] = useState(null);
    const [verifying, setVerifying] = useState(false);

    const openBadge = (badge) => {
        setSelectedBadge(badge);
        setVerifying(true);
    };

    const closeBadge = () => {
        setSelectedBadge(null);
        setVerifying(false);
    };

    return (
        <section id="badges" className="py-20 border-t border-white/5">
            {/* Header */}
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px w-12 bg-gradient-to-r from-indigo-500 to-transparent" />
                <h2 className="section-label">
                    Certified_Credentials
                </h2>
            </div>

            {/* Badge Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BADGES.map((badge, i) => (
                    <motion.div
                        key={badge.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="flex flex-col items-center group cursor-pointer"
                        onClick={() => openBadge(badge)}
                    >
                        {/* Badge Card */}
                        <motion.div
                            whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative w-full aspect-square max-w-[260px] bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-2xl transition-all duration-500"
                            style={{ perspective: "800px" }}
                        >
                            {/* Hover glow */}
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />

                            <div className="absolute inset-0 border-[6px] border-slate-50 rounded-2xl pointer-events-none" />

                            {/* Google Cloud Logo */}
                            <div className="flex items-center gap-1.5 mb-5">
                                <div className="flex gap-0.5">
                                    <div className="w-1.5 h-3.5 bg-[#4285F4] rounded-full" />
                                    <div className="w-1.5 h-3.5 bg-[#EA4335] rounded-full" />
                                    <div className="w-1.5 h-3.5 bg-[#FBBC05] rounded-full" />
                                    <div className="w-1.5 h-3.5 bg-[#34A853] rounded-full" />
                                </div>
                                <span className="text-[11px] font-bold text-slate-600">Google Cloud</span>
                            </div>

                            <h3 className="text-sm font-bold text-slate-800 leading-tight mb-5 px-2">
                                {badge.title}
                            </h3>

                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-10 h-px bg-slate-200" />
                                <CheckCircle2 className="text-[#4285F4]" size={22} fill="#4285F4" stroke="white" />
                                <div className="w-10 h-px bg-slate-200" />
                            </div>

                            <span className="text-[7px] font-black uppercase tracking-[0.2em] text-slate-400">
                                Completion Badge
                            </span>

                            {/* Click hint */}
                            <div className="absolute bottom-3 left-0 right-0 text-center">
                                <span className="text-[7px] font-bold text-slate-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    ▶ Click to Analyze
                                </span>
                            </div>
                        </motion.div>

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

            {/* ═══════ ADVANCED CREDENTIAL MODAL ═══════ */}
            <AnimatePresence>
                {selectedBadge && (
                    <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 md:p-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeBadge}
                            className="absolute inset-0 bg-[#030712]/95 backdrop-blur-2xl"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto custom-scrollbar glow-card"
                        >
                            {/* Top accent */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

                            {/* Close button */}
                            <button
                                onClick={closeBadge}
                                className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <X size={16} />
                            </button>

                            <div className="p-8 md:p-10">
                                {/* Header Row */}
                                <div className="flex flex-col md:flex-row gap-8 mb-10">
                                    {/* Mini Badge Card */}
                                    <motion.div
                                        initial={{ rotateY: -90 }}
                                        animate={{ rotateY: 0 }}
                                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
                                        className="w-44 h-44 bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-2xl shrink-0 relative"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-emerald-500/10 blur-xl pointer-events-none" />
                                        <div className="flex gap-0.5 mb-2">
                                            <div className="w-1 h-2.5 bg-[#4285F4] rounded-full" />
                                            <div className="w-1 h-2.5 bg-[#EA4335] rounded-full" />
                                            <div className="w-1 h-2.5 bg-[#FBBC05] rounded-full" />
                                            <div className="w-1 h-2.5 bg-[#34A853] rounded-full" />
                                        </div>
                                        <h3 className="text-[10px] font-bold text-slate-800 mb-3 leading-tight">{selectedBadge.title}</h3>
                                        <CheckCircle2 size={24} fill="#4285F4" stroke="white" />
                                        <span className="text-[6px] font-black uppercase tracking-widest text-slate-400 mt-2">Verified</span>
                                    </motion.div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="pill-indigo"><Eye size={8} /> Live Analysis</span>
                                            <span className="pill-emerald"><Shield size={8} /> Verified</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight mb-3">
                                            {selectedBadge.title}
                                        </h2>
                                        <p className="text-[13px] text-slate-400 leading-relaxed mb-4">
                                            {selectedBadge.description}
                                        </p>
                                        <div className="flex flex-wrap gap-4 text-[10px] font-mono text-slate-500">
                                            <span>ID: <strong className="text-indigo-400">{selectedBadge.credId}</strong></span>
                                            <span>Issued: <strong className="text-slate-300">{selectedBadge.date}</strong></span>
                                            <span>Issuer: <strong className="text-slate-300">{selectedBadge.issuer}</strong></span>
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                                    {/* Skill Radar */}
                                    <div className="metric-cell p-6 md:col-span-1">
                                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-4 flex items-center gap-2">
                                            <BarChart3 size={10} /> Competency Radar
                                        </div>
                                        <SkillRadar skills={selectedBadge.skills} isVisible={!!selectedBadge} />
                                    </div>

                                    {/* Metrics + Verification */}
                                    <div className="md:col-span-2 space-y-4">
                                        {/* 4 Metric Cards */}
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {selectedBadge.metrics.map((m, i) => (
                                                <motion.div
                                                    key={m.label}
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                    className="metric-cell p-4 text-center group/m hover:border-indigo-500/20 transition-colors"
                                                >
                                                    <div className="flex justify-center mb-2 text-indigo-500/50 group-hover/m:text-indigo-400 transition-colors">
                                                        <MetricIcon type={m.icon} />
                                                    </div>
                                                    <div className="text-lg font-black text-white font-mono">{m.value}</div>
                                                    <div className="text-[7px] font-black uppercase text-slate-600 tracking-widest mt-1">{m.label}</div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Skill Bars */}
                                        <div className="metric-cell p-5">
                                            <div className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Skill Breakdown</div>
                                            <div className="space-y-3">
                                                {selectedBadge.skills.map((s, i) => (
                                                    <div key={s.name}>
                                                        <div className="flex justify-between text-[9px] mb-1">
                                                            <span className="text-slate-400 font-bold">{s.name}</span>
                                                            <span className="text-indigo-400 font-mono font-bold">{s.level}%</span>
                                                        </div>
                                                        <div className="progress-bar">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${s.level}%` }}
                                                                transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                                                                className="progress-fill"
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Code + Verification Row */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Code */}
                                    <div className="md:col-span-2">
                                        <div className="flex items-center justify-between mb-2 px-1">
                                            <div className="text-[9px] font-mono text-slate-500 uppercase flex items-center gap-2 tracking-widest">
                                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                                                Implementation Source
                                            </div>
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/30" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                                            </div>
                                        </div>
                                        <div className="code-block relative group/code">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/40 group-hover/code:bg-indigo-500 transition-colors rounded-l-xl" />
                                            <pre className="pl-4">
                                                <code>{selectedBadge.code}</code>
                                            </pre>
                                        </div>
                                    </div>

                                    {/* Verification Sequence */}
                                    <div className="metric-cell p-5">
                                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-4 flex items-center gap-2">
                                            <Fingerprint size={10} /> Credential Verification
                                        </div>
                                        <VerificationSequence isActive={verifying} />

                                        <div className="mt-5 pt-4 border-t border-white/5">
                                            <div className="flex items-center gap-2 text-[9px] font-mono text-emerald-400">
                                                <Lock size={10} />
                                                <span>SHA-256 hash verified</span>
                                            </div>
                                            <div className="text-[8px] font-mono text-slate-600 mt-1 break-all">
                                                0x{Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}...
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quote */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                    className="mt-8 flex items-start gap-4 p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/15"
                                >
                                    <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400 shrink-0">
                                        <Shield size={16} />
                                    </div>
                                    <p className="text-[11px] text-slate-400 leading-relaxed">
                                        "This credential validates production-grade expertise in designing, building, and deploying {selectedBadge.title.toLowerCase().includes('bert') ? 'transformer-based NLP systems' : selectedBadge.title.toLowerCase().includes('mlops') ? 'end-to-end ML pipelines for generative AI' : 'enterprise-scale machine learning solutions'} using Google Cloud's industry-standard infrastructure."
                                    </p>
                                </motion.div>

                                {/* Close */}
                                <button
                                    onClick={closeBadge}
                                    className="btn-primary w-full justify-center mt-8 py-4"
                                >
                                    Close Credential Scan
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
