"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const faqs = [
  {
    id: "01",
    question: "What platforms does ZeroMeshy support?",
    answer: "ZeroMeshy currently supports Instagram, X (Twitter), LinkedIn, Facebook, and Threads. We are constantly adding new integrations, including YouTube and Pinterest, to keep your mesh growing.",
  },
  {
    id: "02",
    question: "Do I need coding skills to use the automation?",
    answer: "Not at all. ZeroMeshy is built with a powerful no-code interface. You can set up complex automation rules, scheduling, and growth triggers using our intuitive dashboard — no technical knowledge required.",
  },
  {
    id: "03",
    question: "Is my social account data secure?",
    answer: "Absolutely. Security is our top priority. We use enterprise-grade encryption and official API integrations (OAuth) to ensure your data is protected and we never store your passwords.",
  },
  {
    id: "04",
    question: "Can I use ZeroMeshy for multiple clients?",
    answer: "Yes! Our Pro plan is designed for agencies and managers handling multiple brands. You can easily switch between workspaces and manage separate automation meshes for each client.",
  },
  {
    id: "05",
    question: "How does the AI scheduling work?",
    answer: "Our AI analyzes your audience's past engagement patterns and current platform trends to identify the 'peak mesh' moments. It then automatically slots your content into these high-impact times.",
  },
  {
    id: "06",
    question: "How can I get support if I run into issues?",
    answer: "We offer 24/7 priority support for Pro users and comprehensive email support for our Starter plan. You'll also have access to our detailed documentation and community hub.",
  },
];

const FAQItem = ({ faq, isOpen, toggle }: { faq: any, isOpen: boolean, toggle: () => void }) => {
  return (
    <div className={cn(
      "border border-white/5 rounded-[1.5rem] bg-[#0A0A0A] overflow-hidden transition-all duration-300",
      isOpen ? "border-white/10 bg-[#111111]" : "hover:border-white/10"
    )}>
      <button
        onClick={toggle}
        className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-6">
          <span className="text-[14px] font-bold text-[#b0ff2e] w-8 h-8 rounded-lg bg-[#b0ff2e]/10 flex items-center justify-center shadow-[0_0_10px_#b0ff2e33]">
            {faq.id}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-white transition-colors">
            {faq.question}
          </h3>
        </div>
        <div className="shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#b0ff2e]" />
          ) : (
            <Plus className="w-5 h-5 text-[#b0ff2e]" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-8 md:px-8 md:pb-10 md:pl-[6.5rem]">
              <p className="text-zinc-500 font-medium leading-relaxed max-w-2xl">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("01");

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 mb-20 text-center md:text-left">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[64px] font-semibold tracking-tight text-white leading-[1.1]"
          >
            Got questions? <br />
            We've got answers.
          </motion.h2>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="text-zinc-500 text-lg font-medium">
            Here's everything you need to know <br className="hidden md:block" /> before getting started.
          </p>
          <Link href="#" className="flex items-center gap-1 text-[#b0ff2e] font-bold group hover:gap-2 transition-all">
            Contact us
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-5xl">
        {faqs.map((faq) => (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: parseInt(faq.id) * 0.05 }}
          >
            <FAQItem 
              faq={faq} 
              isOpen={openId === faq.id} 
              toggle={() => setOpenId(openId === faq.id ? null : faq.id)} 
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
