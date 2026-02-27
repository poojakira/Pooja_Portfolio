import React from "react";
import { BookOpen, Award, Globe, ExternalLink, ScrollText, TrendingUp, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function Publications() {
    const publications = [
        {
            title: "Personalized E-learning System Using RL Through Satellite",
            venue: "IEEE INDICON 2023",
            impact: "80% Dynamic Progression Accuracy",
            desc: "Engineered a custom Q-learning agent for low-bandwidth satellite environments, optimizing individualized learning trajectories via reinforcement learning.",
            tech: ["Q-Learning", "Satellite", "RL Agent"],
            icon: <BookOpen size={22} />
        },
        {
            title: "Smart Charge Pro: Empowering Future Mobility",
            venue: "IOSR JOURNAL 2023",
            impact: "Zero-Delay Isolation Logic",
            desc: "Designed hardware-software concurrent power management for multi-vehicle charging stations using high-speed NodeMCU IoT controllers.",
            tech: ["NodeMCU IoT", "Concurrent Power", "Hardware"],
            icon: <Award size={22} />
        }
    ];

    return (
        <section id="publications" className="space-y-8">
            {/* Header */}
            <div className="flex items-end justify-between px-2">
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="h-px w-10 bg-gradient-to-r from-indigo-500 to-transparent" />
                        <h2 className="section-label">Academic_Research</h2>
                    </div>
                    <h3 className="section-title">Research Publications</h3>
                </div>
                <div className="hidden md:flex items-center gap-2 text-[9px] text-slate-600 font-mono">
                    <Globe size={14} className="text-indigo-500/40 animate-spin-slow" />
                    <span>{publications.length} Published</span>
                </div>
            </div>

            {/* Cards */}
            <div className="grid gap-6">
                {publications.map((pub, i) => (
                    <motion.div
                        key={pub.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        className="glow-card group relative overflow-hidden"
                    >
                        {/* Top accent */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
                        <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

                        <div className="p-8">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Icon */}
                                <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/15 h-fit shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                                    {pub.icon}
                                </div>

                                <div className="flex-1 space-y-4">
                                    {/* Venue + Impact */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                                        <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                                            <Cpu size={10} className="text-indigo-400" />
                                            [{pub.venue}]
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                            <TrendingUp size={10} className="text-emerald-400" />
                                            <span className="text-[10px] font-black text-emerald-400 uppercase">
                                                {pub.impact}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-lg font-black text-white group-hover:text-indigo-300 transition-colors duration-500 tracking-tight uppercase leading-tight">
                                        {pub.title}
                                    </h4>

                                    {/* Description */}
                                    <p className="text-[13px] text-slate-400 leading-relaxed">
                                        {pub.desc}
                                    </p>

                                    {/* Tech + Actions */}
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4 border-t border-white/5">
                                        <div className="flex flex-wrap gap-2">
                                            {pub.tech.map(t => (
                                                <span key={t} className="pill-indigo">{t}</span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-indigo-400 transition-colors uppercase tracking-widest">
                                                <ScrollText size={12} />
                                                Full_Draft
                                            </button>
                                            <button className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 hover:text-indigo-400 transition-colors uppercase tracking-widest">
                                                <ExternalLink size={12} />
                                                Cite_Record
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
