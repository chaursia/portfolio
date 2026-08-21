"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Stagger, Item } from "@/components/ui/motion-primitives";

export function SectionHeader({
  crumb,
  badge,
  title,
  sub,
  align = "center",
}: {
  crumb: string;
  badge?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: "center" | "left";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const centered = align === "center";

  return (
    <div
      ref={ref}
      className={`relative ${centered ? "mx-auto mb-16 max-w-2xl text-center" : "mb-14 max-w-2xl"}`}
    >
      {/* Scroll-parallax glow */}
      <motion.div
        style={{ y: glowY, opacity: glowOpacity }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-56 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/40 blur-[100px]"
      />

      <Stagger className="flex flex-col items-center gap-4" gap={0.1}>
        <Item>
          <Breadcrumb>
            <BreadcrumbList className={centered ? "justify-center" : ""}>
              <BreadcrumbItem>
                <Link href="/" className="transition-colors hover:text-stone-900">
                  Home
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{crumb}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Item>

        {badge && (
          <Item>
            <Badge variant="outline" className="bg-white shadow-sm">
              {badge}
            </Badge>
          </Item>
        )}

        <Item>
          <h2 className="text-4xl font-bold tracking-tight text-stone-900 md:text-5xl">
            {title}
          </h2>
        </Item>

        {sub && (
          <Item>
            <p className="text-lg leading-relaxed text-stone-500">{sub}</p>
          </Item>
        )}
      </Stagger>
    </div>
  );
}