import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, CheckCircle2, Terminal, Layers, Cpu, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Systems & Cloud", "Full Stack", "AI & Frontend", "SaaS & Tools"];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const flagshipProjects = filteredProjects.filter((p) => p.isFlagship);
  const standardProjects = filteredProjects.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono font-medium shadow-sm shadow-indigo-500/10">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>CASE STUDIES & SOFTWARE SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text-accent">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Real-world full stack applications, microservices, and client platforms engineered with scalability and reliability in mind.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 text-white shadow-md shadow-indigo-500/25 border-0 font-semibold"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 1. Flagship Case Study Layouts */}
        <div className="space-y-16 mb-20">
          {flagshipProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card rounded-3xl overflow-hidden border border-white/[0.1] hover:border-indigo-500/40 hover:shadow-[0_0_35px_rgba(99,102,241,0.15)] transition-all duration-300 group"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}>
                  
                  {/* Visual Preview Side (5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-[#070b14] group-hover:border-indigo-500/30 transition-colors shadow-2xl aspect-[16/10]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md backdrop-blur-md">
                          Flagship Case Study
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#0a0f1d]/80 text-zinc-300 border border-white/10 backdrop-blur-md">
                          {project.category}
                        </span>
                      </div>

                      {/* Bottom Metrics Pill */}
                      {project.metrics && (
                        <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#090d18]/90 border border-white/[0.08] backdrop-blur-md flex items-center gap-2 text-xs font-mono text-cyan-300">
                          <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{project.metrics}</span>
                        </div>
                      )}
                    </div>

                    {/* Architecture Flow Tags */}
                    {project.architecture && (
                      <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
                          <Terminal className="w-3 h-3 text-cyan-400" />
                          <span>Architecture Flow:</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-zinc-300">
                          {project.architecture.map((node, nIdx) => (
                            <span key={node} className="flex items-center gap-1.5">
                              <span className="px-2 py-0.5 rounded bg-indigo-500/15 text-cyan-300 border border-indigo-500/30">
                                {node}
                              </span>
                              {nIdx < project.architecture!.length - 1 && (
                                <span className="text-zinc-600">→</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Detail Side (7 cols) */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-indigo-300 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Problem vs Solution Split */}
                    {(project.problemStatement || project.solution) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {project.problemStatement && (
                          <div className="p-3.5 rounded-xl bg-rose-950/15 border border-rose-500/20 space-y-1">
                            <div className="text-[11px] font-mono font-semibold text-rose-300 uppercase">
                              Challenge
                            </div>
                            <p className="text-xs text-zinc-300 leading-relaxed">
                              {project.problemStatement}
                            </p>
                          </div>
                        )}
                        {project.solution && (
                          <div className="p-3.5 rounded-xl bg-emerald-950/15 border border-emerald-500/20 space-y-1">
                            <div className="text-[11px] font-mono font-semibold text-emerald-300 uppercase">
                              Architecture Solution
                            </div>
                            <p className="text-xs text-zinc-300 leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Key Technical Highlights */}
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                        Key Features & Capabilities:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-3 border-t border-white/[0.08]">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:opacity-95 shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02]"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>

                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

        {/* 2. Additional Production & Full-Stack Projects */}
        {standardProjects.length > 0 && (
          <div className="space-y-8">
            <div className="border-t border-white/[0.08] pt-12">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                Additional Full-Stack & AI Applications
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Explore more production-ready repositories across modern MERN architecture, AI inference, and cloud storage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standardProjects.map((project, pIdx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: pIdx * 0.08 }}
                  className="glass-card rounded-2xl overflow-hidden border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 flex flex-col group"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden bg-[#070b14]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-70" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#0a0f1d]/85 text-zinc-300 border border-white/10 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {project.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-500">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
