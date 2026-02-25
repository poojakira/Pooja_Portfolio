import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Satellite, Shield, Zap, Database, User, Target, Share2, Download } from "lucide-react";
import profilePic from "../assets/profile.jpg";
import resumePDF from "../assets/Pooja_Kiran_RESUME.pdf";

export default function Hero() {
    return (
        <section className="relative glass-card p-10 md:p-16 overflow-hidden min-h-[600px] flex flex-col md:flex-row items-center gap-12">
            {/* HUD Elements */}
            <div className="absolute top-6 left-6 flex items-center gap-4 opacity-40">
                <div className="flex flex-col gap-1">
                    <div className="w-16 h-1 bg-slate-800 overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="w-full h-full bg-indigo-500"
                        />
                    </div>
                </div>
                <div className="text-[9px] font-mono text-slate-500 uppercase tracking-tighter">
                    BUFFER_SYNC_INIT
                </div>
            </div>

            {/* Content Body */}
            <div className="relative z-10 flex-1">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-10 shadow-[0_0_20px_rgba(79,70,229,0.1)]">
                        <div className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                        </div>
                        <span className="tracking-widest uppercase">System Core: Optimized</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Pioneering <br />
                        </span>
                        <span className="relative text-indigo-400">
                            Machine Learning Engineer
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="absolute -bottom-2 left-0 h-1 bg-indigo-500/40 blur-sm rounded-full"
                            />
                        </span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-medium">
                        Architecting high-performance <span className="text-slate-100 italic">ML solutions</span> for
                        <span className="text-indigo-300">intelligence-driven</span> platforms and security-first cloud infrastructures.
                        Merging applied machine learning with DevSecOps at scale.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <motion.a
                            href={resumePDF}
                            download="Pooja_Kiran_Resume.pdf"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow-xl shadow-indigo-950/40 hover:bg-indigo-500 transition-all border border-indigo-400/20"
                        >
                            <Download size={18} />
                            DOWNLOAD RESUME
                        </motion.a>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-slate-300 font-bold text-sm border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <Target size={18} />
                            HIRE ME
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                icon: <Satellite size={22} />,
                                label: "Domain",
                                value: "Aerospace",
                                color: "indigo",
                                specs: "PINNs • GANs • Trajectory Opt."
                            },
                            {
                                icon: <Shield size={22} />,
                                label: "Priority",
                                value: "Cloud_Security",
                                color: "emerald",
                                specs: "Auth_V3 • DevSecOps • AES-256"
                            },
                            {
                                icon: <Database size={22} />,
                                label: "Resource",
                                value: "GPU_Clusters",
                                color: "amber",
                                specs: "CUDA • H100_Dist • Parallel.X"
                            }
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + (i * 0.1) }}
                                className="glass-card p-6 group flex flex-col items-start gap-4 hover:bg-white/5 transition-all relative overflow-hidden min-w-[200px]"
                            >
                                <div className="flex items-center gap-4 w-full">
                                    <div className={`p-3 rounded-2xl bg-${stat.color}-500/10 text-${stat.color}-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-black uppercase text-slate-500 tracking-[0.2em]">{stat.label}</div>
                                        <div className="text-sm font-bold text-slate-200">{stat.value}</div>
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileHover={{ opacity: 1, x: 0 }}
                                    className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center p-4 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-500"
                                >
                                    <div className="text-[8px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-2">Technical_Specs</div>
                                    <div className="text-[10px] font-bold text-white text-center leading-tight">{stat.specs}</div>
                                    <div className="mt-3 w-12 h-0.5 bg-indigo-500/50 rounded-full" />
                                </motion.div>

                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Advanced Profile Frame */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative shrink-0 hidden lg:block"
            >
                <div className="relative w-80 h-[450px] group">
                    <div className="absolute -top-6 -right-6 w-24 h-24 border border-indigo-500/20 rounded-full animate-spin-slow" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-emerald-500/10 rounded-full animate-reverse-spin" />

                    <div className="absolute inset-0 z-10 pointer-events-none rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(79,70,229,0.15)] overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent -translate-x-full group-hover:animate-[scan_3s_linear_infinite]" />
                    </div>

                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-white/5 p-4 flex flex-col">
                        <div className="relative flex-1 rounded-2xl overflow-hidden bg-black mb-4">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/40 to-transparent z-10" />
                            <img
                                src={profilePic}
                                alt="Pooja Kiran Bharadwaj"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-110"
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
                                <span className="text-indigo-400 font-bold">DNA_AUTH</span>
                                <span className="text-emerald-400">VERIFIED</span>
                            </div>
                            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ width: ["0%", "100%", "92%"] }}
                                    transition={{ duration: 3, times: [0, 0.7, 1] }}
                                    className="h-full bg-indigo-500/50"
                                />
                            </div>
                            <div className="text-[10px] text-slate-500 text-center tracking-[0.2em] font-black mt-2">
                                IDENT_V32.09
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Corner Decorative HUD */}
            <div className="absolute border border-indigo-500/20 h-20 w-20 -top-10 -left-10 rounded-full" />
        </section>
    );
}
