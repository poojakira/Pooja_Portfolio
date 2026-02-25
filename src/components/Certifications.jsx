import React from "react";
import { CERTIFICATIONS } from "../data";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Certifications() {
    return (
        <section id="certifications" className="glass-card p-6 border-white/5 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <Award size={18} />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-200">Credential_Validation</h3>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-indigo-400" />
                    <span className="text-[9px] font-mono text-slate-500 uppercase">Verified_Link</span>
                </div>
            </div>

            <div className="space-y-4">
                {CERTIFICATIONS.map((cert, i) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative p-4 rounded-xl bg-black/40 border border-white/5 hover:border-indigo-500/30 transition-all group/cert hover:translate-x-1"
                    >
                        <div className="flex flex-col gap-1">
                            <div className="flex justify-between items-start">
                                <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-tight">
                                    {cert.issuer}
                                </span>
                                <span className="text-[9px] font-mono text-slate-600">
                                    {cert.date}
                                </span>
                            </div>
                            <h4 className="text-sm font-bold text-slate-200 group-hover/cert:text-white transition-colors">
                                {cert.name}
                            </h4>
                            <div className="mt-2 flex items-center gap-2">
                                <CheckCircle2 size={12} className="text-emerald-500/60" />
                                <span className="text-[10px] font-mono text-slate-500">ID: {cert.id}</span>
                            </div>
                        </div>

                        {/* Interactive glow effect */}
                        <div className={`absolute inset-0 bg-${cert.color}-500/5 opacity-0 group-hover/cert:opacity-100 transition-opacity rounded-xl pointer-events-none`} />
                    </motion.div>
                ))}
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:10px_10px] pointer-events-none" />
        </section>
    );
}
