import { notFound } from "next/navigation";
import { projects, techIcons } from "@/data/projects";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Back button */}
      <div className="fixed top-4 md:top-6 left-4 md:left-6 z-50">
        <Link
          href="/#projects"
          className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-foreground/15 bg-background/80 backdrop-blur-md text-foreground/60 hover:text-foreground hover:border-foreground/30 transition-all duration-300 text-xs md:text-sm cursor-pointer"
        >
          <ArrowLeft size={14} />
          Back
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[55vh] relative overflow-hidden bg-foreground/5">
        {project.heroImage ? (
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-foreground/20">
            <ExternalLink size={40} />
            <span className="text-sm tracking-wider">No preview available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 pb-16 md:pb-24 -mt-12 md:-mt-16 relative z-10">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <span className="text-xs px-3 py-1 rounded-full border border-foreground/20 text-foreground/50 tracking-widest uppercase">
              {project.category}
            </span>
            <span className="text-xs text-foreground/30">{project.year}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-foreground/60 text-base md:text-lg max-w-2xl leading-relaxed">
            {project.shortDesc}
          </p>
        </div>

        <div className="h-[1px] bg-foreground/10 mb-8 md:mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="md:col-span-2">
            <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/40 mb-3 md:mb-4">
              About
            </h2>
            <p className="text-foreground/75 leading-relaxed text-sm md:text-[15px]">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col gap-6 md:gap-8">
            <div>
              <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/40 mb-3 md:mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.techStack.map((tech) => {
                  const iconUrl = techIcons[tech.name];
                  return (
                    <a
                      key={tech.name}
                      href={tech.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={tech.name}
                      className="group cursor-pointer"
                    >
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl border border-foreground/10 bg-foreground/5 flex items-center justify-center hover:border-foreground/30 hover:bg-foreground/10 transition-all duration-300 hover:scale-110 p-2">
                        {iconUrl ? (
                          <img
                            src={iconUrl}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-[10px] text-foreground/50 font-medium">
                            {tech.name.slice(0, 3)}
                          </span>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/40 mb-3 md:mb-4">
                Repository
              </h2>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-80 transition-all duration-300 cursor-pointer"
              >
                <Github size={15} />
                View on GitHub
                <ArrowLeft size={13} className="rotate-180" />
              </a>
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

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <div>
            <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/40 mb-4 md:mb-6">
              Screenshots
            </h2>
            <ProjectGallery
              screenshots={project.screenshots}
              title={project.title}
            />
          </div>
        )}
      </div>
    </main>
  );
}
