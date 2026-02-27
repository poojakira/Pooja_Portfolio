export const CONTACT = {
    email: "poojakiranbharadwaj@gmail.com",
    phone: "+1 (480) 776-7445",
    linkedin: "https://linkedin.com/in/poojakiran",
    github: "https://github.com/poojakira",
    location: "Tempe, AZ",
    resume: "/src/assets/Pooja_Kiran_RESUME.pdf"
};

export const PROJECTS = [
    {
        id: "apex",
        title: "Apex-X & Aegis-X: Tactical Defense HUD",
        category: "Hypersonic AI",
        tech: ["PINNs", "Lattice Cryptography", "Transformers"],
        metric: "10.11ms Inference Latency (18.2% Optimization)",
        desc: "A hyper-advanced tactical command suite for hypersonic defense. Integrates Physics-Informed Neural Networks (PINNs) for aerodynamic forecasting and GAN-based adversarial denoising for resilient signal reconstruction.",
        link: "https://github.com/poojakira/Apex-Aegis-Tactical-Suite",
        complexity: 99,
        briefing: {
            architecture: "PINN Surrogate Model -> Tactical Transformer (Intent) -> Post-Quantum Secure (Lattice) Mesh Sync",
            challenges: "Neutralizing hypersonic trajectory noise and identifying adversarial jamming in high-velocity simulations.",
            solution: "Implemented StyleGAN-based denoising autoencoders and PINNs with custom Navier-Stokes loss constraints.",
            metrics: ["10.11ms Latency", "99.8% Signal Integrity", "500Hz Sync Rate"],
            architecture_flow: "graph LR; A[Sensor] --> B[PINN]; B --> C[Transformer]; C --> D[Secure Mesh];"
        }
    },
    {
        id: "orbi",
        title: "OrbitIQ: Satellite Health MLOps",
        category: "Orbital Monitoring",
        tech: ["Isolation Forest", "Firebase", "MLflow"],
        metric: "99.9% Latency Reduction (2000ms → 8ms)",
        desc: "Autonomous satellite health and telemetry ecosystem. Features a 10-page command center visualizing N/S/E/W sensor data across CubeSat clusters with edge-optimized anomaly detection.",
        link: "https://github.com/poojakira/orbit-Q",
        complexity: 96,
        briefing: {
            architecture: "Rolling Window Feature Extraction -> Isolation Forest -> Firebase Realtime Ground Station",
            challenges: "Reducing cloud-polling latency for critical debris avoidance maneuvers.",
            solution: "Developed an edge-optimized ML pipeline that predicts trajectory anomalies with sub-10ms latency.",
            metrics: ["8ms Response Time", "95.8% Accuracy", "0.05 Contamination"],
            architecture_flow: "graph TD; A[CubeSat] --> B[Rolling Window]; B --> C[Isolation Forest]; C --> D[Firebase];"
        }
    },
    {
        id: "cmdx",
        title: "CommandX: Mission Control Platform",
        category: "Aerospace GNC",
        tech: ["Kalman Filters", "RL Pilot", "Genetic Algs"],
        metric: "98% Docking Accuracy (Proven via Monte Carlo)",
        desc: "Industrial mission control system built on real orbital physics. Combines EKF state estimation, RL-driven thruster control, and Genetic Algorithms for fuel-optimized trajectory mapping.",
        link: "https://github.com/poojakira/CommandX",
        complexity: 94,
        briefing: {
            architecture: "6-DOF EKF -> RL Pilot Thruster Ctrl -> Monte Carlo IV&V Engine",
            challenges: "Managing hardware degradation and IMU drift through physics-accurate stochastic noise injection.",
            solution: "Engineered an 'Entropy Engine' to simulate 3-sigma worst-case environments for flight certification.",
            metrics: ["60% Fuel Efficiency", "98% Mission Success", "10Hz GNC Cycle"],
            architecture_flow: "graph TD; A[Catalog] --> B[EKF/GNC]; B --> C[RL Pilot]; C --> D[Monte Carlo];"
        }
    },
    {
        id: "eco",
        title: "EcoTrack-Enterprise: Carbon Analytics",
        category: "Industrial ML",
        tech: ["FastAPI", "Random Forest", "Docker"],
        metric: "0.9952 R² Variance Score (High Precision)",
        desc: "Full-stack ML microservice for product carbon lifecycle analytics. Utilizes Docker orchestration to scale FastAPI backends for real-time predictive carbon scoring and security auditing.",
        link: "https://github.com/poojakira/EcoTrack-Enterprise",
        complexity: 90,
        briefing: {
            architecture: "FastAPI Async Core -> Random Forest Regressor -> Isolation Forest Shield",
            challenges: "Processing high-volume concurrent carbon telemetry streams with zero-trust security constraints.",
            solution: "Deployed Docker-orchestrated micro-architectures achieving P90 latency under 300ms for 1,000+ users.",
            metrics: ["0.9952 R2 Score", "<5ms Anomaly Flagging", "281ms P90 Latency"],
            architecture_flow: "graph LR; A[API POST] --> B[RF Predict]; B --> C[Anomaly Shield]; C --> D[Audit Log];"
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
        id: "AWS-ARCH-2025",
        date: "Apr 2025",
        color: "indigo"
    },
    {
        name: "AWS Cloud Security Foundations",
        issuer: "Amazon Web Services",
        id: "AWS-SEC-2025",
        date: "Nov 2025",
        color: "emerald"
    },
    {
        name: "Honeywell Tech Innovation Lab",
        issuer: "Honeywell",
        id: "HON-TIL-2025",
        date: "Nov 2025",
        color: "amber"
    }
];

export const EDUCATION = [
    {
        school: "Arizona State University",
        location: "Tempe, AZ",
        degree: "M.S., Information Technology Security",
        period: "Aug 2024 – May 2026"
    },
    {
        school: "M. S. Ramaiah University",
        location: "India",
        degree: "B.Tech, Computer Science",
        period: "Aug 2019 – Aug 2023"
    }
];

export const PUBLICATIONS = [
    {
        title: "Personalized E-learning System Using RL Through Satellite",
        publisher: "IEEE INDICON",
        year: "2023",
        description: "Optimized learning trajectories with 80% dynamic progression accuracy using a Q-learning agent."
    },
    {
        title: "Smart Charge Pro: Empowering Future Mobility",
        publisher: "IOSR Journal",
        year: "2023",
        description: "Managed concurrent power for 4 vehicles with zero-delay isolation via NodeMCU IoT controllers."
    }
];

export const EXPERIENCE = [
    {
        role: "Graduate IT Grader (Web Programming & Security Compliance)",
        company: "Arizona State University",
        period: "Feb 2025 – Oct 2025",
        description: [
            "Security Compliance: Enforced data governance and risk management for 85+ enterprise assignments by auditing security policies, incident response plans, and compliance frameworks.",
            "Code Review: Improved front-end quality and UI/UX accessibility across 85+ student applications via rigorous reviews of HTML, CSS, and JavaScript wireframes.",
            "SDLC Mentorship: Elevated secure SDLC practices for 85+ students by delivering targeted technical remediation feedback bridging web design with enterprise security compliance."
        ],
        tags: ["Security Compliance", "Code Review", "SDLC"]
    }
];

export const SKILLS = [
    { name: "Python", level: 98 },
    { name: "FastAPI", level: 90 },
    { name: "Docker", level: 85 },
    { name: "NodeMCU IoT", level: 82 },
    { name: "GANs", level: 95 },
    { name: "Transformers", level: 92 },
    { name: "PINNs", level: 88 },
    { name: "RL (Q-Learning)", level: 85 },
    { name: "AWS Cloud", level: 90 },
    { name: "DevSecOps", level: 85 },
    { name: "Security Auditing", level: 82 }
];
