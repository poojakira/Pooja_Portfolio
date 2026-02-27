import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";

const BADGES = [
    {
        title: "Transformer Models and BERT Model",
        date: "Earned Feb 26, 2026 EST",
        issuer: "Google Cloud",
        color: "blue"
    },
    {
        title: "Machine Learning Operations (MLOps) for Generative AI",
        date: "Earned Feb 26, 2026 EST",
        issuer: "Google Cloud",
        color: "indigo"
    },
    {
        title: "Professional Machine Learning Engineer Study Guide",
        date: "Earned Feb 26, 2026 EST",
        issuer: "Google Cloud",
        color: "cyan"
    }
];

export default function SkillBadges() {
    return (
        <section id="badges" className="py-20 border-t border-white/5">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-1px w-12 bg-indigo-500/50" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                    Certified_Credentials
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BADGES.map((badge, i) => (
                    <motion.div
                        key={badge.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center group"
                    >
                        {/* Badge Card */}
                        <div className="relative w-full aspect-square max-w-[240px] bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                            <div className="absolute inset-0 border-[8px] border-slate-50 rounded-lg pointer-events-none" />

                            {/* Google Cloud Logo Mockup */}
                            <div className="flex items-center gap-1 mb-4">
                                <div className="flex gap-0.5">
                                    <div className="w-1.5 h-3 bg-[#4285F4] rounded-full" />
                                    <div className="w-1.5 h-3 bg-[#EA4335] rounded-full" />
                                    <div className="w-1.5 h-3 bg-[#FBBC05] rounded-full" />
                                    <div className="w-1.5 h-3 bg-[#34A853] rounded-full" />
                                </div>
                                <span className="text-[10px] font-bold text-slate-600">Google Cloud</span>
                            </div>

                            <h3 className="text-sm font-bold text-slate-800 leading-tight mb-4 px-2">
                                {badge.title}
                            </h3>

                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-[1px] bg-slate-200" />
                                <CheckCircle2 className="text-[#4285F4]" size={20} fill="#4285F4" stroke="white" />
                                <div className="w-8 h-[1px] bg-slate-200" />
                            </div>

                            <span className="text-[7px] font-black uppercase tracking-widest text-slate-400">
                                Completion Badge
                            </span>
                        </div>

                        {/* Labels below */}
                        <div className="mt-6 text-center">
                            <h4 className="text-xs font-bold text-white mb-1 px-4">{badge.title}</h4>
                            <p className="text-[9px] text-slate-500 mb-4">{badge.date}</p>

                            <button className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-[10px] font-bold hover:bg-white/10 transition-all">
                                Learn more
                                <ExternalLink size={10} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Background Decorative HUD */}
            <div className="mt-20 flex justify-center opacity-20">
                <div className="text-[8px] font-mono text-indigo-400 animate-pulse">
                    CREDENTIAL_VERIFICATION_SERVICE::ACTIVE // NODE_ID: PKB_CERT_03
                </div>
            </div>
        </section>
    );
}
