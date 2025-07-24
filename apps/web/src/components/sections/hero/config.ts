import type { Hero } from "@/types/hero";
import { metadata as meta } from "@/app/config";

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description:
    "CTO & Fullstack SaaS Developer focused on designing solid, scalable products with excellent user experience. Specialist in modern backend architectures with NestJS + PostgreSQL and professional frontend development with Next.js + Tailwind.",
};

export { hero };
