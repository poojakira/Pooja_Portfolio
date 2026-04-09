/**
 * GEMINI_INTELLIGENCE_CORE (V5.0)
 * Full-context NLP-style knowledge engine for Pooja Kiran's portfolio
 * Updated to match Pooja_Kiran_MLOps_Engineer.pdf resume
 */

// ─── Complete Knowledge Base ────────────────────────────────────────────────
const KB = {
    name: "Pooja Kiran",
    email: "poojakiranbhardwaj@gmail.com",
    phone: "+1 (480) 776-7745",
    location: "Phoenix, Arizona, US",
    linkedin: "https://linkedin.com/in/poojakiran",
    github: "https://github.com/poojakira",
    status: "Actively seeking Machine Learning Engineer roles",
    availability: "Available immediately for full-time roles, internships, or research collaborations",
    summary: "Machine Learning Engineer and IEEE-published researcher specializing in building production-minded ML systems for telemetry-heavy, safety-conscious environments. Proven track record of addressing operational constraints by architecting reliable anomaly detection, forecasting, and GPU-optimized ML infrastructures for applied aerospace and industrial systems.",

    education: {
        masters: {
            school: "Arizona State University (ASU)",
            location: "Phoenix, AZ",
            degree: "M.S. in Information Technology Security",
            period: "Aug 2024 – Expected May 2026",
            certifications: "AWS Cloud Security Foundations | Technology Innovation Lab (Honeywell Aerospace & ASU)"
        },
        bachelors: {
            school: "M. S. Ramaiah University of Applied Sciences",
            location: "Bengaluru, India",
            degree: "B.Tech in Computer Science",
            period: "Aug 2019 – Aug 2023"
        }
    },

    experience: {
        grad_researcher: {
            role: "Independent Graduate Researcher",
            company: "Arizona State University",
            location: "Tempe, AZ",
            period: "Oct 2025 – Present",
            responsibilities: [
                "Evaluated MLOps stack stability and latency constraints by prototyping end-to-end satellite-telemetry ML pipelines in simulation (spanning ingestion, feature stores, and training), accelerating observability and reliability for applied aerospace models.",
                "Mitigated Out-Of-Memory (OOM) failures in reinforcement learning and recommendation training loops by executing stress tests to characterize VRAM usage patterns, establishing guardrails that stabilized model training at scale."
            ]
        },
        teaching_assistant: {
            role: "Graduate Teaching Assistant (IT Security & Web Programming)",
            company: "Arizona State University",
            location: "Tempe, AZ",
            period: "Mar 2025 – Aug 2025",
            responsibilities: [
                "Accelerated evaluation processes for 140+ students across two IT courses by engineering scripted checks and standardized deployment rubrics, reducing manual grading review time by 25%.",
                "Bridged academic theory and enterprise security by mentoring students on real-world controls (e.g., access control, network isolation), enabling accurate mapping of system configurations to industry-standard compliance frameworks."
            ]
        },
        undergrad_researcher: {
            role: "Independent Undergraduate Researcher",
            company: "M.S. Ramaiah University of Applied Sciences",
            location: "Bengaluru, India",
            period: "Aug 2023 – Feb 2024",
            responsibilities: [
                "Advanced adaptive learning systems under satellite connectivity constraints by collaborating with university faculty on experiment design and analysis, culminating in co-authorship and publication of a paper at IEEE INDICON 2023.",
                "Improved student engagement in personalized E-learning platforms by engineering a Q-learning agent within a custom math-quiz environment, adapting quiz difficulty dynamically based on real-time student performance metrics."
            ]
        }
    },

    projects: {
        cubesat: {
            name: "CubeSat-Health-Monitor",
            github: "https://github.com/poojakira/CubeSat-Health-Monitor",
            category: "Satellite Health Analytics",
            description: "High-volume satellite telemetry processing pipeline with Firebase-backed ensemble anomaly detection. Engineered for real-time CubeSat health monitoring with precision anomaly analytics and strict false alarm rate control.",
            tech: ["Firebase", "Python", "Anomaly Analytics", "Ensemble Detection"],
            metrics: {
                latency: "15.72 microseconds inference latency",
                throughput: "63,622 events/s",
                f1: "F1 score of 0.928 (0.942 precision, 0.915 recall)",
                false_alarm: "3–5% false alarm rate"
            }
        },
        pulsenet: {
            name: "PulseNet-RUL-Forecasting",
            github: "https://github.com/poojakira/PulseNet-RUL-Forecasting",
            category: "Predictive Maintenance",
            description: "End-to-end predictive maintenance forecasting model on NASA C-MAPSS turbofan degradation data. Features telemetry-driven anomaly workflows backed by 52 automated tests for high-reliability fault visibility.",
            tech: ["Python", "Time-Series Modeling", "NASA C-MAPSS", "Anomaly Workflows"],
            metrics: {
                rmse: "RUL RMSE of 166.7 (~10% improvement over linear baseline)",
                throughput: "52,368 req/s",
                p95: "P95 latency of 3.94 ms",
                tests: "52 automated tests"
            }
        },
        rtxoom: {
            name: "RTX-OOM-Guard",
            github: "https://github.com/poojakira/RTX-OOM-Guard",
            category: "GPU Memory Optimization",
            description: "GPU memory defragmentation guard for RTX-class deep learning workloads. Eliminates Out-Of-Memory crashes while maintaining training overhead under 2%. Optimizes VRAM utilization and reduces memory fragmentation.",
            tech: ["PyTorch", "Docker", "GPU Optimization", "Memory Profiling"],
            metrics: {
                oom: "OOM crashes reduced from 23 to 0",
                overhead: "Training overhead under 2%",
                vram: "VRAM utilization improved from 94% to 87%",
                frag: "Fragmentation ratio reduced from 0.61 to 0.18"
            }
        }
    },

    research: [
        {
            title: "Personalized E-learning System Using Reinforcement Learning Through Satellite",
            venue: "IEEE INDICON 2023",
            contribution: "Advanced adaptive learning systems under satellite connectivity constraints. Engineered a Q-learning agent that dynamically adjusts quiz difficulty based on real-time student performance metrics, achieving 80% dynamic progression accuracy."
        }
    ],

    certifications: [
        { name: "AWS Cloud Security Foundations", issuer: "Amazon Web Services" },
        { name: "Technology Innovation Lab", issuer: "Honeywell Aerospace & ASU" }
    ],

    skills: {
        languages_ml: ["Python", "PyTorch", "Time-Series Modeling", "Anomaly Detection", "Forecasting", "ML Surrogates"],
        mlops: ["Docker", "CI/CD", "Reproducible Deployment", "Telemetry Pipelines", "AWS"],
        data_systems: ["PostgreSQL", "Firebase", "IoT Telemetry", "Streamlit", "Async Pipelines"],
        domain: ["Aerospace Systems", "Predictive Maintenance", "ESG Analytics", "Mission-Control Simulation"]
    }
};

