"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Connect & Sync",
    description: "Integrate all your social channels (Instagram, X, LinkedIn) in one mesh. ZeroMeshy automatically syncs your history and audience data.",
    image: "/step1_social.png",
  },
  {
    id: 2,
    title: "AI-Powered Planning",
    description: "Our AI analyzes your audience's peak activity to schedule your content at the perfect moment for maximum engagement.",
    image: "/step2_social.png",
  },
  {
    id: 3,
    title: "Automate & Scale",
    description: "Set your automation rules once and let ZeroMeshy handle the rest. Publish, respond, and grow while you focus on creating.",
    image: "/step3_social.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center md:justify-start gap-3 mb-6"
      >
        <div className="w-8 h-8 rounded-full bg-[#b0ff2e] flex items-center justify-center">
          <Play className="w-4 h-4 text-black fill-black ml-0.5" />
        </div>
        <span className="text-[14px] font-bold text-[#b0ff2e] tracking-tight">Watch video</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[32px] md:text-[64px] font-semibold tracking-tight text-white mb-20 text-center md:text-left whitespace-nowrap"
      >
        How ZeroMeshy works
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            className="group p-8 rounded-[1.5rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-[#111] border border-white/5">
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-white/10 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b0ff2e] shadow-[0_0_8px_#b0ff2e]" />
              <span className="text-[12px] font-bold text-white tracking-wide">Step {step.id}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
              {step.title}
            </h3>
            <p className="text-zinc-500 text-[15px] leading-relaxed font-medium">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
