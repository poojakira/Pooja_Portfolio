/**
 * GEMINI_INTELLIGENCE_CORE (V4.0)
 * Full-context NLP-style knowledge engine for Pooja Kiran Bharadwaj's portfolio
 * Handles any recruiter or user question using topic graphs + detailed answers
 */

// ─── Complete Knowledge Base ────────────────────────────────────────────────
const KB = {
    name: "Pooja Kiran Bharadwaj",
    email: "poojakiranbharadwaj@gmail.com",
    phone: "+1 (480) 776-7445",
    location: "Tempe, AZ",
    linkedin: "https://linkedin.com/in/poojakiran",
    github: "https://github.com/poojakira",
    status: "Actively seeking Machine Learning Engineer / Applied AI / MLOps roles",
    availability: "Available immediately for full-time roles, internships, or research collaborations",

    education: {
        masters: {
            school: "Arizona State University (ASU)",
            location: "Tempe, AZ",
            degree: "M.S. in Information Technology Security",
            period: "Aug 2024 – May 2026",
            focus: "AI Security, Enterprise Compliance, Secure ML Systems, SDLC, Privacy Engineering"
        },
        bachelors: {
            school: "M. S. Ramaiah University",
            location: "Bengaluru, India",
            degree: "B.Tech in Computer Science",
            period: "Aug 2019 – Aug 2023",
            gpa: "Top of cohort"
        }
    },

    experience: {
        asu_grader: {
            role: "Graduate IT Grader — Web Programming & Security Compliance",
            company: "Arizona State University",
            period: "Feb 2025 – Oct 2025",
            responsibilities: [
                "Audited security policies, incident response plans, and compliance frameworks for 85+ enterprise assignments",
                "Reviewed HTML, CSS, and JavaScript code across 85+ student applications for UI/UX quality and accessibility standards",
                "Delivered targeted SDLC remediation feedback bridging secure web design with enterprise compliance for 85+ students"
            ]
        }
    },

    projects: {
        apex: {
            name: "Apex-X & Aegis-X: Hyper-Advanced Tactical Command Suite",
            github: "https://github.com/poojakira/Apex-Aegis-Tactical-Suite",
            category: "Hypersonic Defense AI",
            description: "Mission-critical autonomous defense command suite integrating Physics-Informed Neural Networks (PINNs) for real-time multi-physics simulation. Includes a Tactical Transformer for intent prediction, StyleGAN-based adversarial denoising for electronic warfare resilience, and a Byzantine-Mesh network for fault-tolerant communications.",
            tech: ["PINNs (Navier-Stokes constraints)", "StyleGAN denoising autoencoders", "Tactical Transformers", "Byzantine-Mesh consensus", "Post-Quantum Lattice cryptography", "NASA TLE satellite tracking", "FEM structural simulation", "Sigma-Point Kalman Fusion"],
            metrics: {
                latency: "12.36ms → 10.11ms (18.2% optimization)",
                signal_integrity: "99.8% (998/1000 trials — StyleGAN reconstruction)",
                versions: "Version 3.0 Enterprise"
            },
            features: ["3D tactical HUD with AI-predicted flight paths", "Live NASA TLE satellite integration", "Automated military-grade mission reporting", "Self-healing Byzantine-Mesh nodes", "Post-Quantum cryptographic weight signing"]
        },
        orbit: {
            name: "OrbitIQ: CubeSat 3D Anomaly Engine",
            github: "https://github.com/poojakira/orbit-Q",
            category: "Orbital MLOps",
            description: "Autonomous satellite health monitoring MLOps ecosystem. Uses Isolation Forest for unsupervised spatial anomaly detection across N/S/E/W CubeSat sensor faces. Features a 10-page mission control center with a 360° orbital radar, MLflow experiment tracking, and a continuous 10-second Mission Pulse orchestrator.",
            tech: ["Isolation Forest (unsupervised ML)", "Rolling Window feature extraction (mean + std dev)", "Firebase Realtime Database", "MLflow experiment tracking", "Python 3.10+", "Streamlit dashboard"],
            metrics: {
                latency: "2000ms (cloud) → 8ms (edge-optimized) = 99.9% reduction",
                accuracy: "95.8% predictive accuracy (target: >95.0%)",
                contamination: "0.05 contamination rate (high-precision outlier detection)"
            },
            features: ["360° polar orbital proximity radar", "10-page command center dashboard", "AI-driven triage alert center", "Hardware diagnostics (CPU/temp/power)", "Manual model retraining trigger"]
        },
        cmdx: {
            name: "CommandX: Orbital Mission Control Platform v7.0",
            github: "https://github.com/poojakira/CommandX",
            category: "Aerospace GNC",
            description: "Industrial mission control platform built on real aerospace physics. Parses the live Space-Track satellite catalog. Core GNC uses an Extended Kalman Filter (EKF) at 10Hz fusing noisy IMU sensor data into clean state estimates across 6 degrees of freedom. An RL Pilot controls a 500kg spacecraft bus using a 50N thruster.",
            tech: ["Extended Kalman Filter (EKF @ 10Hz)", "RL Pilot (reinforcement learning thrust control)", "Genetic Algorithm (trajectory optimization)", "Entropy Engine (hardware degradation simulator)", "Monte Carlo IV&V (system_analytics.py)", "Plotly 3D spacecraft visualization", "Space-Track TLE catalog parsing"],
            metrics: {
                docking: "98% docking success (3-sigma Monte Carlo worst-case proven)",
                fuel: "60% fuel efficiency via Genetic Algorithm optimization",
                gnc_cycle: "10Hz GNC cycle frequency"
            },
            features: ["Live global fleet tracking (15,000+ real satellites)", "RL-driven autonomous docking", "Entropy Engine: thermal noise, IMU drift, radiation bit-flips", "Monte Carlo certification (IV&V) suite", "4-phase mission planning UI (Command → Flight → Certification → Planning)"]
        },
        ecotrack: {
            name: "EcoTrack-Enterprise: Carbon Lifecycle Analytics",
            github: "https://github.com/poojakira/EcoTrack-Enterprise",
            category: "Industrial ML Microservices",
            description: "Industrial-grade ML microservice architecture for carbon footprint analysis. FastAPI async backend + Random Forest regressor for predictive carbon scoring + Isolation Forest security layer for real-time anomaly detection. Fully Docker-orchestrated microservices.",
            tech: ["FastAPI (async REST backend)", "Random Forest Regressor (carbon prediction)", "Isolation Forest (zero-trust security layer)", "Docker Compose orchestration", "Pydantic schemas", "Stress testing (1000 concurrent requests)", "Kaggle Product Lifecycle Carbon Footprint dataset"],
            metrics: {
                r2: "R² = 0.9952 (explains 99.5% of carbon variance)",
                latency_p90: "281ms P90 under 1,000 concurrent users",
                anomaly_flag: "<5ms anomaly detection latency"
            },
            features: ["18-field product carbon prediction API", "Zero-trust input security via Isolation Forest", "Docker multi-container orchestration (backend + frontend)", "Full stress test suite (stress_test.py)", "Streamlit frontend dashboard"]
        }
    },

    research: [
        {
            title: "Personalized E-learning System Using Reinforcement Learning Through Satellite",
            venue: "IEEE INDICON 2023",
            contribution: "Designed a Q-learning agent that dynamically adjusts curriculum difficulty based on student performance signals streamed via satellite. Achieved 80% dynamic progression accuracy."
        },
        {
            title: "Smart Charge Pro: Empowering Future Mobility",
            venue: "IOSR Journal 2023",
            contribution: "Built a zero-delay NodeMCU IoT system that manages concurrent EV charging for 4 vehicles simultaneously with intelligent load isolation."
        }
    ],

    certifications: [
        { name: "Transformer Models and BERT", issuer: "Google Cloud", date: "Feb 2026" },
        { name: "Machine Learning Operations (MLOps) for Generative AI", issuer: "Google Cloud", date: "Feb 2026" },
        { name: "Professional Machine Learning Engineer Study Guide", issuer: "Google Cloud", date: "Feb 2026" },
        { name: "AWS Academy Cloud Architecting", issuer: "Amazon Web Services", date: "2025" },
        { name: "AWS Cloud Security Foundations", issuer: "Amazon Web Services", date: "2025" },
        { name: "Honeywell Tech Innovation Lab", issuer: "Honeywell", date: "2025" }
    ],

    skills: {
        ml_ai: ["Physics-Informed Neural Networks (PINNs)", "GANs & StyleGAN", "BERT & Transformers", "Reinforcement Learning (Q-Learning, RL Pilot)", "Isolation Forest", "Random Forest", "Extended Kalman Filter (EKF)", "Monte Carlo Simulation", "Genetic Algorithms"],
        mlops: ["Docker & Docker Compose", "FastAPI", "MLflow", "Firebase Realtime DB", "AWS SageMaker", "Kubernetes", "DevSecOps"],
        languages: ["Python (primary)", "JavaScript / React", "YAML", "SQL", "HTML + CSS"],
        security: ["Post-Quantum Cryptography (Lattice-based)", "Zero-Trust Security Architecture", "IAM policies", "Security Compliance Auditing", "SDLC Secure Practices"],
        tools: ["Streamlit", "Plotly", "NodeMCU IoT", "Git / GitHub", "Linux"]
    }
};

