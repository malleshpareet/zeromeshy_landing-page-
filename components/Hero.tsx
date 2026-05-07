"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("./Aurora"), { ssr: false });

export default function Hero() {
  const [showAurora, setShowAurora] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 768px)');
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setShowAurora(mq.matches && !rm.matches);
    update();
    const listener = () => update();
    try {
      if (mq.addEventListener) mq.addEventListener('change', listener);
      else mq.addListener(listener as any);
      if (rm.addEventListener) rm.addEventListener('change', listener);
      else rm.addListener(listener as any);
    } catch (e) {}
    return () => {
      try {
        if (mq.removeEventListener) mq.removeEventListener('change', listener);
        else mq.removeListener(listener as any);
        if (rm.removeEventListener) rm.removeEventListener('change', listener);
        else rm.removeListener(listener as any);
      } catch (e) {}
    };
  }, []);

  const auroraRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const el = auroraRef.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, { root: null, rootMargin: '200px', threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden min-h-screen">
      {/* Layer 1: Solid Background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Layer 2: Aurora Effect (lazy-loaded on desktop, respects prefers-reduced-motion) */}
      <div ref={auroraRef} className="absolute inset-0 z-1 pointer-events-none overflow-hidden" aria-hidden>
        {showAurora && isVisible ? (
          <Aurora
            colorStops={["#b0ff2e", "#5227FF", "#b0ff2e"]}
            blend={0.5}
            amplitude={1.5}
            speed={0.8}
          />
        ) : (
          // Lightweight fallback for small screens or reduced motion
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b0b] to-black pointer-events-none" />
        )}
      </div>

      {/* Layer 2.5: Bottom Fade-out Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent z-2 pointer-events-none" />

      {/* Layer 3: Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/10 mb-10"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#b0ff2e]">
            Next-Gen Social Automation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-[84px] font-semibold tracking-[-0.03em] text-white mb-8 max-w-5xl leading-[1.1] md:leading-[1.05] text-balance"
        >
          Automate your social <br />
          <span className="text-white/60">presence with ZeroMeshy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-[20px] text-white/50 mb-12 max-w-[360px] md:max-w-5xl leading-[1.6] font-medium"
        >
          Schedule, analyze, and grow <br className="block md:hidden" /> 
          your audience across all platforms. <br className="block md:hidden" />
          All your social tools in one mesh.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#b0ff2e] text-[17px] font-bold text-black hover:bg-[#9de429] transition-all shadow-[0_10px_40px_rgba(176,255,46,0.3)]"
        >
          Get Started Free
          <ArrowUpRight className="w-5 h-5 stroke-[3]" />
        </motion.button>
      </div>
    </section>
  );
}
