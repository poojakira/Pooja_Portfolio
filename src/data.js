export const CONTACT = {
    email: "poojakiranbhardwaj@gmail.com",
    phone: "+1 (480) 776-7745",
    linkedin: "https://linkedin.com/in/poojakiran",
    github: "https://github.com/poojakira",
    location: "Phoenix, Arizona, US",
    resume: "/src/assets/Pooja_Kiran_MLOps_Engineer.pdf"
};

export const PROJECTS = [
    {
        id: "secure-ml",
        title: "Secure ML Platform",
        category: "ML Security Engineering",
        tech: ["Python", "FastAPI", "PyTorch", "Docker", "Prometheus"],
        metric: "79 Tests | JWT + AES Encryption | CI/CD",
        desc: "Security-hardened ML platform for industrial predictive maintenance. Features JWT authentication, AES encryption at rest, tamper-evident audit logging, and full observability with Prometheus + Grafana.",
        link: "https://github.com/poojakira/Secure-ML-platform",
        complexity: 98,
        dashboardImg: null,
        mainPoints: [
            "JWT (HS256) authentication with role-based access control",
            "AES-128-CBC + HMAC-SHA256 encryption at rest for sensitive data",
            "Hash-chain audit ledger with Merkle tree verification",
            "79 automated tests with CI pipeline (lint → test → typecheck → security → docker)",
            "Isolation Forest + LSTM + Transformer ensemble for anomaly detection",
            "Prometheus metrics + Grafana dashboards for production observability"
        ],
        briefing: {
            architecture: "Sensor Telemetry → Async Streaming → ML Inference → FastAPI Service → Cryptographic Ledger",
            challenges: "Combining production security controls with real-time ML inference without sacrificing latency.",
            solution: "Built a layered security architecture with JWT auth, encryption, and audit logging while maintaining sub-50ms inference.",
            metrics: ["79 Tests", "5-Service Stack", "Non-root Container"]
        }
    },
    {
        id: "aerospace-traj",
        title: "Trajectory Optimization",
        category: "Aerospace Systems",
        tech: ["Python", "PyTorch", "RK4 Integration", "ML Surrogates"],
        metric: "Physics-ML Hybrid Simulation",
        desc: "Physics-aware trajectory simulation using RK4 integration, atmospheric models, and ML surrogates for fast constrained inference.",
        link: "https://github.com/poojakira/Aerospace-Trajectory-Simulator",
        complexity: 98,
        dashboardImg: null,
        mainPoints: [
            "Implemented RK4 integration for precise orbital trajectory physics.",
            "Integrated atmospheric and aerodynamic drag models.",
            "Deployed ML surrogate models alongside physics equations for ultra-fast inference.",
            "Architected for scalable mission-control testing environments."
        ],
        briefing: {
            architecture: "Physics Integrator → ML Surrogates → Simulation Engine",
            challenges: "Combining accurate orbital mechanics with machine learning speed optimizations.",
            solution: "Built a hybrid physics/ML simulator achieving high-fidelity results with reduced computational cost.",
            metrics: ["Physics-ML Hybrid", "RK4 Accuracy"]
        }
    },
    {
        id: "cubesat",
        title: "Satellite Anomaly Detection",
        category: "Satellite Health Analytics",
        tech: ["Firebase", "Python", "PyTorch", "Kafka", "Ensemble ML"],
        metric: "3-Model Ensemble | Real-time Telemetry",
        desc: "Satellite telemetry monitoring pipeline with Firebase-backed data flow, Kafka ingestion, and three-model ensemble anomaly detection for CubeSat health analytics.",
        link: "https://github.com/poojakira/CubeSat-Health-Monitor",
        complexity: 96,
        dashboardImg: null,
        mainPoints: [
            "Three-model ensemble (Isolation Forest + Autoencoder + LSTM) with weighted score fusion",
            "Kafka-first ingestion with Firebase fallback for reliability",
            "Adaptive polling that speeds up during anomalies, slows during normal ops",
            "Streamlit ops dashboard with real-time health visualization",
            "Configurable anomaly thresholds via YAML config",
            "Dockerized multi-service deployment"
        ],
        briefing: {
            architecture: "Telemetry Ingestion → Kafka/Firebase → Ensemble Anomaly Detection → Health Dashboard",
            challenges: "Sustaining real-time telemetry processing while minimizing false alarms in safety-critical satellite operations.",
            solution: "Engineered ensemble anomaly detection with adaptive windowing and configurable precision/recall trade-offs.",
            metrics: ["3-Model Ensemble", "Adaptive Polling", "Dockerized"]
        }
    },
    {
        id: "mission-control",
        title: "Telemetry Streaming Pipeline",
        category: "Mission Control Monitoring",
        tech: ["Python", "Streamlit", "EKF", "Anomaly Detection"],
        metric: "EKF State Estimation | Real-time Dashboard",
        desc: "Satellite telemetry streaming pipeline with Extended Kalman Filter state estimation, anomaly surfacing, and operator-facing Streamlit dashboard.",
        link: "https://github.com/poojakira/Mission-Control-Telemetry-Simulator",
        complexity: 93,
        dashboardImg: null,
        mainPoints: [
            "Developed an operator-facing mission control dashboard prototype.",
            "Simulated complex orbital telemetry parameters in real time.",
            "Built data-visualization pipelines using Streamlit for immediate anomaly detection.",
            "Surfaces critical warnings rapidly for rapid mission response."
        ],
        briefing: {
            architecture: "Telemetry Simulator → Data Layer → Streamlit Interactive Dashboard",
            challenges: "Designing an intuitive, responsive system for mission operators to digest large volumes of noisy data.",
            solution: "Used Streamlit and anomaly highlighting to guide operator focus dynamically.",
            metrics: ["Real-Time Alerts", "High Throughput UI"]
        }
    },
    {
        id: "esg-carbon",
        title: "Carbon Analytics Platform",
        category: "Sustainability Analytics",
        tech: ["FastAPI", "PostgreSQL", "Docker", "Merkle Audit"],
        metric: "Async Pipeline | Merkle Audit Trail",
        desc: "Carbon emissions tracking platform with async batch ingestion, Merkle-anchored audit trail, forecasting, and PostgreSQL persistence.",
        link: "https://github.com/poojakira/ESG-Carbon-Telemetry",
        complexity: 91,
        dashboardImg: null,
        mainPoints: [
            "Asynchronous analytics pipeline using FastAPI and PostgreSQL.",
            "Implemented carbon emission forecasting logic and anomaly alerts.",
            "Built audit-friendly reporting structures for enterprise compliances.",
            "Fully dockerized system for repeatable infrastructure rollout."
        ],
        briefing: {
            architecture: "FastAPI Async Layer → PostgreSQL Store → Forecasting Service",
            challenges: "Ensuring scalable, traceable carbon-metrics pipeline.",
            solution: "Built a resilient, Dockerized microservice architecture for ESG data.",
            metrics: ["Async Data", "Dockerized", "Audit-Ready"]
        }
    },
    {
        id: "iot-monitor",
        title: "IoT Telemetry Monitor",
        category: "IoT & Edge Computing",
        tech: ["Python", "MQTT", "Autoencoder", "Streamlit", "PostgreSQL"],
        metric: "Reconstruction Error Scoring | MQTT Ingestion",
        desc: "IoT telemetry monitoring system with MQTT ingestion, autoencoder-based anomaly detection, Kalman filtering, and containerized Streamlit dashboard.",
        link: "https://github.com/poojakira/Orbital-IoT-Monitor",
        complexity: 88,
        dashboardImg: null,
        mainPoints: [
            "Autoencoder reconstruction error for unsupervised anomaly scoring",
            "MQTT-based lightweight telemetry ingestion",
            "Kalman filtering for state estimation",
            "Exponential atmospheric density model for orbital decay simulation",
            "PostgreSQL persistence with black-box logging",
            "Containerized deployment with Docker Compose"
        ],
        briefing: {
            architecture: "MQTT Broker → Telemetry Ingestion → Autoencoder Scoring → Dashboard",
            challenges: "Detecting anomalies in noisy IoT sensor data without labeled training examples.",
            solution: "Used autoencoder reconstruction error as an unsupervised anomaly signal with configurable thresholds.",
            metrics: ["Unsupervised Detection", "MQTT", "Dockerized"]
        }
    },
    {
        id: "rtxoom",
        title: "GPU Memory Optimizer",
        category: "GPU Infrastructure",
        tech: ["PyTorch", "Docker", "Transformer Predictor", "CUDA"],
        metric: "Proactive Defragmentation | Tiered Policy",
        desc: "GPU memory defragmentation system that prevents OOM crashes during transformer training through proactive fragmentation prediction and tiered compaction policies.",
        link: "https://github.com/poojakira/RTX-OOM-Guard",
        complexity: 94,
        dashboardImg: null,
        mainPoints: [
            "Transformer-based predictor for proactive fragmentation forecasting",
            "Tiered compaction policy (compact → evict → emergency) based on severity",
            "Atomic telemetry persistence to prevent data loss on crash",
            "Tensor tracking with automatic registration for monitored workloads",
            "Cross-platform support (CUDA + CPU fallback with Gloo backend)",
            "Full CLI with serve, monitor, and benchmark commands"
        ],
        briefing: {
            architecture: "Memory Profiler → Fragmentation Predictor → Tiered Policy → Compaction Engine",
            challenges: "Preventing OOM crashes in GPU-intensive training without introducing significant overhead.",
            solution: "Built a proactive defragmentation system that predicts fragmentation and applies tiered compaction before OOM events.",
            metrics: ["Proactive Prediction", "Tiered Policy", "Atomic Writes"]
        }
    }
];

