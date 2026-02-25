import React from "react";
import { motion } from "framer-motion";

export default function StatusTicker() {
    const alerts = [
        "SYSTEM_READY",
        "GPU_CLUSTER_OPTIMIZED",
        "ENCRYPTION_LAYER_ACTIVE",
        "ML_CORE_V4.2_STABLE",
        "SECURITY_PROTOCOLS_ENGAGED",
        "ORBITAL_AUTONOMY_SYNCED"
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full bg-indigo-600/10 backdrop-blur-md border-t border-indigo-500/20 py-1 overflow-hidden z-[90]">
            <div className="flex whitespace-nowrap animate-ticker">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="flex gap-8 px-4 items-center">
                        {alerts.map((alert, idx) => (
                            <React.Fragment key={idx}>
                                <span className="text-[8px] font-mono font-black text-indigo-400/60 uppercase tracking-widest">
                                    {alert}
                                </span>
                                <div className="w-1 h-1 rounded-full bg-slate-800" />
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
            <style jsx>{`
        .animate-ticker {
          display: flex;
          width: fit-content;
          animation: ticker 60s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}
