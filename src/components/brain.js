/**
 * GEMINI_INTELLIGENCE_CORE (V3.0)
 * Knowledge Base — Pooja Kiran Bharadwaj
 * Data verified directly from GitHub READMEs and resume as of Feb 2026
 */

export const BRAIN_CONFIG = {
    identity: {
        name: "Gemini",
        role: "Technical Portfolio Assistant",
        tone: "Professional, Engineering-focused",
        mission: "Provide deep technical insights into Pooja's ML engineering capabilities."
    },
    knowledge_base: {
        personal: {
            name: "Pooja Kiran Bharadwaj",
            email: "poojakiranbharadwaj@gmail.com",
            phone: "+1 (480) 776-7445",
            location: "Tempe, AZ",
            linkedin: "https://linkedin.com/in/poojakiran",
            github: "https://github.com/poojakira",
            status: "Actively seeking Machine Learning Engineer / Applied AI roles"
        },
        education: {
            asu: "M.S. in Information Technology Security — Arizona State University (Aug 2024 – May 2026). Focus: AI Security, Enterprise Compliance, ML Systems.",
            ramaiya: "B.Tech in Computer Science — M. S. Ramaiah University, India (Aug 2019 – Aug 2023)."
        },
        experience: {
            asu_grader: "Graduate IT Grader at ASU (Feb 2025 – Oct 2025): Audited security policies and compliance frameworks for 85+ enterprise assignments. Delivered technical feedback on HTML/CSS/JS front-end quality and secure SDLC practices."
        },
        research: [
            "IEEE INDICON 2023: 'Personalized E-learning System Using Reinforcement Learning Through Satellite' — Optimized learning trajectories with 80% dynamic progression accuracy using Q-learning agents.",
            "IOSR Journal 2023: 'Smart Charge Pro: Empowering Future Mobility' — Managed concurrent EV charging for 4 vehicles with zero-delay isolation via NodeMCU IoT controllers."
        ],
        projects: {
            apex: {
                title: "Apex-X & Aegis-X: Hyper-Advanced Tactical Command Suite",
                github: "https://github.com/poojakira/Apex-Aegis-Tactical-Suite",
                summary: "Autonomous hypersonic defense command suite for real-time multi-physics simulation and tactical AI. Integrates Physics-Informed Neural Networks (PINNs) with Tactical Transformers and Post-Quantum Cryptographic secure communications.",
                metrics: [
                    "Baseline latency: 12.36ms → Optimized: 10.11ms (18.19% net reduction)",
                    "Signal integrity: 99.8% (998/1000 trials under adversarial jamming)",
                    "StyleGAN-autoencoder based signal denoising under electronic warfare"
                ],
                tech: "PINNs (Navier-Stokes constraints), StyleGAN denoising autoencoders, Tactical Transformers, Byzantine-Mesh consensus, Post-Quantum Lattice cryptography, NASA TLE integration, FEM structural simulator"
            },
            orbit: {
                title: "OrbitIQ: CubeSat 3D Anomaly Engine",
                github: "https://github.com/poojakira/orbit-Q",
                summary: "MLOps ecosystem for autonomous satellite health monitoring. Uses Isolation Forest for spatial anomaly detection with 360° polar orbital radar. Features a 10-page mission control center with N/S/E/W telemetry stream.",
                metrics: [
                    "Latency: 2000ms (cloud) → 8ms (Edge-optimized) — 99.9% reduction",
                    "Predictive Accuracy: 95.8% (target was >95.0%)",
                    "Contamination Rate: 0.05 (high-precision outlier detection)"
                ],
                tech: "Isolation Forest, Rolling Window feature extraction, Firebase Realtime DB, MLflow experiment tracking, 10-second Mission Pulse orchestrator"
            },
            cmdx: {
                title: "CommandX: Orbital Mission Control Platform v7.0",
                github: "https://github.com/poojakira/CommandX",
                summary: "Industrial mission control system built on real aerospace physics. Parses real Space-Track satellite catalogs. GNC core uses Extended Kalman Filter (EKF) at 10Hz. RL Pilot controls a 500kg spacecraft bus with 50N thruster.",
                metrics: [
                    "98% docking success — verified via Monte Carlo IV&V (3-sigma worst-case)",
                    "60% fuel efficiency improvement via Genetic Algorithm trajectory optimization",
                    "EKF state estimation at 10Hz across 6 degrees of freedom"
                ],
                tech: "Extended Kalman Filter (EKF), RL Pilot, Genetic Algorithm (ga_optimizer.py), Entropy Engine (hardware degradation simulation — thermal noise, IMU drift, radiation bit-flips), Monte Carlo IV&V (system_analytics.py)"
            },
            ecotrack: {
                title: "EcoTrack-Enterprise: Carbon Lifecycle Analytics",
                github: "https://github.com/poojakira/EcoTrack-Enterprise",
                summary: "Industrial-grade ML microservice for product carbon footprint analysis. Docker-orchestrated FastAPI backend with Random Forest for predictive scoring and Isolation Forest for real-time security anomaly detection.",
                metrics: [
                    "R² = 0.9952 (explains 99.5% of carbon variance)",
                    "P90 latency: 281ms under 1,000 concurrent requests",
                    "Zero-Trust anomaly flag latency: <5ms"
                ],
                tech: "FastAPI async backend, Random Forest Regressor, Isolation Forest (security layer), Docker Compose orchestration, Kaggle Product Lifecycle Carbon Footprint dataset"
            }
        },
        certifications: [
            "Transformer Models and BERT — Google Cloud (Feb 2026)",
            "Machine Learning Operations (MLOps) for Generative AI — Google Cloud (Feb 2026)",
            "Professional Machine Learning Engineer Study Guide — Google Cloud (Feb 2026)",
            "AWS Academy Cloud Architecting (Apr 2025)",
            "AWS Cloud Security Foundations (Nov 2025)",
            "Honeywell Tech Innovation Lab (Nov 2025)"
        ],
        skills: {
            ml: "PINNs, GANs (StyleGAN), Transformers/BERT, Reinforcement Learning (Q-Learning), Isolation Forest, Random Forest, Extended Kalman Filter, Monte Carlo Simulation, Genetic Algorithms",
            mlops: "Docker, Kubernetes, FastAPI, MLflow, Firebase, AWS SageMaker, DevSecOps",
            languages: "Python (98%), JavaScript/React, YAML/Docker",
            security: "Post-Quantum Cryptography (Lattice-based), Zero-Trust Security, IAM, Compliance Auditing"
        }
    }
};