export const RADAR_DATA = [
    { subject: 'ML_Security', A: 94, fullMark: 100 },
    { subject: 'MLOps', A: 92, fullMark: 100 },
    { subject: 'Telemetry', A: 90, fullMark: 100 },
    { subject: 'GPU_Infra', A: 88, fullMark: 100 },
    { subject: 'Aerospace', A: 86, fullMark: 100 },
];

export const ACTIVITY_LOGS = [
    { id: 1, event: "Secure ML Platform — 79 tests passing", status: "SUCCESS" },
    { id: 2, event: "Satellite anomaly detection pipeline deployed", status: "COMPLETED" },
    { id: 3, event: "GPU memory optimizer — defrag engine active", status: "ACTIVE" },
    { id: 4, event: "Carbon analytics audit trail verified", status: "STABLE" }
];

export const CERTIFICATIONS = [
    {
        name: "AWS Cloud Security Foundations",
        issuer: "Amazon Web Services",
        id: "AWS-SEC-2025",
        date: "2025",
        color: "amber"
    },
    {
        name: "Technology Innovation Lab (Honeywell Aerospace & ASU)",
        issuer: "Honeywell / ASU",
        id: "HON-TIL-2025",
        date: "2025",
        color: "rose"
    }
];

export const EDUCATION = [
    {
        school: "Arizona State University",
        location: "Phoenix, AZ",
        degree: "M.S., Information Technology Security",
        period: "Aug 2024 – Expected May 2026"
    },
    {
        school: "M. S. Ramaiah University of Applied Sciences",
        location: "Bengaluru, India",
        degree: "B.Tech, Computer Science",
        period: "Aug 2019 – Aug 2023"
    }
];

