export type Project = {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  techStack: TechItem[];
  github: string;
  heroImage: string;
  screenshots: string[];
  year: string;
  category: string;
  route: string;
  liveDemoUrl?: string;
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
    route: "/projects/umkm-i",
    liveDemoUrl: "https://umkm-app-phi.vercel.app",
  },
  {
    id: "absenku",
    title: "AbsenKu",
    shortDesc: "Sistem presensi kampus berbasis GPS dan foto real-time.",
    description:
      "AbsenKu adalah sistem presensi digital berbasis Laravel yang memvalidasi kehadiran mahasiswa secara real-time menggunakan kombinasi GPS Geofencing dan verifikasi foto wajah untuk mencegah titip absen. Aplikasi ini dirancang dengan arsitektur monolithic yang fokus pada kecepatan pengembangan dan kemudahan deployment, serta menyediakan fitur berbeda untuk setiap peran, mulai dari dashboard mobile-first dan smart check-in untuk mahasiswa, manajemen sesi fleksibel dan monitoring real-time untuk dosen, hingga kontrol master data terpusat bagi admin, dengan dukungan teknologi seperti Laravel, Blade, TailwindCSS, MySQL, Cloudinary, dan integrasi native browser API untuk kamera serta geolocation.",
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
    route: "/projects/absenku",
  },
  {
    id: "nusakarya",
    title: "NusaKarya",
    shortDesc:
      "Platform digital inspiratif untuk mendorong generasi muda Indonesia berkarya dan berkontribusi.",

    description:
      "NusaKarya adalah website landing page modern yang dirancang sebagai ruang digital bagi generasi muda Indonesia untuk menemukan inspirasi, memahami pentingnya kontribusi sosial, dan menyampaikan ide atau aspirasi mereka. Website ini mengusung tema 'Berkarya Untuk Indonesia' dengan fokus pada pengalaman pengguna yang interaktif melalui animasi halus, navigasi berbasis section, serta form aspirasi yang tervalidasi. Dibangun menggunakan Next.js App Router dan TypeScript, proyek ini menerapkan pendekatan component-based architecture untuk menjaga maintainability dan reusability kode, didukung oleh Framer Motion untuk animasi, React Hook Form dan Zod untuk validasi form, serta Tailwind CSS untuk pengembangan antarmuka yang cepat dan konsisten. Seluruh aplikasi dideploy menggunakan Vercel sehingga mendukung proses deployment modern dan scalable.",

    techStack: [
      {
        name: "Next.js",
        docs: "https://nextjs.org/docs",
      },
      {
        name: "React",
        docs: "https://react.dev",
      },
      {
        name: "TypeScript",
        docs: "https://www.typescriptlang.org/docs",
      },
      {
        name: "Tailwind CSS",
        docs: "https://tailwindcss.com/docs",
      },
      {
        name: "Framer Motion",
        docs: "https://www.framer.com/motion",
      },
      {
        name: "React Hook Form",
        docs: "https://react-hook-form.com",
      },
      {
        name: "Zod",
        docs: "https://zod.dev",
      },
    ],

    github: "https://github.com/farhnsndlr/nusakarya-web",
    route: "/projects/nusakarya",
    liveDemoUrl: "https://nusakarya-sooty.vercel.app/",

    heroImage:
      "/projects/nusakarya/nusakarya-thumbnail.png",

    screenshots: [
      "/projects/nusakarya/nusakarya-1.png",
      "/projects/nusakarya/nusakarya-2.png",
      "/projects/nusakarya/nusakarya-3.png",
      "/projects/nusakarya/nusakarya-4.png",
    ],

    year: "2026",

    category: "Landing Page",
  },
];

// Map tech name ke icon dari Simple Icons / devicons
export const getProjectRoute = (project: Project) => project.route;

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
  Zod: "https://cdn.simpleicons.org/zod",
  "React Hook Form": "https://cdn.simpleicons.org/reacthookform",
};
