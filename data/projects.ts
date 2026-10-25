export type Project = {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  summary?: string;
  techStack: TechItem[];
  github: string;
  heroImage: string;
  screenshots: string[];
  year: string;
  category: string;
  featured?: boolean;
};

export type TechItem = {
  name: string;
  docs: string;
};

export const projects: Project[] = [
  {
    id: "umkm-i",
    title: "UMKM-i",
    shortDesc:
      "Interactive web catalog featuring dynamic routing and modern motion.",
    description:
      "An interactive web catalog application built with React and TypeScript designed to showcase food, beverages, and local services. Features dynamic routing, modern animations powered by Framer Motion, and a mobile-first responsive design. Includes smart search, interactive carousels, lightbox photo galleries, and seamless integrations with the native Web Share API and WhatsApp, all organized within a modular architecture focused on high performance and fluid user interactions.",
    summary:
      "An interactive web catalog built with React, TypeScript, and Framer Motion for local small businesses to showcase products with direct WhatsApp ordering and dynamic routing.",
    techStack: [
      { name: "Next.js", docs: "https://nextjs.org/docs" },
      { name: "React", docs: "https://react.dev/" },
      { name: "TypeScript", docs: "https://www.typescriptlang.org/" },
      { name: "Tailwind CSS", docs: "https://tailwindcss.com/docs" },
    ],
    github: "https://github.com/farhnsndlr/umkm-app",
    heroImage: "/projects/umkm-i/umkm_thumbnail.png",
    screenshots: ["/projects/umkm-i/umkm1.png", "/projects/umkm-i/umkm2.png"],
    year: "2025",
    category: "Web App",
    featured: true,
  },
  {
    id: "absenku",
    title: "AbsenKu",
    shortDesc:
      "Campus attendance system powered by GPS geofencing and real-time photo verification.",
    description:
      "AbsenKu is a digital attendance system built with Laravel that validates university student presence in real time using browser GPS geofencing and facial photo verification to prevent proxy attendance. Engineered with a monolithic architecture focused on rapid development and straightforward deployment, it provides role-specific workflows: a mobile-first check-in dashboard for students, flexible session management and live monitoring for lecturers, and centralized master data administration for coordinators, backed by Laravel, Blade, Tailwind CSS, MySQL, Cloudinary, and native browser camera and geolocation APIs.",
    summary:
      "A campus attendance system engineered with Laravel and MySQL that uses browser GPS geofencing and real-time photo verification to prevent attendance fraud.",
    techStack: [
      { name: "Laravel", docs: "https://laravel.com/docs" },
      { name: "MySQL", docs: "https://dev.mysql.com/doc" },
      { name: "PHP", docs: "https://www.php.net/docs.php" },
      { name: "Alpine.js", docs: "https://alpinejs.dev" },
      { name: "Tailwind CSS", docs: "https://tailwindcss.com/docs" },
    ],
    github: "https://github.com/farhnsndlr/absenku-web",
    heroImage: "/projects/absenku/absenku_thumbnail.png",
    screenshots: [
      "/projects/absenku/absenku2.jpeg",
      "/projects/absenku/absenku3.jpeg",
    ],
    year: "2025",
    category: "Web App",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    shortDesc:
      "Personal developer portfolio with neo-brutalist styling and responsive dual themes.",
    description:
      "Personal developer portfolio website built with Next.js and Tailwind CSS to showcase featured projects, technical capabilities, and direct contact channels. Features a high-contrast neo-brutalist visual design system, seamless light and dark mode toggling with persisted state, fluid motion craft, and fully responsive layouts across all viewports.",
    summary:
      "Personal portfolio website built with Next.js 16 (Turbopack), React 19, and Tailwind CSS v4, featuring high-contrast light and dark themes and accessible motion.",
    techStack: [
      { name: "Next.js", docs: "https://nextjs.org/docs" },
      { name: "TypeScript", docs: "https://www.typescriptlang.org/docs" },
      { name: "Tailwind CSS", docs: "https://tailwindcss.com/docs" },
      { name: "Framer Motion", docs: "https://www.framer.com/motion" },
    ],
    github: "https://github.com/farhnsndlr/portfolio-web",
    heroImage: "/projects/portfolio/portfolio_thumbnail.png",
    screenshots: [
      "/projects/portfolio/portfolio1.png",
      "/projects/portfolio/portfolio3.png",
    ],
    year: "2025",
    category: "Frontend",
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  const featured = projects.filter((p) => p.featured);
  return featured.length > 0 ? featured : projects.slice(0, 2);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(projects.map((p) => p.category)));
}

export function getAllTechnologies(): string[] {
  const set = new Set<string>();
  projects.forEach((p) => p.techStack.forEach((t) => set.add(t.name)));
  return Array.from(set);
}

// Map tech name ke icon dari Simple Icons / devicons
export const techIcons: Record<string, string> = {
  Laravel: "https://cdn.simpleicons.org/laravel",
  PHP: "https://cdn.simpleicons.org/php",
  MySQL: "https://cdn.simpleicons.org/mysql",
  JavaScript: "https://cdn.simpleicons.org/javascript",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
  "Alpine.js": "https://cdn.simpleicons.org/alpinedotjs",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs",
  TypeScript: "https://cdn.simpleicons.org/typescript",
  "Framer Motion": "https://cdn.simpleicons.org/framer",
  React: "https://cdn.simpleicons.org/react",
  Git: "https://cdn.simpleicons.org/git",
};
