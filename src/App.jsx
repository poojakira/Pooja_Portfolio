import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import AudioPlayer from "./components/AudioPlayer";
import StatusTicker from "./components/StatusTicker";
import BootScreen from "./components/BootScreen";
import TrainingMonitor from "./components/TrainingMonitor";
import { Terminal, Cpu, Shield, Wifi, Clock } from "lucide-react";

export default function App() {
  const [isBooted, setIsBooted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const audioPlayerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleStartAudio = () => {
    // THIS MUST BE CALLED IMMEDIATELY ON BUTTON CLICK
    if (audioPlayerRef.current) {
      audioPlayerRef.current.forcePlay();
    }
  };

  const handleBootComplete = () => {
    setIsBooted(true);
  };

  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30 font-sans bg-[#030712]">
      {/* Boot Screen handles the initialization and Browser Audio Unlock */}
      <AnimatePresence>
        {!isBooted && (
          <BootScreen
            onComplete={handleBootComplete}
            onStartAudio={handleStartAudio}
          />
        )}
      </AnimatePresence>

      {/* Global Overlay Elements - Outside of the blur/opacity div */}

      <AudioPlayer ref={audioPlayerRef} />
      <StatusTicker />

      <div className={`transition-all duration-1000 ${isBooted ? 'opacity-100 blur-0' : 'opacity-0 blur-xl pointer-events-none'}`}>
        {/* Global Progress HUD */}
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-[100]" style={{ scaleX }} />

        {/* Background Visual Stack */}
        <div className="noise-overlay" />
        <div className="vignette" />
        <div className="scanline" />
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[100vh] bg-gradient-to-b from-indigo-950/20 via-[#030712] to-black" />
          <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-indigo-600/5 rounded-full blur-[150px] animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-indigo-900/10 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Futuristic Global HUD Header */}
          <header className="mb-16 border-b border-white/5 pb-8 relative">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-6">
                <motion.div initial={{ rotate: 180, scale: 0 }} animate={{ rotate: 0, scale: 1 }} className="relative group">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-900 flex items-center justify-center p-3 shadow-2xl group-hover:shadow-indigo-500/50 transition-all duration-700">
                    <Cpu className="text-white w-full h-full" />
                  </div>
                  <div className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#030712]" />
                  </div>
                </motion.div>

                <div>
                  <h1 className="text-2xl font-black text-white tracking-tight">POOJA KIRAN BHARADWAJ</h1>
                  <div className="flex items-center gap-3 font-mono text-[9px] font-bold text-indigo-400 tracking-[0.2em] uppercase">
                    <span>Machine Learning Engineer</span>
                    <span className="text-slate-800">|</span>
                    <span>SYSTEM_READY</span>
                  </div>
                </div>
              </div>

              <nav className="flex items-center gap-2 p-1 bg-slate-900/30 rounded-2xl border border-white/5 backdrop-blur-3xl shadow-2xl">
                {[
                  { name: "Projects", href: "#projects" },
                  { name: "Experience", href: "#experience" },
                  { name: "Research", href: "#publications" },
                  { name: "Contact", href: "#contact" }
                ].map((item) => (
                  <a key={item.name} href={item.href} className="px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white rounded-xl hover:bg-white/5 transition-all">
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Global HUD Widgets */}
              <div className="hidden xl:flex items-center gap-6 font-mono text-[9px] text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-indigo-400" />
                  <span>UTC: {time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi size={12} className="text-emerald-400" />
                  <span>LINK: STABLE</span>
                </div>
              </div>
            </div>
          </header>

          <main className="grid gap-12 lg:grid-cols-[1fr_360px] relative">
            <div className="space-y-32">
              <Hero />
              <Projects />
              <div className="grid md:grid-cols-2 gap-12">
                <Experience />
                <Education />
              </div>
              <Publications />
            </div>

            <aside className="space-y-12">
              <TrainingMonitor />
              <Skills />
              <Contact />

              {/* Global System Widget */}
              <div className="glass-card p-6 border-l-4 border-indigo-500">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black uppercase text-slate-500">Node_Architecture</span>
                  <div className="p-1 rounded bg-indigo-500/10 text-indigo-400 animate-pulse">
                    <Shield size={12} />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[9px] font-mono mb-1">
                    <span className="text-slate-500">ENCRYPTION:</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className="h-full bg-indigo-500/60 shadow-[0_0_10px_rgba(79,70,229,0.5)]"
                    />
                  </div>
                </div>
              </div>
            </aside>
          </main>

          <footer className="mt-40 pt-10 border-t border-white/5 pb-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex items-center gap-4 text-[10px] font-mono text-slate-600">
                <span className="text-indigo-500 font-black">PKB_OS</span>
                <span>VERSION_2026.4.2</span>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-800" />)}
                </div>
              </div>

              <div className="flex gap-8 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                <a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Infrastructure</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Access_Control</a>
              </div>

              <div className="flex items-center gap-3 text-slate-700">
                <Terminal size={14} />
                <span className="text-[9px] font-mono uppercase">Status: ML_Engineer_Online</span>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Global Overlay Elements - Rendered last for highest stack priority */}

      <AudioPlayer ref={audioPlayerRef} />
      <StatusTicker />
    </div>
  );
}