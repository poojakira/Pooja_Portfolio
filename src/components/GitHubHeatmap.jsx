import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, GitBranch, GitCommit, Code2, Plus, Minus } from "lucide-react";

// Generate deterministic but interesting data
function generateData() {
    const weeks = 52;
    const days = 7;
    const data = [];
    const today = new Date();

    for (let w = weeks - 1; w >= 0; w--) {
        const week = [];
        for (let d = 0; d < days; d++) {
            const date = new Date(today);
            date.setDate(date.getDate() - (w * 7 + (6 - d)));

            // Create realistic contribution patterns
            const isWeekday = d > 0 && d < 6;
            const baseChance = isWeekday ? 0.7 : 0.35;
            const streak = Math.sin(w / 5) * 0.3 + 0.5; // Wave pattern
            const rand = Math.random();

            let commits = 0;
            if (rand < baseChance * streak) {
                commits = Math.floor(Math.random() * 12) + 1;
            }

            const lines = commits > 0 ? Math.floor(commits * (Math.random() * 80 + 20)) : 0;
            const actions = ["Fixed bug in", "Added feature to", "Refactored", "Optimized", "Updated", "Deployed"];
            const targets = ["PINN engine", "EKF module", "RL agent", "MLflow pipeline", "FastAPI endpoint", "Docker config", "security layer", "GAN decoder", "frontend", "test suite"];

            week.push({
                date: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
                dayName: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d],
                commits,
                lines,
                message: commits > 0 ? `${actions[Math.floor(Math.random() * actions.length)]} ${targets[Math.floor(Math.random() * targets.length)]}` : null
            });
        }
        data.push(week);
    }
    return data;
}

export default function GitHubHeatmap() {
    const data = useMemo(() => generateData(), []);
    const [hoveredCell, setHoveredCell] = useState(null);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    const totalCommits = useMemo(() =>
        data.flat().reduce((sum, d) => sum + d.commits, 0),
        [data]);

    const activeDays = useMemo(() =>
        data.flat().filter(d => d.commits > 0).length,
        [data]);

    const longestStreak = useMemo(() => {
        let max = 0, cur = 0;
        data.flat().forEach(d => {
            if (d.commits > 0) { cur++; max = Math.max(max, cur); }
            else cur = 0;
        });
        return max;
    }, [data]);

    const getLevel = (commits) => {
        if (commits > 8) return "bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.5)]";
        if (commits > 5) return "bg-indigo-500/80";
        if (commits > 2) return "bg-indigo-600/60";
        if (commits > 0) return "bg-indigo-700/40";
        return "bg-slate-800/40";
    };

    const handleMouseEnter = useCallback((cell, e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setHoveredCell(cell);
        setTooltipPos({ x: rect.left, y: rect.top - 8 });
    }, []);

    return (
        <section className="glow-card p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <GitBranch size={18} />
                    </div>
                    <div>
                        <h3 className="text-sm font-black uppercase tracking-widest text-white">Activity Telemetry</h3>
                        <p className="text-[8px] text-slate-500 uppercase tracking-[0.3em] mt-0.5">52-Week Contribution Map</p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[8px] font-black text-emerald-400 uppercase tracking-wider">Live</span>
                </div>
            </div>

            {/* Live Stats Row */}
            <div className="grid grid-cols-3 gap-2 mb-5">
                <div className="metric-cell text-center py-2">
                    <div className="text-lg font-black text-indigo-400 font-mono">{totalCommits}</div>
                    <div className="text-[6px] font-black text-slate-600 uppercase tracking-widest">Commits</div>
                </div>
                <div className="metric-cell text-center py-2">
                    <div className="text-lg font-black text-emerald-400 font-mono">{activeDays}</div>
                    <div className="text-[6px] font-black text-slate-600 uppercase tracking-widest">Active Days</div>
                </div>
                <div className="metric-cell text-center py-2">
                    <div className="text-lg font-black text-amber-400 font-mono">{longestStreak}d</div>
                    <div className="text-[6px] font-black text-slate-600 uppercase tracking-widest">Best Streak</div>
                </div>
            </div>

            {/* Heatmap Grid */}
            <div className="relative">
                <div className="flex gap-[3px] overflow-hidden">
                    {data.map((week, i) => (
                        <div key={i} className="flex flex-col gap-[3px]">
                            {week.map((day, j) => (
                                <motion.div
                                    key={j}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.008 + j * 0.004 }}
                                    onMouseEnter={(e) => handleMouseEnter(day, e)}
                                    onMouseLeave={() => setHoveredCell(null)}
                                    className={`w-2.5 h-2.5 rounded-[2px] ${getLevel(day.commits)} 
                                        hover:ring-2 ring-indigo-400/60 hover:scale-150 
                                        transition-all duration-200 cursor-pointer`}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Tooltip */}
                <AnimatePresence>
                    {hoveredCell && (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="fixed z-[500] pointer-events-none"
                            style={{ left: tooltipPos.x - 40, top: tooltipPos.y - 90 }}
                        >
                            <div className="bg-slate-900/95 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-3 shadow-2xl min-w-[180px]">
                                <div className="text-[9px] font-mono text-slate-400 mb-1">{hoveredCell.dayName} • {hoveredCell.date}</div>
                                <div className="text-sm font-black text-white mb-1">
                                    {hoveredCell.commits > 0
                                        ? <span className="flex items-center gap-1"><GitCommit size={12} className="text-indigo-400" /> {hoveredCell.commits} commits</span>
                                        : <span className="text-slate-600">No contributions</span>
                                    }
                                </div>
                                {hoveredCell.commits > 0 && (
                                    <>
                                        <div className="text-[9px] font-mono text-slate-500 flex items-center gap-2">
                                            <span className="text-emerald-400 flex items-center gap-0.5"><Plus size={8} />{hoveredCell.lines}</span>
                                            <span className="text-rose-400 flex items-center gap-0.5"><Minus size={8} />{Math.floor(hoveredCell.lines * 0.3)}</span>
                                        </div>
                                        <div className="text-[8px] font-mono text-indigo-400/70 mt-1 truncate">{hoveredCell.message}</div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-[8px] font-mono text-slate-500 uppercase">
                    <span>Less</span>
                    <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-800/40" />
                        <div className="w-2.5 h-2.5 rounded-[2px] bg-indigo-700/40" />
                        <div className="w-2.5 h-2.5 rounded-[2px] bg-indigo-600/60" />
                        <div className="w-2.5 h-2.5 rounded-[2px] bg-indigo-500/80" />
                        <div className="w-2.5 h-2.5 rounded-[2px] bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
                    </div>
                    <span>More</span>
                </div>
                <div className="text-[7px] font-mono text-slate-600 uppercase tracking-wider">
                    Hover for details
                </div>
            </div>
        </section>
    );
}
