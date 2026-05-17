import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import SkillBadges from "./components/SkillBadges";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative min-h-screen font-sans bg-[#0a0a0a] text-white">
      {/* Scroll progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-0.5 bg-orange-500 origin-left z-50" style={{ scaleX }} />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-16 pb-8 border-b border-white/10">
          <h1 className="text-3xl font-bold tracking-tight">Pooja Kiran</h1>
          <p className="text-sm text-slate-400 mt-1">ML Security Engineer · Phoenix, AZ</p>
          <nav className="flex gap-6 mt-4 text-xs text-slate-500">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#publications" className="hover:text-white transition-colors">Research</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </header>

        <main className="space-y-24">
          <Hero />
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="publications"><Publications /></section>
          <section id="education"><Education /></section>
          <section id="badges"><SkillBadges /></section>
          <Certifications />
          <Skills />
          <section id="contact"><Contact /></section>
        </main>

        <footer className="mt-24 pt-8 border-t border-white/10 text-center text-xs text-slate-600">
          <p>Pooja Kiran · 2026 · <a href="https://github.com/poojakira" className="text-orange-400 hover:underline">github.com/poojakira</a></p>
        </footer>
      </div>
    </div>
  );
}
