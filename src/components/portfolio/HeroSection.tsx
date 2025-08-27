import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";
import resume from "@/resume/ShivaGundeti-Resume (1).pdf"
export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Floating Gradient Blobs */}
      <div className="absolute top-24 left-10 w-28 h-28 bg-gradient-primary rounded-full opacity-20 blur-2xl animate-float" />
      <div
        className="absolute bottom-32 right-20 w-24 h-24 bg-primary-glow rounded-full opacity-30 blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 right-32 w-16 h-16 bg-primary rounded-full opacity-25 blur-lg animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Content */}
      <div className="container relative z-10 text-center px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {/* Name */}
          <h1 className="text-5xl mt-7 sm:mt-0   md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight leading-tight">
            <span className="gradient-text">SHIVA GUNDETI</span>
   
          </h1>

          {/* Title */}
          <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6">
           
            <span className="font-mono text-primary-glow">
              Full-Stack Developer
            </span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Passionate about building modern web apps that balance clean UI and
            scalable backend. Currently diving deeper into backend technologies,
            authentication, and cloud deployment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToProjects}
              className="group shadow-lg"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="glass"
              size="xl"
              onClick={scrollToContact}
              className="shadow-md"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/ShivaGundeti?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-muted-foreground/30 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/gundeti-shiva-kumar-238330350/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-muted-foreground/30 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={resume}
              download
              className="p-3 rounded-full border border-muted-foreground/30 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Download className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div> */}
      </div>
    </section>
  );
};
