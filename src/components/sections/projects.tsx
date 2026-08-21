"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Stagger,
  Item,
} from "@/components/ui/motion-primitives";
import { SectionHeader } from "@/components/sections/section-header";

const projects = [
  {
    title: "Anime Streaming Website",
    image: "/assets/project-1.png",
    github: "https://github.com/shubham-king/Hianime",
    demo: "https://github.com/shubham-king/Hianime",
    tag: "Web App",
    description:
      "A high-performance streaming platform with a modern UI and seamless user experience.",
  },
  {
    title: "College Confessions Platform",
    image: "/assets/project-2.png",
    github: "https://github.com/chaursia/speaksout",
    demo: "https://speaksout.vercel.app/index.html",
    tag: "Full Stack : Prototype",
    description:
      "An anonymous platform for college students to share thoughts and connect.",
  },
  {
    title: "Y2matez – Youtube Video",
    image: "/assets/project-3.png",
    github: "https://github.com/shubham-king/y2matez.buzz",
    demo: "https://github.com/shubham-king/y2matez.buzz",
    tag: "Tool",
    description:
      "A fast and reliable YouTube video downloader tool with a clean interface.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-[#FAF9F5] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          crumb="Projects"
          badge="Portfolio"
          title={
            <>
              Recent <span className="text-indigo-600">Creations</span>
            </>
          }
          sub={
            <span className="flex items-center justify-center gap-2 italic">
              <Quote className="h-4 w-4 shrink-0" />
              Everything is designed. Few things are designed well.
            </span>
          }
        />

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Stagger key={project.title} gap={0.08}>
              <Item>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", damping: 20, stiffness: 200 }}
                  className="group h-full"
                >
                  <Card className="h-full gap-0 rounded-4xl border-none p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_24px_48px_-16px_rgba(0,0,0,0.18)]">
                    {/* Image */}
                    <div className="relative h-52 w-full overflow-hidden rounded-[1.35rem]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute left-3 top-3">
                        <Badge className="border border-indigo-100 bg-white/90 text-[10px] font-bold uppercase tracking-widest text-indigo-600 shadow-sm backdrop-blur-md">
                          {project.tag}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="flex flex-1 flex-col p-5">
                      <h3 className="mb-1.5 text-lg font-bold text-stone-900 transition-colors group-hover:text-indigo-600">
                        {project.title}
                      </h3>
                      <p className="mb-6 flex-1 text-sm leading-relaxed text-stone-500">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-stone-400 transition-colors hover:text-stone-900"
                        >
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>
                        <Button
                          asChild
                          size="sm"
                          className="rounded-sm bg-stone-900 px-4 font-bold shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:bg-indigo-600"
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.article>
              </Item>
            </Stagger>
          ))}
        </div>
      </div>
    </section>
  );
}