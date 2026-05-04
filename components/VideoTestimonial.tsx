"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Heart, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VideoTestimonial() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
        {/* Left: Video Preview Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:flex-1 relative aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden group cursor-pointer"
        >
          <Image
            src="/testimonial_user.png"
            alt="Danielle M."
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[#b0ff2e] transition-all duration-300">
              <Play className="w-8 h-8 text-white group-hover:text-black fill-current ml-1" />
            </div>
          </div>

          <div className="absolute bottom-10 left-10 text-left">
            <h4 className="text-xl font-bold text-white">Danielle M.</h4>
            <p className="text-white/60 font-medium">Freelance UX Designer</p>
          </div>
        </motion.div>

        {/* Right: Quote Content */}
        <div className="flex-1 flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <Heart className="w-4 h-4 text-[#b0ff2e] fill-[#b0ff2e]" />
            <span className="text-[12px] font-bold text-[#b0ff2e] uppercase tracking-[0.2em]">Hear from our users</span>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-[44px] font-semibold text-white leading-[1.2] tracking-tight"
          >
            “With ZeroMeshy, I finally stopped stressing about my posting schedule. I know exactly when my audience is active and my reach is actually growing.”
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="#" className="flex items-center gap-1 text-white font-bold group hover:gap-2 transition-all uppercase tracking-wider text-[13px]">
              Read the full story
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-white transition-colors" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
