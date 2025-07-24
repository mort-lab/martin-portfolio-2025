import type { Experience } from "@/types/experience";

const experiences: Experience[] = [
  {
    name: "Co-Founder & CTO",
    duration: "Jan. 2025 - Present",
    company: "Trimio Learn",
    description:
      "Evolution of Trimio into a niche educational platform. SaaS that enables instructors (barbers and tattoo artists) to monetize their communities with courses, events and forums. Stack: NestJS, PostgreSQL (NeonDB), Stripe Connect, Next.js 15, TailwindCSS, shadcn/ui.",
  },
  {
    name: "Freelance Fullstack Developer",
    duration: "May 2025 - Jul. 2025",
    company: "GetPolara.ai",
    description:
      "AI-powered video generator (Upwork freelance). Stack: Laravel, NeonDB, Stripe (with credits system), Replicate API. Complete system: authentication, payment gateway, expiration, renewals, emails. Over 1000 registrations in the first week."
  },
  {
    name: "Shopify Backend Developer",
    duration: "Nov. 2024 - Jan. 2025",
    company: "Línea Gráfica",
    description:
      "Massive migrations from Prestashop to Shopify. Processing hundreds of thousands of records (products, customers, orders). Development of private Shopify apps, external database synchronization. Specialized in Shopify GraphQL API."
  },
  {
    name: "Frontend Developer (React)",
    duration: "Sep. 2024 - Nov. 2024",
    company: "Cultzyme",
    description:
      "Custom bio-reactors with proprietary software. Complete UI redesign of the Web App. Internal API consumption, experiment training system and LLM chatbot. Desktop app (Electron) for real-time monitoring with Pusher."
  },
  {
    name: "Founder & Fullstack Developer",
    duration: "May 2024 - Dec. 2024",
    company: "Trimio (Initial Phase)",
    description:
      "First stage of what would later become Trimio Learn. Payment and billing management platform for barbershops and tattoo studios. Stack: NextJs Server Actions + PostgreSQL + Stripe + Stripe Connect. Feedback collection from real barbershops."
  },
  {
    name: "Creator & Fullstack Developer",
    duration: "Feb. 2024 - Oct. 2024",
    company: "4Dawn (Shopify App)",
    description:
      "First own application in production. Visual sections marketplace for Shopify Themes. Over 100 active users during launch. Stack: Remix.js, Prisma, GraphQL, Shopify Payments. Individual purchase or monthly subscription system."
  },
  {
    name: "Professional IT Support",
    duration: "Nov. 2022 - Apr. 2023",
    company: "Versia (PSP Euskadi)",
    description:
      "Support for attorneys and judges in the judicial documents management system. Custom internal incident system usage. Technical problem resolution (delivery, signature, VPN, communication between parties)."
  },
];

export { experiences };
