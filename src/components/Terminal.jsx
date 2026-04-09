import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, ChevronRight, Activity, ShieldCheck } from "lucide-react";
import resumePDF from "../assets/Pooja_Kiran_MLOps_Engineer.pdf";

const COMMANDS = {
    help: `╔══════════════════════════════════════════════════╗
║  PKB_OS COMMAND REFERENCE v5.0                   ║
╠══════════════════════════════════════════════════╣
║  whoami     — Identity & current role            ║
║  skills     — Full technical stack               ║
║  projects   — List all flagship projects         ║
║  cubesat    — CubeSat-Health-Monitor details     ║
║  pulsenet   — PulseNet-RUL-Forecasting details   ║
║  rtxoom     — RTX-OOM-Guard details              ║
║  research   — Published papers (IEEE)            ║
║  certs      — Active certifications              ║
║  education  — Academic background                ║
║  contact    — Get in touch                       ║
║  download   — Download resume PDF                ║
║  status     — System diagnostics                 ║
║  neofetch   — System info display                ║
║  clear      — Clear terminal output              ║
╚══════════════════════════════════════════════════╝`,

    whoami: `┌─ IDENTITY ─────────────────────────────────────┐
│  Name:   Pooja Kiran                           │
│  Role:   Machine Learning Engineer             │
│  Focus:  Telemetry, Anomaly Detection, GPU Opt │
│  School: ASU — M.S. IT Security (2024-2026)    │
│  Status: Actively seeking ML/MLOps roles       │
└────────────────────────────────────────────────┘`,

    skills: `┌─ TECHNICAL STACK ──────────────────────────────┐
│  🧠 ML:     Python, PyTorch, Time-Series,     │
│             Anomaly Detection, Forecasting     │
│  ☁️ MLOps:  Docker, CI/CD, AWS, Firebase,      │
│             Reproducible Deployment            │
│  💾 Data:   PostgreSQL, Firebase, IoT,         │
│             Streamlit, Async Pipelines         │
│  🚀 Domain: Aerospace, Predictive Maintenance, │
│             ESG Analytics, Mission-Control     │
└────────────────────────────────────────────────┘`,

    projects: `┌─ FLAGSHIP DEPLOYMENTS ─────────────────────────┐
│  🛰️  cubesat    → Satellite Health Analytics   │
│  🔧  pulsenet   → Predictive Maintenance (NASA)│
│  ⚡  rtxoom     → GPU Memory Optimization      │
│                                                │
│  Type a project name for deep-dive details.    │
└────────────────────────────────────────────────┘`,

    cubesat: `🛰️ CUBESAT-HEALTH-MONITOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Category:    Satellite Health Analytics
Inference:   15.72μs latency
Throughput:  63,622 events/second
F1 Score:    0.928 (precision: 0.942)
False Alarm: 3–5% rate
Tech:        Firebase, Python, Ensemble Detection
GitHub:      github.com/poojakira/CubeSat-Health-Monitor`,

    pulsenet: `🔧 PULSENET-RUL-FORECASTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Category:    Predictive Maintenance (NASA C-MAPSS)
RUL RMSE:    166.7 (~10% over baseline)
Throughput:  52,368 req/s
P95 Latency: 3.94ms
Tests:       52 automated tests
Tech:        Python, Time-Series Modeling
GitHub:      github.com/poojakira/PulseNet-RUL-Forecasting`,

    rtxoom: `⚡ RTX-OOM-GUARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Category:    GPU Memory Optimization
OOM Crashes: 23 → 0 (eliminated)
Overhead:    <2% training impact
VRAM:        94% → 87% utilization
Frag Ratio:  0.61 → 0.18
Tech:        PyTorch, Docker, GPU Profiling
GitHub:      github.com/poojakira/RTX-OOM-Guard`,

    research: `📄 PUBLISHED RESEARCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. "Personalized E-learning Using RL Through Satellite"
   Venue:  IEEE INDICON 2023
   Impact: 80% dynamic progression accuracy
   Role:   Co-author with university faculty`,

    certs: `🏆 CERTIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• AWS Cloud Security Foundations — Amazon Web Services
• Technology Innovation Lab — Honeywell Aerospace & ASU`,

    education: `🎓 ACADEMIC RECORD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
M.S. Information Technology Security
Arizona State University | 2024–2026
Certs: AWS Cloud Security, Honeywell Innovation Lab

B.Tech Computer Science
M.S. Ramaiah University | 2019–2023
Published at IEEE INDICON 2023`,

    contact: `📬 CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 poojakiranbhardwaj@gmail.com
📞 +1 (480) 776-7745
📍 Phoenix, Arizona, US
🔗 linkedin.com/in/poojakiran
🐙 github.com/poojakira

✅ Available for full-time, internships, or research.`,

    status: `┌─ SYSTEM DIAGNOSTICS ──────────────────────────┐
│  OS:       PKB_OS v2026.5.0 [Production]      │
│  Uptime:   99.98%                              │
│  Encryption: AES-256 ACTIVE                    │
│  GPU:      ${Math.floor(Math.random() * 30 + 50)}% utilization                     │
│  Memory:   ${(Math.random() * 4 + 6).toFixed(1)} GB / 16 GB                      │
│  Inference: ${Math.floor(Math.random() * 500 + 1000)} TLU/s                       │
│  Mission:  READY FOR DEPLOYMENT                │
└────────────────────────────────────────────────┘`,

    neofetch: `
     ██████╗ ██╗  ██╗██████╗         Pooja Kiran
     ██╔══██╗██║ ██╔╝██╔══██╗        ─────────────────────
     ██████╔╝█████╔╝ ██████╔╝        OS:     PKB_OS v2026.5.0
     ██╔═══╝ ██╔═██╗ ██╔══██╗        Role:   Machine Learning Engineer
     ██║     ██║  ╚██╗██████╔╝        Shell:  MISSION_CTRL v5
     ╚═╝     ╚═╝   ╚═╝╚═════╝         GPU:    RTX (Optimized)
                                       Projects: 3 Deployed
                                       Papers:   1 Published
                                       Certs:    2 Active
`
};

