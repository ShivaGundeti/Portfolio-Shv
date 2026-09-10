import { motion } from "framer-motion";
import { Cpu, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { SYSTEM_CONCEPTS } from "@/data/portfolioData";

export const SystemDesignSection = () => {
  return (
    <section id="architecture" className="py-20 lg:py-28 relative">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono font-medium shadow-sm shadow-indigo-500/10">
            <Cpu className="w-3 h-3 text-cyan-400" />
            <span>SYSTEM DESIGN & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Concepts <span className="gradient-text-accent">I Work With</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A practical look into how I structure data pipelines, cache layers, container topologies, and deployment gates for web applications.
          </p>
        </div>

        {/* Grid of Concept Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SYSTEM_CONCEPTS.map((concept, idx) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] hover:border-indigo-500/35 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)] transition-all duration-300 space-y-5 group"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {concept.title}
                </h3>
                <span className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 shrink-0">
                  0{idx + 1}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {concept.summary}
              </p>

              {/* Data Flow Diagram Card */}
              <div className="p-3.5 rounded-xl bg-[#090d18] border border-white/[0.06] space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Architectural Request Flow
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                  {concept.flow.map((step, sIdx) => (
                    <span key={step} className="flex items-center gap-1.5">
                      <span className="px-2 py-1 rounded-md bg-white/[0.04] text-cyan-300 border border-white/[0.08]">
                        {step}
                      </span>
                      {sIdx < concept.flow.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-indigo-400 shrink-0" />
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Practices */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Engineering Principles & Guarantees:
                </div>
                <ul className="space-y-1.5">
                  {concept.keyPractices.map((practice, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                {concept.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-500/10 text-cyan-300 border border-indigo-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
