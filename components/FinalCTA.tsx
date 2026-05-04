"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto overflow-visible">
      <div className="relative pt-20 md:pt-0">
        {/* The Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-10 md:px-20 md:py-12 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center min-h-[400px] md:min-h-[350px]"
        >
          {/* Content (Text) - Mobile gets extra top padding for breakout image */}
          <div className="flex-[1.5] z-10 relative text-left pt-[280px] md:pt-0 w-full">
            <h2 className="text-[28px] leading-[1.15] md:text-[60px] font-semibold text-white md:leading-[1.05] tracking-tight mb-8">
              Ready to automate <br />
              your social <br className="block md:hidden" />
              smarter?
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-medium mb-12 max-w-md mx-0">
              Start your journey to viral growth and effortless reach it only takes 2 minutes.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-[#b0ff2e] text-black font-bold text-lg shadow-[0_0_40px_#b0ff2e66] hover:scale-105 transition-all group"
            >
              Get Started
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Spacing for Desktop Breakout Layout (Original Desktop Style) */}
          <div className="md:flex-1 h-0 md:h-auto" />

          {/* Background Glows */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#b0ff2e]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#b0ff2e]/5 blur-[120px] rounded-full pointer-events-none" />
        </motion.div>

        {/* Breakout Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute z-20 pointer-events-none
            /* Mobile Positioning: Centered breakout at top */
            top-[-40px] left-1/2 -translate-x-1/2 w-[350px] h-[400px]
            /* Desktop Positioning: EXACT REVERT TO ORIGINAL */
            md:bottom-0 md:top-auto md:right-10 md:left-auto md:translate-x-0 md:w-[500px] md:h-[600px]"
        >
          <div className="relative w-full h-full">
            <Image
              src="/AsfW6nRtd8870rS0nxiZalBmjno.webp"
              alt="Ready to grow"
              fill
              sizes="(max-width: 768px) 350px, 500px"
              className="object-contain object-bottom md:object-right-bottom"
              priority
            />
            {/* Gradient fade for mobile - only active on mobile if needed */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 block md:hidden" />
            {/* Desktop original fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 hidden md:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
