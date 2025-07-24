import type { Skill } from "@/types/skill";

const skills: Skill[] = [
  {
    name: "Backend Development",
    thumbnail: "/images/skills/web-development.jpg",
    description: `Specialized in modern backend architectures with NestJS, Node.js, Laravel (PHP) and Express. Experience in REST and GraphQL API design, microservices, authentication, authorization and architectural patterns like DDD. PostgreSQL database mastery with Prisma ORM.`,
  },
  {
    name: "Frontend Development",
    thumbnail: "/images/skills/ui-ux-design.jpg",
    description: `Professional frontend development with Next.js 15, React, TypeScript and TailwindCSS. Experience with shadcn/ui, Zustand, Radix UI, Server Actions and animations with Framer Motion. Focus on user experience, performance and modern responsive design.`,
  },
  {
    name: "Payment Systems",
    thumbnail: "/images/skills/database-management.jpg",
    description: `Complete payment systems integration with Stripe and Stripe Connect. Experience in custom webhooks, subscriptions, automatic renewals, cancellations, credit management and payment marketplaces. Implementation of secure and reliable gateways.`,
  },
  {
    name: "DevOps & Infrastructure",
    thumbnail: "/images/skills/mobile-development.jpg",
    description: `CI/CD implementation with GitHub Actions, containerization with Docker, infrastructure as code with Terraform. Experience in automated deployment, autoscaling, load balancers, and cloud services. Automated testing with Jest and documentation with Swagger.`,
  },
];

export { skills };
