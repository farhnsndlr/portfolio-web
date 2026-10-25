import ReimaginedHero from "@/components/reimagined/ReimaginedHero";
import ReimaginedProjects from "@/components/reimagined/ReimaginedProjects";
import ReimaginedSkills from "@/components/reimagined/ReimaginedSkills";
import ReimaginedAbout from "@/components/reimagined/ReimaginedAbout";
import ReimaginedContact from "@/components/reimagined/ReimaginedContact";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-[#FFE500] selection:text-[#171717]">
      {/* 01. SPLIT-SCALE HERO ENTRANCE */}
      <ReimaginedHero />

      {/* 02. INTERACTIVE PROJECT EXHIBITION */}
      <ReimaginedProjects />

      {/* 03. INTERACTIVE TECHNOLOGY INDEX & PROJECT BRIDGE */}
      <ReimaginedSkills />

      {/* 04. PERSONAL NARRATIVE & CHRONOLOGICAL MILESTONES */}
      <ReimaginedAbout />

      {/* 05. DRAMATIC CLOSING TRANSMISSION DESK */}
      <ReimaginedContact />
    </main>
  );
}
