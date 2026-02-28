import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, Sparkles } from "lucide-react";
import { getResponse } from "./brain";

const AIBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [plainMode, setPlainMode] = useState(() => localStorage.getItem("gemini_plain_mode") === "true");
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Protocol initialized. I am Gemini, Pooja's technical assistant. How can I help you analyze the mission profile?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        localStorage.setItem("gemini_plain_mode", plainMode);
    }, [plainMode]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const cleanInput = input.trim().toLowerCase();

        // Handle Plain Mode Commands
        if (cleanInput === "plain mode on" || cleanInput === "no formatting" || cleanInput === "clean text") {
            setPlainMode(true);
            setMessages(prev => [...prev, { role: "user", content: input }, { role: "assistant", content: "Plain text mode enabled. Bold, italics, and emojis will be removed from future responses." }]);
            setInput("");
            return;
        }
        if (cleanInput === "plain mode off" || cleanInput === "standard mode") {
            setPlainMode(false);
            setMessages(prev => [...prev, { role: "user", content: input }, { role: "assistant", content: "Standard mode restored. Formatting and emojis enabled." }]);
            setInput("");
            return;
        }

        const userMessage = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        // Simulate AI Thinking
        setTimeout(() => {
            const aiResponse = { role: "assistant", content: getResponse(input, { plainMode }) };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <div className="fixed bottom-24 right-8 z-[9999]">
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="w-80 md:w-96 h-[500px] glass-card flex flex-col overflow-hidden border-indigo-500/30 bg-slate-950/90 shadow-2xl mb-4"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/5 bg-indigo-500/10 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                                    <Bot size={18} />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Gemini_System</div>
                                    <div className="text-[9px] text-slate-500 font-bold uppercase">Technical Assistant Online</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setPlainMode(!plainMode)}
                                    title={plainMode ? "Switch to Standard Mode" : "Switch to Plain Mode"}
                                    className={`p-2 rounded-lg transition-all ${plainMode ? "bg-indigo-500/20 text-indigo-400" : "text-slate-500 hover:text-white"}`}
                                >
                                    <Sparkles size={16} className={plainMode ? "opacity-30" : "opacity-100"} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/5 rounded-lg text-slate-500 hover:text-white transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Chat Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 font-sans scroll-smooth"
                        >
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                                        <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${msg.role === "user" ? "bg-slate-800 text-slate-400" : "bg-indigo-500/20 text-indigo-400"
                                            }`}>
                                            {msg.role === "user" ? <User size={14} /> : <Sparkles size={14} />}
                                        </div>
                                        <div className={`p-3 rounded-2xl text-[13px] leading-relaxed ${msg.role === "user"
                                            ? "bg-indigo-600 text-white rounded-tr-none"
                                            : "bg-white/5 text-slate-300 border border-white/5 rounded-tl-none"
                                            }`}>
                                            {msg.content}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Suggested Questions for Recruiters */}
                            {messages.length === 1 && !isTyping && (
                                <div className="flex flex-col gap-2 pt-2 ml-11">
                                    <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mb-1">Analyze_Profile_Data:</p>
                                    {[
                                        "Analyze ML Research & Projects",
                                        "View Technical Skill Stack",
                                        "Education & Certifications",
                                        "Hiring & Contact Info"
                                    ].map((q) => (
                                        <button
                                            key={q}
                                            onClick={() => { setInput(q); }}
                                            className="text-left px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[11px] text-slate-400 hover:text-white hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all w-fit"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                                            <Sparkles size={14} className="animate-pulse" />
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-2xl border border-white/5 flex gap-1 items-center">
                                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/5 bg-black/20">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask Gemini about ML missions..."
                                    className="w-full bg-slate-900/50 border border-white/5 rounded-xl py-3 pl-4 pr-12 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="absolute right-2 top-1.5 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:grayscale"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-2xl transition-all duration-500 ${isOpen
                    ? "bg-indigo-600 border-indigo-400/50 text-white shadow-indigo-500/40"
                    : "bg-slate-950 border-white/10 text-indigo-400 hover:text-white"
                    }`}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
};

export default AIBot;
