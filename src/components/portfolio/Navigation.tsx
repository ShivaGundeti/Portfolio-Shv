import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.slice(1);
    const element = targetId === "home" ? document.body : document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass-strong" : "bg-transparent"
    }`}>
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-xl lg:text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              SKG
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`relative transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection("#contact")}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ${
        isOpen 
          ? "opacity-100 visible" 
          : "opacity-0 invisible"
      }`}>
        <div className="glass absolute top-full left-0 right-0 border-t border-border/20">
          <div className="container px-4 py-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={`justify-start text-left transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                </Button>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-border/20">
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => scrollToSection("#contact")}
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};