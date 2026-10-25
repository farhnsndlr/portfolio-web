import { Metadata } from "next";
import ProjectsArchiveClient from "@/components/projects/ProjectsArchiveClient";

export const metadata: Metadata = {
  metadataBase: new URL("https://nadlr.my.id"),
  title: "Project Archive — NADLR.",
  description:
    "Complete catalogue of full-stack web applications, student projects, and frontend builds by Farhan Sultan Nadlir (NADLR.). Filter by technology and explore case studies.",
  openGraph: {
    title: "Project Archive — NADLR.",
    description:
      "Complete catalogue of full-stack web applications, student projects, and frontend builds by Farhan Sultan Nadlir (NADLR.).",
    url: "https://nadlr.my.id/projects",
  },
};

export default function ProjectsArchivePage() {
  return <ProjectsArchiveClient />;
}
