export interface Entity {
  id: string;
  name: string;
  role: string;
  x: number; // grid coordinate (0 to 17)
  y: number; // grid coordinate (0 to 13)
  facing: "down" | "up" | "left" | "right";
  sprite: "guide" | "researcher" | "master" | "courier" | "sign" | "totem" | "pokeball";
  dialogue: string[];
  actions?: Array<{
    label: string;
    actionType: "link" | "route" | "form" | "download" | "custom";
    payload: string;
  }>;
}

export const MAP_COLS = 18;
export const MAP_ROWS = 14;
export const TILE_SIZE = 32;

// Tile types:
// 0: Grass (walkable)
// 1: Tree / Forest border (solid)
// 2: Cobblestone / Dirt Path (walkable)
// 3: Water (solid)
// 4: Building Wall (solid)
// 5: Building Roof (solid)
// 6: Building Door (walkable / entrance)
// 7: Flower patch (walkable)
// 8: Wooden Fence (solid)
// 9: Signpost (solid / interactable)

export const MAP_TILES: number[][] = [
  // 00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17
  [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1], // 00 North Border
  [1,  0,  0,  5,  5,  5,  0,  0,  0,  5,  5,  5,  5,  0,  0,  7,  7,  1], // 01 Building roofs
  [1,  0,  0,  4,  4,  4,  0,  0,  0,  4,  4,  4,  4,  0,  0,  7,  0,  1], // 02 Building walls
  [1,  0,  0,  4,  6,  4,  0,  0,  0,  4,  4,  6,  4,  0,  0,  0,  0,  1], // 03 Doors
  [1,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  1], // 04 Main Highway
  [1,  0,  7,  0,  0,  2,  0,  0,  0,  0,  2,  0,  0,  0,  0,  0,  2,  1], // 05 Junctions
  [1,  0,  0,  0,  0,  2,  0,  8,  8,  0,  2,  0,  9,  0,  0,  0,  2,  1], // 06 Archive Board
  [1,  0,  9,  0,  0,  2,  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  1], // 07 Skill Sign
  [1,  2,  2,  2,  0,  2,  0,  0,  0,  0,  2,  2,  2,  2,  2,  2,  2,  1], // 08 Crossway
  [1,  2,  0,  0,  0,  0,  0,  5,  5,  5,  0,  0,  0,  3,  3,  3,  3,  1], // 09 Comm Roof & Lake
  [1,  2,  0,  7,  7,  0,  0,  4,  4,  4,  0,  0,  0,  3,  3,  3,  3,  1], // 10 Comm Walls & Lake
  [1,  2,  0,  7,  0,  0,  0,  4,  6,  4,  0,  0,  0,  3,  3,  3,  3,  1], // 11 Comm Door
  [1,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  1], // 12 South Highway
  [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1], // 13 South Border
];

export const WORLD_ENTITIES: Entity[] = [
  {
    id: "guide-oak",
    name: "GUIDE NADLR",
    role: "RESEARCH ASSISTANT",
    x: 2,
    y: 3,
    facing: "down",
    sprite: "guide",
    dialogue: [
      "Hello there, Traveler! Welcome to Farhan Sultan Nadlir's Pixel World!",
      "Farhan is a System Information student and Full-Stack Web Architect passionate about building high-performance, structured digital systems.",
      "Feel free to explore our town: visit the Project Lab to the East, the Skill Totem to the Southwest, or the Notice Board for his Resume!",
    ],
    actions: [
      {
        label: "LEARN MORE IN DOSSIER",
        actionType: "link",
        payload: "#about",
      },
    ],
  },
  {
    id: "project-researcher",
    name: "DR. ARTIFACT",
    role: "PROJECT CURATOR",
    x: 10,
    y: 3,
    facing: "down",
    sprite: "researcher",
    dialogue: [
      "Greetings! You have entered Farhan's Project Laboratory.",
      "Here, real-world systems are engineered, validated, and deployed with clean architecture and performance in mind.",
      "Choose a project to inspect its case study, verified screenshots, and GitHub source repository!",
    ],
    actions: [
      {
        label: "01. UMKM-i (WEB CATALOG)",
        actionType: "route",
        payload: "/projects/umkm-i",
      },
      {
        label: "02. ABSENKU (GPS ATTENDANCE)",
        actionType: "route",
        payload: "/projects/absenku",
      },
      {
        label: "03. PORTFOLIO WEBSITE",
        actionType: "route",
        payload: "/projects/portfolio",
      },
    ],
  },
  {
    id: "skill-master",
    name: "TECH MASTER",
    role: "SYSTEM INSTRUCTOR",
    x: 3,
    y: 7,
    facing: "right",
    sprite: "master",
    dialogue: [
      "Halt, Adventurer! You want to inspect Farhan's technical battle stats?",
      "FRONTEND: Next.js 16, React 19, TypeScript, Tailwind CSS.",
      "BACKEND: Laravel, PHP, MySQL, REST APIs, GPS Geofencing.",
      "TOOLCHAIN: Git, GitHub Actions, Turbopack, Clean Architecture.",
    ],
    actions: [
      {
        label: "VIEW COMPLETE SKILL MATRIX",
        actionType: "link",
        payload: "#skills",
      },
    ],
  },
  {
    id: "archive-board",
    name: "NOTICE BOARD",
    role: "COMMUNITY ARCHIVE",
    x: 12,
    y: 6,
    facing: "down",
    sprite: "sign",
    dialogue: [
      "[OFFICIAL RECORD: FARHAN SULTAN NADLIR]",
      "Academic Profile: System Information Student.",
      "Core Competencies: Web Engineering, System Analysis & Database Modeling.",
      "Curriculum Vitae document verified and ready for download.",
    ],
    actions: [
      {
        label: "DOWNLOAD CURRICULUM VITAE (PDF)",
        actionType: "download",
        payload: "/CV_Farhan_Sultan_Nadlir.pdf",
      },
    ],
  },
  {
    id: "comm-officer",
    name: "OFFICER TELECOM",
    role: "DISPATCH AGENT",
    x: 9,
    y: 11,
    facing: "left",
    sprite: "courier",
    dialogue: [
      "Incoming Transmission! You have reached the Town Communication Station.",
      "Farhan is open for full-stack engineering roles, system consultations, and technical collaborations.",
      "You can send a direct message or open an instant WhatsApp chat right now!",
    ],
    actions: [
      {
        label: "OPEN WHATSAPP CHAT (+62 815 7402 9222)",
        actionType: "link",
        payload: "https://wa.me/6285155399057",
      },
      {
        label: "SEND MESSAGE VIA CONTACT FORM",
        actionType: "form",
        payload: "contact",
      },
    ],
  },
  {
    id: "secret-egg",
    name: "HIDDEN ITEM",
    role: "SECRET EASTER EGG",
    x: 15,
    y: 10,
    facing: "down",
    sprite: "pokeball",
    dialogue: [
      "Congratulations, Explorer! You discovered the Hidden Developer Artifact!",
      "Achievement Unlocked: [MASTER EXPLORER]. Farhan appreciates your curiosity and attention to detail.",
    ],
  },
];
