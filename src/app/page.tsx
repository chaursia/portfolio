import React from "react";
import Hero34 from "@/components/ui/hero-34";
import Integrations1 from "@/components/ui/integrations-1";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import About from "@/components/sections/about";
import AI from "@/components/sections/ai";
import Projects from "@/components/sections/projects";
import Social from "@/components/sections/social";
import Contact from "@/components/sections/contact";
import { Footer15 } from "@/components/ui/footer-15";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollProgress />

      <Hero34 />
      <About />
      <AI />
      <Integrations1 />
      <Projects />
      <Social />
      <Contact />

      <Footer15
        brandName="Chaursia"
        description={
          "Crafting pixel-perfect digital experiences.\nFrontend Developer & AI Enthusiast building\nintelligent, fast, and reliable products."
        }
        ctaLabel="Get in Touch"
        ctaHref="mailto:divyanshuchaursia@outlook.com"
        columns={[
          {
            title: "Navigate",
            links: [
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ],
          },
          {
            title: "Connect",
            links: [
              { label: "LinkedIn", href: "https://www.linkedin.com/in/divyanshuchaursia" },
              { label: "GitHub", href: "https://github.com/chaursia" },
              { label: "LeetCode", href: "https://leetcode.com/u/divyanshuchaursia/" },
              { label: "Telegram", href: "https://t.me/divyanshuchaursia" },
            ],
          },
          {
            title: "Social",
            links: [
              { label: "Instagram", href: "https://instagram.com/chaursiadivyanshu" },
              { label: "Twitter / X", href: "https://twitter.com/" },
            ],
          },
          {
            title: "More",
            links: [
              { label: "Legacy v1 Site", href: "/v1" },
            ],
          },
        ]}
        heroBrandName="CHAURSIA"
      />
    </main>
  );
}