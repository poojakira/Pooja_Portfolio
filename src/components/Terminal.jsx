import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, X, ChevronRight, Download, Activity, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COMMANDS = {
    help: "Available: clear, help, download, status, whoami, version",
    whoami: "Pooja Kiran Bharadwaj | Machine Learning Engineer | System Architect",
    version: "PKB_OS v2026.4.2 [Production Build]",
    status: "SYSTEM: ONLINE | ENCRYPTION: ACTIVE | MISSION: READY",
    download: "Initializing secure downlink... [Redirecting to resume_source]"
};

export default function Terminal() {
    const [history, setHistory] = useState([
        { type: "sys", text: "PKB_OS(tm) Kernel Boot Successful." },
        { type: "sys", text: "Type 'help' for available command protocols." }
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e) => {
        if (e.key !== 'Enter') return;
        const cmd = input.toLowerCase().trim();
        const newHistory = [...history, { type: "user", text: `> ${cmd}` }];

        if (cmd === 'clear') {
            setHistory([]);
        } else if (COMMANDS[cmd]) {
            newHistory.push({ type: "sys", text: COMMANDS[cmd] });
            setHistory(newHistory);
        } else if (cmd !== "") {
            newHistory.push({ type: "error", text: `ProtocolError: Command '${cmd}' not recognized.` });
            setHistory(newHistory);
        }

        setInput("");

        if (cmd === 'download') {
            setTimeout(() => {
                window.open("#", "_blank"); // Fallback or direct link
            }, 1000);
        }
    };

    return (
        <section className="glass-card flex flex-col h-[400px] border-white/5 bg-slate-950/80 font-mono relative overflow-hidden group">
            {/* Terminal Header */}
            <div className="p-3 border-b border-white/5 bg-white/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <TerminalIcon size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">System_Terminal_v4.2</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-800" />
                    <div className="w-2 h-2 rounded-full bg-slate-800" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                </div>
            </div>

            {/* Terminal Output */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar"
            >
                {history.map((line, i) => (
                    <div
                        key={i}
                        className={`text-[11px] leading-relaxed ${line.type === 'user' ? 'text-indigo-400' :
                                line.type === 'error' ? 'text-rose-400' : 'text-emerald-500/80'
                            }`}
                    >
                        {line.text}
                    </div>
                ))}
                <div className="flex items-center gap-2 text-[11px] text-indigo-400 pt-1">
                    <ChevronRight size={14} />
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleCommand}
                        autoFocus
                        className="flex-1 bg-transparent border-none outline-none text-indigo-400 placeholder:text-indigo-900/50"
                        placeholder="Await command..."
                    />
                </div>
            </div>

            {/* Bottom Telemetry */}
            <div className="p-2 border-t border-white/5 bg-black/40 flex justify-between items-center px-4">
                <div className="flex items-center gap-4 text-[8px] text-slate-600 uppercase tracking-tighter">
                    <div className="flex items-center gap-1">
                        <Activity size={10} className="text-indigo-500/50" /> CPU: 0.12%
                    </div>
                    <div className="flex items-center gap-1">
                        <ShieldCheck size={10} className="text-emerald-500/50" /> SSH: SECURE
                    </div>
                </div>
                <span className="text-[8px] font-bold text-slate-700">PKB-MISSION-CTRL</span>
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-20" />
        </section>
    );
}
