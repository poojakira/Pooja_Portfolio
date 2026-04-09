import React from "react";
import { motion } from "framer-motion";

export default function CircuitryBackground() {
    return (
        <div className="fixed inset-0 -z-15 pointer-events-none opacity-20 overflow-hidden">
            <svg width="100%" height="100%" className="w-full h-full">
                <pattern
                    id="circuit-pattern"
                    x="0"
                    y="0"
                    width="200"
                    height="200"
                    patternUnits="userSpaceOnUse"
                >
                    {/* Data Lines */}
                    <path
                        d="M 0 100 L 200 100 M 100 0 L 100 200"
                        stroke="rgba(249, 115, 22, 0.2)"
                        strokeWidth="0.5"
                        fill="none"
                    />
                    {/* Junction Dots */}
                    <circle cx="100" cy="100" r="1.5" fill="rgba(249, 115, 22, 0.4)" />

                    {/* Pulsing Data Packets */}
                    <motion.circle
                        r="1"
                        fill="#f97316"
                        animate={{
                            cx: [0, 200],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.circle
                        r="1"
                        fill="#f97316"
                        animate={{
                            cy: [0, 200],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 2
                        }}
                    />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
        </div>
    );
}
