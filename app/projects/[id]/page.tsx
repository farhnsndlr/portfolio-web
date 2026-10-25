import { notFound } from "next/navigation";
import { projects, techIcons } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Calendar,
  Layers,
  Archive,
} from "lucide-react";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };

  return {
    metadataBase: new URL("https://nadlr.my.id"),
    title: `${project.title} — NADLR.`,
    description: project.shortDesc,
    openGraph: {
      title: `${project.title} — NADLR.`,
      description: project.shortDesc,
      images: project.heroImage ? [{ url: project.heroImage }] : [],
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectIndex = projects.findIndex((p) => p.id === id);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 sm:pt-24 pb-32 px-4 sm:px-8 md:px-14 font-mono selection:bg-[#FFE500] selection:text-[#171717]">
      <div className="max-w-5xl mx-auto">
        {/* Top Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 text-xs">
          <div className="flex items-center gap-2">
            <Link
              href="/#works"
              className="neo-btn-white flex items-center gap-1.5 font-bold shadow-neo-sm"
            >
              <ArrowLeft size={13} />
              <span>Home</span>
            </Link>

            <Link
              href="/projects"
              className="neo-btn-yellow flex items-center gap-1.5 font-black shadow-neo-sm"
            >
              <Archive size={13} />
              <span>Project Archive</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground font-bold">
            <span className="text-foreground bg-[#FFE500] px-2 py-0.5 text-[#171717] font-black">
              {project.category}
            </span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Hero Cinematic Media Frame */}
        <div className="border-[3px] border-border bg-card overflow-hidden mb-10 p-2 shadow-neo-xl">
          <div className="relative w-full aspect-video bg-background border-2 border-border overflow-hidden">
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
                <ExternalLink size={36} />
                <span className="text-xs uppercase">No preview available</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Overview */}
        <div className="border-[3px] border-border bg-card p-6 sm:p-10 mb-10 shadow-neo-xl">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
            <span className="px-2.5 py-0.5 bg-[#FFE500] text-[#171717] font-black uppercase border border-border">
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 bg-secondary text-foreground border border-border flex items-center gap-1.5 font-bold">
              <Calendar size={12} />
              <span>{project.year}</span>
            </span>
          </div>

          <h1 className="text-project-title uppercase text-foreground mb-4">
            {project.title}
          </h1>

          <p className="text-body-lead font-bold text-foreground border-l-4 border-[#FFE500] pl-4 mb-8">
            {project.shortDesc}
          </p>

          {/* Details & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t-2 border-border">
            {/* Left 8 Cols: Description */}
            <div className="md:col-span-8 space-y-3">
              <span className="text-meta-mono text-muted-foreground block">
                About the Project:
              </span>
              <p className="text-body text-foreground/85">
                {project.description}
              </p>
            </div>

            {/* Right 4 Cols: Technology Stack & Source Repo */}
            <div className="md:col-span-4 flex flex-col gap-6">
              <div>
                <span className="text-xs font-black text-muted-foreground uppercase block mb-3">
                  Technologies Used:
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => {
                    const iconUrl = techIcons[tech.name];
                    return (
                      <a
                        key={tech.name}
                        href={tech.docs}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary border border-border hover:bg-[#FFE500] hover:text-[#171717] transition-colors text-xs text-foreground font-bold shadow-neo-sm"
                        title={`Documentation for ${tech.name}`}
                      >
                        {iconUrl && (
                          <img
                            src={iconUrl}
                            alt={tech.name}
                            className="w-3.5 h-3.5 object-contain"
                          />
                        )}
                        <span>{tech.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Source Repo */}
              <div className="pt-2">
                <span className="text-foreground text-xs block mb-2 font-bold uppercase">
                  Source Code:
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-btn-yellow w-full flex items-center justify-center gap-2 text-xs font-black"
                >
                  <Github size={15} />
                  <span>View on GitHub</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
            {project.liveDemoUrl && (
              <div>
                <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/40 mb-3 md:mb-4">
                  Live Demo
                </h2>
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-full border border-foreground/10 bg-background text-foreground text-sm font-medium hover:bg-foreground/5 transition-all duration-300 cursor-pointer"
                >
                  <ExternalLink size={15} />
                  Open live demo
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Screenshots Gallery */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="space-y-6 mb-12">
            <div className="border-b-2 border-border pb-3">
              <h2 className="text-sm font-black text-foreground uppercase tracking-wider">
                Interface Screenshots ({project.screenshots.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {project.screenshots.map((img, i) => (
                <div
                  key={i}
                  className="border-[3px] border-border bg-card overflow-hidden p-2 shadow-neo-xl"
                >
                  <div className="px-3 py-1 bg-secondary text-foreground border-b-2 border-border text-xs font-bold mb-2">
                    Screenshot figure 0{i + 1}
                  </div>
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-auto object-cover border-2 border-border"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Previous / Next Project Sequential Navigation */}
        <div className="border-t-[2.5px] border-border pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="border-2 border-border bg-card p-4 hover:bg-[#FFE500] hover:text-[#171717] transition-colors shadow-neo-sm flex flex-col justify-between group"
            >
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground group-hover:text-[#171717] font-bold uppercase mb-1">
                <ArrowLeft size={12} />
                <span>Previous Project</span>
              </div>
              <span className="text-sm font-black uppercase">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.id}`}
              className="border-2 border-border bg-card p-4 hover:bg-[#FFE500] hover:text-[#171717] transition-colors shadow-neo-sm flex flex-col justify-between items-end text-right group sm:col-start-2"
            >
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground group-hover:text-[#171717] font-bold uppercase mb-1">
                <span>Next Project</span>
                <ArrowRight size={12} />
              </div>
              <span className="text-sm font-black uppercase">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </div>
    </main>
  );
}
