"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesBento() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 mb-16 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[28px] md:text-[56px] font-semibold tracking-tight text-white leading-[1.2] md:leading-[1.1] max-w-[600px]"
        >
          See your social growth <br />
          in real time, clearly.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-500 text-lg max-w-[400px] leading-relaxed font-medium"
        >
          ZeroMeshy shows your engagement, <br />
          audience reach, and growth goals in <br />
          simple visuals you can act on right away.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Large Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-7 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col gap-8"
        >
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 bg-[#111]">
            <Image src="/bento1.png" alt="Dashboard" fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-white">Smart Dashboard</h3>
            <p className="text-zinc-500 font-medium">See all your accounts in one view — engagement, reach, and goals.</p>
          </div>
        </motion.div>

        {/* Card 2: Follower Growth Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-5 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col gap-8"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-[#111]">
            <Image src="/bento2.png" alt="Growth Chart" fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-white">Growth Overview</h3>
            <p className="text-zinc-500 font-medium">Track your daily follower count and reach to understand your social flow.</p>
          </div>
        </motion.div>

        {/* Card 3: Platform Breakdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col gap-8"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-[#111]">
            <Image src="/bento3.png" alt="Breakdown" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-white">Platform Breakdown</h3>
            <p className="text-zinc-500 font-medium">See exactly how your engagement is split across all platforms.</p>
          </div>
        </motion.div>

        {/* Card 4: Engagement Goal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col gap-8"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-[#111]">
            <Image src="/bento4.png" alt="Goal" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-white">Engagement Goal</h3>
            <p className="text-zinc-500 font-medium">Stay focused on your growth targets and follow your progress.</p>
          </div>
        </motion.div>

        {/* Card 5: Stats Stack */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col gap-6 flex-1"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-black bg-zinc-800 overflow-hidden relative">
                  <Image src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" fill sizes="48px" />
                </div>
              ))}
            </div>
            <h3 className="text-xl font-bold text-white max-w-[160px] leading-snug">
              Trusted by 10k+ <br /> Creators & Brands
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-[#b0ff2e]/5 border border-[#b0ff2e]/10 rounded-[2rem] p-8 flex flex-col gap-4 flex-1"
          >
            <div className="text-3xl font-bold text-white leading-tight">
              1.2M+ Posts <br /> Automated
            </div>
            <p className="text-zinc-500 text-sm font-medium">ZeroMeshy helps users save more time and scale faster.</p>
            <Link href="#" className="flex items-center gap-1 text-[#b0ff2e] font-bold mt-2 group hover:gap-2 transition-all">
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
