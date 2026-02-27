/**
 * GEMINI_INTELLIGENCE_CORE (V2.0)
 * Specialized Knowledge Base for Pooja Kiran Bharadwaj
 * Focus: Machine Learning Engineering & Applied AI
 */

export const BRAIN_CONFIG = {
    identity: {
        name: "Gemini",
        role: "Technical Portfolio Assistant",
        tone: "Professional, Engineering-focused, Nuanced",
        mission: "Provide deep technical insights into Pooja's ML engineering capabilities."
    },
    knowledge_base: {
        education: {
            asu: "M.S. in Information Technology Security at Arizona State University (2024-2026). Focused on AI Security and Enterprise Compliance.",
            ramaiya: "B.Tech in Computer Science from M. S. Ramaiah University (2019-2023)."
        },
        research: [
            "IEEE INDICON 2023: Personalized E-learning System using RL. Optimized learning trajectories with 80% dynamic progression accuracy.",
            "Smart Charge Pro: Managed concurrent power for 4 vehicles with zero-delay isolation via NodeMCU IoT controllers."
        ],
        projects: {
            apex: "Apex-X & Aegis-X: Uses Physics-Informed Neural Networks (PINNs) and GANs for tactical aerospace simulations. Reduced inference latency by 18.2% (~10ms) and achieved 94% noise reduction.",
            orbit: "OrbitIQ: End-to-end MLOps pipeline for CubeSat telemetry. Achieved 99.6% faster response for anomaly detection (8ms latency) with 95.8% accuracy.",
            eco: "EcoTrack: Docker-orchestrated FastAPI backend for enterprise carbon analytics. Handles 1,000+ concurrent requests with 99.5% anomaly detection accuracy.",
            command: "CommandX: Genetic Algorithms for autonomous orbital trajectory routing. Reduced fuel waste by 60% with <7 min verification time."
        },
        skills: {
            ai: "Transformers (BERT), GANs, PINNs, Reinforcement Learning (Q-Learning), Monte Carlo Simulations.",
            mlops: "Docker, Kubernetes, FastAPI, AWS Academy Cloud Architecting, DevSecOps.",
            tools: "Python, NodeMCU IoT, Linux Kernel V4.2 optimization."
        },
        recruitment: {
            status: "Seeking Machine Learning Engineer or Applied AI roles.",
            email: "poojakiranbharadwaj@gmail.com",
            location: "Tempe, AZ",
            github: "poojakira"
        }
    }
};

export const getResponse = (input) => {
    const query = input.toLowerCase();

    if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
        return "Hello! I am the Gemini Intelligence Core. I can analyze Pooja's ML architecture, discuss her research on RL-based satellite systems, or explain the performance metrics of the Apex-X Command Suite. What would you like to explore?";
    }

    if (query.includes("projects") || query.includes("portfolio")) {
        return "Pooja has deployed several high-impact ML systems: 1. Apex-X (Aerospace PINNs), 2. OrbitIQ (Telemetry MLOps), 3. CommandX (Genetic Orbitals), and 4. EcoTrack (Enterprise Analytics). Which mission profile should we deep-dive into?";
    }

    if (query.includes("education") || query.includes("university") || query.includes("school")) {
        return `Pooja is currently pursuing an M.S. in IT Security at Arizona State University (ASU), specializing in AI security. She previously completed her B.Tech at M.S. Ramaiah University.`;
    }

    if (query.includes("skill") || query.includes("stack") || query.includes("tech")) {
        return "Her technical stack is optimized for high-performance AI: Transformers/BERT, PINNs, RL (Q-Learning), and robust MLOps utilizing Docker/FastAPI. She also holds AWS Cloud certifications.";
    }

    if (query.includes("experience") || query.includes("work")) {
        return "Pooja's professional focus centers on Machine Learning and System Security. At ASU, she mentored 85+ students in web programming and security compliance, while her research in RL has been published in IEEE INDICON.";
    }

    if (query.includes("contact") || query.includes("hire") || query.includes("email")) {
        return `You can initiate a technical consultation via poojakiranbharadwaj@gmail.com. She is currently based in Tempe, AZ and is ready for ML Engineering missions.`;
    }

    return "I am the Gemini Portfolio Assistant. I can provide detailed metrics on Pooja's PINN models, GAN noise reduction performance, or MLOps pipeline latencies. How can I assist your technical evaluation?";
};
