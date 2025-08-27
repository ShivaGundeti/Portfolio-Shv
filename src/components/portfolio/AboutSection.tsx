import { Code2, Database, Globe, Smartphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    icon: Globe,
    title: "Frontend Expertise",
    description: "React.js, Next.js, Tailwind CSS",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "Backend Learning",
    description: "Node.js, Express.js, MongoDB",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Code2,
    title: "Full-Stack Focus",
    description: "Building complete applications",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Smartphone,
    title: "AI Integration",
    description: "Gemini API, TensorFlow.js",
    color: "from-orange-500 to-red-500"
  }
];

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 lg:py-32 relative">
      <div className="container px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and expanding my expertise in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Main Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="glass p-8 rounded-3xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-mono text-primary">Currently Available</span>
                </div>
                
                <h3 className="text-2xl font-bold gradient-text mb-4">
                 Full-Stack Developer
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm on an exciting journey from frontend development to full-stack mastery. With a solid foundation 
                  in modern web technologies, I'm constantly pushing myself to learn and build comprehensive solutions 
                  that demonstrate real-world application development skills.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2" />
                    <div>
                      <p className="font-semibold text-primary">Frontend Foundation</p>
                      <p className="text-sm text-muted-foreground">Strong expertise in React.js, Next.js, and responsive design</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2" />
                    <div>
                      <p className="font-semibold text-primary">Backend Expansion</p>
                      <p className="text-sm text-muted-foreground">Learning Node.js, Express.js, MongoDB, and authentication systems</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2" />
                    <div>
                      <p className="font-semibold text-primary">Real Projects</p>
                      <p className="text-sm text-muted-foreground">Building portfolio-ready applications from e-commerce to AI chatbots</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 glass p-6 rounded-2xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text">4+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">10+</div>
                  <div className="text-xs text-muted-foreground">Technologies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-xs text-muted-foreground">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-glow rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-primary rounded-full opacity-5 animate-float" />
    </section>
  );
};