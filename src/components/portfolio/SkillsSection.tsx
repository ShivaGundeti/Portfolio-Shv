import { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Terminal, Database, Layers } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiFastapi,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiRedis,
  SiDocker,
  SiAmazonwebservices,
  SiNginx,
  SiGithubactions,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";

const SKILL_ICONS: Record<string, React.ReactNode> = {
  TypeScript: <SiTypescript className="text-blue-400" />,
  JavaScript: <SiJavascript className="text-zinc-200" />,
  Python: <SiPython className="text-emerald-400" />,
  SQL: <Database className="w-3.5 h-3.5 text-indigo-400" />,
  "React.js": <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  Zustand: <Layers className="w-3.5 h-3.5 text-indigo-400" />,
  "TanStack Query": <Layers className="w-3.5 h-3.5 text-red-400" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  NestJS: <SiNestjs className="text-red-500" />,
  FastAPI: <SiFastapi className="text-teal-400" />,
  "Express.js": <SiExpress className="text-zinc-300" />,
  "REST APIs": <Terminal className="w-3.5 h-3.5 text-indigo-400" />,
  WebSockets: <TbBrandSocketIo className="text-cyan-400" />,
  PostgreSQL: <SiPostgresql className="text-sky-400" />,
  MongoDB: <SiMongodb className="text-emerald-500" />,
  "Prisma ORM": <SiPrisma className="text-teal-300" />,
  "Redis Caching": <SiRedis className="text-red-400" />,
  Docker: <SiDocker className="text-blue-400" />,
  "Docker Compose": <SiDocker className="text-blue-300" />,
  "AWS EC2": <SiAmazonwebservices className="text-orange-400" />,
  "Nginx Reverse Proxy": <SiNginx className="text-emerald-400" />,
  "GitHub Actions CI/CD": <SiGithubactions className="text-blue-400" />,
  Dokploy: <Layers className="w-3.5 h-3.5 text-purple-400" />,
  "Git & Version Control": <SiGit className="text-orange-500" />,
  Postman: <SiPostman className="text-orange-400" />,
};

export const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono font-medium shadow-sm shadow-indigo-500/10">
            <Wrench className="w-3 h-3 text-cyan-400" />
            <span>TECHNOLOGY TAXONOMY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="gradient-text-accent">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A comprehensive, verified taxonomy of tools, frameworks, and patterns I use across the full application lifecycle.
          </p>
        </div>

        {/* Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-3xl border border-white/[0.08] hover:border-indigo-500/30 hover:shadow-[0_0_25px_rgba(99,102,241,0.1)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {cat.skills.length} tools
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Pills with Micro-Interactions */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const icon = SKILL_ICONS[skill.name] || (
                      <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                    );
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-default ${
                          skill.featured
                            ? "bg-white/[0.05] text-zinc-200 border border-white/[0.1] hover:border-indigo-500/40 hover:bg-indigo-500/15 hover:text-white hover:scale-105"
                            : "bg-white/[0.02] text-zinc-400 border border-white/[0.05] hover:text-zinc-200 hover:border-indigo-500/20 hover:scale-105"
                        }`}
                      >
                        <span className="text-sm shrink-0">{icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-zinc-500">
            * All technologies are backed by hands-on development in personal repositories or production internship deployments.
          </p>
        </div>

      </div>
    </section>
  );
};
