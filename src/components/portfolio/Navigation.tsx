import { useState, useEffect } from "react";
import { FileText, Github, Linkedin, ExternalLink, Menu, X } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Architecture", href: "#architecture" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ["home", "about", "experience", "projects", "architecture", "skills", "contact"];
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#08090e]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection("#home")}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm shadow-indigo-500/20">
            <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
              <span className="font-mono text-sm font-bold text-cyan-200 tracking-wider">SG</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
              Shiva Gundeti
            </div>
            <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Software Engineer
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white bg-white/[0.1] shadow-sm shadow-black/40"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Socials & Resume CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-zinc-400 hover:text-cyan-300 hover:bg-white/[0.06] transition-colors"
            title="LeetCode Profile"
            aria-label="LeetCode Profile"
          >
            <SiLeetcode className="w-4 h-4 text-indigo-400" />
          </a>
          <a
            href={PERSONAL_INFO.socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={PERSONAL_INFO.socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-md text-xs font-medium text-white bg-gradient-to-r from-indigo-600 to-cyan-500"
          >
            Resume
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.08] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/[0.08] bg-[#070b14]/95 backdrop-blur-2xl px-5 py-4 space-y-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white bg-white/[0.08] font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-cyan-300"
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-5 h-5 text-indigo-400" />
              </a>
            </div>
            <a
              href={PERSONAL_INFO.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
