"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Code2, BadgeCheck, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Stagger,
  Item,
  Counter,
  wmCardHover,
} from "@/components/ui/motion-primitives";
import { SectionHeader } from "@/components/sections/section-header";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#FAF9F5] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          crumb="About"
          badge="About Me"
          title={
            <>
              Passion for building{" "}
              <span className="text-indigo-600">exceptional</span> digital
              experiences.
            </>
          }
        />

        {/* Cards — Watermelon feature grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Tall image card */}
          <Stagger className="md:row-span-2" gap={0.1}>
            <Item className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                className="relative h-full min-h-[420px] overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-sm"
              >
                <Image
                  src="/assets/about-pic.png"
                  alt="About Divyanshu"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
                />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur-md ring-1 ring-black/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.08)]">
                      <BadgeCheck className="h-5 w-5 text-emerald-500" />
                    </div>
                    <span className="text-sm font-bold text-stone-900">Problem Solver</span>
                  </div>
                  <Badge variant="secondary" className="shadow-sm">Always shipping</Badge>
                </motion.div>
              </motion.div>
            </Item>
          </Stagger>

          {/* Vision card */}
          <Stagger delay={0.1} gap={0.1}>
            <Item>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                className={`h-full ${wmCardHover}`}
              >
                <Card className="h-full rounded-3xl border-none py-0 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                  <CardContent className="p-7">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.08)]">
                        <Sparkles className="h-5 w-5 text-orange-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-stone-900">The Vision</h3>
                    </div>
                    <p className="mb-5 text-sm leading-relaxed text-stone-500">
                      I&apos;m a web developer and AI enthusiast focused on
                      building intelligent, fast, and reliable digital products.
                      I care about execution more than ideas — ship something
                      that stays ahead of the curve.
                    </p>
                    <Badge variant="secondary" className="shadow-sm">AI-first mindset</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </Item>
          </Stagger>

          {/* Craft card */}
          <Stagger delay={0.2} gap={0.1}>
            <Item>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                className={`h-full ${wmCardHover}`}
              >
                <Card className="h-full rounded-3xl border-none py-0 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                  <CardContent className="p-7">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.08)]">
                        <Code2 className="h-5 w-5 text-violet-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-stone-900">The Craft</h3>
                    </div>
                    <p className="mb-5 text-sm leading-relaxed text-stone-500">
                      Deep interest in Artificial Intelligence — constantly
                      integrating the latest AI advancements into frontend
                      architecture and UI/UX decisions to build future-proof
                      apps.
                    </p>
                    <Badge variant="secondary" className="shadow-sm">Next.js · React · TypeScript</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </Item>
          </Stagger>

          {/* Stat: Experience */}
          <Stagger delay={0.15} gap={0.1}>
            <Item>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                className={`h-full ${wmCardHover}`}
              >
                <Card className="h-full rounded-3xl border-none py-0 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                  <CardContent className="flex items-center gap-5 p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.08)]">
                      <BadgeCheck className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-4xl font-extrabold tracking-tight text-stone-900">
                        <Counter to={3} suffix="+" />
                      </div>
                      <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-stone-400">
                        Years Experience
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Item>
          </Stagger>

          {/* Stat: Education */}
          <Stagger delay={0.25} gap={0.1}>
            <Item>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                className={`h-full ${wmCardHover}`}
              >
                <Card className="h-full rounded-3xl border-none py-0 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                  <CardContent className="flex items-center gap-5 p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.08)]">
                      <GraduationCap className="h-5 w-5 text-sky-600" />
                    </div>
                    <div>
                      <div className="text-4xl font-extrabold tracking-tight text-stone-900">
                        B.Tech
                      </div>
                      <div className="mt-1 text-[11px] font-bold uppercase tracking-widest text-stone-400">
                        Bachelor&apos;s Degree
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Item>
          </Stagger>
        </div>
      </div>
    </section>
  );
}