// index.js
export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "I specialize in building modern, responsive, and user-centric interfaces using the latest technologies. From crafting seamless user journeys to delivering high-performance apps, I ensure design and functionality work hand in hand.",
    items: [
      {
        title: "React.js & Next.js",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Tailwind CSS & ShadCN",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Performance & Accessibility",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "Backend Development",
    description:
      "I build secure, scalable, and efficient backends with Node.js, Express.js, and Django REST Framework—leveraging PostgreSQL and MongoDB for reliable data management and smooth integrations.",
    items: [
      {
        title: "Node.js & Express.js",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Django REST Framework (DRF)",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "PostgreSQL & MongoDB",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "I streamline development, ensure robust code quality, and follow industry-standard tools and best practices to deliver efficient, scalable solutions.",
    items: [
      {
        title: "Git/Github & Docker",
        description: "(Refactoring, Tech Debt Cleanup)",
      },
      {
        title: "VS Code",
        description: "(Vulnerability Assessments)",
      },
      {
        title: "Postman & Figma",
        description: "(SSR, Metadata, Structured Data)",
      },
    ],
  },
 
];
export const projects = [
  {
    id: 1,
    name: "Riwaz: Online Saree Store",
    description:
      "Build a full-stack, production-ready e-commerce platform (Riwaz) using Next.js (TypeScript), Node.js, Express, MongoDB, and Redis, supporting a complete order lifecycle including Razorpay integration and Cash on Delivery.",
    href: "https://riwaz.vercel.app/",
    image: "/assets/projects/riwaz.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 2, name: "Next.js" },
      { id: 5, name: "Tailwind CSS" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 1, name: "Redis" },
    ],
  },
  {
    id: 2,
    name: "CareerWave: Job Search Platform ",
    description:
      "Build a full-stack job portal where students can search and apply for jobs and internships with advanced filtering and infinite scroll, and recruiters can register their company, post jobs, and manage applications.",
    href: "https://career-wave-one.vercel.app/",
    image: "/assets/projects/career-wave.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "Express.js" },
      { id: 4, name: "MongoDB" },
    ],
  },
];
export const socials = [
  { name: "Leetcode", href: "https://leetcode.com/u/Gaurav_1607/" },
  {
    name: "Github",
    href: "https://github.com/GauravsSharma",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/gourav-sharma-ab1660233" },
  // { name: "GitHub", href: "" },
];
export const experienceData = [
  {
    title: "FullStack Developer Intern @Unizoy",
    description:
      "Worked as Fullstack Developer Intern for 6 months, enhancing authentication/permissions in DRF project 'Sard,' building a medicine inventory system, and developing Strapi APIs with MERN integration for seamless frontend-backend functionality.",
    items: [
      {
        title: "DRF (Python)",
      },
      {
        title: "MERN Stack",

      },
      {
        title: "Nest.js",

      },
    ],
  },
];
