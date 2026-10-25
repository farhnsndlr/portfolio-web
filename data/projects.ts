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
      "Web katalog interaktif dengan animasi modern dan routing dinamis.",
    description:
      "Project ini adalah aplikasi web katalog interaktif berbasis React dan TypeScript yang menampilkan makanan, minuman, dan jasa dengan routing dinamis, animasi modern menggunakan Framer Motion, desain responsif mobile-first, serta fitur interaktif seperti smart search, carousel, lightbox galeri, dan integrasi Web Share serta WhatsApp, dengan struktur modular dan fokus pada performa serta pengalaman pengguna yang halus.",
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
    shortDesc: "Sistem presensi kampus berbasis GPS dan foto real-time.",
    description:
      "AbsenKu adalah sistem presensi digital berbasis Laravel yang memvalidasi kehadiran mahasiswa secara real-time menggunakan kombinasi GPS Geofencing dan verifikasi foto wajah untuk mencegah titip absen. Aplikasi ini dirancang dengan arsitektur monolithic yang fokus pada kecepatan pengembangan dan kemudahan deployment, serta menyediakan fitur berbeda untuk setiap peran, mulai dari dashboard mobile-first dan smart check-in untuk mahasiswa, manajemen sesi fleksibel dan monitoring real-time untuk dosen, hingga kontrol master data terpusat bagi admin, dengan dukungan teknologi seperti Laravel, Blade, TailwindCSS, MySQL, Cloudinary, dan integrasi native browser API untuk kamera serta geolocation.",
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
    shortDesc: "Personal portfolio dengan animasi dan dark mode support.",
    description:
      "Website portfolio personal yang dibangun dengan Next.js dan Tailwind CSS. Menampilkan projects, skills, dan informasi kontak dengan desain modern. Dilengkapi dark/light mode dengan ripple transition effect dan animasi marquee untuk skills carousel.",
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
