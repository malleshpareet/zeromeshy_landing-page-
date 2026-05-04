"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight, Send, Layout, BarChart3, Users,
  Settings2, Code2, BookOpen, Newspaper, Activity,
  Rocket, Briefcase, Store, Heart,
  Instagram, Twitter, Linkedin, Facebook, Youtube
} from "lucide-react";
import { cn } from "../lib/utils";

export default function AppNavbar() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
      sideImage: "https://images.unsplash.com/photo-1657974361095-4d5f3fb381fb?q=80&w=1074&auto=format&fit=crop",
      menu: [
        {
          title: "Publish",
          description: "Plan and schedule your content across social media",
          icon: Send,
        },
        {
          title: "Create",
          description: "Build your own library of content ideas",
          icon: Layout,
        },
        {
          title: "Analyze",
          description: "Track performance with real-time data",
          icon: BarChart3,
        },
        {
          title: "Collaborate",
          description: "Work with your team in a shared mesh",
          icon: Users,
        },
      ],
    },
    {
      name: "Solutions",
      link: "#solutions",
      sideImage: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1170&auto=format&fit=crop",
      menu: [
        {
          title: "Automation",
          description: "AI-driven workflows for your social presence",
          icon: Settings2,
        },
        {
          title: "API",
          description: "Developer tools for custom mesh solutions",
          icon: Code2,
        },
        {
          title: "Learning",
          description: "Resources to grow your social audience",
          icon: BookOpen,
        },
        {
          title: "Insights",
          description: "Market trends and platform updates",
          icon: Newspaper,
        },
      ],
    },
    {
      name: "Platforms",
      link: "#platforms",
      sideImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1074&auto=format&fit=crop",
      menu: [
        { title: "Instagram", icon: Instagram },
        { title: "Twitter (X)", icon: Twitter },
        { title: "LinkedIn", icon: Linkedin },
        { title: "Facebook", icon: Facebook },
        { title: "YouTube", icon: Youtube },
        { title: "TikTok", icon: Activity },
      ],
    },
    {
      name: "Resources",
      link: "#resources",
      sideImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
      menu: [
        {
          title: "Startup Program",
          description: "Special offers for early-stage social growth",
          icon: Rocket,
        },
        {
          title: "Agency Solutions",
          description: "Tools tailored for managing multiple clients",
          icon: Briefcase,
        },
        {
          title: "Marketplace",
          description: "Find templates and experts for your mesh",
          icon: Store,
        },
        {
          title: "Non-Profit",
          description: "Social impact programs and discounts",
          icon: Heart,
        },
      ],
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Talk to Sales",
      link: "/contact",
      showArrow: true,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <NavbarButton variant="secondary" className="flex items-center gap-2">
                Login
                <ArrowUpRight className="w-4 h-4" />
              </NavbarButton>
            </Link>
            <Link href="/signup">
              <NavbarButton variant="primary" className="flex items-center gap-2">
                Sign Up
                <ArrowUpRight className="w-4 h-4" />
              </NavbarButton>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation Header */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
        </MobileNav>
      </Navbar>

      {/* Mobile Menu Side Drawer */}
      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <div className="flex flex-col gap-6 pt-4">
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "flex items-center justify-between group",
                item.name === "Talk to Sales" ? "text-[#b0ff2e]" : "text-white/90"
              )}
            >
              <span className="text-2xl font-bold tracking-tight">{item.name}</span>
              {(item.menu || item.showArrow) && (
                <ArrowUpRight className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              )}
            </Link>
          ))}
          
          <div className="h-px bg-white/10 my-4" />
          
          <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
            <button className="w-full py-4 text-white font-bold text-lg border border-white/10 rounded-2xl hover:bg-white/5 transition-all text-left px-6 flex items-center justify-between group">
              Login
              <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100" />
            </button>
          </Link>
          
          <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
            <button className="w-full py-4 bg-[#b0ff2e] text-black font-bold text-lg rounded-2xl hover:bg-[#9de429] transition-all px-6 flex items-center justify-between group">
              Get Started
              <ArrowUpRight className="w-5 h-5 opacity-60 group-hover:opacity-100" />
            </button>
          </Link>
        </div>
      </MobileNavMenu>
    </div>
  );
}