// ─── Topic Graph — maps keywords to topic handlers ──────────────────────────
const TOPICS = [
    {
        id: "greeting",
        signals: ["hello", "hi", "hey", "good morning", "good afternoon", "start", "help", "what can you do"],
        respond: () => `Hello! I'm the Gemini Intelligence Core — Pooja Kiran's AI portfolio assistant.

I'm trained on her complete profile including GitHub repositories, IEEE publications, and certifications. Ask me anything:

🛰️ "Tell me about CubeSat-Health-Monitor" | 🔧 "How does PulseNet work?"
⚡ "What is RTX-OOM-Guard?" | 🎓 "Tell me about her education"
📊 "What ML skills does she have?" | 📬 "How can I contact her?"
🏆 "What certifications does she have?" | 🔬 "Any published research?"`
    },
    {
        id: "cubesat",
        signals: ["cubesat", "satellite", "health monitor", "telemetry", "firebase", "anomaly detection", "ensemble", "false alarm", "f1 score"],
        respond: () => {
            const p = KB.projects.cubesat;
            return `🛰️ **${p.name}**
GitHub: ${p.github}

${p.description}

📊 Verified Metrics:
• Inference latency: ${p.metrics.latency}
• Throughput: ${p.metrics.throughput}
• Classification: ${p.metrics.f1}
• False alarm rate: ${p.metrics.false_alarm}

⚙️ Tech Stack:
${p.tech.map(t => `• ${t}`).join("\n")}`;
        }
    },
    {
        id: "pulsenet",
        signals: ["pulsenet", "rul", "remaining useful life", "predictive maintenance", "nasa", "c-mapss", "turbofan", "forecasting", "time series", "time-series"],
        respond: () => {
            const p = KB.projects.pulsenet;
            return `🔧 **${p.name}**
GitHub: ${p.github}

${p.description}

📊 Verified Metrics:
• Accuracy: ${p.metrics.rmse}
• Throughput: ${p.metrics.throughput}
• Latency: ${p.metrics.p95}
• Reliability: ${p.metrics.tests}

⚙️ Tech Stack:
${p.tech.map(t => `• ${t}`).join("\n")}`;
        }
    },
    {
        id: "rtxoom",
        signals: ["rtx", "oom", "gpu", "memory", "defrag", "fragmentation", "vram", "out of memory", "pytorch", "cuda"],
        respond: () => {
            const p = KB.projects.rtxoom;
            return `⚡ **${p.name}**
GitHub: ${p.github}

${p.description}

📊 Verified Metrics:
• Crash elimination: ${p.metrics.oom}
• Performance: ${p.metrics.overhead}
• VRAM: ${p.metrics.vram}
• Fragmentation: ${p.metrics.frag}

⚙️ Tech Stack:
${p.tech.map(t => `• ${t}`).join("\n")}`;
        }
    },
    {
        id: "all_projects",
        signals: ["projects", "portfolio", "all projects", "what has she built", "what did she build", "work examples", "show projects"],
        respond: () => `Pooja has 3 flagship engineering deployments:

🛰️ **CubeSat-Health-Monitor** (Satellite Health Analytics)
   → Firebase + Ensemble Anomaly Detection | 15.72μs inference | F1: 0.928

🔧 **PulseNet-RUL-Forecasting** (Predictive Maintenance)
   → NASA C-MAPSS | RMSE: 166.7 | 52,368 req/s | P95: 3.94ms

⚡ **RTX-OOM-Guard** (GPU Memory Optimization)
   → PyTorch + Docker | OOM: 23→0 | <2% overhead | Frag: 0.61→0.18

Ask me to deep-dive into any of them!`
    },
    {
        id: "education",
        signals: ["education", "degree", "university", "college", "asu", "arizona", "ramaiah", "school", "masters", "bachelors", "bachelor", "master", "graduated", "studying", "gpa"],
        respond: () => {
            const e = KB.education;
            return `🎓 **Education**

**${e.masters.degree}**
${e.masters.school} | ${e.masters.location}
Period: ${e.masters.period}
Certifications: ${e.masters.certifications}

**${e.bachelors.degree}**
${e.bachelors.school} | ${e.bachelors.location}
Period: ${e.bachelors.period}`;
        }
    },
    {
        id: "experience",
        signals: ["experience", "work", "job", "grader", "teaching", "worked", "employment", "career", "role", "position", "asu job", "research experience", "researcher"],
        respond: () => {
            const exp = KB.experience;
            return `💼 **Professional & Research Experience (3 Roles)**

**1. ${exp.grad_researcher.role}**
${exp.grad_researcher.company} | ${exp.grad_researcher.period}
${exp.grad_researcher.responsibilities.map(r => `• ${r}`).join("\n")}

**2. ${exp.teaching_assistant.role}**
${exp.teaching_assistant.company} | ${exp.teaching_assistant.period}
${exp.teaching_assistant.responsibilities.map(r => `• ${r}`).join("\n")}

**3. ${exp.undergrad_researcher.role}**
${exp.undergrad_researcher.company} | ${exp.undergrad_researcher.period}
${exp.undergrad_researcher.responsibilities.map(r => `• ${r}`).join("\n")}`;
        }
    },
    {
        id: "skills",
        signals: ["skill", "stack", "technology", "tech", "language", "framework", "tool", "expertise", "proficient", "know", "experience with", "knowledge"],
        respond: () => {
            const s = KB.skills;
            return `⚡ **Technical Skills**

🧠 Languages & ML:
${s.languages_ml.map(x => `• ${x}`).join("\n")}

🔧 MLOps & Infrastructure:
${s.mlops.map(x => `• ${x}`).join("\n")}

💾 Data & Systems:
${s.data_systems.map(x => `• ${x}`).join("\n")}

🚀 Domain Expertise:
${s.domain.map(x => `• ${x}`).join("\n")}`;
        }
    },
    {
        id: "research",
        signals: ["research", "paper", "publication", "ieee", "published", "journal", "indicon", "learning", "q-learning"],
        respond: () => `🔬 **Published Research**

${KB.research.map((r, i) => `**${i + 1}. "${r.title}"**
Venue: ${r.venue}
Contribution: ${r.contribution}`).join("\n\n")}`
    },
    {
        id: "certifications",
        signals: ["cert", "certification", "aws", "honeywell", "credential", "badge", "qualified"],
        respond: () => `🏆 **Certifications (${KB.certifications.length} total)**

${KB.certifications.map(c => `• **${c.name}** — ${c.issuer}`).join("\n")}`
    },
    {
        id: "contact",
        signals: ["contact", "hire", "email", "phone", "reach", "connect", "linkedin", "github", "available", "availability", "apply", "recruiter", "interview", "offer"],
        respond: () => `📬 **Contact Pooja**

📧 Email: ${KB.email}
📞 Phone: ${KB.phone}
📍 Location: ${KB.location}
🔗 LinkedIn: ${KB.linkedin}
🐙 GitHub: ${KB.github}

✅ ${KB.status}
⏰ ${KB.availability}`
    },
    {
        id: "python",
        signals: ["python", "coding language", "programming language"],
        respond: () => "Python is Pooja's primary language (proficiency: 98%). She uses it for ML modeling (PyTorch, time-series modeling), MLOps pipelines (Docker, CI/CD), anomaly detection, forecasting, and telemetry pipeline engineering."
    },
    {
        id: "mlops_topic",
        signals: ["mlops", "devops", "deployment", "pipeline", "kubernetes", "ci/cd", "production ml", "model deployment"],
        respond: () => "Pooja specializes in MLOps for production ML systems. She has hands-on experience with Docker, CI/CD pipelines, reproducible deployment, telemetry pipelines, and AWS. Her CubeSat-Health-Monitor project demonstrates a full production pipeline achieving 63,622 events/s throughput with 15.72μs inference latency."
    },
    {
        id: "summary",
        signals: ["summary", "about", "who is", "tell me about", "introduce", "overview", "background"],
        respond: () => `👤 **About Pooja Kiran**

${KB.summary}

She is currently pursuing her M.S. in Information Technology Security at Arizona State University (expected May 2026) and holds a B.Tech in Computer Science from M.S. Ramaiah University.`
    },
    {
        id: "why_hire",
        signals: ["why hire", "strengths", "unique", "stand out", "special", "best", "advantage", "good fit", "what makes", "impressive", "strong suit"],
        respond: () => `⭐ Why Hire Pooja?

1. 🔬 **IEEE-Published Researcher** — Published at IEEE INDICON 2023 on RL-based adaptive learning systems
2. 🛰️ **Production-Minded ML** — Built telemetry pipelines processing 63,622 events/s at 15.72μs latency
3. ⚡ **GPU Optimization Expert** — Eliminated OOM crashes (23→0) with <2% overhead using RTX-OOM-Guard
4. 🔧 **Predictive Maintenance** — NASA C-MAPSS forecasting with ~10% improvement over baseline
5. 🏗️ **Full MLOps Lifecycle** — Docker, CI/CD, AWS, Firebase, reproducible deployment`
    },
    {
        id: "salary",
        signals: ["salary", "compensation", "pay", "rate", "package", "ctc", "offer"],
        respond: () => "Compensation expectations are flexible and dependent on the role, location, and scope. Please reach out directly at poojakiranbhardwaj@gmail.com to discuss."
    },
    {
        id: "location",
        signals: ["where", "location", "relocat", "remote", "onsite", "hybrid", "phoenix", "arizona", "us", "visa", "authorization", "work authorizat"],
        respond: () => `Pooja is currently based in Phoenix, Arizona, US. She is open to:
• On-site or hybrid roles in the US
• Remote-first positions (US or global)
• Relocation for the right opportunity

For visa/work authorization inquiries, please contact: ${KB.email}`
    }
];

