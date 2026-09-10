import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code2, Layers, Cpu } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import myPhoto from "@/assets/MyPhoto.png";
import { PERSONAL_INFO } from "@/data/portfolioData";

const FLOATING_BADGES = [
  {
    name: "NestJS & FastAPI",
    role: "Backend Architecture",
    icon: Cpu,
    color: "from-indigo-500/25 via-blue-500/15 to-transparent",
    border: "border-indigo-500/30 hover:border-indigo-400/60",
    text: "text-indigo-300",
    position: "-top-3 -right-3 sm:-right-6",
    delay: 0,
  },
  {
    name: "Next.js & React",
    role: "Crafted Interfaces",
    icon: Code2,
    color: "from-cyan-500/25 via-sky-500/15 to-transparent",
    border: "border-cyan-500/30 hover:border-cyan-400/60",
    text: "text-cyan-300",
    position: "top-1/2 -left-4 sm:-left-8",
    delay: 1.5,
  },
  {
    name: "Docker & AWS",
    role: "Cloud Reliability",
    icon: Layers,
    color: "from-violet-500/25 via-purple-500/15 to-transparent",
    border: "border-violet-500/30 hover:border-violet-400/60",
    text: "text-violet-300",
    position: "-bottom-3 -right-3 sm:-right-4",
    delay: 3,
  },
];

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[94vh] pt-24 md:pt-32 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Sleek Electric Aurora Ambient Glows (No Yellow) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-indigo-600/15 via-violet-600/10 to-cyan-500/12 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-cyan-600/08 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            className="lg:col-span-7 text-left space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Thoughtful Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/15 via-violet-500/10 to-cyan-500/10 border border-indigo-500/30 text-indigo-200 text-xs font-medium shadow-sm backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="tracking-wide">FULL STACK SOFTWARE ENGINEER • CRAFTED WITH CARE</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-white leading-[1.1] sm:leading-[1.08]"
            >
              Building scalable web systems with{" "}
              <span className="gradient-text-accent">
                depth & craftsmanship.
              </span>
            </motion.h1>

            {/* Sub-headline / Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed"
            >
              I build reliable, end-to-end full stack software with thoughtful design and scalable backends. Production SaaS experience at <strong className="text-white font-semibold">Tellis Technologies</strong> architecting multi-tenant APIs across <span className="text-sky-300 font-mono font-medium text-sm sm:text-base">NestJS, FastAPI, React, PostgreSQL & Docker</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <button
                onClick={scrollToProjects}
                className="btn-lovable inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 group"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 hover:text-white border border-white/[0.12] hover:border-cyan-400/40 font-medium text-sm transition-all duration-200 active:scale-[0.98] shadow-sm backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl text-zinc-400 hover:text-cyan-300 text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Talk</span>
              </button>
            </motion.div>

            {/* Verified Links with Cool Accents */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400"
            >
              <span className="text-zinc-500">Verified links:</span>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-cyan-300 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-sky-300 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-700">•</span>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-indigo-300 transition-colors"
              >
                <SiLeetcode className="w-3.5 h-3.5 text-indigo-400" />
                <span>LeetCode</span>
              </a>
              <span className="text-zinc-700">•</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Roles</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Right Hero Column: Editorial Portrait Card */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Backlight Ambient Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-indigo-600/25 via-violet-600/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-80 animate-pulse -z-10" style={{ animationDuration: "6s" }} />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl p-3 sm:p-4 bg-[#0e1424]/90 border border-white/[0.12] hover:border-indigo-500/40 shadow-2xl backdrop-blur-2xl transition-colors group">
                
                {/* Photo Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#070b14] border border-white/[0.08]">
                  <img
                    src={myPhoto}
                    alt="Shiva Kumar Gundeti - Software Engineer"
                    className="w-full h-full object-cover object-[center_35%] filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d18]/90 via-transparent to-transparent opacity-50" />

                  {/* Top Status Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-[#070b14]/85 border border-white/15 backdrop-blur-md flex items-center gap-2 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-mono font-medium text-emerald-300">
                      Open to Opportunities
                    </span>
                  </div>

                  {/* Bottom Photo Overlay Info */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3.5 py-2.5 rounded-xl bg-[#090d18]/90 border border-white/[0.1] backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">
                          Shiva Kumar Gundeti
                        </div>
                        <div className="text-[10px] font-mono text-cyan-300/90">
                          Full Stack Developer • NestJS & FastAPI
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
                        <Code2 className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Interactive Badges */}
                {FLOATING_BADGES.map((badge, bIdx) => {
                  const Icon = badge.icon;
                  return (
                    <motion.div
                      key={badge.name}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{
                        y: [0, bIdx % 2 === 0 ? -6 : 6, 0],
                        opacity: 1,
                      }}
                      transition={{
                        duration: 4.5 + bIdx * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: badge.delay,
                      }}
                      whileHover={{ scale: 1.08 }}
                      className={`hidden sm:flex absolute ${badge.position} px-3.5 py-2 rounded-2xl bg-[#0e1424]/95 border ${badge.border} backdrop-blur-xl shadow-xl items-center gap-2.5 cursor-default transition-all`}
                    >
                      <div className={`w-7 h-7 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center ${badge.text} shrink-0`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-mono text-zinc-400 tracking-wider">
                          {badge.role}
                        </div>
                        <div className="text-xs font-bold text-white">
                          {badge.name}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
