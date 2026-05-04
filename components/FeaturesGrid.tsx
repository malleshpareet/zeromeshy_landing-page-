"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Network, 
  Target, 
  Calendar, 
  BarChart2, 
  Zap, 
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Multi-platform sync",
    description: "Connect and manage all your social channels in one unified mesh.",
    icon: Network,
  },
  {
    title: "Engagement goals",
    description: "Set and visualize your progress toward viral milestones in real-time.",
    icon: Target,
  },
  {
    title: "Smart scheduling",
    description: "Organize your content your way with AI-powered time slot optimization.",
    icon: Calendar,
  },
  {
    title: "Automated insights",
    description: "Get a snapshot of your growth and performance delivered to your inbox.",
    icon: BarChart2,
  },
  {
    title: "Automation rules",
    description: "Set custom triggers and rules to keep your engagement growing 24/7.",
    icon: Zap,
  },
  {
    title: "Enterprise security",
    description: "Your account access is encrypted and never shared with third parties.",
    icon: ShieldCheck,
  },
];

export default function FeaturesGrid() {
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
        <span className="text-[12px] font-bold text-[#b0ff2e] uppercase tracking-[0.2em]">Features</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-[56px] font-semibold tracking-tight text-white text-center mb-20 leading-[1.1] max-w-3xl"
      >
        Designed for clarity, built for <br className="hidden md:block" /> better social growth
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.05 }}
            className="group p-10 rounded-[1.5rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#b0ff2e]/30 group-hover:bg-[#b0ff2e]/5 transition-all">
              <feature.icon className="w-6 h-6 text-[#b0ff2e]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-zinc-500 font-medium leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link href="#" className="flex items-center gap-1 text-white font-bold group hover:gap-2 transition-all">
          Get Started
          <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
}
