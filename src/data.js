export const CONTACT = {
    email: "poojakiranbharadwaj@gmail.com",
    phone: "+1 (480) 776-7445",
    linkedin: "https://linkedin.com/in/poojakiran",
    github: "https://github.com/poojakira",
    location: "Tempe, AZ",
    resume: "#"
};

export const PROJECTS = [
    {
        id: "apex",
        title: "Apex-X & Aegis-X: Tactical Command Suite",
        category: "Aerospace AI",
        tech: ["PINNs", "GANs", "Transformers"],
        metric: "Reduced latency by 18.2% (12.36ms → 10.11ms)",
        desc: "Engineered an AI dashboard for tactical simulations using GANs for noise reduction and a transformer-based surrogate model to support >100k scenarios with <11ms inference latency.",
        link: "https://github.com/poojakira/Apex-Aegis-Tactical-Suite",
        complexity: 98,
        briefing: {
            architecture: "Transformer Surrogate -> GAN Noise Filter -> PINN Solver",
            challenges: "Real-time PINN inference for non-linear aerodynamics in tactical environments.",
            solution: "Implemented a multi-stage transformer architecture for surrogate modeling, bypassing traditional heavy solvers.",
            metrics: ["10.11ms Latency", "94% Noise Reduction", "100k+ Scenarios"],
            architecture_flow: "graph LR; A[Sensor] --> B[Transformer]; B --> C[GAN]; C --> D[Solver];"
        }
    },
    {
        id: "orbi",
        title: "OrbitIQ: CubeSat Anomaly MLOps",
        category: "Mission Control",
        tech: ["MLOps", "Telemetry", "Orchestration"],
        metric: "Decreased response time by 99.6% (2000ms → 8ms)",
        desc: "Architected a telemetry-driven anomaly detection pipeline with automated retraining and deployment, maintaining 95.8% predictive accuracy.",
        link: "https://github.com/poojakira/orbit-Q",
        complexity: 95,
        briefing: {
            architecture: "Docker Orchestration -> MLOps Retraining -> Anomaly Detection Engine",
            challenges: "Latency in high-velocity telemetry data processing for CubeSat clusters.",
            solution: "Built a micro-architecture that prioritizes edge-processing features, reducing the central cloud dependency.",
            metrics: ["8ms Response", "95.8% Prediction Accuracy", "99.6% Latency Reduction"],
            architecture_flow: "graph TD; A[Edge] --> B[Docker Cluster]; B --> C[ML Flow]; C --> D[Dashboard];"
        }
    },
    {
        id: "eco",
        title: "EcoTrack Enterprise: Carbon Analytics",
        category: "Sustainability",
        tech: ["Isolation Forests", "FastAPI", "Docker"],
        metric: "99.5% accuracy with 1,000+ concurrent requests",
        desc: "Built a Docker-orchestrated FastAPI backend exposing ML micro-architectures for enterprise carbon analytics, enabling scalable anomaly detection.",
        link: "https://github.com/poojakira/EcoTrack-Enterprise",
        complexity: 88,
        briefing: {
            architecture: "FastAPI Backend -> Isolation Forest Model -> Docker Swarm",
            challenges: "Scaling anomaly detection across 1,000+ concurrent carbon telemetry streams.",
            solution: "Utilized asynchronous FastAPI endpoints and distributed Isolation Forests for low-overhead anomaly scoring.",
            metrics: ["99.5% Accuracy", "1k+ Concurrent Users", "<50ms Scoring"],
            architecture_flow: "graph LR; A[API] --> B[Async Queue]; B --> C[Isolation Forest]; C --> D[Audit Log];"
        }
    },
    {
        id: "cmdx",
        title: "CommandX: Orbital Mission Control",
        category: "Mission Intelligence",
        tech: ["Genetic Algorithms", "Monte Carlo"],
        metric: "Reduced fuel waste by 60% and verified in <7 mins",
        desc: "Designed a Genetic Algorithm for autonomous orbital trajectory routing and integrated a 1,000+ iteration Monte Carlo suite to rapidly validate mission profiles.",
        link: "https://github.com/poojakira/CommandX",
        complexity: 92,
        briefing: {
            architecture: "Genetic Solver -> Monte Carlo Simulator -> Telemetry Feed",
            challenges: "High-dimensional state-space optimization for fuel-constrained orbital maneuvers.",
            solution: "Developed an adaptive mutation rate algorithm to prevent local minima in trajectory convergence.",
            metrics: ["60% Fuel Efficiency", "99.8% Convergence Rate", "<7m Verification"],
            architecture_flow: "graph TD; A[Genetic Solver] --> B[Monte Carlo]; B --> C[Telemetry]; C --> A;"
        }
    }
];

export const RADAR_DATA = [
    { subject: 'ML_Core', A: 98, fullMark: 100 },
    { subject: 'Security', A: 85, fullMark: 100 },
    { subject: 'Cloud_Ops', A: 90, fullMark: 100 },
    { subject: 'Research', A: 95, fullMark: 100 },
    { subject: 'FrontEnd', A: 88, fullMark: 100 },
];

export const ACTIVITY_LOGS = [
    { id: 1, event: "Optimizing Apex-X surrogate weights", status: "SUCCESS" },
    { id: 2, event: "Validating OrbitIQ telemetry hash", status: "COMPLETED" },
    { id: 3, event: "Synchronizing MLOps registry", status: "ACTIVE" },
    { id: 4, event: "Auditing security protocol T-9", status: "STABLE" }
];

export const CERTIFICATIONS = [
    {
        name: "AWS Academy Cloud Architecting",
        issuer: "Amazon Web Services",
        id: "AWS-ARCH-2024",
        date: "2024",
        color: "indigo"
    },
    {
        name: "Generative AI Fundamentals",
        issuer: "NVIDIA / Deep Learning Institute",
        id: "NV-GAI-2025",
        date: "2025",
        color: "emerald"
    },
    {
        name: "Azure Solutions Associate",
        issuer: "Microsoft",
        id: "AZ-900-EXP",
        date: "2024",
        color: "blue"
    }
];

export const EXPERIENCE = [
    {
        role: "Machine Learning Engineer",
        company: "Arizona State University",
        period: "Feb 2025 – Present",
        description: [
            "Leading efforts in ML-driven security compliance and data governance for 85+ enterprise applications.",
            "Automated audit workflows and risk assessment pipelines, reducing manual review time by 60%.",
            "Improving technical standards and secure SDLC practices through advanced technical reviews."
        ],
        tags: ["MLOps", "Security Compliance", "Infrastructure"]
    },
    {
        role: "Research Intern (Intelligence Systems)",
        company: "M. S. Ramaiah University",
        period: "2022 – 2023",
        description: [
            "Developed Q-learning agents for satellite-based systems with 80% progression accuracy.",
            "Optimized hardware-software concurrent power management for EV charging stations.",
            "Analyzed high-dimensional telemetry data for anomaly detection research."
        ],
        tags: ["Reinforcement Learning", "IoT", "Data Analysis"]
    }
];

export const SKILLS = [
    { name: "Full-Stack AI", level: 85 },
    { name: "React / Vite", level: 90 },
    { name: "Python", level: 98 },
    { name: "PyTorch", level: 95 },
    { name: "TensorFlow", level: 92 },
    { name: "FastAPI", level: 88 },
    { name: "Docker", level: 85 },
    { name: "Security Auditing", level: 82 }
];
