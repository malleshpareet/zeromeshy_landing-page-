"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Instagram, Twitter, Linkedin, Facebook, Youtube, Github, Chrome, Slack, Apple, Store } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: { monthly: 29, yearly: 19 },
    description: "Perfect for creators who want full control over their social automation.",
    features: [
      "Track engagement & reach",
      "Connect up to 3 accounts",
      "Weekly growth reports",
      "Basic AI scheduling",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 49, yearly: 39 },
    description: "Advanced tools to scale your social presence and unlock growth.",
    features: [
      "Unlimited accounts",
      "AI-powered growth insights",
      "Custom automation rules",
      "Priority 24/7 support",
    ],
    cta: "Get Started",
    popular: true,
  },
];

const teamLogos = [
  { icon: Instagram },
  { icon: Twitter },
  { icon: Linkedin },
  { icon: Facebook },
  { icon: Youtube },
  { icon: Github },
  { icon: Chrome },
  { icon: Slack },
  { icon: Apple },
  { icon: Store },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-6"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#b0ff2e] shadow-[0_0_8px_#b0ff2e]" />
        <span className="text-[12px] font-bold text-[#b0ff2e] uppercase tracking-[0.2em]">Pricing</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-[64px] font-semibold tracking-tight text-white text-center mb-6"
      >
        Simple plans.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-zinc-500 text-lg text-center max-w-xl mb-12 font-medium"
      >
        Straightforward pricing with no hidden costs. Everything you need to manage your social growth better.
      </motion.p>

      {/* Billing Toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <span className={cn("text-sm font-bold transition-colors", billingCycle === "monthly" ? "text-white" : "text-zinc-500")}>Monthly</span>
        <button 
          onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
          className="w-14 h-7 rounded-full bg-zinc-900 border border-white/10 p-1 relative"
        >
          <motion.div 
            animate={{ x: billingCycle === "monthly" ? 0 : 28 }}
            className="w-5 h-5 rounded-full bg-[#b0ff2e] shadow-[0_0_10px_#b0ff2e]"
          />
        </button>
        <span className={cn("text-sm font-bold transition-colors", billingCycle === "yearly" ? "text-white" : "text-zinc-500")}>Yearly</span>
      </motion.div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-6">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className={cn(
              "p-10 rounded-[2.5rem] flex flex-col relative border transition-all duration-300",
              plan.popular 
                ? "bg-[#111111] border-[#b0ff2e]/20 shadow-[0_40px_80px_rgba(0,0,0,0.8)]" 
                : "bg-[#0A0A0A] border-white/5"
            )}
          >
            {plan.popular && (
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-[#b0ff2e]/10 border border-[#b0ff2e]/20">
                <span className="text-[10px] font-bold text-[#b0ff2e] uppercase tracking-wider">Popular</span>
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-8">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-bold text-white">${plan.price[billingCycle]}</span>
              <span className="text-zinc-500 font-bold">/month</span>
            </div>
            <p className="text-zinc-500 font-medium leading-relaxed mb-8">
              {plan.description}
            </p>

            <Link 
              href="#" 
              className={cn(
                "w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all mb-10 group",
                plan.popular 
                  ? "bg-[#b0ff2e] text-black shadow-[0_0_20px_#b0ff2e66] hover:scale-[1.02]" 
                  : "bg-white/5 text-white hover:bg-white/10"
              )}
            >
              {plan.cta}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <ul className="flex flex-col gap-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                    <Check className="w-3 h-3 text-zinc-400" />
                  </div>
                  <span className="text-[15px] font-medium text-zinc-400">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Enterprise / Teams Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-4xl p-10 md:p-14 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-12"
      >
        <div className="flex flex-col items-start gap-4 flex-1">
          <h3 className="text-2xl font-bold text-white">Trusted by teams worldwide</h3>
          <p className="text-zinc-500 font-medium max-w-xs">
            Invite your team, sync accounts in real-time, and track shared goals with ease.
          </p>
          <Link href="#" className="flex items-center gap-1 text-[#b0ff2e] font-bold group hover:gap-2 transition-all mt-2">
            Talk to Sales
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-5 gap-y-8 gap-x-10 opacity-20">
          {teamLogos.map((Logo, idx) => (
            <Logo.icon key={idx} className="w-6 h-6 text-white" />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
