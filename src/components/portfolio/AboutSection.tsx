import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Cpu, Layers, Terminal, Sparkles, Server, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const ENGINEERING_PILLARS = [
  {
    title: "Multi-Tenant & System Architecture",
    description:
      "Designing clean service boundaries, shared infrastructure with tenant isolation, and predictable RESTful contracts across client platforms.",
    icon: Layers,
    metric: "Tellis Production",
  },
  {
    title: "Application Reliability & Caching",
    description:
      "Mitigating database contention through Redis in-memory layers, sliding window rate limits, and bulletproof JWT authentication flows.",
    icon: Server,
    metric: "Sub-10ms Latency",
  },
  {
    title: "Containerized Cloud Workflows",
    description:
      "Packaging applications with Docker Compose and orchestrating automated test execution and zero-downtime deployment pipelines.",
    icon: Cpu,
    metric: "Docker & EC2",
  },
  {
    title: "Modern Engineering Tooling",
    description:
      "Leveraging AI coding agents, Postman API collections, and structured Git workflows to accelerate delivery without sacrificing code quality.",
    icon: Terminal,
    metric: "Continuous Delivery",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono font-medium shadow-sm shadow-indigo-500/10">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>BACKGROUND & MINDSET</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-accent">Shiva Kumar</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A software engineer focused on building practical, resilient web systems from database architecture to modern client interfaces.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Story Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-5">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 animate-pulse" />
                <span>Engineering Background</span>
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                I am a Full Stack Developer and Software Engineer who builds scalable web systems and production backends. Having built production SaaS platforms at <strong className="text-cyan-300 font-medium">Tellis Technologies</strong>, I approach software engineering with a strong focus on maintainability, tenant isolation, API contracts, and deployment automation.
              </p>

              {/* Verified Key Traits */}
              <div className="pt-2 space-y-2.5">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Production experience with multi-tenant SaaS backend systems</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Full-cycle deployment using Docker, Nginx, Dokploy, and AWS EC2</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Proficiency in TypeScript, JavaScript, Python, and SQL</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0e1424] to-[#080d18] border border-white/[0.08] flex items-start gap-4 hover:border-indigo-500/35 transition-all group shadow-lg">
              <div className="p-3 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>Academic Foundation</span>
                </div>
                <div className="text-base font-bold text-white">
                  {PERSONAL_INFO.education.college}
                </div>
                <div className="text-sm text-zinc-300">
                  {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.period})
                </div>
                <div className="text-xs text-zinc-400">
                  {PERSONAL_INFO.education.location}
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Engineering Principles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                Core Engineering Philosophy
              </h3>
              <span className="text-[11px] font-mono text-cyan-400">
                4 Key Pillars
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ENGINEERING_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-[#0e1424]/70 border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between hover:shadow-lg hover:shadow-indigo-500/10"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                          {pillar.metric}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5 leading-snug group-hover:text-cyan-200 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote callout */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/30 via-slate-900/40 to-cyan-950/30 border border-indigo-500/25 text-zinc-200 text-xs sm:text-sm italic leading-relaxed flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>"Great software engineering isn't just about writing code that works—it's about designing architectures that are observable, resilient to load spikes, and clear enough for a team to maintain with confidence."</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
