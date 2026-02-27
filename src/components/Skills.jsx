import React from "react";
import { SKILLS } from "../data";
import { motion } from "framer-motion";
import { BrainCircuit, Database, Layers, Sparkles } from "lucide-react";

export default function Skills() {
    const categories = [
        {
            name: "ML_Core",
            icon: <BrainCircuit size={16} />,
            skills: ["Python", "PyTorch", "TensorFlow"],
            color: "indigo"
        },
        {
            name: "Deployment",
            icon: <Layers size={16} />,
            skills: ["FastAPI", "Docker", "React / Vite"],
            color: "emerald"
        },
        {
            name: "Enterprise",
            icon: <Database size={16} />,
            skills: ["Security Auditing", "Full-Stack AI"],
            color: "amber"
        }
    ];

    return (
        <section id="skills" className="glow-card p-8 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/5 blur-[60px] rounded-full pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <div className="h-px w-6 bg-gradient-to-r from-indigo-500 to-transparent" />
                        <h2 className="section-label">Expertise_Matrix</h2>
                    </div>
                    <h3 className="text-xl font-black tracking-tight gradient-text">Technical Proficiency</h3>
                </div>
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Sparkles size={16} className="animate-pulse" />
                </div>
            </div>

            <div className="space-y-8">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.name}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="space-y-4"
                    >
                        {/* Category label */}
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-${cat.color}-500/10 text-${cat.color}-400 border border-${cat.color}-500/15`}>
                                {cat.icon}
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                {cat.name}
                            </span>
                        </div>

                        {/* Skill bars */}
                        <div className="space-y-4 pl-2">
                            {cat.skills.map(skillName => {
                                const skill = SKILLS.find(s => s.name === skillName);
                                const level = skill?.level || 0;
                                return (
                                    <div key={skillName} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                                                {skillName}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-mono font-bold text-indigo-400/70">
                                                    {level}%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="progress-bar">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                                                className="progress-fill"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