export const PUBLICATIONS = [
    {
        title: "Personalized E-learning System Using RL Through Satellite",
        publisher: "IEEE INDICON",
        year: "2023",
        description: "Improved student engagement in personalized E-learning platforms by engineering a Q-learning agent within a custom math-quiz environment, adapting quiz difficulty dynamically based on real-time student performance metrics."
    }
];

export const EXPERIENCE = [
    {
        role: "Independent Graduate Researcher",
        company: "Arizona State University",
        period: "Oct 2025 – Present",
        description: [
            "Evaluated MLOps stack stability and latency constraints by prototyping end-to-end satellite-telemetry ML pipelines in simulation (spanning ingestion, feature stores, and training), accelerating observability and reliability for applied aerospace models.",
            "Mitigated Out-Of-Memory (OOM) failures in reinforcement learning and recommendation training loops by executing stress tests to characterize VRAM usage patterns, establishing guardrails that stabilized model training at scale."
        ],
        tags: ["MLOps", "Satellite Telemetry", "GPU Optimization", "Aerospace ML"]
    },
    {
        role: "Graduate Teaching Assistant (IT Security & Web Programming)",
        company: "Arizona State University",
        period: "Mar 2025 – Aug 2025",
        description: [
            "Accelerated evaluation processes for 140+ students across two IT courses by engineering scripted checks and standardized deployment rubrics, reducing manual grading review time by 25%.",
            "Bridged academic theory and enterprise security by mentoring students on real-world controls (e.g., access control, network isolation), enabling accurate mapping of system configurations to industry-standard compliance frameworks."
        ],
        tags: ["IT Security", "Web Programming", "Mentorship", "Compliance"]
    },
    {
        role: "Independent Undergraduate Researcher",
        company: "M.S. Ramaiah University of Applied Sciences",
        period: "Aug 2023 – Feb 2024",
        description: [
            "Advanced adaptive learning systems under satellite connectivity constraints by collaborating with university faculty on experiment design and analysis, culminating in co-authorship and publication of a paper at IEEE INDICON 2023.",
            "Improved student engagement in personalized E-learning platforms by engineering a Q-learning agent within a custom math-quiz environment, adapting quiz difficulty dynamically based on real-time student performance metrics."
        ],
        tags: ["IEEE Published", "Q-Learning", "Satellite Systems", "Research"]
    }
];