// ─── Scorer — returns the best-matching topic ────────────────────────────────
function findBestTopic(input) {
    const q = input.toLowerCase().trim();
    let bestTopic = null;
    let bestScore = 0;

    for (const topic of TOPICS) {
        let score = 0;
        for (const signal of topic.signals) {
            if (q.includes(signal)) {
                // longer signal match = higher confidence
                score += signal.length;
            }
        }
        if (score > bestScore) {
            bestScore = score;
            bestTopic = topic;
        }
    }

    return bestTopic && bestScore > 0 ? bestTopic : null;
}

// ─── Utilities ───────────────────────────────────────────────────────────────
function stripFormatting(text) {
    if (!text) return "";
    return text
        // Remove markdown bold/italics
        .replace(/(\*\*|__)(.*?)\1/g, "$2")
        .replace(/(\*|_)(.*?)\1/g, "$2")
        // Remove common emojis using unicode range
        .replace(/[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, "")
        // Clean up any double spaces left by emoji removal
        .replace(/\s\s+/g, " ")
        .trim();
}

export const BRAIN_CONFIG = { identity: { name: "Gemini", version: "5.0" }, kb: KB };

export const getResponse = (input, options = {}) => {
    if (!input || !input.trim()) {
        return "Please type a question and I'll do my best to answer it!";
    }

    const topic = findBestTopic(input);

    if (topic) {
        const text = topic.respond();
        return options.plainMode ? stripFormatting(text) : text;
    }

    // Intelligent fallback — try to extract intent from unknown questions
    const q = input.toLowerCase();

    if (q.includes("gpa") || q.includes("grade")) {
        const text = "Pooja graduated from M. S. Ramaiah University (B.Tech, CS, 2023) and is currently pursuing her M.S. at Arizona State University (expected May 2026).";
        return options.plainMode ? stripFormatting(text) : text;
    }

    if (q.includes("language") && (q.includes("speak") || q.includes("fluent"))) {
        const text = "Pooja is fluent in English. Her primary programming language is Python, with strong skills in PyTorch, time-series modeling, and anomaly detection.";
        return options.plainMode ? stripFormatting(text) : text;
    }

    if (q.includes("team") || q.includes("collaboration") || q.includes("collab")) {
        const text = "Pooja has strong collaborative experience — mentoring 140+ students at ASU on IT security and web programming, collaborating with university faculty on IEEE-published research, and building production ML systems spanning multiple engineering disciplines.";
        return options.plainMode ? stripFormatting(text) : text;
    }

    // Final fallback
    const response = `I wasn't sure exactly what you meant, but I'll try to help! Pooja Kiran is a Machine Learning Engineer with expertise in:

• 🧠 Python, PyTorch, Time-Series Modeling, Anomaly Detection, Forecasting
• 🛰️ Satellite Telemetry, Predictive Maintenance, Aerospace Systems
• ☁️ MLOps: Docker, CI/CD, AWS, Firebase, Reproducible Deployment
• ⚡ GPU Optimization & Memory Management

Try asking: "Tell me about her projects", "What certifications does she have?", or "How can I contact her?" and I'll give you a detailed breakdown!`;

    return options.plainMode ? stripFormatting(response) : response;
};
