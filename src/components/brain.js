/**
 * GEMINI_INTELLIGENCE_CORE (V2.0)
 * Specialized Knowledge Base for Pooja Kiran Bharadwaj
 * Focus: Machine Learning Engineering & Applied AI
 */

export const BRAIN_CONFIG = {
    identity: {
        name: "Gemini",
        role: "Technical Portfolio Assistant",
        tone: "Professional, Engineering-focused,Nuanced",
        mission: "Provide deep technical insights into Pooja's ML engineering capabilities."
    },
    knowledge_base: {
        projects: {
            apex: "Apex-X & Aegis-X: Uses PINNs and GANs for tactical aerospace simulations. Reduced latency to ~10ms.",
            orbit: "OrbitIQ: MLOps pipeline for CubeSat telemetry. Achieved 99.6% faster response for anomaly detection.",
            eco: "EcoTrack: Scalable ML micro-architectures using FastAPI and Docker for carbon analytics.",
            command: "CommandX: Genetic Algorithms for autonomous orbital trajectory routing."
        },
        skills: {
            ml: "Expertise in Transformers, GANs, RL (Q-Learning), and Monte Carlo simulations.",
            infra: "Missions deployed using Docker, Kubernetes, and optimized GPU clusters.",
            security: "Focus on AI Threat Modeling and Secure SDLC."
        },
        recruitment: {
            status: "Open for Machine Learning Engineering and Applied AI roles.",
            email: "poojakiranbharadwaj@gmail.com",
            location: "Tempe, AZ (Arizona State University Alumni)"
        }
    }
};

export const getResponse = (input) => {
    const query = input.toLowerCase();

    if (query.includes("projects") || query.includes("what did") || query.includes("portfolio")) {
        return "I can detail Pooja's work on Apex-X (Aerospace AI), OrbitIQ (MLOps), and CommandX (Genetic Algorithms). Each project focuses on high-performance inference and scale.";
    }

    if (query.includes("skill") || query.includes("tech") || query.includes("expert")) {
        return "Pooja's stack is specialized for Intelligence-driven systems: Python/FastAPI, Transformers, RL, and robust MLOps on AWS/Azure.";
    }

    if (query.includes("resume") || query.includes("cv") || query.includes("download")) {
        return "You can download Pooja's official Resume directly from the HUD (Hero Section) or the Contact module. It's pinned for easy access.";
    }

    if (query.includes("contact") || query.includes("email") || query.includes("hire")) {
        return "Pooja is currently active in the ML/AI field. You can reach her at poojakiranbharadwaj@gmail.com and track her progress in Tempe, AZ.";
    }

    return "I am the Gemini Portfolio Assistant. I can explain Pooja's ML engineering architecture, project metrics, or specific skill proficiencies. What would you like to analyze?";
};
