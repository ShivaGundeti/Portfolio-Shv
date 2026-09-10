import { motion } from "framer-motion";
import { FileText, Mail, ArrowUpRight, Github, Linkedin, Sparkles, Heart } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const ResumeCTASection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-r from-indigo-950/40 via-[#0d121f] to-slate-900/60 border border-indigo-500/25 shadow-2xl"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium shadow-sm shadow-indigo-500/10">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>RECRUITER QUICK ACCESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have an engineering opportunity or problem to solve?
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto leading-relaxed">
              I am actively seeking software engineering and full-stack developer roles. Let's discuss how my backend and systems engineering skills can contribute to your engineering team.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:opacity-95 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 hover:text-white border border-white/[0.1] font-medium text-sm transition-all duration-200 hover:border-indigo-500/30 active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </button>
            </div>

            <div className="pt-4 flex items-center justify-center gap-6 text-xs font-mono text-zinc-400">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repositories</span>
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <SiLeetcode className="w-3.5 h-3.5 text-indigo-400" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
