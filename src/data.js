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
        tech: ["PINNs", "Lattice Cryptography", "StyleGAN", "Transformers"],
        metric: "10.11ms Inference Latency (18.19% Optimization)",
        desc: "A hyper-advanced tactical command suite for hypersonic defense. Integrates Physics-Informed Neural Networks (PINNs) for aerodynamic forecasting and GAN-based adversarial denoising for resilient signal reconstruction.",
        link: "https://github.com/poojakira/Apex-Aegis-Tactical-Suite",
        complexity: 99,
        dashboardImg: null,
        mainPoints: [
            "PINN Engine with Navier-Stokes physics constraints achieving <5ms surrogate inference",
            "StyleGAN denoising autoencoder — neutralizes electronic warfare & signal jamming",
            "Tactical Transformer trained on 100k+ hypersonic engagement scenarios",
            "Byzantine-Mesh with SHA3-512 lattice signatures & 10Hz self-healing logic",
            "NASA TLE integration for live satellite tracking + FEM structural simulation",
            "Baseline 12.36ms → Optimized 10.11ms (18.19% net reduction), 99.8% signal integrity"
        ],
        briefing: {
            architecture: "PINN Surrogate Model → Tactical Transformer (Intent) → Post-Quantum Secure (Lattice) Byzantine-Mesh Sync",
            challenges: "Neutralizing hypersonic trajectory noise and identifying adversarial jamming in high-velocity simulations.",
            solution: "Implemented StyleGAN-based denoising autoencoders and PINNs with custom Navier-Stokes loss constraints.",
            metrics: ["10.11ms Latency", "99.8% Signal Integrity", "500Hz Sync Rate"]
        }
    },
    {
        id: "orbi",
        title: "OrbitIQ: Satellite Health MLOps",
        category: "Orbital Monitoring",
        tech: ["Isolation Forest", "Firebase", "MLflow", "Streamlit"],
        metric: "99.9% Latency Reduction (2000ms → 8ms)",
        desc: "Autonomous satellite health and telemetry ecosystem. 10-page command center visualizing N/S/E/W sensor data across CubeSat clusters with edge-optimized anomaly detection and a 360° orbital proximity radar.",
        link: "https://github.com/poojakira/orbit-Q",
        complexity: 96,
        dashboardImg: "https://github.com/user-attachments/assets/ca586a8d-13a9-4a04-8d69-686f829b3516",
        mainPoints: [
            "Isolation Forest unsupervised ML — detects spatial anomalies across N/S/E/W sensor faces",
            "Cloud latency slashed from 2000ms → 8ms via edge-optimized rolling window feature extraction",
            "360° polar orbital radar for real-time debris proximity visualization",
            "Firebase Realtime DB ground station with continuous 10-second Mission Pulse orchestrator",
            "MLflow experiment tracking — full audit trail for every model version",
            "95.8% predictive accuracy with 0.05 contamination rate (high-precision outlier detection)"
        ],
        briefing: {
            architecture: "Rolling Window Feature Extraction → Isolation Forest → Firebase Realtime Ground Station",
            challenges: "Reducing cloud-polling latency for critical debris avoidance maneuvers.",
            solution: "Developed an edge-optimized ML pipeline that predicts trajectory anomalies with sub-10ms latency.",
            metrics: ["8ms Response Time", "95.8% Accuracy", "0.05 Contamination Rate"]
        }
    },
    {
        id: "cmdx",
        title: "CommandX: Mission Control Platform",
        category: "Aerospace GNC",
        tech: ["Kalman Filters", "RL Pilot", "Genetic Algs", "Monte Carlo"],
        metric: "98% Docking Accuracy (3-Sigma Monte Carlo Certified)",
        desc: "Industrial mission control system built on real orbital physics. Parses the live Space-Track satellite catalog. EKF at 10Hz fuses sensor data across 6-DOF. RL Pilot steers a 500kg spacecraft via 50N thruster.",
        link: "https://github.com/poojakira/CommandX",
        complexity: 94,
        dashboardImg: "https://github.com/user-attachments/assets/3e3c3e07-0fa4-4d66-8df5-e840ecd55b03",
        mainPoints: [
            "Extended Kalman Filter (EKF) @ 10Hz — 6-DOF state estimation fusing noisy IMU data",
            "RL Pilot — reinforcement learning agent controlling a 500kg spacecraft with a 50N thruster",
            "Entropy Engine — injects thermal noise, IMU drift & radiation bit-flips for honest testing",
            "Monte Carlo IV&V certification — thousands of docking simulations, 3-sigma worst-case proven",
            "Genetic Algorithm trajectory optimizer — 60% fuel efficiency improvement",
            "Parses live Space-Track catalog of 15,000+ real satellites for collision avoidance"
        ],
        briefing: {
            architecture: "6-DOF EKF → RL Pilot Thruster Ctrl → Entropy Engine → Monte Carlo IV&V Engine",
            challenges: "Managing hardware degradation and IMU drift through physics-accurate stochastic noise injection.",
            solution: "Engineered an 'Entropy Engine' to simulate 3-sigma worst-case environments for flight certification.",
            metrics: ["60% Fuel Efficiency", "98% Mission Success", "10Hz GNC Cycle"]
        }
    },
    {
        id: "eco",
        title: "EcoTrack-Enterprise: Carbon Analytics",
        category: "Industrial ML",
        tech: ["FastAPI", "Random Forest", "Docker", "Isolation Forest"],
        metric: "R² = 0.9952 | P90 = 281ms @ 1,000 Users",
        desc: "Full-stack ML microservice for product carbon lifecycle analytics. Docker-orchestrated FastAPI backend with Random Forest regression for carbon prediction and Isolation Forest zero-trust security layer.",
        link: "https://github.com/poojakira/EcoTrack-Enterprise",
        complexity: 90,
        dashboardImg: "https://github.com/user-attachments/assets/18b5aeb5-1695-41cd-b8e9-504b998397c1",
        mainPoints: [
            "Random Forest Regressor — R²=0.9952, explains 99.5% of carbon footprint variance",
            "Isolation Forest zero-trust security layer — flags out-of-distribution inputs in <5ms",
            "FastAPI async REST API — handles 1,000 concurrent requests at P90=281ms",
            "Docker Compose multi-container orchestration (backend + frontend)",
            "18-feature product carbon prediction from Kaggle Product Lifecycle dataset",
            "Stateless architecture with horizontal scaling via multiple Uvicorn workers"
        ],
        briefing: {
            architecture: "FastAPI Async Core → Random Forest Regressor → Isolation Forest Shield → Streamlit Dashboard",
            challenges: "Processing high-volume concurrent carbon telemetry streams with zero-trust security constraints.",
            solution: "Deployed Docker-orchestrated micro-architectures achieving P90 latency under 300ms for 1,000+ users.",
            metrics: ["R²=0.9952", "<5ms Anomaly Flagging", "281ms P90 Latency"]
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
    { name: "Python", level: 98, category: "Languages" },
    { name: "JavaScript / React", level: 88, category: "Languages" },
    { name: "SQL", level: 82, category: "Languages" },
    { name: "HTML / CSS", level: 90, category: "Languages" },

    { name: "PINNs", level: 94, category: "ML / Deep Learning" },
    { name: "GANs / StyleGAN", level: 95, category: "ML / Deep Learning" },
    { name: "Random Forest", level: 92, category: "ML / Deep Learning" },
    { name: "Isolation Forest", level: 90, category: "ML / Deep Learning" },
    { name: "Reinforcement Learning", level: 88, category: "ML / Deep Learning" },
    { name: "Kalman Filters (EKF)", level: 86, category: "ML / Deep Learning" },
    { name: "Monte Carlo Methods", level: 84, category: "ML / Deep Learning" },
    { name: "Genetic Algorithms", level: 82, category: "ML / Deep Learning" },

    { name: "Transformers / BERT", level: 93, category: "NLP & Transformers" },
    { name: "Fine-Tuning LLMs", level: 88, category: "NLP & Transformers" },
    { name: "Attention Mechanisms", level: 90, category: "NLP & Transformers" },
    { name: "Tokenization & Embeddings", level: 87, category: "NLP & Transformers" },

    { name: "PyTorch", level: 94, category: "Frameworks & Tools" },
    { name: "TensorFlow", level: 90, category: "Frameworks & Tools" },
    { name: "FastAPI", level: 92, category: "Frameworks & Tools" },
    { name: "Streamlit", level: 88, category: "Frameworks & Tools" },
    { name: "Docker", level: 88, category: "Frameworks & Tools" },
    { name: "MLflow", level: 85, category: "Frameworks & Tools" },
    { name: "Git / GitHub", level: 92, category: "Frameworks & Tools" },
    { name: "Vite / React", level: 86, category: "Frameworks & Tools" },

    { name: "AWS (SageMaker / EC2 / S3)", level: 90, category: "Cloud & MLOps" },
    { name: "Firebase Realtime DB", level: 88, category: "Cloud & MLOps" },
    { name: "Google Cloud / Vertex AI", level: 85, category: "Cloud & MLOps" },
    { name: "CI/CD Pipelines", level: 84, category: "Cloud & MLOps" },
    { name: "Kubernetes", level: 78, category: "Cloud & MLOps" },
    { name: "Model Monitoring & Drift", level: 83, category: "Cloud & MLOps" },

    { name: "Post-Quantum Cryptography", level: 86, category: "Security" },
    { name: "Zero-Trust Architecture", level: 84, category: "Security" },
    { name: "DevSecOps / SDLC", level: 88, category: "Security" },
    { name: "IAM & Access Control", level: 85, category: "Security" },
    { name: "Security Compliance", level: 86, category: "Security" },
    { name: "Incident Response", level: 80, category: "Security" },

    { name: "IEEE Research Publishing", level: 90, category: "Research" },
    { name: "Technical Writing", level: 88, category: "Research" },
    { name: "IoT (NodeMCU)", level: 82, category: "Research" }
];