// ─── Topic Graph — maps keywords to topic handlers ──────────────────────────
const TOPICS = [
    {
        id: "greeting",
        signals: ["hello", "hi", "hey", "good morning", "good afternoon", "start", "help", "what can you do"],
        respond: () => `Hello! I'm the Gemini Intelligence Core — Pooja Kiran Bharadwaj's AI portfolio assistant.

I'm trained on her complete profile including GitHub repositories, IEEE publications, and certifications. Ask me anything:

🛡️ "Tell me about Apex-X" | 🛰️ "How does OrbitIQ work?"
📊 "What ML skills does she have?" | 🎓 "Tell me about her education"
📬 "How can I contact her?" | 🏆 "What certifications does she have?"
📄 "What projects has she built?" | 🔬 "Any published research?"`
    },
    {
        id: "apex",
        signals: ["apex", "aegis", "pinn", "hypersonic", "tactical", "defense", "byzantine", "stylegan", "trajectory", "jamming", "aerospace defense"],
        respond: () => {
            const p = KB.projects.apex;
            return `🛡️ **${p.name}**
GitHub: ${p.github}

${p.description}

📊 Verified Metrics:
• Inference latency: ${p.metrics.latency}
• Signal integrity: ${p.metrics.signal_integrity}

⚙️ Tech Stack:
${p.tech.map(t => `• ${t}`).join("\n")}

✨ Key Features:
${p.features.map(f => `• ${f}`).join("\n")}`;
        }
    },
    {
        id: "orbit",
        signals: ["orbit", "cubesat", "satellite", "debris", "anomaly detection", "mlops", "firebase", "mlflow", "telemetry", "orbitiq"],
        respond: () => {
            const p = KB.projects.orbit;
            return `🛰️ **${p.name}**
GitHub: ${p.github}

${p.description}

📊 Verified Metrics:
• Latency: ${p.metrics.latency}
• Accuracy: ${p.metrics.accuracy}
• Sensitivity: ${p.metrics.contamination}

⚙️ Tech Stack:
${p.tech.map(t => `• ${t}`).join("\n")}

✨ Key Features:
${p.features.map(f => `• ${f}`).join("\n")}`;
        }
    },
    {
        id: "cmdx",
        signals: ["command", "cmdx", "commandx", "kalman", "docking", "gnc", "spacecraft", "reinforcement", "genetic", "orbital", "monte carlo", "entropy", "rocket", "thruster", "mission control"],
        respond: () => {
            const p = KB.projects.cmdx;
            return `🚀 **${p.name}**
GitHub: ${p.github}

${p.description}

📊 Verified Metrics:
• Docking success: ${p.metrics.docking}
• Fuel efficiency: ${p.metrics.fuel}
• GNC cycle: ${p.metrics.gnc_cycle}

⚙️ Tech Stack:
${p.tech.map(t => `• ${t}`).join("\n")}

✨ Key Features:
${p.features.map(f => `• ${f}`).join("\n")}`;
        }
    },
    {
        id: "ecotrack",
        signals: ["eco", "carbon", "ecotrack", "fastapi", "docker", "random forest", "microservice", "footprint", "sustainability", "r2", "r squared"],
        respond: () => {
            const p = KB.projects.ecotrack;
            return `🌿 **${p.name}**
GitHub: ${p.github}

${p.description}

📊 Verified Metrics:
• Precision: ${p.metrics.r2}
• Scalability: ${p.metrics.latency_p90}
• Security: ${p.metrics.anomaly_flag}

⚙️ Tech Stack:
${p.tech.map(t => `• ${t}`).join("\n")}

✨ Key Features:
${p.features.map(f => `• ${f}`).join("\n")}`;
        }
    },
    {
        id: "all_projects",
        signals: ["projects", "portfolio", "all projects", "what has she built", "what did she build", "work examples", "show projects"],
        respond: () => `Pooja has 4 flagship engineering deployments:

🛡️ **Apex-X & Aegis-X** (Hypersonic Defense AI)
   → PINNs + StyleGAN | 10.11ms inference | 99.8% signal integrity

🛰️ **OrbitIQ** (CubeSat MLOps)
   → Isolation Forest + Firebase | 2000ms → 8ms latency | 95.8% accuracy

🚀 **CommandX** (Orbital GNC Platform)
   → EKF + RL Pilot + Monte Carlo IV&V | 98% docking certified

🌿 **EcoTrack-Enterprise** (Carbon Analytics)
   → FastAPI + Random Forest | R²=0.9952 | 1,000 concurrent users

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
Focus: ${e.masters.focus}

**${e.bachelors.degree}**
${e.bachelors.school} | ${e.bachelors.location}
Period: ${e.bachelors.period}`;
        }
    },
    {
        id: "experience",
        signals: ["experience", "work", "job", "grader", "teaching", "worked", "employment", "career", "role", "position", "asu job"],
        respond: () => {
            const exp = KB.experience.asu_grader;
            return `💼 **Work Experience**

**${exp.role}**
${exp.company} | ${exp.period}

Responsibilities:
${exp.responsibilities.map(r => `• ${r}`).join("\n")}`;
        }
    },
    {
        id: "skills",
        signals: ["skill", "stack", "technology", "tech", "language", "framework", "tool", "expertise", "proficient", "know", "experience with", "knowledge"],
        respond: () => {
            const s = KB.skills;
            return `⚡ **Technical Skills**

🧠 ML & AI:
${s.ml_ai.map(x => `• ${x}`).join("\n")}

🔧 MLOps & Cloud:
${s.mlops.map(x => `• ${x}`).join("\n")}

💻 Languages:
${s.languages.map(x => `• ${x}`).join("\n")}

🔒 Security:
${s.security.map(x => `• ${x}`).join("\n")}`;
        }
    },
    {
        id: "research",
        signals: ["research", "paper", "publication", "ieee", "published", "journal", "iosr", "indicon", "learning", "ev", "iot", "curiculum", "q-learning"],
        respond: () => `🔬 **Published Research**

${KB.research.map((r, i) => `**${i + 1}. "${r.title}"**
Venue: ${r.venue}
Contribution: ${r.contribution}`).join("\n\n")}`
    },
    {
        id: "certifications",
        signals: ["cert", "certification", "google cloud", "aws", "honeywell", "mlops cert", "bert cert", "credential", "badge", "qualified"],
        respond: () => `🏆 **Certifications (${KB.certifications.length} total)**

${KB.certifications.map(c => `• **${c.name}** — ${c.issuer} (${c.date})`).join("\n")}`
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
        respond: () => "Python is Pooja's primary language (proficiency: 98%). She uses it for ML modeling (TensorFlow, scikit-learn, PyTorch), MLOps pipelines (FastAPI, Docker), aerospace simulations (PINNs, EKF), and data engineering."
    },
    {
        id: "mlops_topic",
        signals: ["mlops", "devops", "deployment", "pipeline", "kubernetes", "ci/cd", "production ml", "model deployment"],
        respond: () => "Pooja is certified in MLOps for Generative AI (Google Cloud). She has hands-on production deployments using Docker Compose, FastAPI, MLflow experiment tracking, Firebase Realtime DB, and AWS SageMaker. Her OrbitIQ project demonstrates a full MLOps lifecycle with a live Mission Pulse orchestrator rerunning train→predict cycles every 10 seconds."
    },
    {
        id: "security_topic",
        signals: ["security", "cybersecurity", "cryptography", "post quantum", "zero trust", "iam", "compliance", "audit", "vulnerab"],
        respond: () => `🔒 **Security Expertise**

Pooja's M.S. at ASU focuses on IT Security and AI systems:

• Post-Quantum Cryptography — implemented Lattice-based signature schemes in Apex-X for quantum-resistant communication
• Zero-Trust Architecture — Isolation Forest security layer in EcoTrack flags all out-of-distribution inputs in <5ms
• Compliance Auditing — audited security frameworks for 85+ enterprise projects at ASU
• DevSecOps — integrates security into SDLC pipeline design
• AWS Cloud Security Foundations certified (Nov 2025)`
    },
    {
        id: "why_hire",
        signals: ["why hire", "strengths", "unique", "stand out", "special", "best", "advantage", "good fit", "what makes", "impressive", "strong suit"],
        respond: () => `⭐ Why Hire Pooja?

1. 🔬 **Research Depth** — IEEE-published ML researcher (RL + satellite systems, 2023)
2. 🛡️ **Aerospace-grade Engineering** — Built production systems for hypersonic defense, orbital GNC, and satellite anomaly detection
3. ⚡ **Extreme Performance** — 99.9% latency reduction (OrbitIQ), 18.19% inference optimization (Apex-X), R²=0.9952 (EcoTrack)
4. 🔒 **Security-First** — Her M.S. is in IT Security — she builds ML systems that are also cryptographically secure
5. 🏆 **Multi-domain expertise** — ML modeling + MLOps + Cloud + Security + IoT + Aerospace`
    },
    {
        id: "salary",
        signals: ["salary", "compensation", "pay", "rate", "package", "ctc", "offer"],
        respond: () => "Compensation expectations are flexible and dependent on the role, location, and scope. Please reach out directly at poojakiranbharadwaj@gmail.com to discuss."
    },
    {
        id: "location",
        signals: ["where", "location", "relocat", "remote", "onsite", "hybrid", "tempe", "arizona", "us", "visa", "authorization", "work authorizat"],
        respond: () => `Pooja is currently based in Tempe, AZ. She is open to:
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

// ─── Public API ──────────────────────────────────────────────────────────────
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

export const BRAIN_CONFIG = { identity: { name: "Gemini", version: "4.0" }, kb: KB };

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
        const text = "Pooja graduated top of her cohort from M. S. Ramaiah University (B.Tech, CS, 2023) and is currently pursuing her M.S. at Arizona State University (expected May 2026).";
        return options.plainMode ? stripFormatting(text) : text;
    }

    if (q.includes("language") && (q.includes("speak") || q.includes("fluent"))) {
        const text = "Pooja is fluent in English. Her primary programming language is Python, with strong JavaScript/React, YAML, and SQL skills.";
        return options.plainMode ? stripFormatting(text) : text;
    }

    if (q.includes("team") || q.includes("collaboration") || q.includes("collab")) {
        const text = "Pooja has strong collaborative experience — grading and mentoring 85+ students at ASU on secure SDLC practices, and building production systems that integrate multiple engineering disciplines (ML, GNC, security, and cloud).";
        return options.plainMode ? stripFormatting(text) : text;
    }

    if (q.includes("publication") || q.includes("paper") || q.includes("write")) {
        const text = `Pooja has 2 published research papers: (1) IEEE INDICON 2023 on RL-based personalized learning, and (2) IOSR Journal 2023 on EV smart charging IoT systems.`;
        return options.plainMode ? stripFormatting(text) : text;
    }

    // Final fallback: contextual best guess
    const response = `I wasn't sure exactly what you meant, but I'll try to help! Pooja Kiran Bharadwaj is a Machine Learning Engineer with expertise in:

• 🧠 PINNs, Transformers, RL, Isolation Forest, EKF
• 🛡️ AI Security & Post-Quantum Cryptography
• ☁️ MLOps: Docker, FastAPI, MLflow, Firebase, AWS
• 📡 Aerospace & IoT systems (hypersonic defense, orbital GNC)

Try asking: "Tell me about her projects", "What certifications does she have?", or "How can I contact her?" and I'll give you a detailed breakdown!`;

    return options.plainMode ? stripFormatting(response) : response;
};
