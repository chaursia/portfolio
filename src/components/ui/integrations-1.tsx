'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Palette,
  Layers,
  Braces,
  FileCode,
  FileCode2,
  Blocks,
  Database,
  Zap,
  GitBranch,
  Leaf,
  Binary,
  Webhook,
  Table2,
  ArrowRight,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const skills = [
  { name: 'HTML', icon: Code, tint: 'text-orange-500' },
  { name: 'CSS', icon: Palette, tint: 'text-blue-500' },
  { name: 'SASS', icon: Layers, tint: 'text-pink-500' },
  { name: 'JavaScript', icon: Braces, tint: 'text-yellow-500' },
  { name: 'TypeScript', icon: FileCode2, tint: 'text-blue-600' },
  { name: 'Material UI', icon: Blocks, tint: 'text-sky-500' },
  { name: 'PostgreSQL', icon: Database, tint: 'text-indigo-500' },
  { name: 'Next JS', icon: Zap, tint: 'text-stone-900' },
  { name: 'MongoDB', icon: Leaf, tint: 'text-emerald-500' },
  { name: 'Git', icon: GitBranch, tint: 'text-orange-600' },
  { name: 'Python', icon: FileCode, tint: 'text-yellow-600' },
  { name: 'C', icon: Binary, tint: 'text-blue-700' },
  { name: 'REST APIs', icon: Webhook, tint: 'text-violet-500' },
  { name: 'SQL', icon: Table2, tint: 'text-teal-600' },
];

const columnLayout = [
  [0],
  [1, 2],
  [3, 4, 5],
  [6, 7],
  [8, 9, 10],
  [11, 12],
  [13],
];

function SkillCard({ skill }: { skill: (typeof skills)[0] }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: 'spring', damping: 18, stiffness: 200 }}
      className="group bg-muted/50 relative flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-lg shadow-[inset_0_0_2px_2px_rgba(255,255,255,1),inset_0_0_0_1px_rgba(0,0,0,0.06),0px_0px_0px_1px_rgba(0,0,0,0.08),0px_1px_2px_-1px_rgba(0,0,0,0.08),0px_2px_4px_0px_rgba(0,0,0,0.06)] sm:h-20 sm:w-20 lg:h-24 lg:w-24"
    >
      <Icon className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6 lg:h-8 lg:w-8 ${skill.tint}`} />
      <span className="text-[9px] font-bold tracking-tight text-stone-600 sm:text-[10px] lg:text-xs">{skill.name}</span>
    </motion.div>
  );
}

export default function Integrations1() {
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="experience" className="bg-muted/50 relative h-full w-full overflow-hidden py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ type: 'spring', damping: 24, stiffness: 120 }}
          className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-4 text-center md:mb-12"
        >
          <Badge variant="outline" className="bg-white shadow-sm">
            Tech Stack
          </Badge>
          <h2 className="text-foreground mb-2 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Technical{' '}
            <span className="text-indigo-600">Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of my tech stack and the tools I use to
            build scalable products.
          </p>
        </motion.div>

        <div className="relative mx-auto mb-16 max-w-4xl md:mb-20">
          {/* Mobile — wrap grid */}
          <div className="flex flex-wrap justify-center gap-4 md:hidden">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>

          {/* Desktop — pyramid */}
          <div className="hidden items-end justify-center gap-3 md:flex lg:gap-5">
            {columnLayout.map((colIndices, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 120,
                  delay: i * 0.1,
                }}
                className="flex flex-col gap-3 lg:gap-5"
              >
                {colIndices.map((index) => {
                  const skill = skills[index];
                  return <SkillCard key={skill.name} skill={skill} />;
                })}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ type: 'spring', damping: 22, stiffness: 120, delay: 0.2 }}
          className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center"
        >
          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
            From pixel-perfect interfaces to solid backend foundations —
            everything needed to take a product from idea to production.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="group rounded-sm bg-stone-900 px-7 py-4 text-base font-medium shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-stone-800"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}