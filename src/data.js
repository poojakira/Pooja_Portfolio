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
        id: "aerospace-traj",
        title: "Aerospace-Trajectory-Simulator",
        category: "Aerospace Systems",
        tech: ["Python", "PyTorch", "RK4 Integration", "ML Surrogates"],
        metric: "High-Fidelity Physics Engine",
        desc: "Physics-aware aerospace trajectory simulation sandbox using Runge-Kutta (RK4) integration, atmospheric models, and ML surrogates for computationally efficient constrained inference experiments.",
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
        title: "CubeSat-Health-Monitor",
        category: "Satellite Health Analytics",
        tech: ["Firebase", "Python", "Anomaly Analytics", "Ensemble Detection"],
        metric: "15.72μs Inference | 63,622 events/s",
        desc: "High-volume satellite telemetry processing pipeline with Firebase-backed ensemble anomaly detection. Engineered for real-time CubeSat health monitoring with precision anomaly analytics and strict false alarm rate control.",
        link: "https://github.com/poojakira/CubeSat-Health-Monitor",
        complexity: 96,
        dashboardImg: null,
        mainPoints: [
            "Firebase-backed pipeline with ensemble anomaly detection achieving 15.72μs inference latency",
            "Throughput of 63,622 events/second for high-volume satellite telemetry processing",
            "F1 score of 0.928 (0.942 precision, 0.915 recall) for health anomaly classification",
            "False alarm rate strictly controlled to 3–5% to minimize operational noise",
            "Real-time CubeSat health assessment across multiple telemetry channels",
            "Production-grade anomaly analytics tuned for safety-conscious satellite operations"
        ],
        briefing: {
            architecture: "Telemetry Ingestion → Firebase Pipeline → Ensemble Anomaly Detection → Health Assessment",
            challenges: "Sustaining high-volume telemetry processing while minimizing false alarms in safety-critical satellite operations.",
            solution: "Engineered ensemble anomaly detection with tuned precision/recall trade-offs and strict false alarm rate bounds of 3–5%.",
            metrics: ["15.72μs Latency", "F1: 0.928", "63,622 evt/s"]
        }
    },
    {
        id: "mission-control",
        title: "Mission-Control-Simulator",
        category: "Mission Control Monitoring",
        tech: ["Python", "Streamlit", "Anomaly Detection", "Telemetry"],
        metric: "Operator-Facing Visuals",
        desc: "Mission-control telemetry simulation and anomaly surfacing stack for orbital monitoring and operator-facing dashboard applications.",
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
        title: "ESG-Carbon-Telemetry",
        category: "Sustainability Analytics",
        tech: ["FastAPI", "PostgreSQL", "Docker", "Forecasting"],
        metric: "Async Analytics Pipeline",
        desc: "ESG telemetry and carbon analytics platform enabling asynchronous pipelines, carbon footprint forecasting, anomaly detection, and audit-ready reporting.",
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
        id: "pulsenet",
        title: "PulseNet-RUL-Forecasting",
        category: "Predictive Maintenance",
        tech: ["Python", "Time-Series Modeling", "NASA C-MAPSS", "Anomaly Workflows"],
        metric: "RUL RMSE: 166.7 | ~10% Over Baseline",
        desc: "End-to-end predictive maintenance forecasting model trained on NASA C-MAPSS turbofan degradation data. Features telemetry-driven anomaly workflows backed by automated tests for high-reliability fault visibility in production environments.",
        link: "https://github.com/poojakira/PulseNet-RUL-Forecasting",
        complexity: 92,
        dashboardImg: null,
        mainPoints: [
            "Remaining Useful Life (RUL) RMSE of 166.7 — approximately 10% improvement over linear baseline",
            "Trained on NASA C-MAPSS turbofan engine degradation dataset for predictive maintenance",
            "Telemetry-driven anomaly workflows with anomaly F1 of 0.373",
            "52 automated tests ensuring high-reliability fault visibility in production",
            "Handles 52,368 req/s throughput with P95 latency of 3.94ms",
            "End-to-end forecasting pipeline from feature extraction to RUL prediction"
        ],
        briefing: {
            architecture: "NASA C-MAPSS Data → Feature Engineering → Time-Series Model → Anomaly Workflows → Automated Tests",
            challenges: "Achieving accurate remaining useful life predictions on noisy turbofan sensor data while maintaining production-grade reliability.",
            solution: "Developed an end-to-end forecasting model with telemetry-driven anomaly workflows and 52 automated tests for validation.",
            metrics: ["RMSE: 166.7", "52,368 req/s", "P95: 3.94ms"]
        }
    },
    {
        id: "rtxoom",
        title: "RTX-OOM-Guard",
        category: "GPU Memory Optimization",
        tech: ["PyTorch", "Docker", "GPU Optimization", "Memory Profiling"],
        metric: "OOM Crashes: 23 → 0 | <2% Overhead",
        desc: "GPU memory defragmentation guard for RTX-class deep learning workloads. Eliminates Out-Of-Memory crashes while maintaining minimal training overhead. Optimizes VRAM utilization and reduces memory fragmentation for stable model training at scale.",
        link: "https://github.com/poojakira/RTX-OOM-Guard",
        complexity: 94,
        dashboardImg: null,
        mainPoints: [
            "Eliminated Out-Of-Memory (OOM) crashes from 23 to 0 on RTX-class GPU workloads",
            "Training overhead maintained under 2% — negligible performance impact",
            "VRAM utilization improved from 94% to 87% through fragmentation mitigation",
            "Memory fragmentation ratio reduced from 0.61 to 0.18",
            "Stabilized deep learning workloads on RTX GPUs for reliable training at scale",
            "Modeled and mitigated GPU memory fragmentation patterns for accelerator efficiency"
        ],
        briefing: {
            architecture: "GPU Memory Profiler → Fragmentation Analyzer → Defragmentation Guard → OOM Prevention Layer",
            challenges: "Preventing OOM crashes in GPU-intensive deep learning workloads without introducing significant training overhead.",
            solution: "Built a defragmentation guard that models VRAM usage patterns and proactively mitigates fragmentation before OOM events.",
            metrics: ["0 OOM Crashes", "<2% Overhead", "Frag: 0.61→0.18"]
        }
    }
];

