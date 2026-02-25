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
        link: "#",
        complexity: 98,
        briefing: {
            architecture: "Transformer Surrogate -> GAN Noise Filter -> PINN Solver",
            challenges: "Real-time PINN inference for non-linear aerodynamics in tactical environments.",
            solution: "Implemented a multi-stage transformer architecture for surrogate modeling, bypassing traditional heavy solvers.",
            metrics: ["10.11ms Latency", "94% Noise Reduction", "100k+ Scenarios"]
        }
    },
    {
        id: "orbi",
        title: "OrbitIQ: CubeSat Anomaly MLOps",
        category: "Mission Control",
        tech: ["MLOps", "Telemetry", "Orchestration"],
        metric: "Decreased response time by 99.6% (2000ms → 8ms)",
        desc: "Architected a telemetry-driven anomaly detection pipeline with automated retraining and deployment, maintaining 95.8% predictive accuracy.",
        link: "#",
        complexity: 95,
        briefing: {
            architecture: "Docker Orchestration -> MLOps Retraining -> Anomaly Detection Engine",
            challenges: "Latency in high-velocity telemetry data processing for CubeSat clusters.",
            solution: "Built a micro-architecture that prioritizes edge-processing features, reducing the central cloud dependency.",
            metrics: ["8ms Response", "95.8% Prediction Accuracy", "99.6% Latency Reduction"]
        }
    },
    {
        id: "eco",
        title: "EcoTrack Enterprise: Carbon Analytics",
        category: "Sustainability",
        tech: ["Isolation Forests", "FastAPI", "Docker"],
        metric: "99.5% accuracy with 1,000+ concurrent requests",
        desc: "Built a Docker-orchestrated FastAPI backend exposing ML micro-architectures for enterprise carbon analytics, enabling scalable anomaly detection.",
        link: "#",
        complexity: 88,
        briefing: {
            architecture: "FastAPI Backend -> Isolation Forest Model -> Docker Swarm",
            challenges: "Scaling anomaly detection across 1,000+ concurrent carbon telemetry streams.",
            solution: "Utilized asynchronous FastAPI endpoints and distributed Isolation Forests for low-overhead anomaly scoring.",
            metrics: ["99.5% Accuracy", "1k+ Concurrent Users", "<50ms Scoring"]
        }
    },
    {
        id: "cmdx",
        title: "CommandX: Orbital Mission Control",
        category: "Mission Intelligence",
        tech: ["Genetic Algorithms", "Monte Carlo"],
        metric: "Reduced fuel waste by 60% and verified in <7 mins",
        desc: "Designed a Genetic Algorithm for autonomous orbital trajectory routing and integrated a 1,000+ iteration Monte Carlo suite to rapidly validate mission profiles.",
        link: "#",
        complexity: 92,
        briefing: {
            architecture: "Genetic Solver -> Monte Carlo Simulator -> Telemetry Feed",
            challenges: "High-dimensional state-space optimization for fuel-constrained orbital maneuvers.",
            solution: "Developed an adaptive mutation rate algorithm to prevent local minima in trajectory convergence.",
            metrics: ["60% Fuel Efficiency", "99.8% Convergence Rate", "<7m Verification"]
        }
    }
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
        period: "Feb 2025 – Oct 2025",
        description: [
            "Leading efforts in ML-driven security compliance and data governance for 85+ enterprise applications.",
            "Automated audit workflows and risk assessment pipelines, reducing manual review time by 60%.",
            "Improving technical standards and secure SDLC practices through advanced technical reviews."
        ],
        tags: ["MLOps", "Security Compliance", "Infrastructure"]
    }
];

export const SKILLS = {
    languages: ["Python", "FastAPI", "JavaScript", "HTML/CSS", "C++", "SQL"],
    ml: ["GANs", "Transformers", "PINNs", "RL (Q-Learning, MDP)", "Monte Carlo", "Random Forests"],
    cloud: ["AWS Academy Cloud Architecting", "MLOps", "Azure", "Docker", "Kubernetes"],
    security: ["DevSecOps", "Secure SDLC", "Network Defense", "Data Governance", "AI Threat Modeling"]
};
