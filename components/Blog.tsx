"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const smallPosts = [
  {
    image: "/blog2.png",
    category: "PRO TIPS",
    title: "Designing Social Content That Converts",
    link: "#",
  },
  {
    image: "/blog3.png",
    category: "UPDATES",
    title: "Scaling Your Reach Without Burning Out",
    link: "#",
  },
  {
    image: "/blog4.png",
    category: "AI",
    title: "The Power of AI-Driven Scheduling",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-[56px] font-semibold tracking-tight text-white"
        >
          Explore the blog
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Link href="#" className="px-8 py-3 rounded-full bg-[#111] border border-white/10 text-[14px] font-bold text-white flex items-center gap-2 hover:bg-white/5 transition-all group">
            View all posts
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Featured Large Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-4 mb-8 flex flex-col md:flex-row gap-8 items-stretch group cursor-pointer hover:border-white/10 transition-colors"
      >
        <div className="relative w-full md:w-[55%] aspect-video md:aspect-auto rounded-[2rem] overflow-hidden">
          <Image src="/blog1.png" alt="Featured" fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="flex-1 p-8 md:py-12 md:pr-12 flex flex-col justify-center items-start">
          <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Basics</span>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            How to Scale Your Social <br /> Presence With Confidence
          </h3>
          <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-8 max-w-md">
            Learn how to go from idea to viral — fast. We cover positioning, growth loops, and building trust using ZeroMeshy.
          </p>
          <Link href="#" className="flex items-center gap-1 text-[#b0ff2e] font-bold group/link">
            Read more
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </motion.div>

      {/* Small Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {smallPosts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col gap-6 group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-white/5 p-4 group-hover:border-white/10 transition-colors">
               <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                 <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
               </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <span className="text-[12px] font-bold text-zinc-500 uppercase tracking-widest">{post.category}</span>
              <h4 className="text-2xl font-bold text-white leading-tight">
                {post.title}
              </h4>
              <Link href="#" className="flex items-center gap-1 text-[#b0ff2e] font-bold mt-2 group/link">
                Read more
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
