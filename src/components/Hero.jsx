import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Satellite, Shield, Zap, Database, User, Target, Download, Sparkles, ArrowRight, Activity, Cpu, MemoryStick } from "lucide-react";
import profilePic from "../assets/profile.jpg";
import resumePDF from "../assets/Pooja_Kiran_MLOps_Engineer.pdf";

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 600], [0, 80]);
    const y2 = useTransform(scrollY, [0, 600], [0, -80]);
    const [typeText, setTypeText] = useState("");
    const fullText = "ML / MLOps Engineer";

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setTypeText(fullText.slice(0, i + 1));
            i++;
            if (i >= fullText.length) clearInterval(timer);
        }, 60);
        return () => clearInterval(timer);
    }, []);

    const stats = [
        {
            icon: <Satellite size={20} />,
            label: "DOMAIN",
            value: "Aerospace & Telemetry",
            color: "orange",
            detail: "Satellite Health • CubeSat Monitoring • Telemetry Pipelines"
        },
        {
            icon: <Cpu size={20} />,
            label: "MLOPS",
            value: "Production ML Systems",
            color: "rose",
            detail: "Docker • CI/CD • AWS • Firebase • Reproducible Deployment"
        },
        {
            icon: <Database size={20} />,
            label: "SPECIALIZATION",
            value: "Predictive Maintenance",
            color: "amber",
            detail: "Time-Series • Anomaly Detection • GPU Optimization"
        }
    ];

    return (
        <section className="relative glow-card p-10 md:p-16 overflow-hidden min-h-[600px] flex flex-col md:flex-row items-center gap-12">
            {/* Grid pattern background */}
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

            {/* Ambient glow blobs */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/8 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none animate-float-slow" />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

            {/* HUD Element */}
            <div className="absolute top-6 left-8 flex items-center gap-3 opacity-40">
                <div className="w-20 h-0.5 bg-slate-800 overflow-hidden rounded-full">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                    />
                </div>
                <span className="text-[8px] font-mono text-slate-600 uppercase tracking-[0.3em]">
                    SYNC_ACTIVE
                </span>
            </div>

            {/* Content Body */}
            <motion.div className="relative z-10 flex-1" style={{ y: y1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                >
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-black mb-10 shadow-[0_0_30px_rgba(79,70,229,0.1)] uppercase tracking-[0.2em]">
                        <div className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                        </div>
                        IEEE Published · Production ML Systems
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.88]">
                        <span className="gradient-text block mb-2">
                            Pioneering
                        </span>
                        <span className="relative">
                            <span className="gradient-text-orange">
                                {typeText}
                            </span>
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.6, repeat: Infinity }}
                                className="text-orange-400"
                            >
                                |
                            </motion.span>
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, delay: 1.5 }}
                                className="absolute -bottom-2 left-0 h-1 bg-orange-500/30 blur-sm rounded-full"
                            />
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-medium">
                        Building <span className="text-white font-bold">production-minded ML systems</span> for
                        <span className="text-orange-300"> telemetry-heavy</span>, <span className="text-rose-400/80">safety-conscious</span> environments.
                        Specializing in anomaly detection, forecasting, and GPU-optimized ML infrastructure.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mb-14">
                        <motion.a
                            href={resumePDF}
                            download="Pooja_Kiran_MLOps_Engineer.pdf"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-primary"
                        >
                            <Download size={16} />
                            DOWNLOAD RESUME
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-ghost"
                        >
                            <Target size={16} />
                            HIRE ME
                            <ArrowRight size={14} className="opacity-50" />
                        </motion.a>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 + (i * 0.12), duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                className={`group relative p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-${stat.color}-500/25 hover:bg-white/[0.04] transition-all duration-500 cursor-default overflow-hidden`}
                            >
                                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${stat.color}-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                                <div className="flex items-center gap-4 mb-3">
                                    <div className={`p-2.5 rounded-xl bg-${stat.color}-500/10 text-${stat.color}-400 border border-${stat.color}-500/15 group-hover:scale-110 transition-transform duration-500`}>
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-[8px] font-black uppercase text-slate-600 tracking-[0.3em]">{stat.label}</div>
                                        <div className="text-sm font-bold text-white">{stat.value}</div>
                                    </div>
                                </div>

                                <div className="text-[10px] text-slate-500 font-mono leading-relaxed pl-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {stat.detail}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Profile Frame */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="relative shrink-0 hidden lg:block"
                style={{ y: y2 }}
            >
                <div className="relative w-80 h-[450px] group">
                    {/* Orbital decorations */}
                    <div className="absolute -top-8 -right-8 w-28 h-28 border border-orange-500/15 rounded-full animate-spin-slow" />
                    <div className="absolute -bottom-10 -left-10 w-36 h-36 border border-rose-500/8 rounded-full animate-reverse-spin" />
                    <div className="absolute top-1/2 -right-4 w-8 h-8 border border-orange-500/10 rounded-full animate-float" />

                    {/* Glow frame */}
                    <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.12)] overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[3000ms]" />
                    </div>

                    {/* Photo container */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-white/5 p-4 flex flex-col">
                        <div className="relative flex-1 rounded-2xl overflow-hidden bg-black mb-4 biometric-scanner">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/40 via-transparent to-orange-500/5 z-10" />
                            <img
                                src={profilePic}
                                alt="Pooja Kiran Bharadwaj"
                                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden absolute inset-0 flex items-center justify-center bg-slate-900">
                                <User size={120} className="text-slate-800" />
                            </div>
                        </div>

                        <div className="space-y-3 font-mono">
                            <div className="flex justify-between items-center text-[9px]">
                                <span className="text-orange-400 font-black tracking-wider">DNA_AUTH</span>
                                <span className="text-rose-400 font-black tracking-wider flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                                    VERIFIED
                                </span>
                            </div>
                            <div className="progress-bar">
                                <motion.div
                                    animate={{ width: ["0%", "100%", "94%"] }}
                                    transition={{ duration: 3, times: [0, 0.7, 1] }}
                                    className="progress-fill"
                                />
                            </div>
                            <div className="text-[9px] text-slate-600 text-center tracking-[0.3em] font-black mt-2">
                                IDENT_V32.09
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
