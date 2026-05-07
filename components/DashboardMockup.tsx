"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function DashboardMockup() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Perspective effect: starts tilted, ends flat
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [25, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 pb-20 md:pb-40 -mt-40 md:-mt-60 z-10 perspective-[1200px]">
      {/* Background glow behind image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#b0ff2e]/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <motion.div
        style={{
          rotateX: springRotateX,
          scale: springScale,
          opacity,
          transformStyle: "preserve-3d"
        }}
        className="relative group"
      >
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_100px_rgba(0,0,0,0.8)] bg-zinc-900/50 backdrop-blur-sm p-1.5">
          <Image
            src="/dashboard.webp"
            alt="Clario Dashboard"
            width={1600}
            height={1000}
            className="w-full h-auto rounded-[2.1rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
            priority
          />
        </div>

        {/* Decorative elements with perspective */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#b0ff2e]/20 blur-3xl rounded-full -z-10 group-hover:bg-[#b0ff2e]/30 transition-colors" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#b0ff2e]/10 blur-3xl rounded-full -z-10 group-hover:bg-[#b0ff2e]/20 transition-colors" />
      </motion.div>
    </div>
  );
}
