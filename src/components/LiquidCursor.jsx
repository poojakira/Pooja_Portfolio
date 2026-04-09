import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function LiquidCursor() {
    const [isPointer, setIsPointer] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target;
            const isClickable =
                target.closest('button') ||
                target.closest('a') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsPointer(!!isClickable);

            // Magnetic Snapping Logic
            const card = target.closest('.glass-card');
            if (card) {
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distance = Math.sqrt(
                    Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
                );

                if (distance < 100) {
                    cursorX.set(centerX + (e.clientX - centerX) * 0.4);
                    cursorY.set(centerY + (e.clientY - centerY) * 0.4);
                }
            }
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-orange-500/50 pointer-events-none z-[9999] hidden md:block"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: "-50%",
                    y: "-50%",
                    scale: isPointer ? 1.5 : 1,
                    backgroundColor: isPointer ? "rgba(234, 88, 12, 0.1)" : "transparent",
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Global Point Light - State of the art illumination */}
            <motion.div
                className="fixed top-0 left-0 w-[1000px] h-[1000px] rounded-full pointer-events-none z-[1] hidden md:block opacity-20"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)",
                    mixBlendMode: "screen",
                }}
            />
        </>
    );
}