export const getResponse = (input) => {
    const q = input.toLowerCase();
    const kb = BRAIN_CONFIG.knowledge_base;

    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
        return `Hello! I'm the Gemini Intelligence Core — your guide to Pooja Kiran Bharadwaj's engineering portfolio. I can break down her PINN-powered aerospace systems, IEEE-published research, or MLOps pipeline architecture. What would you like to explore?

💡 Suggested: "Tell me about her projects" | "What are her ML skills?" | "How do I contact her?"`;
    }

    if (q.includes("apex") || q.includes("aegis") || q.includes("pinn") || q.includes("hypersonic")) {
        const p = kb.projects.apex;
        return `${p.title}\n\nGitHub: ${p.github}\n\n${p.summary}\n\nVerified Metrics:\n${p.metrics.map(m => `• ${m}`).join("\n")}\n\nTech Stack: ${p.tech}`;
    }

    if (q.includes("orbit") || q.includes("cubesat") || q.includes("satellite")) {
        const p = kb.projects.orbit;
        return `${p.title}\n\nGitHub: ${p.github}\n\n${p.summary}\n\nVerified Metrics:\n${p.metrics.map(m => `• ${m}`).join("\n")}\n\nTech Stack: ${p.tech}`;
    }

    if (q.includes("command") || q.includes("cmdx") || q.includes("kalman") || q.includes("docking")) {
        const p = kb.projects.cmdx;
        return `${p.title}\n\nGitHub: ${p.github}\n\n${p.summary}\n\nVerified Metrics:\n${p.metrics.map(m => `• ${m}`).join("\n")}\n\nTech Stack: ${p.tech}`;
    }

    if (q.includes("eco") || q.includes("carbon") || q.includes("fastapi") || q.includes("docker")) {
        const p = kb.projects.ecotrack;
        return `${p.title}\n\nGitHub: ${p.github}\n\n${p.summary}\n\nVerified Metrics:\n${p.metrics.map(m => `• ${m}`).join("\n")}\n\nTech Stack: ${p.tech}`;
    }

    if (q.includes("project") || q.includes("portfolio") || q.includes("work")) {
        return `Pooja has 4 flagship ML deployments:\n\n1. 🛡️ Apex-X → Hypersonic defense AI (10.11ms PINN inference)\n2. 🛰️ OrbitIQ → CubeSat anomaly detection (8ms edge ML)\n3. 🚀 CommandX → Orbital GNC with EKF + Monte Carlo IV&V\n4. 🌿 EcoTrack → Carbon analytics (R²=0.9952, 1000 concurrent requests)\n\nAsk me to go deep on any of them!`;
    }

    if (q.includes("education") || q.includes("degree") || q.includes("asu") || q.includes("university")) {
        return `${kb.education.asu}\n\n${kb.education.ramaiya}`;
    }

    if (q.includes("research") || q.includes("ieee") || q.includes("publication")) {
        return `Published Research:\n\n${kb.research.map((r, i) => `${i + 1}. ${r}`).join("\n\n")}`;
    }

    if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("language")) {
        const s = kb.skills;
        return `ML/AI: ${s.ml}\n\nMLOps/Cloud: ${s.mlops}\n\nLanguages: ${s.languages}\n\nSecurity: ${s.security}`;
    }

    if (q.includes("cert") || q.includes("google") || q.includes("aws")) {
        return `Certifications:\n${kb.certifications.map(c => `• ${c}`).join("\n")}`;
    }

    if (q.includes("experience") || q.includes("job") || q.includes("grader")) {
        return kb.experience.asu_grader;
    }

    if (q.includes("contact") || q.includes("hire") || q.includes("email") || q.includes("reach")) {
        const p = kb.personal;
        return `📧 ${p.email}\n📞 ${p.phone}\n📍 ${p.location}\n🔗 GitHub: ${p.github}\n\n${p.status}`;
    }

    return `I'm the Gemini Portfolio Core for Pooja Kiran Bharadwaj — ML Engineer & AI Researcher. I can analyze:\n\n• Project technical architectures\n• IEEE-published research\n• MLOps certifications\n• Performance metrics (latency, accuracy, R² scores)\n\nWhat would you like to explore?`;
};
