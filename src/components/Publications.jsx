import React from "react";
import { BookOpen, Award, Globe, ExternalLink, ScrollText } from "lucide-react";
import { motion } from "framer-motion";

export default function Publications() {
    const publications = [
        {
            title: "Personalized E-learning System Using RL Through Satellite",
            venue: "IEEE INDICON 2023",
            impact: "80% Dynamic Progression Accuracy",
            desc: "Engineered a custom Q-learning agent for low-bandwidth satellite environments, optimizing individualized learning trajectories via reinforcement learning.",
            color: "indigo",
            icon: <BookOpen size={20} />
        },
        {
            title: "Smart Charge Pro: Empowering Future Mobility",
            venue: "IOSR JOURNAL 2023",
            impact: "Zero-Delay Isolation Logic",
            desc: "Designed hardware-software concurrent power management for multi-vehicle charging stations using high-speed IoT controllers.",
            color: "emerald",
            icon: <Award size={20} />
        }
    ];

    return (
        <section id="publications" className="space-y-8">
            <div className="flex items-center justify-between px-2">
                <div className="space-y-1">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Academic_Research</h2>
                    <h3 className="text-2xl font-bold tracking-tight">Research Publications</h3>
                </div>
                <Globe size={18} className="text-slate-800 animate-spin-slow" />
            </div>

            <div className="grid gap-6">
                {publications.map((pub, i) => (
                    <motion.div
                        key={pub.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`glass-card group relative p-6 border-l-4 border-l-${pub.color}-500 hover:bg-slate-900/60 transition-all`}
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className={`p-4 rounded-2xl bg-${pub.color}-500/10 text-${pub.color}-400 h-fit group-hover:scale-110 transition-transform`}>
                                {pub.icon}
                            </div>

                            <div className="flex-1 space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                                        [{pub.venue}]
                                    </div>
                                    <div className={`text-[10px] font-bold px-2 py-0.5 rounded bg-${pub.color}-500/10 text-${pub.color}-400 border border-${pub.color}-500/20`}>
                                        {pub.impact}
                                    </div>
                                </div>

                                <h4 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors uppercase tracking-tight">
                                    {pub.title}
                                </h4>

                                <p className="text-sm text-slate-400 leading-relaxed font-mono">
                                    &gt; system_analysis: {pub.desc}
                                </p>

                                <div className="flex items-center gap-4 pt-2">
                                    <button className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-indigo-400 transition-colors uppercase tracking-widest">
                                        <ScrollText size={14} />
                                        Full_Draft
                                    </button>
                                    <button className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-indigo-400 transition-colors uppercase tracking-widest">
                                        <ExternalLink size={14} />
                                        Cite_Record
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Background Data Stream Effect */}
                        <div className="absolute top-0 right-0 p-2 opacity-[0.02] font-mono text-[80px] pointer-events-none select-none overflow-hidden h-full">
                            PAPERS
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
