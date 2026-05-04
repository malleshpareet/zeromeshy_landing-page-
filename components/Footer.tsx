"use client";

import React from "react";
import { Heart, Instagram, Twitter, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const quickMenu = [
  { name: "How it works", href: "#" },
  { name: "Features", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Waitlist", href: "#" },
];

const information = [
  { name: "Contact", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Status", href: "#" },
];

const socials = [
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#b0ff2e]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* Brand Section */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <Link href="/" className="flex items-center group -ml-8">
              <div className="relative w-56 h-24 transition-transform group-hover:scale-110">
                <Image
                  src="/logo.png"
                  alt="ZeroMeshy Logo"
                  fill
                  sizes="224px"
                  className="object-contain grayscale brightness-0 invert"
                  priority
                />
              </div>
            </Link>
            
            <p className="text-zinc-500 font-medium max-w-sm leading-relaxed -mt-6">
              Empowering creators and brands with next-gen social automation. Scale your presence, automate your mesh.
            </p>
            
            <div className="flex items-center gap-4">
              {socials.map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href} 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-[#b0ff2e] hover:border-[#b0ff2e]/30 hover:bg-[#b0ff2e]/5 transition-all group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Menu */}
          <div className="md:col-span-2 flex flex-col gap-8 md:pl-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Quick Menu</h4>
            <ul className="flex flex-col gap-4">
              {quickMenu.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-zinc-500 font-medium hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Information</h4>
            <ul className="flex flex-col gap-4">
              {information.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-zinc-500 font-medium hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Stay Updated</h4>
            <p className="text-zinc-500 font-medium">Join 2,000+ creators receiving our weekly social growth tips.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#b0ff2e]/30 focus:bg-[#b0ff2e]/5 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 rounded-xl bg-[#b0ff2e] text-black hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-zinc-500 font-medium text-sm">
            <Heart className="w-4 h-4 text-[#b0ff2e] fill-[#b0ff2e]" />
            <span>Built with passion by <span className="text-white font-bold">ZeroMeshy</span></span>
          </div>
          
          <div className="text-zinc-600 font-medium text-xs tracking-widest uppercase">
            © 2025 ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Massive Background Text */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 select-none pointer-events-none">
          <span className="text-[180px] font-bold text-white/[0.02] tracking-tighter whitespace-nowrap">
            ZEROMESHY
          </span>
        </div>
      </div>
    </footer>
  );
}
