"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send as Telegram,
  Code2 as LeetCode,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stagger,
  Item,
} from "@/components/ui/motion-primitives";
import { SectionHeader } from "@/components/sections/section-header";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/divyanshuchaursia",
    tint: "group-hover:text-blue-600",
    label: "Professional",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/chaursia",
    tint: "group-hover:text-stone-900",
    label: "Full Code",
  },
  {
    name: "LeetCode",
    icon: LeetCode,
    href: "https://leetcode.com/u/divyanshuchaursia/",
    tint: "group-hover:text-orange-500",
    label: "Algorithm",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/chaursiadivyanshu",
    tint: "group-hover:text-pink-600",
    label: "Life",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/",
    tint: "group-hover:text-sky-500",
    label: "X",
  },
  {
    name: "Telegram",
    icon: Telegram,
    href: "https://t.me/divyanshuchaursia",
    tint: "group-hover:text-indigo-500",
    label: "Chat",
  },
];

export default function Social() {
  return (
    <section id="social" className="w-full bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          crumb="Socials"
          badge="Socials"
          title={
            <>
              Digital <span className="text-indigo-600">Footprint</span>.
            </>
          }
          sub="Find me where I share code, talk about tech, or document my journey."
        />

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {socialLinks.map((social) => (
            <Stagger key={social.name} gap={0.06}>
              <Item>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", damping: 20, stiffness: 220 }}
                  className="group block h-full"
                >
                  <Card className="h-full gap-0 rounded-4xl border-none py-0 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_24px_48px_-16px_rgba(0,0,0,0.18)]">
                    <CardContent className="relative flex flex-col items-center justify-center p-7 text-center">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.08)] transition-transform duration-300 group-hover:scale-110">
                        <social.icon className={`h-6 w-6 text-stone-400 transition-colors ${social.tint}`} />
                      </div>

                      <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        {social.label}
                      </span>
                      <span className="block text-base font-extrabold tracking-tight text-stone-900">
                        {social.name}
                      </span>

                      <ExternalLink className="absolute right-4 top-4 h-3.5 w-3.5 translate-x-2 text-stone-300 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </CardContent>
                  </Card>
                </motion.a>
              </Item>
            </Stagger>
          ))}
        </div>
      </div>
    </section>
  );
}