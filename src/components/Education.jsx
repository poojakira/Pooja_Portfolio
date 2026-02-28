import React from "react";
import { GraduationCap, ShieldCheck, Library, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { EDUCATION } from "../data";

export default function Education() {
    const degrees = EDUCATION.map((edu, i) => ({
        ...edu,
        status: i === 0 ? "ENROLLED" : "GRADUATED",
        statusColor: i === 0 ? "indigo" : "emerald",
        icon: i === 0 ? <GraduationCap size={26} /> : <Library size={26} />,
        details: i === 0
            ? "Core focus: Deep Learning for Security, AI-Driven Threat Detection, Network Defense, Risk Governance, and Enterprise Compliance."
            : "Specialization in Intelligent Systems, Cloud Computing, and IoT. Published 2 papers (IEEE INDICON + IOSR Journal).",
        highlights: i === 0
            ? ["AI Security Research", "SDLC Mentorship", "GPA: 3.85"]
            : ["IEEE Published", "Top of Cohort", "2 Research Papers"]
    }));

    const certifications = [
        { name: "Transformer Models & BERT", issuer: "Google Cloud", color: "blue" },
        { name: "MLOps for Generative AI", issuer: "Google Cloud", color: "indigo" },
        { name: "AWS Cloud Architecting", issuer: "Amazon Web Services", color: "amber" },
        { name: "AWS Cloud Security", issuer: "Amazon Web Services", color: "amber" },
        { name: "Honeywell Tech Innovation Lab", issuer: "Honeywell", color: "emerald" }
    ];

    return (
        <section id="education" className="space-y-8">
            <div className="flex items-end justify-between px-2">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="h-px w-10 bg-gradient-to-r from-indigo-500 to-transparent" />
                        <h2 className="section-label">Academic_Roots</h2>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight gradient-text">Education & Synthesis</h3>
                </div>
            </div>

            <div className="grid gap-6">
                {degrees.map((edu, i) => (
                    <motion.div
                        key={edu.school}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="glow-card group relative overflow-hidden"
                    >
                        {/* Top accent line */}
                        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${edu.statusColor}-500/60 to-transparent`} />

                        <div className="p-8 flex flex-col md:flex-row gap-6">
                            {/* Icon */}
                            <div className={`p-5 rounded-2xl bg-${edu.statusColor}-500/10 text-${edu.statusColor}-400 border border-${edu.statusColor}-500/15 h-fit shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700`}>
                                {edu.icon}
                            </div>

                            <div className="flex-1 space-y-4">
                                {/* Top row */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                                    <div>
                                        <h4 className="text-xl font-black text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                                            {edu.school}
                                        </h4>
                                        <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                                            <MapPin size={10} className="text-slate-600" />
                                            {edu.location}
                                        </div>
                                    </div>
                                    <div className="flex gap-2 shrink-0">
                                        <span className="px-3 py-1 rounded-lg bg-slate-800/60 border border-white/5 text-[10px] font-mono text-slate-400">
                                            {edu.period}
                                        </span>
                                        <span className={`px-3 py-1 rounded-lg bg-${edu.statusColor}-500/15 border border-${edu.statusColor}-500/25 text-[10px] font-black text-${edu.statusColor}-400 uppercase tracking-wider`}>
                                            {edu.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Degree */}
                                <p className="text-sm font-bold text-indigo-400/90 uppercase tracking-wide">
                                    {edu.degree}
                                </p>

                                {/* Details */}
                                <p className="text-[12px] text-slate-400 leading-relaxed">
                                    {edu.details}
                                </p>

                                {/* Highlight badges */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {edu.highlights.map(h => (
                                        <span key={h} className="pill-indigo">
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Certifications Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glow-card p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            <ShieldCheck size={18} />
                        </div>
                        <div>
                            <h4 className="text-sm font-black uppercase tracking-widest text-white">Credentials & Licensing</h4>
                            <p className="text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">{certifications.length} Active Certifications</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all group/cert cursor-default"
                            >
                                <div className={`w-2 h-2 rounded-full bg-${cert.color}-500 shadow-[0_0_8px_rgba(99,102,241,0.3)] group-hover/cert:shadow-[0_0_12px_rgba(99,102,241,0.6)] transition-shadow`} />
                                <div className="flex-1 min-w-0">
                                    <span className="text-xs font-bold text-slate-300 group-hover/cert:text-white transition-colors block truncate">
                                        {cert.name}
                                    </span>
                                    <span className="text-[9px] text-slate-600">{cert.issuer}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