export default function Terminal() {
    const [history, setHistory] = useState([
        { type: "sys", text: "╔══════════════════════════════════════════════════╗" },
        { type: "sys", text: "║  PKB_OS(tm) Kernel v2026.4.2 — Boot Successful  ║" },
        { type: "sys", text: "║  Type 'help' for command reference.              ║" },
        { type: "sys", text: "╚══════════════════════════════════════════════════╝" }
    ]);
    const [input, setInput] = useState("");
    const [cmdHistory, setCmdHistory] = useState([]);
    const [histIdx, setHistIdx] = useState(-1);
    const scrollRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleKeyDown = (e) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (cmdHistory.length > 0) {
                const next = histIdx + 1 < cmdHistory.length ? histIdx + 1 : histIdx;
                setHistIdx(next);
                setInput(cmdHistory[cmdHistory.length - 1 - next]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (histIdx > 0) {
                setHistIdx(histIdx - 1);
                setInput(cmdHistory[cmdHistory.length - histIdx]);
            } else {
                setHistIdx(-1);
                setInput("");
            }
        }
    };

    const handleCommand = (e) => {
        if (e.key !== "Enter") return;
        const cmd = input.toLowerCase().trim();
        if (!cmd) return;

        setCmdHistory(prev => [...prev, cmd]);
        setHistIdx(-1);
        const newHistory = [...history, { type: "user", text: `pkb@mission-ctrl:~$ ${cmd}` }];

        if (cmd === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        // Dynamic status command
        if (cmd === "status") {
            const statusText = `┌─ SYSTEM DIAGNOSTICS ──────────────────────────┐
│  OS:       PKB_OS v2026.4.2 [Production]      │
│  Uptime:   99.98%                              │
│  Encryption: AES-256 ACTIVE                    │
│  GPU:      ${Math.floor(Math.random() * 30 + 50)}% utilization                     │
│  Memory:   ${(Math.random() * 4 + 6).toFixed(1)} GB / 16 GB                      │
│  Inference: ${Math.floor(Math.random() * 500 + 1000)} TLU/s                       │
│  Mission:  READY FOR DEPLOYMENT                │
└────────────────────────────────────────────────┘`;
            newHistory.push({ type: "sys", text: statusText });
        } else if (COMMANDS[cmd]) {
            newHistory.push({ type: "sys", text: COMMANDS[cmd] });
        } else {
            newHistory.push({ type: "error", text: `ProtocolError: '${cmd}' not found. Type 'help' for commands.` });
        }

        setHistory(newHistory);
        setInput("");

        if (cmd === "download") {
            setTimeout(() => {
                const a = document.createElement("a");
                a.href = resumePDF;
                a.download = "Pooja_Kiran_MLOps_Engineer.pdf";
                a.click();
            }, 800);
        }
    };

    return (
        <section
            className="glow-card flex flex-col h-[420px] font-mono relative overflow-hidden group cursor-text"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Terminal Header */}
            <div className="p-3 border-b border-white/5 bg-white/[0.03] flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                    <TerminalIcon size={14} className="text-rose-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Mission_Terminal_v4.2
                    </span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                </div>
            </div>

            {/* Terminal Output */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-0.5 custom-scrollbar"
            >
                {history.map((line, i) => (
                    <div
                        key={i}
                        className={`text-[11px] leading-relaxed whitespace-pre-wrap ${line.type === "user" ? "text-orange-400 font-bold" :
                                line.type === "error" ? "text-rose-400" :
                                    "text-rose-500/80"
                            }`}
                    >
                        {line.text}
                    </div>
                ))}
                <div className="flex items-center gap-2 text-[11px] text-orange-400 pt-1">
                    <span className="text-rose-500/70 shrink-0">pkb@mission-ctrl:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onKeyPress={handleCommand}
                        className="flex-1 bg-transparent border-none outline-none text-orange-400 placeholder:text-orange-900/40 caret-orange-400"
                        placeholder="Type a command..."
                        spellCheck={false}
                    />
                </div>
            </div>

            {/* Bottom Telemetry */}
            <div className="p-2.5 border-t border-white/5 bg-black/30 flex justify-between items-center px-4 shrink-0">
                <div className="flex items-center gap-4 text-[8px] text-slate-600 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                        <Activity size={9} className="text-orange-500/60" /> CPU: 0.12%
                    </div>
                    <div className="flex items-center gap-1">
                        <ShieldCheck size={9} className="text-rose-500/60" /> SSH: SECURE
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-rose-500 animate-pulse" />
                        {cmdHistory.length} cmds
                    </div>
                </div>
                <span className="text-[8px] font-bold text-slate-700 tracking-widest">PKB-MISSION-CTRL</span>
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.08)_50%)] bg-[length:100%_2px] opacity-15" />
        </section>
    );
}
