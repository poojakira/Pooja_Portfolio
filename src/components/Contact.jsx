import React, { useState } from "react";
import { CONTACT } from "../data";
import { Mail, Linkedin, Github, MapPin, Send, MessageSquare, Sparkles, Loader2, Check, ArrowUpRight, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleLaunch = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            window.location.href = `mailto:${CONTACT.email}?subject=Collaboration Inquiry: ML Systems & Security&body=Hi Pooja,%0A%0AI saw your advanced portfolio and I'm interested in collaborating on...`;
            setTimeout(() => setIsSent(false), 3000);
        }, 1500);
    };

    const links = [
        { icon: <Mail size={18} />, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, accent: "bg-orange-500", borderAccent: "border-orange-500/30" },
        { icon: <Linkedin size={18} />, label: "LinkedIn", value: "poojakiran", href: CONTACT.linkedin, accent: "bg-blue-500", borderAccent: "border-blue-500/30" },
        { icon: <Github size={18} />, label: "GitHub", value: "poojakira", href: CONTACT.github, accent: "bg-slate-500", borderAccent: "border-slate-500/30" },
        { icon: <MapPin size={18} />, label: "Location", value: CONTACT.location, href: null, accent: "bg-rose-500", borderAccent: "border-rose-500/30" }
    ];

    return (
        <section id="contact" className="space-y-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glow-card relative overflow-hidden"
            >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-rose-500/5 rounded-full blur-[60px] pointer-events-none" />

                <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            <MessageSquare size={20} />
                        </div>
                        <div>
                            <h3 className="text-lg font-black uppercase tracking-tight text-white">Contact Intel</h3>
                            <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Secure Channel Available</p>
                        </div>
                    </div>

                    {/* Contact Links */}
                    <div className="space-y-3 relative z-10">
                        {links.map((link, i) => (
                            <motion.div
                                key={link.label}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                            >
                                {link.href ? (
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:${link.borderAccent} hover:bg-white/[0.05] transition-all group`}
                                    >
                                        <div className={`p-2.5 rounded-xl bg-white/5 text-slate-400 group-hover:text-white border border-white/5 group-hover:border-orange-500/20 transition-all`}>
                                            {link.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[8px] font-black text-slate-600 uppercase tracking-[0.3em] mb-0.5">{link.label}</div>
                                            <div className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors truncate">{link.value}</div>
                                        </div>
                                        <ArrowUpRight size={14} className="text-slate-700 group-hover:text-orange-400 transition-colors" />
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                                        <div className="p-2.5 rounded-xl bg-white/5 text-slate-400 border border-white/5">
                                            {link.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-[8px] font-black text-slate-600 uppercase tracking-[0.3em] mb-0.5">{link.label}</div>
                                            <div className="text-sm font-bold text-slate-300">{link.value}</div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 pt-6 border-t border-white/5 relative">
                        <AnimatePresence mode="wait">
                            {!isSent ? (
                                <motion.button
                                    key="launch-btn"
                                    whileHover={{ scale: 1.02, translateY: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleLaunch}
                                    disabled={isSubmitting}
                                    className="btn-primary w-full py-4 justify-center relative overflow-hidden group"
                                >
                                    <motion.div
                                        className="absolute inset-x-0 bottom-0 h-0.5 bg-white/20"
                                        initial={{ scaleX: 0 }}
                                        animate={isSubmitting ? { scaleX: 1 } : { scaleX: 0 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                    />
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            <span>INITIATING HANDSHAKE...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            <span>LAUNCH COLLABORATION</span>
                                        </>
                                    )}
                                </motion.button>
                            ) : (
                                <motion.div
                                    key="sent-msg"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="w-full py-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold text-sm flex items-center justify-center gap-3"
                                >
                                    <Check size={16} />
                                    <span className="uppercase tracking-widest text-[11px] font-black">Secure Signal Sent</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="mt-4 flex items-center justify-center gap-1.5 text-[9px] font-mono text-slate-600 uppercase tracking-wider">
                            <Lock size={8} />
                            AES-256 Encrypted Communication Path
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
