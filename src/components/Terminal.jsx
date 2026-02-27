import React, { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, ChevronRight, Activity, ShieldCheck } from "lucide-react";
import resumePDF from "../assets/Pooja_Kiran_RESUME.pdf";

const COMMANDS = {
    help: `╔══════════════════════════════════════════════════╗
║  PKB_OS COMMAND REFERENCE v4.2                   ║
╠══════════════════════════════════════════════════╣
║  whoami     — Identity & current role            ║
║  skills     — Full technical stack               ║
║  projects   — List all flagship projects         ║
║  apex       — Apex-X tactical defense details    ║
║  orbitiq    — OrbitIQ CubeSat MLOps details      ║
║  commandx   — CommandX GNC platform details      ║
║  ecotrack   — EcoTrack carbon analytics details  ║
║  research   — Published papers (IEEE + IOSR)     ║
║  certs      — Active certifications              ║
║  education  — Academic background                ║
║  contact    — Get in touch                       ║
║  download   — Download resume PDF                ║
║  status     — System diagnostics                 ║
║  neofetch   — System info display                ║
║  clear      — Clear terminal output              ║
╚══════════════════════════════════════════════════╝`,

    whoami: `┌─ IDENTITY ─────────────────────────────────────┐
│  Name:   Pooja Kiran Bharadwaj                 │
│  Role:   Machine Learning Engineer             │
│  Focus:  Aerospace AI, MLOps, Security         │
│  School: ASU — M.S. IT Security (2024-2026)    │
│  Status: Actively seeking ML/AI roles          │
└────────────────────────────────────────────────┘`,

    skills: `┌─ TECHNICAL STACK ──────────────────────────────┐
│  🧠 ML/AI:  PINNs, GANs, Transformers, RL,    │
│             EKF, Isolation Forest, Random Forest│
│  ☁️ MLOps:  Docker, FastAPI, MLflow, Firebase,  │
│             AWS SageMaker, Kubernetes           │
│  💻 Lang:   Python, JavaScript/React, SQL      │
│  🔒 Sec:    Post-Quantum Crypto, Zero-Trust,   │
│             IAM, SDLC, DevSecOps               │
└────────────────────────────────────────────────┘`,

    projects: `┌─ FLAGSHIP DEPLOYMENTS ─────────────────────────┐
│  🛡️  Apex-X       → Hypersonic Defense AI      │
│  🛰️  OrbitIQ      → CubeSat MLOps Engine       │
│  🚀  CommandX     → Orbital GNC Platform       │
│  🌿  EcoTrack     → Carbon Analytics Service   │
│                                                │
│  Type a project name for deep-dive details.    │
└────────────────────────────────────────────────┘`,

    apex: `🛡️ APEX-X & AEGIS-X: Tactical Command Suite
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Category:    Hypersonic Defense AI
Inference:   12.36ms → 10.11ms (18.19% gain)
Signal:      99.8% integrity (1000 trials)
Tech:        PINNs, StyleGAN, Transformers,
             Byzantine-Mesh, Lattice Crypto
GitHub:      github.com/poojakira/Apex-Aegis-Tactical-Suite`,

    orbitiq: `🛰️ ORBITIQ: CubeSat 3D Anomaly Engine
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Category:    Orbital MLOps
Latency:     2000ms → 8ms (99.9% reduction)
Accuracy:    95.8% predictive accuracy
Tech:        Isolation Forest, Firebase,
             MLflow, Rolling Window Features
GitHub:      github.com/poojakira/orbit-Q`,

    commandx: `🚀 COMMANDX: Orbital Mission Control v7.0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Category:    Aerospace GNC
Docking:     98% success (Monte Carlo 3-sigma)
Fuel:        60% efficiency (Genetic Algorithm)
Tech:        EKF @ 10Hz, RL Pilot (500kg bus),
             Entropy Engine, Space-Track catalog
GitHub:      github.com/poojakira/CommandX`,

    ecotrack: `🌿 ECOTRACK-ENTERPRISE: Carbon Analytics
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Category:    Industrial ML Microservices
R² Score:    0.9952 (99.5% variance explained)
P90 Latency: 281ms @ 1,000 concurrent users
Anomaly:     <5ms detection (Isolation Forest)
Tech:        FastAPI, Random Forest, Docker
GitHub:      github.com/poojakira/EcoTrack-Enterprise`,

    research: `📄 PUBLISHED RESEARCH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. "Personalized E-learning Using RL Through Satellite"
   Venue:  IEEE INDICON 2023
   Impact: 80% dynamic progression accuracy

2. "Smart Charge Pro: Empowering Future Mobility"
   Venue:  IOSR Journal 2023
   Impact: Zero-delay isolation logic for 4 EVs`,

    certs: `🏆 CERTIFICATIONS (6 Active)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Transformer Models & BERT — Google Cloud
• MLOps for Generative AI — Google Cloud
• ML Engineer Study Guide — Google Cloud
• AWS Cloud Architecting — Amazon Web Services
• AWS Cloud Security — Amazon Web Services
• Honeywell Tech Innovation Lab — Honeywell`,

    education: `🎓 ACADEMIC RECORD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
M.S. Information Technology Security
Arizona State University | 2024–2026
Focus: AI Security, Privacy Engineering

B.Tech Computer Science & Engineering
M.S. Ramaiah University | 2019–2023
Distinction: Top of cohort, 2 publications`,

    contact: `📬 CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 poojakiranbharadwaj@gmail.com
📞 +1 (480) 776-7445
📍 Tempe, AZ
🔗 linkedin.com/in/poojakiran
🐙 github.com/poojakira

✅ Available for full-time, internships, or research.`,

    status: `┌─ SYSTEM DIAGNOSTICS ──────────────────────────┐
│  OS:       PKB_OS v2026.4.2 [Production]      │
│  Uptime:   99.98%                              │
│  Encryption: AES-256 ACTIVE                    │
│  GPU:      ${Math.floor(Math.random() * 30 + 50)}% utilization                     │
│  Memory:   ${(Math.random() * 4 + 6).toFixed(1)} GB / 16 GB                      │
│  Inference: ${Math.floor(Math.random() * 500 + 1000)} TLU/s                       │
│  Mission:  READY FOR DEPLOYMENT                │
└────────────────────────────────────────────────┘`,

    neofetch: `
     ██████╗ ██╗  ██╗██████╗         Pooja Kiran Bharadwaj
     ██╔══██╗██║ ██╔╝██╔══██╗        ─────────────────────
     ██████╔╝█████╔╝ ██████╔╝        OS:     PKB_OS v2026.4.2
     ██╔═══╝ ██╔═██╗ ██╔══██╗        Role:   ML Engineer
     ██║     ██║  ╚██╗██████╔╝        Shell:  MISSION_CTRL v4
     ╚═╝     ╚═╝   ╚═╝╚═════╝         GPU:    H100 (Simulated)
                                       Projects: 4 Deployed
                                       Papers:   2 Published
                                       Certs:    6 Active
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
                a.download = "Pooja_Kiran_Resume.pdf";
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
                    <TerminalIcon size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Mission_Terminal_v4.2
                    </span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
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
                        className={`text-[11px] leading-relaxed whitespace-pre-wrap ${line.type === "user" ? "text-indigo-400 font-bold" :
                                line.type === "error" ? "text-rose-400" :
                                    "text-emerald-500/80"
                            }`}
                    >
                        {line.text}
                    </div>
                ))}
                <div className="flex items-center gap-2 text-[11px] text-indigo-400 pt-1">
                    <span className="text-emerald-500/70 shrink-0">pkb@mission-ctrl:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onKeyPress={handleCommand}
                        className="flex-1 bg-transparent border-none outline-none text-indigo-400 placeholder:text-indigo-900/40 caret-indigo-400"
                        placeholder="Type a command..."
                        spellCheck={false}
                    />
                </div>
            </div>

            {/* Bottom Telemetry */}
            <div className="p-2.5 border-t border-white/5 bg-black/30 flex justify-between items-center px-4 shrink-0">
                <div className="flex items-center gap-4 text-[8px] text-slate-600 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                        <Activity size={9} className="text-indigo-500/60" /> CPU: 0.12%
                    </div>
                    <div className="flex items-center gap-1">
                        <ShieldCheck size={9} className="text-emerald-500/60" /> SSH: SECURE
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
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
