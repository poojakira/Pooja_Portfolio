import React from "react";
import { SKILLS } from "../data";
import { motion } from "framer-motion";
import { BrainCircuit, Database, Layers } from "lucide-react";

export default function Skills() {
    const categories = [
        {
            name: "ML_Core",
            icon: <BrainCircuit size={16} />,
            skills: ["Python", "PyTorch", "TensorFlow"]
        },
        {
            name: "Deployment",
            icon: <Layers size={16} />,
            skills: ["FastAPI", "Docker", "React / Vite"]
        },
        {
            name: "Enterprise",
            icon: <Database size={16} />,
            skills: ["Security Auditing", "Full-Stack AI"]
        }
    ];

    return (
        <section id="skills" className="glass-card p-6 border-white/5 relative overflow-hidden bg-slate-900/40">
            <div className="flex flex-col gap-1 mb-8">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Expertise_Matrix</h2>
                <h3 className="text-xl font-bold tracking-tight text-white">Technical Proficiency</h3>
            </div>

            <div className="space-y-8">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
                            <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">{cat.icon}</span>
                            {cat.name}
                        </div>

                        <div className="space-y-3">
                            {cat.skills.map(skillName => {
                                const skill = SKILLS.find(s => s.name === skillName);
                                return (
                                    <div key={skillName} className="group">
                                        <div className="flex justify-between items-center mb-1.5 px-1">
                                            <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{skillName}</span>
                                            <span className="text-[10px] font-mono text-indigo-400/70">{skill?.level}%</span>
                                        </div>
                                        <div className="h-1 bg-slate-800/40 rounded-full overflow-hidden border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill?.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 group-hover:from-indigo-500 group-hover:to-indigo-300 transition-all"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-[60px] rounded-full pointer-events-none" />
        </section>
    );
}
