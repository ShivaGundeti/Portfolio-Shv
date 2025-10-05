import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import fintrustImage from "@/assets/project-fintrust.png";
import detectionImage from "@/assets/project-detection.jpg";
import thinkboardImage from "@/assets/project-thinkboard.png";
import bloggerImage from "@/assets/blogger.png";
import booknestImage from "@/assets/booknestImage.png";
import crmImage from "@/assets/crmImage.png";
import authImage from "@/assets/project-auth.jpg";
import { Link } from "react-router-dom";

const projects = [
  {
  id: 1,
  title: "BookNest - Online Bookstore & Review Platform",
  description:
    "Developed BookNest, a full-stack MERN bookstore app where users can browse books, add reviews, and manage authentication with JWT-based security.",
  image: booknestImage,
  tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
  features: [
    "User registration & login with JWT authentication",
    "Secure password hashing using bcrypt",
    "Role-based access for Admin and Users",
    "CRUD operations for books and reviews",
    "Token verification middleware for protected routes",
    "Average rating and review system per book",
    "Theme switcher (Dark/Light mode) using Context API",
    "Responsive UI built with Tailwind CSS"
  ],
  category: "Full Stack (MERN)",
  status: "In Progress",
  link: "https://book-nest-nrhbwu3rs-shivagundetis-projects.vercel.app"
},
{
  id: 2,
  title: "Mini CRM Application – Customer & Leads Management Portal",
  description:
    "A full-stack CRM platform enabling users to manage customers and their associated leads/opportunities with authentication and role-based access.",
  image: crmImage,
  tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
  features: [
    "Developed secure user registration and login system using JWT-based authentication",
    "Implemented role-based access control (Admin vs. User) to manage permissions",
    "Built RESTful APIs for managing customers and their associated leads with full CRUD functionality",
    "Integrated search, pagination, and filter by lead status for efficient data handling",
    "Designed a responsive dashboard displaying key CRM statistics (customers, orders, income, products)",
    "Created customer detail views with associated leads and real-time updates",
    "Used MongoDB Atlas to securely store user, customer, and lead data",
    "Deployed backend on Render and frontend on Vercel for scalable cloud hosting"
  ],
  category: "Full Stack (MERN)",
  status: "Completed",
  link: "https://crm-project-inky-pi.vercel.app/"
}
,
  {
    id: 3,
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
    id: 4,
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
  id: 5,
  title: "Blogger Platform",
  description: "Full-stack blogging platform using Next.js and MongoDB for creating, editing, and managing blog posts.",
  image: bloggerImage, // replace with your blogger project image
  tech: ["Next.js", "React.js", "MongoDB", "Tailwind CSS", "Node.js", "Express.js"],
  features: [
    "User authentication and role-based access",
    "Create, edit, delete, and categorize blog posts",
    "Profile management for authors and readers",
    "Commenting and interaction system",
    "Responsive and intuitive UI",
    "Dynamic category and tag system",
    "Secure MongoDB data storage"
  ],
  category: "Full-Stack Web App",
  status: "Completed",
  link: "https://blogger-u9lt.vercel.app/" 
}

,
  {
    id: 6,
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
    id: 7,
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
link: "https://thinkboard-1-9vbx.onrender.com/"

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
    <div className="glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 border border-white/10 flex flex-col h-full">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 flex-shrink-0">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
      <div className="p-6 flex flex-col justify-between flex-grow min-h-[380px]">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
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
          <div className="space-y-2 max-h-[80px] overflow-hidden">
            {project.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full" />
                <span className="text-xs text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6 mt-auto">
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