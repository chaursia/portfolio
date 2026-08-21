"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Stagger,
  Item,
  FadeUp,
} from "@/components/ui/motion-primitives";

const methods = [
  {
    id: "email",
    icon: Mail,
    title: "Direct Email",
    description: "The fastest way to reach me — I usually reply within a day.",
    actionLabel: "divyanshuchaursia@outlook.com",
    actionUrl: "mailto:divyanshuchaursia@outlook.com",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    title: "Professional Profile",
    description: "Connect with me on LinkedIn for opportunities and collabs.",
    actionLabel: "Divyanshu Chaursia",
    actionUrl: "https://www.linkedin.com/in/divyanshuchaursia",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#FAF9F5] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Stagger className="mb-14 flex flex-col items-start gap-4" gap={0.12}>
          <Item>
            <Badge variant="outline" className="bg-white shadow-sm">Contact</Badge>
          </Item>
          <Item>
            <h2 className="text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
              Let&apos;s build{" "}
              <span className="text-indigo-600">together.</span>
            </h2>
          </Item>
          <Item>
            <p className="max-w-xl text-lg leading-relaxed text-stone-500">
              I&apos;m always open to discussing new projects, creative ideas or
              original web experiences.
            </p>
          </Item>
        </Stagger>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Method cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {methods.map((method) => (
              <FadeUp key={method.id}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", damping: 20, stiffness: 200 }}
                  className="h-full"
                >
                  <Card className="h-full gap-0 rounded-4xl border-none py-0 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_24px_48px_-16px_rgba(0,0,0,0.18)]">
                    <CardContent className="flex h-full flex-col p-7">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.08)]">
                        <method.icon className="h-5 w-5 text-stone-800" />
                      </div>
                      <h3 className="mb-1.5 text-lg font-semibold text-stone-900">
                        {method.title}
                      </h3>
                      <p className="mb-8 flex-1 text-sm leading-relaxed text-stone-500">
                        {method.description}
                      </p>
                      <Button
                        asChild
                        className="w-full rounded-sm bg-stone-900 py-3.5 font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_2px_10px_rgba(0,0,0,0.15)] hover:bg-stone-800"
                      >
                        <a
                          href={method.actionUrl}
                          target={method.actionUrl.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="truncate"
                        >
                          {method.actionLabel}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          {/* Big CTA panel */}
          <FadeUp delay={0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", damping: 22, stiffness: 180 }}
              className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-4xl bg-stone-900 p-10 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]"
            >
              <motion.div
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.15, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-500/25 blur-3xl"
              />
              <motion.div
                animate={{ opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl"
              />

              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm"
                >
                  <Send className="h-8 w-8 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </motion.div>

                <h3 className="mb-3 text-3xl font-bold tracking-tight text-white">
                  Start a Conversation
                </h3>
                <p className="mx-auto mb-9 max-w-xs text-sm leading-relaxed text-stone-400">
                  Looking for a frontend developer who cares about every pixel?
                  You&apos;ve found him.
                </p>

                <motion.a
                  href="mailto:divyanshuchaursia@outlook.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", damping: 18, stiffness: 260 }}
                  className="inline-block rounded-full bg-white px-10 py-4 text-sm font-bold tracking-tight text-stone-900 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.35)]"
                >
                  Send Message
                </motion.a>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}