"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Mail, ArrowUpRight, Lock, ChevronLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden scale-110 flex items-center justify-center -translate-x-32 -translate-y-10">
      <World data={sampleArcs} globeConfig={globeConfig} />
    </div>
  );
}

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStep(2);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Interactive Globe Background */}
      <GlobeDemo />

      {/* Logo - Top Left */}
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="block group transition-transform hover:scale-105">
          <div className="relative w-56 h-20 -ml-3">
            <Image
              src="/logo.png"
              alt="ZeroMeshy"
              fill
              sizes="224px"
              className="object-contain grayscale brightness-0 invert"
              priority
            />
          </div>
        </Link>
      </div>



      {/* Centered Login Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[440px] z-10 flex flex-col items-center -translate-x-8"
      >
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <div className="mb-12 text-center">
                <p className="text-white/40 font-medium text-center mb-2 uppercase tracking-[0.3em] text-xs">Authentication</p>
                <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
                <p className="text-white/40 font-medium text-center">Enter your email to continue.</p>
              </div>

              <form onSubmit={handleNext} className="flex flex-col gap-8">
                <div className="space-y-2">
                  <div className="relative group">
                    <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-[#b0ff2e] transition-colors" />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-white/20 py-4 pl-8 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#b0ff2e]/50 transition-all font-medium text-lg"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="px-10 py-3 rounded-full bg-[#b0ff2e] text-black font-bold text-[14px] shadow-[0_10px_30px_rgba(176,255,46,0.2)] hover:bg-[#9de429] hover:-translate-y-0.5 transition-all active:scale-95 flex items-center gap-2 group/btn"
                  >
                    Next
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <div className="mb-8">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1 text-white/40 hover:text-white transition-colors mb-6 group"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                  <span className="text-sm font-semibold tracking-tight">{email}</span>
                </button>
                <h1 className="text-4xl font-semibold text-white mb-3 tracking-tight">Enter Password</h1>
                <p className="text-white/40 font-medium">Please enter your password to sign in.</p>
              </div>

              <form className="flex flex-col gap-8">
                <div className="space-y-2">
                  <div className="relative group">
                    <Lock className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within:text-[#b0ff2e] transition-colors" />
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      autoFocus
                      className="w-full bg-transparent border-b border-white/20 py-4 pl-8 pr-12 text-white placeholder:text-white/40 focus:outline-none focus:border-[#b0ff2e]/50 transition-all font-medium text-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/20 hover:text-white/60 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="flex justify-end pt-1">
                    <Link href="#" className="text-xs font-bold text-white/40 hover:text-[#b0ff2e] transition-colors">Forgot Password?</Link>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="px-10 py-3 rounded-full bg-[#b0ff2e] text-black font-bold text-[14px] shadow-[0_10px_30px_rgba(176,255,46,0.2)] hover:bg-[#9de429] hover:-translate-y-0.5 transition-all active:scale-95 flex items-center gap-2 group/btn"
                  >
                    Sign In
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 flex flex-col items-center gap-4 w-full">
          <p className="text-white/30 font-medium text-sm">
            New here?{" "}
            <Link href="/signup" className="text-white font-bold hover:text-[#b0ff2e] transition-colors">Create an account</Link>
          </p>

          <Link
            href="/"
            className="flex items-center gap-2 text-white/20 hover:text-white transition-colors group py-2"
          >
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to site</span>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
