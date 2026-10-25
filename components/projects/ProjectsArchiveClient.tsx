"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  projects,
  Project,
  getAllCategories,
  getAllTechnologies,
} from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Search,
  X,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Eye,
  Calendar,
  RotateCcw,
} from "lucide-react";

type SortOption = "year-desc" | "year-asc" | "title-asc" | "title-desc";
type ViewMode = "grid" | "list";

export default function ProjectsArchiveClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");
  const [sortOption, setSortOption] = useState<SortOption>("year-desc");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const categories = useMemo(() => ["All", ...getAllCategories()], []);
  const technologies = useMemo(() => ["All", ...getAllTechnologies().sort()], []);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "All" ||
    selectedTech !== "All";

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedTech("All");
    setSortOption("year-desc");
  };

  // Filter and sort
  const filteredAndSortedProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = projects.filter((project) => {
      // Category match
      if (selectedCategory !== "All" && project.category !== selectedCategory) {
        return false;
      }

      // Tech match
      if (
        selectedTech !== "All" &&
        !project.techStack.some(
          (t) => t.name.toLowerCase() === selectedTech.toLowerCase()
        )
      ) {
        return false;
      }

      // Search match
      if (query !== "") {
        const inTitle = project.title.toLowerCase().includes(query);
        const inShort = project.shortDesc.toLowerCase().includes(query);
        const inDesc = project.description.toLowerCase().includes(query);
        const inTech = project.techStack.some((t) =>
          t.name.toLowerCase().includes(query)
        );
        if (!inTitle && !inShort && !inDesc && !inTech) {
          return false;
        }
      }

      return true;
    });

    // Sort
    return filtered.sort((a, b) => {
      if (sortOption === "year-desc") {
        return parseInt(b.year) - parseInt(a.year);
      }
      if (sortOption === "year-asc") {
        return parseInt(a.year) - parseInt(b.year);
      }
      if (sortOption === "title-asc") {
        return a.title.localeCompare(b.title);
      }
      if (sortOption === "title-desc") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedTech, sortOption]);

  return (
    <div className="min-h-screen bg-background text-foreground font-mono selection:bg-[#FFE500] selection:text-[#171717] pt-20 sm:pt-24 pb-28 px-4 sm:px-8 md:px-14">
      {/* Quick Preview Modal */}
      {previewProject && (
        <div
          className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs select-none"
          role="dialog"
          aria-modal="true"
          aria-label={`${previewProject.title} Preview`}
          onClick={() => setPreviewProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-card border-[3.5px] border-border text-foreground p-6 sm:p-8 shadow-neo-xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-border text-xs font-black">
              <span className="bg-[#FFE500] text-[#171717] px-2 py-0.5 uppercase">
                {previewProject.category} // {previewProject.year}
              </span>
              <button
                onClick={() => setPreviewProject(null)}
                className="p-1 hover:bg-[#FFE500] hover:text-[#171717] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative aspect-video border-2 border-border bg-background overflow-hidden mb-5 shadow-neo">
              <img
                src={previewProject.heroImage}
                alt={previewProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase text-foreground mb-3">
              {previewProject.title}
            </h3>

            <p className="text-xs sm:text-sm font-sans font-medium text-foreground/85 leading-relaxed mb-6">
              {previewProject.description}
            </p>

            <div className="mb-6 pt-4 border-t-2 border-border">
              <span className="text-xs font-black text-muted-foreground uppercase block mb-2">
                Technologies:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {previewProject.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-2.5 py-1 bg-secondary text-foreground border border-border text-xs font-bold"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/projects/${previewProject.id}`}
                className="neo-btn-yellow flex-1 flex items-center justify-center gap-2 text-xs font-black shadow-neo"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight size={14} />
              </Link>
              <a
                href={previewProject.github}
                target="_blank"
                rel="noreferrer"
                className="neo-btn-white flex items-center gap-2 text-xs font-bold shadow-neo-sm"
              >
                <Github size={14} />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Top Breadcrumb Navigation */}
        <div className="flex items-center justify-between gap-4 mb-10 text-xs">
          <Link
            href="/#works"
            className="neo-btn-yellow flex items-center gap-2 font-black"
          >
            <ArrowLeft size={14} />
            <span>Return to Home</span>
          </Link>

          <div className="text-muted-foreground font-bold">
            <span className="text-foreground bg-[#FFE500] px-2 py-0.5 text-[#171717] font-black mr-2">
              ARCHIVE
            </span>
            <span>{`Total Catalog: ${projects.length}`}</span>
          </div>
        </div>

        {/* Editorial Page Header */}
        <div className="border-[3.5px] border-border bg-card p-6 sm:p-10 mb-10 shadow-neo-xl">
          <span className="text-xs font-black text-muted-foreground uppercase tracking-widest block mb-2">
            Complete Index
          </span>
          <h1 className="text-display-section text-foreground leading-none mb-4">
            PROJECT <span className="bg-[#FFE500] text-[#171717] px-2.5 inline-block">ARCHIVE</span>
          </h1>
          <p className="text-body-lead text-muted-foreground max-w-2xl">
            Full collection of web applications, student projects, and frontend interfaces built under NADLR. by Farhan Sultan Nadlir. Filter by technology or search by keyword below.
          </p>
        </div>

        {/* Filter, Search & Controls Dashboard */}
        <div className="border-[3px] border-border bg-card p-5 sm:p-6 mb-8 shadow-neo-lg space-y-4">
          {/* Row 1: Search + Category + View Switcher */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input (5 Cols) */}
            <div className="md:col-span-5 relative">
              <div className="flex items-center gap-2 px-3.5 py-2.5 bg-background border-2 border-border shadow-neo-sm">
                <Search size={16} className="text-[#FFE500] shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search title, tech, description..."
                  className="w-full bg-transparent text-xs sm:text-sm text-foreground outline-none font-mono placeholder:text-muted-foreground"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-muted-foreground hover:text-foreground cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>
            </div>

            {/* Category Select (4 Cols) */}
            <div className="md:col-span-4 flex items-center gap-1.5 flex-wrap">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-black uppercase border-2 transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#FFE500] text-[#171717] border-border shadow-neo-sm -translate-y-0.5"
                        : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-[#FFE500]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* View Switcher + Sort (3 Cols) */}
            <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2">
              {/* Sort Selector */}
              <div className="relative flex-1 md:flex-initial">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="w-full text-xs font-bold uppercase bg-background border-2 border-border px-3 py-2 text-foreground outline-none cursor-pointer shadow-neo-sm"
                  aria-label="Sort projects"
                >
                  <option value="year-desc">Year (Newest)</option>
                  <option value="year-asc">Year (Oldest)</option>
                  <option value="title-asc">Title (A-Z)</option>
                  <option value="title-desc">Title (Z-A)</option>
                </select>
              </div>

              {/* View Switcher Buttons */}
              <div className="flex border-2 border-border bg-background shadow-neo-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition-colors cursor-pointer ${
                    viewMode === "grid"
                      ? "bg-[#FFE500] text-[#171717]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="Grid View"
                  aria-label="Grid view"
                >
                  <LayoutGrid size={15} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 border-l border-border transition-colors cursor-pointer ${
                    viewMode === "list"
                      ? "bg-[#FFE500] text-[#171717]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  title="List View"
                  aria-label="List view"
                >
                  <List size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Technology Filter Chips */}
          <div className="pt-3 border-t border-border/40 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-bold text-muted-foreground flex items-center gap-1 mr-1">
              <SlidersHorizontal size={12} />
              <span>TECH:</span>
            </span>
            {technologies.map((tech) => {
              const isSelected = selectedTech === tech;
              return (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-2 py-0.5 text-[11px] font-bold border transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[#FFE500] text-[#171717] border-border shadow-neo-sm"
                      : "bg-secondary text-foreground/80 border-border hover:bg-[#FFE500]/30 hover:text-foreground"
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>

          {/* Active Filter Bar & Counter */}
          <div className="pt-3 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-black text-foreground">
                {`Showing ${filteredAndSortedProjects.length} of ${projects.length} projects`}
              </span>
              {hasActiveFilters && (
                <span className="text-muted-foreground font-bold">
                  (Filtered)
                </span>
              )}
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 px-3 py-1 bg-destructive text-white border border-border shadow-neo-sm font-bold cursor-pointer hover:opacity-90"
              >
                <RotateCcw size={12} />
                <span>Reset all filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Content Display: Grid or Compact List */}
        {filteredAndSortedProjects.length === 0 ? (
          /* Empty State */
          <div className="border-[3px] border-border bg-card p-12 sm:p-16 text-center shadow-neo-xl space-y-4">
            <div className="inline-block p-3 bg-[#FFE500] text-[#171717] border-2 border-border font-black text-xs uppercase mb-2">
              Zero Results Found
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-foreground">
              No projects match your filter criteria
            </h3>
            <p className="text-xs sm:text-sm font-sans text-muted-foreground max-w-md mx-auto leading-relaxed">
              Try clearing your search keyword, selecting &quot;All&quot; categories, or resetting the technology filter.
            </p>
            <div className="pt-2">
              <button
                onClick={handleResetFilters}
                className="neo-btn-yellow inline-flex items-center gap-2 text-xs font-black shadow-neo"
              >
                <RotateCcw size={14} />
                <span>Reset All Filters</span>
              </button>
            </div>
          </div>
        ) : viewMode === "grid" ? (
          /* Scalable Visual Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProjects.map((p) => (
              <div
                key={p.id}
                className="border-[3px] border-border bg-card overflow-hidden shadow-neo-lg hover:-translate-y-1 transition-transform flex flex-col justify-between"
              >
                <div>
                  {/* Media Frame */}
                  <div
                    onClick={() => setPreviewProject(p)}
                    className="relative aspect-video border-b-2 border-border bg-background overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={p.heroImage}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#FFE500] text-[#171717] border border-border shadow-neo-sm text-[10px] font-black flex items-center gap-1">
                      <Eye size={12} />
                      <span>Preview</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-bold">
                      <span className="bg-[#FFE500] text-[#171717] px-2 py-0.5 text-[11px] font-black uppercase">
                        {p.category}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar size={11} />
                        <span>{p.year}</span>
                      </span>
                    </div>

                    <Link href={`/projects/${p.id}`}>
                      <h3 className="text-xl font-black uppercase text-foreground hover:underline">
                        {p.title}
                      </h3>
                    </Link>

                    <p className="font-sans text-xs text-foreground/80 leading-relaxed">
                      {p.summary || p.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {p.techStack.map((t) => (
                        <span
                          key={t.name}
                          className="px-2 py-0.5 bg-secondary text-foreground text-[10px] font-bold border border-border"
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-5 pt-0 border-t border-border/40 mt-4 flex items-center gap-2">
                  <Link
                    href={`/projects/${p.id}`}
                    className="neo-btn-yellow flex-1 flex items-center justify-center gap-1.5 text-xs font-black shadow-neo-sm"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight size={13} />
                  </Link>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-card border-2 border-border text-foreground hover:bg-[#FFE500] hover:text-[#171717] transition-colors shadow-neo-sm"
                    title="View Source on GitHub"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Compact List / Index View */
          <div className="border-[3px] border-border bg-card shadow-neo-xl overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b-2 border-border bg-secondary font-black text-foreground uppercase">
                  <th className="p-3.5 pl-5">Year</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Project Title</th>
                  <th className="p-3.5 hidden md:table-cell">Technologies</th>
                  <th className="p-3.5 pr-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y border-border">
                {filteredAndSortedProjects.map((p) => (
                  <tr
                    key={p.id}
                    className="hover:bg-[#FFE500]/10 transition-colors group"
                  >
                    <td className="p-3.5 pl-5 font-mono font-bold text-muted-foreground whitespace-nowrap">
                      {p.year}
                    </td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 bg-[#FFE500] text-[#171717] font-black text-[10px] uppercase">
                        {p.category}
                      </span>
                    </td>
                    <td className="p-3.5 font-bold text-foreground">
                      <Link
                        href={`/projects/${p.id}`}
                        className="group-hover:underline text-sm font-black uppercase"
                      >
                        {p.title}
                      </Link>
                    </td>
                    <td className="p-3.5 hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {p.techStack.map((t) => (
                          <span
                            key={t.name}
                            className="px-1.5 py-0.5 bg-secondary text-foreground text-[10px] border border-border"
                          >
                            {t.name}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-3.5 pr-5 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => setPreviewProject(p)}
                          className="px-2 py-1 bg-background border border-border text-foreground hover:bg-[#FFE500] hover:text-[#171717] font-bold text-[11px]"
                        >
                          Preview
                        </button>
                        <Link
                          href={`/projects/${p.id}`}
                          className="px-2.5 py-1 bg-[#FFE500] text-[#171717] border border-border font-black text-[11px] shadow-neo-sm inline-flex items-center gap-1"
                        >
                          <span>Case Study</span>
                          <ArrowUpRight size={11} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
