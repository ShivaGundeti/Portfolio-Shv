import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Server, CreditCard, Rocket, Bot, Layers, Sparkles, ChevronRight, ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

interface CapabilityTab {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Server;
  color: string;
  borderColor: string;
  badgeColor: string;
  bullets: string[];
}

const CAPABILITY_TABS: CapabilityTab[] = [
  {
    id: "backend",
    title: "Multi-Tenant Architecture",
    subtitle: "NestJS Unified REST API & Tenant Isolation",
    icon: Server,
    color: "from-indigo-500/20 via-blue-500/10 to-transparent",
    borderColor: "border-indigo-500/30",
    badgeColor: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    bullets: [
      "Architected multi-tenant NestJS backend serving both an Admin web dashboard and a customer-facing mobile application.",
      "Engineered tenant isolation middleware ensuring strictly scoped database queries and zero cross-tenant data leaks.",
      "Standardized REST API schemas and route handlers across core salon-management business modules.",
    ],
  },
  {
    id: "features",
    title: "Core Business & POS Workflows",
    subtitle: "Memberships, Packages & Transactional Refunds",
    icon: CreditCard,
    color: "from-cyan-500/20 via-teal-500/10 to-transparent",
    borderColor: "border-cyan-500/30",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    bullets: [
      "Owned end-to-end development of core revenue features: Memberships, Service Packages, and Gift Cards.",
      "Engineered an automated Point-of-Sale (POS) refund workflow with transaction auditing across frontend and backend.",
      "Authored unit and integration test suites, reducing regression risks on transactional endpoints.",
    ],
  },
  {
    id: "devops",
    title: "Production Deployments",
    subtitle: "Dokploy, GitHub CI/CD & Reliability",
    icon: Rocket,
    color: "from-violet-500/20 via-purple-500/10 to-transparent",
    borderColor: "border-violet-500/30",
    badgeColor: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    bullets: [
      "Managed live production releases using Dokploy and GitHub, maintaining high service uptime.",
      "Diagnosed and resolved critical production incidents, reviewing server error logs and hotfixing API bugs.",
      "Automated container build triggers to ensure continuous and reproducible deployment cycles.",
    ],
  },
  {
    id: "mentorship",
    title: "Tooling & Team Impact",
    subtitle: "AI Coding Agents & Developer Mentorship",
    icon: Bot,
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderColor: "border-blue-500/30",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    bullets: [
      "Integrated AI coding agents and custom internal tooling into daily engineering workflows to boost velocity.",
      "Led and mentored new engineering interns, establishing clean PR review standards and coding conventions.",
      "Formulated structured development workflows that cut down repetitive boilerplate during feature launches.",
    ],
  },
];

const TECH_LOOKUPS: Record<string, string> = {
  NestJS: "Backend controllers, dependency injection & multi-tenant guards",
  TypeScript: "Strict type safety across shared API payloads & models",
  "Node.js": "Event-driven runtime environment for high-concurrency requests",
  "REST APIs": "Deterministic endpoints with OpenAPI/Swagger contracts",
  "Multi-Tenancy": "Tenant context resolution & data segregation",
  Dokploy: "Production container orchestration & automated zero-downtime deploys",
  "GitHub Actions": "CI pipelines running automated test suites on pull requests",
  PostgreSQL: "Relational persistence with foreign keys, indexes & transactional safety",
};

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<string>("backend");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const selectedTab = CAPABILITY_TABS.find((t) => t.id === activeTab) || CAPABILITY_TABS[0];

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono font-medium shadow-sm shadow-indigo-500/10">
            <Briefcase className="w-3 h-3 text-cyan-400" />
            <span>PRODUCTION TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text-accent">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Real SaaS engineering experience: architecting multi-tenant backends, transactional workflows, and live cloud releases.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/[0.1] shadow-2xl relative overflow-hidden">
            
            {/* Top Company Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Software Engineering Intern
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    Production SaaS
                  </span>
                </div>
                <div className="text-lg font-bold text-cyan-400 mt-1 flex items-center gap-2">
                  <span>Tellis Technologies</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs font-mono text-zinc-400 font-normal">Salon Management SaaS</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-zinc-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Nov 2025 – July 2026</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Hyderabad, India</span>
                </span>
              </div>
            </div>

            {/* Interactive Capability Tabs */}
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Interactive Contribution Lookup:
                </span>
                <span className="text-[11px] font-mono text-cyan-400 hidden sm:inline">
                  Click tabs to explore technical pillars
                </span>
              </div>

              {/* Tab Selector Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {CAPABILITY_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group ${
                        isActive
                          ? `bg-white/[0.08] ${tab.borderColor} shadow-lg shadow-indigo-500/15`
                          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-xl bg-white/[0.05] ${isActive ? "text-white" : "text-zinc-400"}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        )}
                      </div>
                      <div className={`text-xs font-bold truncate ${isActive ? "text-white" : "text-zinc-300"}`}>
                        {tab.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Display with Framer Motion Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${selectedTab.color} border ${selectedTab.borderColor} backdrop-blur-sm space-y-4 shadow-xl`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <selectedTab.icon className="w-5 h-5 text-cyan-400" />
                      <span>{selectedTab.title}</span>
                    </h4>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${selectedTab.badgeColor}`}>
                      {selectedTab.subtitle}
                    </span>
                  </div>

                  <ul className="space-y-2.5 pt-1">
                    {selectedTab.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Interactive Tech Stack Lookup Pills */}
            <div className="pt-6 mt-6 border-t border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Technologies Used in Production:
                </span>
                <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                  Hover for architectural role
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {Object.keys(TECH_LOOKUPS).map((tech) => (
                  <div
                    key={tech}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className="relative group"
                  >
                    <span className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.04] hover:bg-indigo-500/15 text-zinc-300 hover:text-white border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-200 cursor-help inline-flex items-center gap-1.5">
                      <span>{tech}</span>
                      <ChevronRight className="w-3 h-3 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                ))}
              </div>

              {/* Dynamic Tech Lookup Tooltip Bar */}
              <div className="min-h-[32px] flex items-center">
                {hoveredTech ? (
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xs font-mono text-cyan-300 flex items-center gap-2 bg-indigo-950/40 border border-indigo-500/25 px-3 py-1.5 rounded-xl shadow-md"
                  >
                    <span className="font-bold text-white">{hoveredTech}:</span>
                    <span>{TECH_LOOKUPS[hoveredTech]}</span>
                  </motion.div>
                ) : (
                  <span className="text-[11px] font-mono text-zinc-500 italic">
                    Hover over any technology badge to inspect its exact implementation in Tellis SaaS.
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
