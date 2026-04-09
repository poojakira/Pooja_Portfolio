import React from "react";
import { CERTIFICATIONS } from "../data";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";

export default function Certifications() {
    return (
        <section id="certifications" className="glow-card p-8 relative overflow-hidden group">
            {/* Background */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-rose-500/5 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

            <div className="flex items-center justify-between mb-6 relative">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                        <Award size={18} />
                    </div>
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-widest text-white">Credentials</h3>
                        <p className="text-[8px] text-slate-500 uppercase tracking-[0.3em] mt-0.5">
                            {CERTIFICATIONS.length} Verified
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20">
                    <ShieldCheck size={10} className="text-rose-400" />
                    <span className="text-[8px] font-black text-rose-400 uppercase tracking-wider">Active</span>
                </div>
            </div>

            <div className="space-y-3 relative">
                {CERTIFICATIONS.map((cert, i) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.4 }}
                        className="relative p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/25 hover:bg-white/[0.04] transition-all group/cert"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[9px] font-mono font-black text-orange-400 uppercase tracking-wider">
                                        {cert.issuer}
                                    </span>
                                    <span className="text-[8px] font-mono text-slate-600">•</span>
                                    <span className="text-[9px] font-mono text-slate-600">
                                        {cert.date}
                                    </span>
                                </div>
                                <h4 className="text-[13px] font-bold text-slate-200 group-hover/cert:text-white transition-colors leading-tight">
                                    {cert.name}
                                </h4>
                            </div>
                            <div className="shrink-0 mt-1">
                                <CheckCircle2 size={14} className="text-rose-500/40 group-hover/cert:text-rose-400 transition-colors" />
                            </div>
                        </div>

                        {/* Hover glow */}
                        <div className={`absolute inset-0 bg-${cert.color}-500/3 opacity-0 group-hover/cert:opacity-100 transition-opacity rounded-xl pointer-events-none`} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