export const SKILLS = [
    { name: "Python", level: 95, category: "Languages & ML" },
    { name: "PyTorch", level: 90, category: "Languages & ML" },
    { name: "Anomaly Detection", level: 92, category: "Languages & ML" },
    { name: "Time-Series Modeling", level: 88, category: "Languages & ML" },
    { name: "FastAPI", level: 90, category: "Languages & ML" },
    { name: "scikit-learn", level: 92, category: "Languages & ML" },

    { name: "Docker", level: 92, category: "MLOps & Infrastructure" },
    { name: "CI/CD (GitHub Actions)", level: 88, category: "MLOps & Infrastructure" },
    { name: "Prometheus + Grafana", level: 85, category: "MLOps & Infrastructure" },
    { name: "Telemetry Pipelines", level: 90, category: "MLOps & Infrastructure" },
    { name: "AWS (Cloud Security)", level: 86, category: "MLOps & Infrastructure" },

    { name: "JWT / RBAC Auth", level: 90, category: "Security" },
    { name: "AES Encryption", level: 88, category: "Security" },
    { name: "NIST / ISO 27001 / SOC 2", level: 85, category: "Security" },
    { name: "Threat Detection (ML)", level: 88, category: "Security" },
    { name: "Audit Logging", level: 86, category: "Security" },

    { name: "PostgreSQL", level: 85, category: "Data & Systems" },
    { name: "Firebase / Kafka", level: 88, category: "Data & Systems" },
    { name: "MQTT / IoT", level: 82, category: "Data & Systems" },
    { name: "Streamlit", level: 88, category: "Data & Systems" },

    { name: "Aerospace Telemetry", level: 88, category: "Domain Expertise" },
    { name: "Predictive Maintenance", level: 92, category: "Domain Expertise" },
    { name: "GPU Memory Management", level: 86, category: "Domain Expertise" },

    { name: "IEEE Research Publishing", level: 90, category: "Research" },
    { name: "Technical Writing", level: 88, category: "Research" }
];
