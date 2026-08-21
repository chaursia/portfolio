"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Bot,
  MessageSquareCode,
  Wand2,
  Brain,
  FlaskConical,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Stagger,
  Item,
  wmCardHover,
} from "@/components/ui/motion-primitives";
import { SectionHeader } from "@/components/sections/section-header";

const capabilities = [
  {
    title: "AI Automation",
    description:
      "Automating repetitive workflows end-to-end — connecting APIs, triggers and AI steps so products run themselves.",
    icon: Workflow,
    tint: "text-indigo-600",
    chip: "n8n · Zapier · Webhooks",
  },
  {
    title: "Agentic AI",
    description:
      "Building autonomous, multi-step agents that plan, use tools and act — not just chat.",
    icon: Bot,
    tint: "text-violet-600",
    chip: "LangChain · CrewAI · MCP",
  },
  {
    title: "Prompt Engineering",
    description:
      "Designing reliable, eval-driven prompts and system instructions that behave consistently in production.",
    icon: MessageSquareCode,
    tint: "text-emerald-600",
    chip: "System prompts · Evals",
  },
  {
    title: "Vibe Coding",
    description:
      "Shipping at AI speed — pairing with Cursor, Copilot and Claude to turn ideas into working features fast.",
    icon: Wand2,
    tint: "text-pink-600",
    chip: "Cursor · Copilot · Claude",
  },
  {
    title: "LLM Integration",
    description:
      "Wiring GPT-class models into real products — streaming UIs, function calling, structured outputs.",
    icon: Brain,
    tint: "text-sky-600",
    chip: "OpenAI · Anthropic · Gemini",
  },
  {
    title: "RAG Pipelines",
    description:
      "Grounding answers in your data — embeddings, retrieval and context engineering that reduce hallucinations.",
    icon: FlaskConical,
    tint: "text-orange-600",
    chip: "Embeddings · Vector DBs",
  },
];

const aiToolsMarquee = [
  "GPT-5",
  "Claude",
  "Gemini",
  "Cursor",
  "GitHub Copilot",
  "LangChain",
  "CrewAI",
  "MCP",
  "OpenAI API",
  "Pinecone",
  "Vercel AI SDK",
  "n8n",
];

export default function AI() {
  return (
    <section id="ai" className="w-full overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          crumb="AI"
          badge="AI Stack"
          title={
            <>
              Beyond code —{" "}
              <span className="text-indigo-600">intelligent</span> systems.
            </>
          }
          sub="How I plug artificial intelligence into real products: automation, agents, and AI-native development workflows."
        />

        {/* Capability cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <Stagger key={cap.title} gap={0.06}>
              <Item>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", damping: 20, stiffness: 200 }}
                  className={`h-full ${wmCardHover}`}
                >
                  <Card className="h-full gap-0 rounded-3xl border-none py-0 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                    <CardContent className="flex h-full flex-col p-7">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.08)]">
                        <cap.icon className={`h-5 w-5 ${cap.tint}`} />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-stone-900">
                        {cap.title}
                      </h3>
                      <p className="mb-6 flex-1 text-sm leading-relaxed text-stone-500">
                        {cap.description}
                      </p>
                      <div>
                        <Badge variant="secondary" className="shadow-sm">
                          {cap.chip}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Item>
            </Stagger>
          ))}
        </div>
      </div>

      {/* AI tools marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="marquee-mask relative mt-16 w-full"
      >
        <div className="animate-marquee flex w-max gap-3 pr-3">
          {[...aiToolsMarquee, ...aiToolsMarquee].map((tool, i) => (
            <div
              key={`${tool}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-full bg-[#FAF9F5] px-5 py-3 ring-1 ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <SparkleDot />
              <span className="text-sm font-semibold text-stone-700">{tool}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SparkleDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
    </span>
  );
}