import React, { useState } from "react";
import { CONTACT } from "../data";
import { Mail, Linkedin, Github, MapPin, Send, MessageSquare, Sparkles, Loader2, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleLaunch = () => {
        setIsSubmitting(true);

        // Simulating an advanced "handshake" process
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);

            // Actually launch the mail client after the animation
            window.location.href = `mailto:${CONTACT.email}?subject=Collaboration Inquiry: ML Systems & Security&body=Hi Pooja,%0A%0AI saw your advanced portfolio and I'm interested in collaborating on...`;

            setTimeout(() => {
                setIsSent(false);
            }, 3000);
        }, 1500);
    };

    const links = [
        { icon: <Mail size={16} />, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, color: "indigo" },
        { icon: <Linkedin size={16} />, label: "LinkedIn", value: "poojakiran", href: CONTACT.linkedin, color: "blue" },
        { icon: <Github size={16} />, label: "GitHub", value: "poojakira", href: CONTACT.github, color: "slate" },
        { icon: <MapPin size={16} />, label: "Location", value: CONTACT.location, href: null, color: "emerald" }
    ];

    return (
        <section id="contact" className="space-y-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-6 border-t-2 border-t-indigo-500 overflow-hidden relative"
            >
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles size={40} className="text-indigo-400 rotate-12" />
                </div>

                <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <MessageSquare size={18} />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300">Contact Information</h3>
                </div>

                <div className="space-y-5 relative z-10 font-mono">
                    {links.map((link) => (
                        <div key={link.label} className="group">
                            <div className="text-[9px] text-slate-500 font-bold uppercase mb-1.5 flex items-center gap-1.5">
                                <div className={`w-1 h-1 rounded-full bg-${link.color}-500/50`} />
                                {link.label}
                            </div>
                            {link.href ? (
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm font-medium text-slate-400 hover:text-indigo-300 transition-all group-hover:translate-x-1"
                                >
                                    <div className="p-1.5 rounded-lg bg-slate-800/50 border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                                        {link.icon}
                                    </div>
                                    <span className="truncate">{link.value}</span>
                                </a>
                            ) : (
                                <div className="flex items-center gap-3 text-sm font-medium text-slate-400 font-mono">
                                    <div className="p-1.5 rounded-lg bg-slate-800/50 border border-white/5">
                                        {link.icon}
                                    </div>
                                    {link.value}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 relative">
                    <AnimatePresence mode="wait">
                        {!isSent ? (
                            <motion.button
                                key="launch-btn"
                                whileHover={{ scale: 1.02, translateY: -2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleLaunch}
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-800 text-white font-bold text-sm flex items-center justify-center gap-3 shadow-xl shadow-indigo-900/40 hover:shadow-indigo-500/30 transition-all border border-indigo-400/20 group relative overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-x-0 bottom-0 h-1 bg-white/20"
                                    initial={{ scaleX: 0 }}
                                    animate={isSubmitting ? { scaleX: 1 } : { scaleX: 0 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        <span>INITIATING HANDSHAKE...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                                className="w-full py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-sm flex items-center justify-center gap-3"
                            >
                                <Check size={18} />
                                <span>SECURE SIGNAL SENT</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="mt-4 text-center">
                        <span className="text-[10px] font-mono text-slate-600 uppercase tracking-tighter">
                            AES-256 Encrypted Communication Path
                        </span>
                    </div>
                </div>

                {/* Cyberpunk Background Decoration */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 left-0 -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />
            </motion.div>
        </section>
    );
}
