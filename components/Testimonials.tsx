"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Danielle M.",
    role: "Freelance Content Creator",
    content: "ZeroMeshy made my social management feel simple. Everything's in one place.",
    image: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Alex T.",
    role: "Agency Founder",
    content: "The AI scheduling is a game changer. We've seen a 40% increase in reach.",
    image: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "Reema K.",
    role: "Marketing Director",
    content: "I finally stopped worrying about posting times. ZeroMeshy handles it all.",
    image: "https://i.pravatar.cc/150?u=3",
  },
  {
    name: "Jonas W.",
    role: "Startup Founder",
    content: "No more spreadsheet chaos. Just clean, automated social growth.",
    image: "https://i.pravatar.cc/150?u=4",
  },
  {
    name: "Samira L.",
    role: "E-commerce Seller",
    content: "It feels like ZeroMeshy understands how I think about my brand.",
    image: "https://i.pravatar.cc/150?u=5",
  },
  {
    name: "Marco G.",
    role: "Digital Nomad",
    content: "It's the only tool I open daily. The automation rules are incredible.",
    image: "https://i.pravatar.cc/150?u=6",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="w-[320px] md:w-[380px] p-8 rounded-[1.5rem] bg-[#0A0A0A] border border-white/5 flex flex-col gap-6 shrink-0 group hover:border-white/10 transition-all duration-300">
    <div className="flex items-start justify-between">
      <div className="text-[40px] font-serif leading-none text-[#b0ff2e]/20 group-hover:text-[#b0ff2e]/40 transition-colors">"</div>
    </div>
    <p className="text-[17px] md:text-[19px] font-bold text-white leading-[1.4] whitespace-normal">
      {testimonial.content}
    </p>
    <div className="flex items-center gap-3 pt-2">
      <div className="w-11 h-11 rounded-full bg-zinc-800 overflow-hidden relative border border-white/10">
        <Image src={testimonial.image} alt={testimonial.name} fill sizes="44px" className="object-cover" />
      </div>
      <div className="flex flex-col">
        <span className="text-[14px] font-bold text-white">{testimonial.name}</span>
        <span className="text-[12px] text-zinc-500 font-medium">{testimonial.role}</span>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[#b0ff2e]/2 blur-[120px] pointer-events-none" />

      <div className="px-6 max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-12 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-[64px] font-semibold tracking-tight text-white leading-[1.1] max-w-2xl"
        >
          Loved by individuals <br /> and small teams
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-500 text-lg max-w-[360px] leading-relaxed font-medium"
        >
          People across industries trust ZeroMeshy to manage social, reduce stress, and scale growth.
        </motion.p>
      </div>

      <div className="flex flex-col gap-8 relative">
        {/* Edge Gradients for fading effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Row 1: Right to Left (Classic marquee direction) */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`row1-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-1920, 0] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`row2-${i}`} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
