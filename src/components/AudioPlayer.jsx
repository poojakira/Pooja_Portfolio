import React, { useState, useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Headphones, Play, Sparkles } from "lucide-react";

/**
 * AUDIO_ENGINE_V24: PROCEDURAL_HARMONY
 * 100% Network-Independent. Generates soft piano synth in-code.
 * Bypasses all CDN, hotlinking, and CORS failures.
 */
const AudioPlayer = forwardRef((props, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const audioCtxRef = useRef(null);
    const schedulerRef = useRef(null);
    const nextNoteTimeRef = useRef(0);

    // Soft Piano Synthesizer Logic
    const playPianoNote = (frequency, time, duration) => {
        if (!audioCtxRef.current) return;

        const ctx = audioCtxRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        // Soft Sine + Triangle for warmth
        osc.type = "sine";

        // ADSR Envelope (Piano-style)
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.12, time + 0.05); // Attack
        gain.gain.exponentialRampToValueAtTime(0.01, time + duration); // Decay

        // Filter for "Lofi" warmth
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(800, time);
        filter.frequency.exponentialRampToValueAtTime(400, time + duration);

        osc.frequency.setValueAtTime(frequency, time);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(time);
        osc.stop(time + duration);
    };

    const sequence = [
        // Am9 chord sequence
        [220.00, 261.63, 329.63, 392.00, 493.88], // A2, C4, E4, G4, B4
        // Dm9 chord sequence
        [146.83, 293.66, 349.23, 440.00, 523.25], // D2, D4, F4, A4, C5
        // G13 chord sequence
        [196.00, 246.94, 349.23, 440.00, 659.25], // G2, B3, F4, A4, E5
        // Cmaj9 chord sequence
        [130.81, 261.63, 329.63, 392.00, 493.88]  // C2, C4, E4, G4, B4
    ];

    const scheduler = () => {
        while (nextNoteTimeRef.current < audioCtxRef.current.currentTime + 0.1) {
            const chordIndex = Math.floor(nextNoteTimeRef.current / 4) % sequence.length;
            const chord = sequence[chordIndex];

            // Play chord notes with slight stagger (humanize)
            chord.forEach((freq, i) => {
                playPianoNote(freq, nextNoteTimeRef.current + (i * 0.02), 3.5);
            });

            nextNoteTimeRef.current += 4.0; // Next chord every 4 seconds
        }
        schedulerRef.current = requestAnimationFrame(scheduler);
    };

    const startAudio = () => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (audioCtxRef.current.state === "suspended") {
            audioCtxRef.current.resume();
        }

        nextNoteTimeRef.current = audioCtxRef.current.currentTime;
        scheduler();
        setIsPlaying(true);
        setIsBlocked(false);
    };

    const stopAudio = () => {
        if (schedulerRef.current) {
            cancelAnimationFrame(schedulerRef.current);
        }
        setIsPlaying(false);
    };

    useImperativeHandle(ref, () => ({
        forcePlay: () => {
            if (!isPlaying) startAudio();
        }
    }));

    const attemptPlay = () => {
        try {
            startAudio();
        } catch (e) {
            console.warn("Autoplay Blocked:", e);
            setIsBlocked(true);
        }
    };

    const togglePlay = (e) => {
        if (e) e.stopPropagation();
        if (isPlaying) {
            stopAudio();
        } else {
            attemptPlay();
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-[9999] flex items-center gap-4">
            <AnimatePresence>
                {isBlocked && !isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="glass-card flex items-center gap-4 pl-5 pr-2 py-2 bg-orange-500/10 border-orange-500/30 backdrop-blur-3xl shadow-2xl"
                    >
                        <div className="flex items-center gap-3">
                            <Headphones size={16} className="text-orange-400 animate-pulse" />
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white">Audio Sync Ready</span>
                                <span className="text-[9px] text-orange-300/70 font-bold uppercase">Procedural Synthesis Online</span>
                            </div>
                        </div>
                        <button
                            onClick={attemptPlay}
                            className="bg-orange-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-white flex items-center gap-2 shadow-lg"
                        >
                            <Play size={12} fill="currentColor" />
                            Turn On
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className={`group w-14 h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 border shadow-2xl ${isPlaying
                        ? "bg-orange-600 border-orange-400/50 text-white shadow-orange-500/40"
                        : "bg-slate-950 border-white/10 text-slate-500 hover:text-white"
                    }`}
            >
                {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
                {isPlaying && (
                    <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute -top-1 -right-1"
                    >
                        <Sparkles size={12} className="text-amber-300" />
                    </motion.div>
                )}
            </motion.button>
        </div>
    );
});

export default AudioPlayer;
