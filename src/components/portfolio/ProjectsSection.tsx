import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import fintrustImage from "@/assets/project-fintrust.png";
import detectionImage from "@/assets/project-detection.jpg";
import thinkboardImage from "@/assets/project-thinkboard.png";
import authImage from "@/assets/project-auth.jpg";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 2,
title: "FinTrust - Banking App",
description: "“Developed FinTrust banking app with secure JWT transactions and AI chat assistant using Gemini API.",
image: fintrustImage,
tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
features: [
  "User registration & login with JWT authentication",
  "Secure password hashing using bcrypt",
  "HTTP-only cookies for authentication storage",
  "Money transfer system between registered users",
  "Transaction history tracking",
  "Role-based user access (Admin/User)",
  "Protected routes with middleware",
  "Responsive UI with Tailwind CSS"
],
category: "Full Stack (MERN)",
status: "Completed",
link: "https://fintrust-3q8n.onrender.com/"

  },
  {
    id: 2,
    title: "E-commerce Full-Stack App",
    description: "E-commerce platform with user authentication, role-based dashboards, and complete CRUD operations.",
    image: ecommerceImage,
    tech: ["Next.js", "React", "Node.js","Firebase"],
    features: [
      "User registration & login with multiple auth providers",
      "Role-based dashboards (admin & customer)",
      "Profile updates with session handling",
      "Image uploads with Cloudinary & Firebase storage",
      "Protected routes and middleware",
      "Admin dashboard with statistics",
      "Real-time order management"
    ],
    category: "Full-Stack",
    status: "Completed",
    link:"https://fintrust-3q8n.onrender.com/"
    
  },
  
  {
    id: 3,
    title: "Real-Time Object Detection",
    description: "AI-powered web application using TensorFlow.js for real-time object detection through webcam.",
    image: detectionImage,
    tech: ["React.js", "TensorFlow.js", "COCO-SSD", "WebRTC"],
    features: [
      "Real-time webcam integration",
      "Object detection using COCO-SSD model",
      "Dynamic object name display",
      "Bounding box rendering",
      "Performance optimization",
      "Cross-browser compatibility",
      "Responsive design"
    ],
    category: "AI & Frontend",
    status: "Completed",
    link:"https://fintrust-3q8n.onrender.com/"
  },
  {
    id: 3,
title: "Thinkboard",
description: "A collaborative MERN stack web application for brainstorming and organizing ideas with authentication and secure user management.",
image: thinkboardImage, // 🖼️ replace with your Thinkboard screenshot
tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Cloudinary"],
features: [
  "User authentication with JWT & HTTP-only cookies",
  "Role-based access control",
  "CRUD operations for boards, notes, and tasks",
  "Image upload support with Cloudinary",
  "Responsive dashboard for managing boards",
  "Protected private routes",
  "Real-time updates for team collaboration (future scope)"
],
category: "Full Stack (MERN)",
status: "In Progress",
link: "https://fintrust-3q8n.onrender.com/"

  }
];

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 lg:py-32 relative">
      <div className="container px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my full-stack development journey - from frontend interfaces to complete backend solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-1000 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 border border-white/10">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-primary text-primary-foreground text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold gradient-text mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md font-mono border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md font-mono border border-border/30">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Link to="https://github.com/ShivaGundeti?tab=repositories">
                    <Button variant="hero" size="sm" className=" group/btn">
                      <Github className="mr-1 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    </Link>
                    <Link to={project.link}>
                    <Button variant="glass" size="sm" className=" group/btn">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      Demo
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorations */}
      {/* <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-primary rounded-full opacity-5 animate-pulse" /> */}
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-gradient-glow rounded-full opacity-10 animate-float" />
    </section>
  );
};