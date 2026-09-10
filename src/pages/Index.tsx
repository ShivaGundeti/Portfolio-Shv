import { Navigation } from "@/components/portfolio/Navigation";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { QuickSnapshot } from "@/components/portfolio/QuickSnapshot";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SystemDesignSection } from "@/components/portfolio/SystemDesignSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ResumeCTASection } from "@/components/portfolio/ResumeCTASection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Linkedin, FileText, ArrowUp } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { Toaster } from "sonner";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-foreground selection:bg-indigo-500/30 selection:text-white relative">
      <Toaster position="bottom-right" richColors />
      <Navigation />

      <main>
        <HeroSection />
        <QuickSnapshot />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SystemDesignSection />
        <SkillsSection />
        <ResumeCTASection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] bg-[#05070c] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Brand / Copyright */}
            <div className="text-center md:text-left space-y-1">
              <div className="text-base font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                <span>{PERSONAL_INFO.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono text-zinc-400 font-normal">Full Stack Engineer</span>
              </div>
              <p className="text-xs text-zinc-400">
                {PERSONAL_INFO.role} • Hyderabad, India
              </p>
              <p className="text-[11px] font-mono text-zinc-500 pt-1">
                © {new Date().getFullYear()} Shiva Kumar Gundeti. Designed & engineered with passion, rigor & care.
              </p>
            </div>

            {/* Quick Links & Back to Top */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-400 hover:text-cyan-300 hover:bg-white/[0.08] transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-400 hover:text-cyan-300 hover:bg-white/[0.08] transition-colors"
                title="LeetCode"
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-4 h-4 text-indigo-400" />
              </a>
              <a
                href={PERSONAL_INFO.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                title="Resume"
                aria-label="Resume"
              >
                <FileText className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-indigo-500/15 text-cyan-400 hover:bg-indigo-600 hover:text-white transition-all ml-2 shadow-sm shadow-indigo-500/10"
                title="Back to Top"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
