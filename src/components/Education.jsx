import React from "react";
import { GraduationCap, ShieldCheck, Award, Library, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
    const degrees = [
        {
            school: "Arizona State University",
            degree: "M.S. in Information Technology Security",
            period: "2024 – 2026",
            status: "ENROLLED",
            color: "indigo",
            icon: <GraduationCap size={24} />,
            details: "Core focus: Deep Learning for Security, Network Defense, and Risk Governance."
        },
        {
            school: "M. S. Ramaiah University",
            degree: "B.Tech in Computer Science & Engineering",
            period: "2019 – 2023",
            status: "GRADUATED",
            color: "emerald",
            icon: <Library size={24} />,
            details: "Specialization in Intelligent Systems and Cloud Computing."
        }
    ];

    const certifications = [
        "AWS Academy Cloud Architecting",
        "AWS Cloud Security Foundations",
        "Honeywell Tech Innovation Lab",
        "DevSecOps Implementation Specialist"
    ];

    return (
        <section id="education" className="space-y-8">
            <div className="flex items-center justify-between px-2">
                <div className="space-y-1">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Academic_Roots</h2>
                    <h3 className="text-2xl font-bold tracking-tight">Education & Synthesis</h3>
                </div>
                <Target size={18} className="text-slate-800" />
            </div>

            <div className="grid gap-6">
                {degrees.map((edu, i) => (
                    <motion.div
                        key={edu.school}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card group p-6 flex flex-col md:flex-row gap-6 hover:bg-slate-900/60 transition-all border-l-4 border-l-slate-800 hover:border-l-indigo-500"
                    >
                        <div className={`p-4 rounded-2xl bg-${edu.color}-500/10 text-${edu.color}-400 h-fit group-hover:scale-110 transition-transform`}>
                            {edu.icon}
                        </div>

                        <div className="flex-1 space-y-3">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                <h4 className="text-xl font-bold text-slate-100">{edu.school}</h4>
                                <div className="flex gap-2">
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-white/5 uppercase">
                                        {edu.period}
                                    </span>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded bg-${edu.color}-500/10 text-${edu.color}-400 border border-${edu.color}-500/20`}>
                                        {edu.status}
                                    </span>
                                </div>
                            </div>

                            <p className="text-sm font-medium text-indigo-400/80 uppercase tracking-wide">
                                {edu.degree}
                            </p>

                            <p className="text-[11px] text-slate-500 font-mono leading-relaxed max-w-xl">
                                &gt; key_research: {edu.details}
                            </p>
                        </div>
                    </motion.div>
                ))}

                {/* Certification Grid */}
                <div className="glass-card p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <ShieldCheck size={18} className="text-amber-500" />
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-300">Licensing & Credentials</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {certifications.map((cert) => (
                            <div key={cert} className="flex items-center gap-3 group">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:shadow-[0_0_8px_rgba(245,158,11,0.6)] transition-all" />
                                <span className="text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-default">
                                    {cert}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