export const RADAR_DATA = [
    { subject: 'ML_Core', A: 96, fullMark: 100 },
    { subject: 'MLOps', A: 94, fullMark: 100 },
    { subject: 'Telemetry', A: 92, fullMark: 100 },
    { subject: 'GPU_Opt', A: 90, fullMark: 100 },
    { subject: 'Aerospace', A: 88, fullMark: 100 },
];

export const ACTIVITY_LOGS = [
    { id: 1, event: "CubeSat telemetry pipeline — 63K evt/s", status: "SUCCESS" },
    { id: 2, event: "PulseNet RUL model — RMSE 166.7", status: "COMPLETED" },
    { id: 3, event: "RTX-OOM-Guard — 0 OOM crashes", status: "ACTIVE" },
    { id: 4, event: "MLOps pipeline stability audit", status: "STABLE" }
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
    { name: "Python", level: 98, category: "Languages & ML" },
    { name: "PyTorch", level: 94, category: "Languages & ML" },
    { name: "Time-Series Modeling", level: 90, category: "Languages & ML" },
    { name: "Anomaly Detection", level: 92, category: "Languages & ML" },
    { name: "Forecasting", level: 88, category: "Languages & ML" },
    { name: "ML Surrogates", level: 86, category: "Languages & ML" },

    { name: "Docker", level: 92, category: "MLOps & Infrastructure" },
    { name: "CI/CD Pipelines", level: 88, category: "MLOps & Infrastructure" },
    { name: "Reproducible Deployment", level: 86, category: "MLOps & Infrastructure" },
    { name: "Telemetry Pipelines", level: 90, category: "MLOps & Infrastructure" },
    { name: "AWS (SageMaker / EC2 / S3)", level: 88, category: "MLOps & Infrastructure" },

    { name: "PostgreSQL", level: 85, category: "Data & Systems" },
    { name: "Firebase", level: 90, category: "Data & Systems" },
    { name: "IoT Telemetry", level: 84, category: "Data & Systems" },
    { name: "Streamlit", level: 88, category: "Data & Systems" },
    { name: "Async Pipelines", level: 86, category: "Data & Systems" },

    { name: "Aerospace Systems", level: 90, category: "Domain Expertise" },
    { name: "Predictive Maintenance", level: 92, category: "Domain Expertise" },
    { name: "ESG Analytics", level: 82, category: "Domain Expertise" },
    { name: "Mission-Control Simulation", level: 88, category: "Domain Expertise" },

    { name: "IEEE Research Publishing", level: 90, category: "Research" },
    { name: "Technical Writing", level: 88, category: "Research" }
];
