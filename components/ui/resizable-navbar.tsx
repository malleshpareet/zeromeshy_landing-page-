"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";
import Link from "next/link";

export const Navbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const { scrollY } = useScroll();

  const springConfig = { stiffness: 150, damping: 25, restDelta: 0.001 };

  const widthValue = useTransform(scrollY, [0, 200], [100, 92]);
  const widthSpring = useSpring(widthValue, springConfig);

  const topValue = useTransform(scrollY, [0, 200], [0, 24]);
  const topSpring = useSpring(topValue, springConfig);

  const borderRadiusValue = useTransform(scrollY, [0, 200], [0, 32]);
  const borderRadiusSpring = useSpring(borderRadiusValue, springConfig);

  const opacityValue = useTransform(scrollY, [0, 200], [0, 0.6]);
  const opacitySpring = useSpring(opacityValue, springConfig);

  const borderOpacityValue = useTransform(scrollY, [0, 200], [0.1, 0.2]);
  const borderOpacitySpring = useSpring(borderOpacityValue, springConfig);

  const blurValue = useTransform(scrollY, [0, 200], [12, 16]);
  const blurSpring = useSpring(blurValue, springConfig);

  return (
    <motion.nav
      style={{
        width: useTransform(widthSpring, (v) => `${v}%`),
        top: useTransform(topSpring, (v) => `${v}px`),
        borderRadius: useTransform(borderRadiusSpring, (v) => `${v}px`),
        backgroundColor: useTransform(opacitySpring, (v) => `rgba(0, 0, 0, ${v})`),
        borderColor: useTransform(borderOpacitySpring, (v) => `rgba(255, 255, 255, ${v})`),
        backdropFilter: useTransform(blurSpring, (v) => `blur(${v}px)`),
      }}
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 bg-transparent border-none",
        className
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between relative z-10">
        {children}
      </div>
    </motion.nav>
  );
};

export const NavBody = ({ children }: { children: React.ReactNode }) => {
  return <div className="hidden md:flex items-center justify-between w-full">{children}</div>;
};

import Image from "next/image";

export const NavbarLogo = () => {
  return (
    <Link href="/" className="flex items-center group cursor-pointer">
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
  );
};

export const NavItems = ({ items }: { items: any[] }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="hidden md:flex items-center gap-1" onMouseLeave={() => setActiveItem(null)}>
      {items.map((item) => (
        <div
          key={item.name}
          className="relative"
          onMouseEnter={() => setActiveItem(item.name)}
        >
          <Link
            href={item.link}
            className={cn(
              "px-4 py-2 text-[14px] font-semibold transition-all flex items-center gap-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]",
              item.showArrow ? "text-[#b0ff2e] hover:text-[#9de429]" : "text-white/90 hover:text-white"
            )}
          >
            {item.name}
            {item.menu ? (
              <svg className={cn("w-3 h-3 transition-transform", activeItem === item.name && "rotate-180")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            ) : item.showArrow && (
              <ArrowUpRight className={cn("w-4 h-4 ml-0.5", item.name === "Talk to Sales" && "text-[#b0ff2e]")} />
            )}
          </Link>

          <AnimatePresence>
            {activeItem === item.name && item.menu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-screen max-w-[800px]"
              >
                <div className="bg-[#111111] border border-white/10 rounded-[2.5rem] p-6 shadow-[0_50px_100px_rgba(0,0,0,0.9)] backdrop-blur-3xl overflow-hidden relative">
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#b0ff2e]/10 blur-3xl rounded-full pointer-events-none" />

                  <div className="flex gap-8">
                    {item.sideImage && (
                      <div className="w-1/3 aspect-[4/5] relative rounded-3xl overflow-hidden group/img">
                        <Image
                          src={item.sideImage}
                          alt={item.name}
                          fill
                          sizes="266px"
                          className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                          <p className="text-white font-bold text-lg mb-1">{item.name}</p>
                          <p className="text-white/60 text-xs">Everything you need to scale.</p>
                        </div>
                      </div>
                    )}
                    <div className="flex-1 py-2">
                      {item.name === "Platforms" ? (
                        <div className="grid grid-cols-2 gap-2">
                          {item.menu.map((subItem: any) => (
                            <Link
                              key={subItem.title}
                              href="#"
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-[#b0ff2e]/30 group-hover:bg-[#b0ff2e]/10 transition-colors">
                                <subItem.icon className="w-4 h-4 text-zinc-400 group-hover:text-[#b0ff2e] transition-colors" />
                              </div>
                              <span className="text-sm font-medium text-zinc-300 group-hover:text-white">{subItem.title}</span>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-4">
                          {item.menu.map((subItem: any) => (
                            <Link
                              key={subItem.title}
                              href="#"
                              className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                            >
                              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-[#b0ff2e]/30 group-hover:bg-[#b0ff2e]/10 transition-colors">
                                <subItem.icon className="w-5 h-5 text-zinc-400 group-hover:text-[#b0ff2e] transition-colors" />
                              </div>
                              <div>
                                <p className="text-[14px] font-bold text-white mb-1">{subItem.title}</p>
                                <p className="text-[12px] text-zinc-500 leading-normal line-clamp-2">{subItem.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export const NavbarButton = ({
  children,
  variant = "primary",
  className,
  onClick
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}) => {
  const baseStyles = "px-6 py-2.5 rounded-full text-[14px] font-bold transition-all";
  const variants = {
    primary: "bg-[#b0ff2e] text-black hover:bg-[#9de429] shadow-[0_10px_30px_rgba(176,255,46,0.2)]",
    secondary: "text-white hover:text-[#b0ff2e]",
  };

  return (
    <button onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </button>
  );
};

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex md:hidden items-center w-full justify-between">{children}</div>;
};

export const MobileNavHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-between w-full">{children}</div>;
};

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button onClick={onClick} className="p-2 text-white">
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
};

export const MobileNavMenu = ({
  isOpen,
  onClose,
  children
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] md:hidden"
          />

          {/* Side Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[400px] bg-[#050505] border-l border-white/10 z-[1000] md:hidden p-8 flex flex-col gap-8 shadow-2xl overflow-y-auto"
          >
            <div className="flex justify-end mb-4">
              <button onClick={onClose} className="p-2 text-white/60 hover:text-white transition-colors">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {children}
            </div>

            {/* Subtle glow inside drawer */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#b0ff2e]/5 blur-3xl rounded-full pointer-events-none" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
