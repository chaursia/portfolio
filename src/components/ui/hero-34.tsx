"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Code2,
  Sparkles,
  Cpu,
  Rocket,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero34() {
  // Nav: fades+slides down, fast
  const navVariants: Variants = {
    hidden: { opacity: 0, y: -14, filter: "blur(5px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 20, stiffness: 160, delay: 0.05 },
    },
  };

  // Social proof + subtitle: gentle fade up
  const supportVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1, y: 0,
      transition: { type: "spring", damping: 24, stiffness: 100 },
    },
  };

  // Title: split into two lines, each slides up with blur, staggered
  const titleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  };
  const titleLineVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 30, stiffness: 90, mass: 1.2 },
    },
  };

  // Subtitle + CTA: delayed after title settles
  const bodyContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.13, delayChildren: 0.85 },
    },
  };
  const bodyItemVariants: Variants = {
    hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { type: "spring", damping: 22, stiffness: 110 },
    },
  };

  // Footer: each column fades up, very late
  const footerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 1.3 },
    },
  };
  const footerItemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1, y: 0,
      transition: { type: "spring", damping: 20, stiffness: 130 },
    },
  };

  const highlights = [
    { icon: Code2, text: "3+ Years of Frontend Experience" },
    { icon: Rocket, text: "B.Tech — Frontend Architecture & UI/UX" },
    { icon: Cpu, text: "AI-Driven Modern Architectures" },
  ];

  return (
    <section id="profile" className="relative min-h-screen w-full overflow-hidden bg-[#FAF9F5] font-sans antialiased selection:bg-indigo-200 selection:text-indigo-900">
      {/* Full-bleed background image — Watermelon hero-34 asset */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/hero-34-bg.avif"
          alt=""
          className="h-full w-full object-cover"
        />
        {/* Legibility wash so text stays readable over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/95 via-[#FAF9F5]/70 to-[#FAF9F5]/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF9F5] to-transparent" />
      </div>

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] h-[60%] w-[50%] rounded-full bg-indigo-200/40 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[60%] w-[50%] rounded-full bg-violet-200/40 blur-[120px]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Hero 34 nav — fades+slides down */}
        <motion.nav
          variants={navVariants}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-8 py-6"
        >
          <button
            onClick={() => scrollTo("#profile")}
            className="group flex cursor-pointer items-center gap-2 text-stone-900"
          >
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="h-9 w-9 overflow-hidden rounded-xl shadow-sm ring-1 ring-black/10"
            >
              <img
                src="/assets/chaursia-logo.png"
                alt="Chaursia logo"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <span className="text-xl font-semibold tracking-tight">Chaursia</span>
          </button>

          <div className="hidden items-center gap-10 text-sm font-medium text-stone-600 md:flex">
            {[
              { label: "About", href: "#about" },
              { label: "AI", href: "#ai" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex min-h-[40px] items-center transition-colors hover:text-stone-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <span
              title="Resume coming soon"
              aria-disabled="true"
              className="hidden min-h-[40px] cursor-not-allowed items-center gap-1.5 text-[14px] font-medium text-stone-400 sm:flex"
            >
              <Download className="h-4 w-4 opacity-70" />
              <span>CV</span>
            </span>
            <button
              onClick={() => scrollTo("#contact")}
              className="flex min-h-[40px] items-center gap-2 rounded-sm bg-stone-900 px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all will-change-transform hover:bg-stone-800 active:scale-[0.96]"
            >
              Hire Me
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.nav>

        {/* Main Hero Content */}
        <main className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-8 pt-6 pb-24">
          <div className="flex max-w-5xl flex-col items-start">
            {/* Availability — fades up first */}
            <motion.div
              variants={supportVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.2 }}
              className="mb-8 flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {[
                  { icon: Code2, classes: "bg-indigo-500 text-white" },
                  { icon: Sparkles, classes: "bg-violet-500 text-white" },
                  { icon: Cpu, classes: "bg-emerald-500 text-white" },
                  { icon: Rocket, classes: "bg-amber-400 text-white" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#FAF9F5] shadow-sm ring-1 ring-black/10 ${item.classes}`}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                  </div>
                ))}
              </div>
              <p className="flex items-center gap-2 text-sm font-normal tracking-tight text-stone-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for new opportunities
              </p>
            </motion.div>

            {/* Headline — two lines staggered, large blur+rise */}
            <motion.h1
              variants={titleContainerVariants}
              initial="hidden"
              animate="show"
              className="mb-6 max-w-4xl text-[4rem] leading-[1.02] font-bold tracking-[-0.03em] text-stone-900 sm:text-[5rem]"
            >
              <motion.span variants={titleLineVariants} className="block">
                Divyanshu
              </motion.span>
              <motion.span
                variants={titleLineVariants}
                className="block bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent"
              >
                Chaursia
              </motion.span>
            </motion.h1>

            {/* Subtitle + CTA — delayed after headline */}
            <motion.div
              variants={bodyContainerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col items-start gap-10"
            >
              <motion.p
                variants={bodyItemVariants}
                className="max-w-lg text-lg leading-[1.5] font-normal text-pretty text-stone-600 sm:text-[1.25rem]"
              >
                A{" "}
                <span className="font-semibold text-stone-900">
                  Frontend Developer &amp; AI Enthusiast
                </span>{" "}
                dedicated to building intelligent, fast, and reliable digital
                products — staying ahead with the latest AI innovations.
              </motion.p>

              <motion.div
                variants={bodyItemVariants}
                className="flex flex-wrap items-center gap-6"
              >
                <Button
                  disabled
                  size="lg"
                  title="Resume coming soon"
                  className="cursor-not-allowed rounded-sm px-7 py-4 text-base font-medium opacity-50 shadow-[0_4px_14px_rgba(0,0,0,0.12)]"
                >
                  Download CV
                  <Download className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollTo("#contact")}
                  className="group gap-3 rounded-sm border-none bg-transparent px-4 py-4 text-base font-medium text-stone-900 shadow-none hover:bg-transparent"
                >
                  Contact Me
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-900 text-white shadow-md transition-transform group-hover:scale-105">
                    <Mail className="h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </main>

        {/* Footer Highlights */}
        <motion.div
          variants={footerContainerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-[1600px] flex-col items-end justify-between gap-10 px-8 pb-10 md:px-16 lg:flex-row"
        >
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 md:gap-16 lg:w-3/4">
            {highlights.map((item) => (
              <motion.div
                key={item.text}
                variants={footerItemVariants}
                className="flex flex-col gap-3"
              >
                <item.icon className="h-6 w-6 stroke-[1.5] text-stone-700" />
                <p className="max-w-[220px] text-[14px] leading-snug font-medium text-pretty text-stone-900">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.button
            variants={footerItemVariants}
            onClick={() => scrollTo("#about")}
            className="group flex cursor-pointer items-center gap-2 pb-2 text-sm font-medium text-stone-700"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}