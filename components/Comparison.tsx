"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import Image from "next/image";

const comparisonData = {
  others: [
    "Messy scheduling, manual posting",
    "Fragmented analytics, zero insights",
    "Limited automation, manual workflows",
    "No team collaboration features",
    "Generic support, slow response times",
  ],
  zeromeshy: [
    "AI-powered mesh scheduling",
    "Real-time unified growth dashboard",
    "Advanced multi-step automation",
    "Team-centric planning workspaces",
    "24/7 priority expert support",
  ],
};

export default function Comparison() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-6"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#b0ff2e] shadow-[0_0_8px_#b0ff2e]" />
        <span className="text-[12px] font-bold text-[#b0ff2e] uppercase tracking-[0.2em]">Why ZeroMeshy?</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-[56px] font-semibold tracking-tight text-white text-center mb-20 leading-[1.1]"
      >
        There's a smarter way <br className="hidden md:block" /> to manage social
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
      >
        {/* Other Tools side */}
        <div className="flex-1 p-10 md:p-14">
          <h3 className="text-2xl font-bold text-white mb-10">Other Tools</h3>
          <ul className="flex flex-col gap-6">
            {comparisonData.others.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4 group">
                <div className="mt-1 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <X className="w-3 h-3 text-red-500" />
                </div>
                <span className="text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ZeroMeshy side */}
        <div className="flex-1 p-10 md:p-14 bg-[#111111] border-l border-white/5 relative">
          {/* Glowing accent border */}
          <div className="absolute inset-0 border-2 border-[#b0ff2e]/20 rounded-[1.5rem] m-4 pointer-events-none" />
          
          <div className="flex items-center gap-3 mb-10">
             <div className="w-8 h-8 rounded-lg bg-[#b0ff2e] flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-[2px] transform rotate-45" />
             </div>
             <h3 className="text-2xl font-bold text-white">ZeroMeshy</h3>
          </div>

          <ul className="flex flex-col gap-6">
            {comparisonData.zeromeshy.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4 group">
                <div className="mt-1 w-5 h-5 rounded-full bg-[#b0ff2e]/10 border border-[#b0ff2e]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#b0ff2e]" />
                </div>
                <span className="text-zinc-300 font-bold leading-relaxed group-hover:text-white transition-colors">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
