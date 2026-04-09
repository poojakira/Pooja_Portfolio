import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ExternalLink, X, Shield, Cpu, Activity, Zap, TrendingUp, Lock, Eye, Fingerprint, Layers, BrainCircuit, Database, BarChart3, GitBranch, Server, Cloud } from "lucide-react";

const BADGES = [
    {
        title: "AWS Cloud Security Foundations",
        date: "Earned 2025",
        issuer: "Amazon Web Services",
        credId: "AWS-SEC-2025-FOUNDATIONS",
        skills: [
            { name: "Cloud Security IAM", level: 96 },
            { name: "VPC Networking", level: 92 },
            { name: "Incident Response", level: 88 },
            { name: "Shared Responsibility", level: 95 },
            { name: "Compliance Frameworks", level: 90 },
            { name: "Data Protection", level: 94 }
        ],
        code: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "kms:Decrypt"
      ],
      "Resource": "arn:aws:s3:::telemetry-secure/*",
      "Condition": {
        "Bool": { "aws:MultiFactorAuthPresent": "true" }
      }
    }
  ]
}`,
        metrics: [
            { label: "Security Score", value: "A+", icon: "shield" },
            { label: "IAM Policies", value: "Verified", icon: "lock" },
            { label: "Cloud Compliance", value: "100%", icon: "trending" },
            { label: "MFA Enforcement", value: "Active", icon: "zap" }
        ],
        description: "Mastery of AWS cloud security fundamentals including identity and access management (IAM), shared responsibility model, and infrastructure protection for mission-critical ML workloads."
    },
    {
        title: "Technology Innovation Lab",
        date: "Certified 2025",
        issuer: "Honeywell Aerospace & ASU",
        credId: "HON-TIL-ASU-2025",
        skills: [
            { name: "Aerospace Systems", level: 94 },
            { name: "Mission Simulation", level: 90 },
            { name: "Telemetry Analysis", level: 96 },
            { name: "Industrial AI", level: 88 },
            { name: "Edge Computing", level: 85 },
            { name: "Predictive Maintain", level: 92 }
        ],
        code: `def check_telemetry_integrity(packet):
    """Honeywell-ASU Innovation Lab: Health Monitor"""
    threshold = 0.985
    anomaly_score = model.analyze(packet.telemetry)
    
    if anomaly_score > threshold:
        trigger_safety_protocol('MISSION_ABORT')
        return "CRITICAL_ANOMALY"
    return "SYSTEM_STABLE"`,
        metrics: [
            { label: "Mission Context", value: "Aerospace", icon: "cpu" },
            { label: "Innov. Grade", value: "Honor", icon: "trending" },
            { label: "Lab Projects", value: "Applied", icon: "layers" },
            { label: "System Sync", value: "Ready", icon: "zap" }
        ],
        description: "Advanced collaborative training on aerospace technology innovation, focusing on applied AI for mission control, telemetry processing, and safety-critical system design in partnership with Honeywell Aerospace."
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
                            fill="#f97316" stroke="#0f0406" strokeWidth="1.5"
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
                    className={`flex items-center gap-2 text-[10px] font-mono ${i < step ? "text-rose-400" :
                            i === step ? "text-orange-400" : "text-slate-700"
                        }`}
                >
                    <div className={`p-1 rounded ${i < step ? "bg-rose-500/20" :
                            i === step ? "bg-orange-500/20" : "bg-slate-800/50"
                        }`}>
                        {i < step ? <CheckCircle2 size={10} className="text-rose-400" /> : s.icon}
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
        shield: <Shield size={12} />,
        lock: <Lock size={12} />
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
                <div className="h-px w-12 bg-gradient-to-r from-orange-500 to-transparent" />
                <h2 className="section-label">
                    Certified_Credentials
                </h2>
            </div>

            {/* Badge Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-500/20 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />

                            <div className="absolute inset-0 border-[6px] border-slate-50 rounded-2xl pointer-events-none" />

                            {/* Issuer Logo Container */}
                            <div className="flex items-center gap-1.5 mb-5 uppercase tracking-[0.1em] font-black text-[9px]">
                                {badge.issuer.includes("AWS") ? (
                                    <div className="flex items-center gap-1.5 text-amber-600">
                                        <Cloud size={14} fill="currentColor" />
                                        <span>AWS Certified</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1.5 text-rose-600">
                                        <Server size={14} fill="currentColor" />
                                        <span>Innovation Lab</span>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-sm font-bold text-slate-800 leading-tight mb-5 px-2">
                                {badge.title}
                            </h3>

                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-10 h-px bg-slate-200" />
                                <CheckCircle2 className={badge.issuer.includes("AWS") ? "text-amber-500" : "text-rose-500"} size={22} fill="currentColor" stroke="white" />
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
                            className="absolute inset-0 bg-[#0f0406]/95 backdrop-blur-2xl"
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
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

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
                                        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-orange-500/20 to-rose-500/10 blur-xl pointer-events-none" />
                                        <div className="flex items-center gap-1.5 mb-2 uppercase tracking-[0.1em] font-black text-[7px]">
                                            {selectedBadge.issuer.includes("AWS") ? (
                                                <div className="flex items-center gap-1 text-amber-600">
                                                    <Cloud size={10} fill="currentColor" />
                                                    <span>AWS</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-1 text-rose-600">
                                                    <Server size={10} fill="currentColor" />
                                                    <span>TIL Lab</span>
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-[10px] font-bold text-slate-800 mb-3 leading-tight uppercase tracking-tight">{selectedBadge.title}</h3>
                                        <CheckCircle2 size={24} className={selectedBadge.issuer.includes("AWS") ? "text-amber-500" : "text-rose-500"} fill="currentColor" stroke="white" />
                                        <span className="text-[6px] font-black uppercase tracking-widest text-slate-400 mt-2">Verified</span>
                                    </motion.div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="pill-orange"><Eye size={8} /> Live Analysis</span>
                                            <span className="pill-rose"><Shield size={8} /> Verified</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight mb-3">
                                            {selectedBadge.title}
                                        </h2>
                                        <p className="text-[13px] text-slate-400 leading-relaxed mb-4">
                                            {selectedBadge.description}
                                        </p>
                                        <div className="flex flex-wrap gap-4 text-[10px] font-mono text-slate-500">
                                            <span>ID: <strong className="text-orange-400">{selectedBadge.credId}</strong></span>
                                            <span>Issued: <strong className="text-slate-300">{selectedBadge.date}</strong></span>
                                            <span>Issuer: <strong className="text-slate-300">{selectedBadge.issuer}</strong></span>
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                                    {/* Skill Radar */}
                                    <div className="metric-cell p-6 md:col-span-1">
                                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-orange-400 mb-4 flex items-center gap-2">
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
                                                    className="metric-cell p-4 text-center group/m hover:border-orange-500/20 transition-colors"
                                                >
                                                    <div className="flex justify-center mb-2 text-orange-500/50 group-hover/m:text-orange-400 transition-colors">
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
                                                            <span className="text-orange-400 font-mono font-bold">{s.level}%</span>
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
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                                Technical Verification Snippet
                                            </div>
                                            <div className="flex gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/30" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/30" />
                                                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40" />
                                            </div>
                                        </div>
                                        <div className="code-block relative group/code">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500/40 group-hover/code:bg-orange-500 transition-colors rounded-l-xl" />
                                            <pre className="pl-4">
                                                <code>{selectedBadge.code}</code>
                                            </pre>
                                        </div>
                                    </div>

                                    {/* Verification Sequence */}
                                    <div className="metric-cell p-5">
                                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-rose-400 mb-4 flex items-center gap-2">
                                            <Fingerprint size={10} /> Credential Verification
                                        </div>
                                        <VerificationSequence isActive={verifying} />

                                        <div className="mt-5 pt-4 border-t border-white/5">
                                            <div className="flex items-center gap-2 text-[9px] font-mono text-rose-400">
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
                                    className="mt-8 flex items-start gap-4 p-5 rounded-2xl bg-orange-500/5 border border-orange-500/15"
                                >
                                    <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400 shrink-0">
                                        <Shield size={16} />
                                    </div>
                                    <p className="text-[11px] text-slate-400 leading-relaxed uppercase tracking-tight font-bold">
                                        "Credential authenticated via secure handshake. This validates applied expertise in {selectedBadge.title.toLowerCase()} for industrial-grade systems."
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
