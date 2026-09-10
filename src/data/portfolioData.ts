import booknestImage from "@/assets/booknestImage.png";
import crmImage from "@/assets/crmImage.png";
import fintrustImage from "@/assets/project-fintrust.png";
import detectionImage from "@/assets/project-detection.jpg";
import bloggerImage from "@/assets/blogger.png";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import thinkboardImage from "@/assets/project-thinkboard.png";
import authImage from "@/assets/project-auth.jpg";
import urlShortnerImage from "@/assets/UrlShortner.png";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Systems & Cloud" | "Full Stack" | "AI & Frontend" | "SaaS & Tools";
  isFlagship?: boolean;
  description: string;
  problemStatement?: string;
  solution?: string;
  image: string;
  tech: string[];
  features: string[];
  architecture?: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
  }[];
}

export interface SystemConcept {
  id: string;
  title: string;
  summary: string;
  technologies: string[];
  keyPractices: string[];
  flow: string[];
}

export const PERSONAL_INFO = {
  name: "Shiva Kumar Gundeti",
  role: "Full Stack Developer | Software Engineer",
  shortBio:
    "Full Stack Software Engineer with hands-on experience building production SaaS platforms, multi-tenant backends, and cloud-deployed applications. Passionate about system design, performance, and clean architectural patterns.",
  email: "shivagundeti1403@gmail.com",
  phone: "+91 9392240740",
  location: "Hyderabad, India",
  education: {
    college: "Nalla Narsimha Reddy Engineering College",
    degree: "Bachelor of Technology",
    period: "2023 - 2027",
    location: "Hyderabad, Telangana",
  },
  socials: {
    github: "https://github.com/ShivaGundeti",
    repositories: "https://github.com/ShivaGundeti?tab=repositories",
    linkedin: "https://www.linkedin.com/in/gundeti-shiva-kumar-238330350/",
    leetcode: "https://leetcode.com/u/Shiva_Gundeti/",
    resume: "https://drive.google.com/file/d/11WS3K34jRRRVyjwm6PpDPzB2Ck3n35qd/view?usp=sharing",
  },
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Tellis Technologies",
    role: "Software Engineering Intern",
    period: "Nov 2025 – July 2026",
    location: "Hyderabad, India",
    type: "Production SaaS",
    highlights: [
      "Architected a multi-tenant NestJS backend for a salon-management SaaS platform, serving both an Admin web dashboard and a customer-facing mobile application through a unified REST API.",
      "Owned end-to-end development of core business features including Memberships, Packages, Gift Cards, and a complete POS Refund workflow across frontend and backend applications.",
      "Developed and debugged backend APIs across core application modules, writing test cases and improving application stability in a production environment.",
      "Managed live production deployments using Dokploy and GitHub, diagnosing and resolving critical issues to maintain application reliability.",
      "Led and mentored new interns by communicating technical approaches and introducing structured development workflows.",
      "Integrated AI coding agents and custom internal tooling into daily engineering workflows to reduce repetitive development work and support faster feature delivery.",
    ],
    techStack: [
      "NestJS",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Multi-Tenancy",
      "Dokploy",
      "GitHub Actions",
      "PostgreSQL",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "url-shortener",
    title: "High-Throughput URL Shortener & Analytics",
    subtitle: "Containerized URL microservice with Redis caching & rate limiting",
    category: "Systems & Cloud",
    isFlagship: true,
    description:
      "A high-performance full-stack URL shortening service engineered for high availability and low latency, featuring Redis caching, rate limiting, and automated CI/CD deployment to AWS EC2.",
    problemStatement:
      "Public redirection endpoints suffer under burst traffic spikes, database connection saturation, and malicious request hammering without an edge proxy and caching layer.",
    solution:
      "Combined FastAPI with PostgreSQL via Prisma ORM, introduced Redis for in-memory token-bucket rate limiting and key lookups, containerized the multi-service stack with Docker Compose, and fronted it with an Nginx reverse proxy.",
    image: urlShortnerImage,
    tech: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "Nginx",
      "AWS EC2",
      "GitHub Actions",
    ],
    features: [
      "Sub-millisecond redirect routing backed by Redis in-memory cache",
      "Sliding window & token-bucket API rate limiting to protect database pools",
      "Docker Compose containerization orchestrating App, Cache, and DB",
      "Nginx reverse proxy for SSL termination and request load handling",
      "Automated CI/CD workflow testing with PyTest and deploying directly to AWS EC2",
      "Persistent analytics tracking clicks, timestamps, and referral metadata",
    ],
    architecture: [
      "Client (Next.js)",
      "Nginx Reverse Proxy",
      "FastAPI Service",
      "Redis (Cache & Rate Limit)",
      "PostgreSQL + Prisma",
      "AWS EC2 Host",
    ],
    metrics: "Sub-10ms redirect latency with Redis caching layer",
    githubUrl: "https://github.com/ShivaGundeti?tab=repositories",
    liveUrl: "http://16.171.3.40:3000/login",
  },
  {
    id: "booknest",
    title: "BookNest — Academic Book Exchange Platform",
    subtitle: "Real-time peer-to-peer textbook marketplace with instant messaging",
    category: "Full Stack",
    isFlagship: true,
    description:
      "A complete MERN-stack marketplace designed for university students to exchange textbooks, negotiate pricing via real-time WebSocket messaging, and review listings securely.",
    problemStatement:
      "Students lacked a safe, real-time channel to buy, sell, or trade academic coursework textbooks without steep intermediary platform fees.",
    solution:
      "Engineered a responsive React frontend paired with Express.js/MongoDB backend, real-time bi-directional chat using Socket.io, and role-guarded JWT security.",
    image: booknestImage,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Tailwind CSS"],
    features: [
      "Real-time instant negotiation chat powered by Socket.io event channels",
      "User authentication with JWT security, HTTP-only tokens, and bcrypt encryption",
      "Full CRUD operations for academic book listings, ratings, and student reviews",
      "Community trust-rating algorithm to minimize transaction fraud",
      "Dynamic filtering by university department, semester, and pricing",
      "Theme toggle (Dark/Light mode) with state persistence",
    ],
    architecture: [
      "React + Tailwind Client",
      "Express.js REST & WebSocket Server",
      "Socket.io Message Broker",
      "MongoDB Atlas Cluster",
    ],
    metrics: "Instant real-time peer messaging via Socket.io",
    githubUrl: "https://github.com/ShivaGundeti?tab=repositories",
    liveUrl: "https://book-nest-nrhbwu3rs-shivagundetis-projects.vercel.app",
  },
  {
    id: "mini-crm",
    title: "Enterprise Mini CRM & Lead Pipeline Portal",
    subtitle: "Customer relationship & lead management with role-based access control",
    category: "Full Stack",
    isFlagship: true,
    description:
      "A full-stack CRM platform enabling businesses to manage customer pipelines, track sales opportunities, and administer role-based team permissions with a responsive operational dashboard.",
    image: crmImage,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    features: [
      "Role-based access control (Admin vs User) securing data mutations",
      "RESTful API architecture supporting full CRUD on leads, stages, and client logs",
      "Interactive analytics dashboard displaying customer metrics, orders, and revenue trends",
      "Server-side search, multi-field filtering, and cursor pagination",
      "Customer detail drilldown with real-time status transitions",
      "Deployed on Vercel frontend and Render cloud backend",
    ],
    architecture: [
      "React UI",
      "Express REST API",
      "JWT Security Layer",
      "MongoDB Atlas",
    ],
    metrics: "End-to-end lead lifecycle & role-based dashboard",
    githubUrl: "https://github.com/ShivaGundeti?tab=repositories",
    liveUrl: "https://crm-project-inky-pi.vercel.app/",
  },
  {
    id: "fintrust",
    title: "FinTrust — AI-Powered Banking Assistant",
    subtitle: "Secure transactional banking portal with conversational AI advisory",
    category: "AI & Frontend",
    description:
      "An AI-driven personal banking web application integrating Google's Gemini API to provide real-time financial advice, intelligent transaction explanations, and proactive spending anomaly alerts.",
    image: fintrustImage,
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "JWT"],
    features: [
      "Conversational financial advisor powered by Gemini API integration",
      "Secure fund transfer system between registered accounts with double-entry validation",
      "Proactive automated spending alerts to keep users within monthly budgets",
      "Full ledger transaction history with AI-generated categorization and insights",
      "HTTP-only cookie JWT session persistence and bcrypt password hashing",
    ],
    githubUrl: "https://github.com/ShivaGundeti?tab=repositories",
    liveUrl: "https://fintrust-3q8n.onrender.com/",
  },
  {
    id: "thinkboard",
    title: "Thinkboard — Collaborative Brainstorming Workspace",
    subtitle: "Digital canvas for teams to ideate, create boards, and organize tasks",
    category: "SaaS & Tools",
    description:
      "A collaborative web application designed for agile teams to capture ideas, manage digital sticky notes, organize task boards, and upload reference imagery securely.",
    image: thinkboardImage,
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Cloudinary"],
    features: [
      "Intuitive digital board creation with flexible note categorization",
      "Secure image attachments handled via Cloudinary API and CDN delivery",
      "Protected user workspaces with JWT authorization and cookie validation",
      "Responsive card grid supporting drag-and-drop state organization",
      "Real-time architecture prepared for multi-user shared sessions",
    ],
    githubUrl: "https://github.com/ShivaGundeti?tab=repositories",
    liveUrl: "https://thinkboard-1-9vbx.onrender.com/",
  },
  {
    id: "blogger-platform",
    title: "Modern Blogger — Publishing & Editorial Engine",
    subtitle: "Full-stack publishing application with Markdown support and dynamic tagging",
    category: "Full Stack",
    description:
      "A sleek editorial platform built for technical writers, featuring rich text authoring, category filtering, author profiles, and interactive reader discussions.",
    image: bloggerImage,
    tech: ["Next.js", "React.js", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    features: [
      "Full publication lifecycle: authoring, drafting, publishing, and archiving",
      "Granular category and tag hierarchy for effortless article discovery",
      "Interactive community comments and discussion threads per article",
      "Server-side rendering (SSR) for enhanced SEO visibility and indexing",
      "Author profile management and personal publication showcase",
    ],
    githubUrl: "https://github.com/ShivaGundeti?tab=repositories",
    liveUrl: "https://blogger-u9lt.vercel.app/",
  },
  {
    id: "object-detection",
    title: "Real-Time Edge Object Detection",
    subtitle: "Client-side computer vision application running inference in browser",
    category: "AI & Frontend",
    description:
      "An in-browser computer vision tool leveraging TensorFlow.js and the pre-trained COCO-SSD model to detect, classify, and draw bounding boxes around 80+ object classes via webcam in real time.",
    image: detectionImage,
    tech: ["React.js", "TensorFlow.js", "COCO-SSD", "WebRTC", "Canvas API"],
    features: [
      "Zero-server client-side neural network inference using WebGL acceleration",
      "Real-time video frame processing through HTML5 WebRTC webcam stream",
      "Dynamic bounding box drawing and confidence score overlays on Canvas",
      "Hardware-optimized frame sampling preserving 30+ FPS browser responsiveness",
    ],
    githubUrl: "https://github.com/ShivaGundeti?tab=repositories",
    liveUrl: "https://fintrust-3q8n.onrender.com/",
  },
  {
    id: "ecommerce",
    title: "Scalable E-Commerce Web Application",
    subtitle: "Complete digital storefront with role-based admin inventory console",
    category: "Full Stack",
    description:
      "A multi-role online retail platform featuring customer product catalog browsing, cart operations, order placement, and an administrative inventory control center.",
    image: ecommerceImage,
    tech: ["Next.js", "React", "Node.js", "Firebase Storage", "Cloudinary"],
    features: [
      "Role-based dashboards differentiating customer and merchant permissions",
      "Media asset pipelines using Firebase Storage & Cloudinary for product galleries",
      "Cart state synchronization and order lifecycle auditing",
      "Administrative inventory control dashboard with revenue and stock analytics",
    ],
    githubUrl: "https://github.com/ShivaGundeti?tab=repositories",
    liveUrl: "https://fintrust-3q8n.onrender.com/",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming languages used for systems, scripting, and web applications",
    skills: [
      { name: "TypeScript", featured: true },
      { name: "JavaScript", featured: true },
      { name: "Python", featured: true },
      { name: "SQL", featured: true },
      { name: "Java" },
      { name: "C" },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Modern, responsive, accessible, and high-performance component systems",
    skills: [
      { name: "React.js", featured: true },
      { name: "Next.js", featured: true },
      { name: "Tailwind CSS", featured: true },
      { name: "Zustand", featured: true },
      { name: "TanStack Query", featured: true },
      { name: "HTML5 & CSS3" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Scalable server architectures, microservices, and secure API gateways",
    skills: [
      { name: "Node.js", featured: true },
      { name: "NestJS", featured: true },
      { name: "FastAPI", featured: true },
      { name: "Express.js", featured: true },
      { name: "REST APIs", featured: true },
      { name: "JWT Authentication", featured: true },
      { name: "WebSockets" },
    ],
  },
  {
    title: "Databases & ORM",
    description: "Relational, document, and in-memory data structures with query optimization",
    skills: [
      { name: "PostgreSQL", featured: true },
      { name: "MongoDB", featured: true },
      { name: "Prisma ORM", featured: true },
      { name: "Redis Caching", featured: true },
      { name: "MySQL" },
      { name: "Database Schema Design" },
    ],
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description: "Containerization, automated continuous delivery, and cloud deployments",
    skills: [
      { name: "Docker", featured: true },
      { name: "Docker Compose", featured: true },
      { name: "AWS EC2", featured: true },
      { name: "Nginx Reverse Proxy", featured: true },
      { name: "GitHub Actions CI/CD", featured: true },
      { name: "Dokploy", featured: true },
      { name: "Git & Version Control" },
      { name: "Postman" },
    ],
  },
  {
    title: "Engineering Concepts",
    description: "Foundational software design patterns and distributed systems knowledge",
    skills: [
      { name: "System Design", featured: true },
      { name: "API Rate Limiting", featured: true },
      { name: "Multi-Tenant Architecture", featured: true },
      { name: "Caching Strategies", featured: true },
      { name: "OOP Principles", featured: true },
      { name: "Reverse Proxy & Load Balancing" },
    ],
  },
];

export const SYSTEM_CONCEPTS: SystemConcept[] = [
  {
    id: "caching-ratelimit",
    title: "In-Memory Caching & API Rate Limiting",
    summary:
      "Protecting backend service availability and reducing database load using Redis in-memory key-value lookups and sliding window token-bucket rate limits.",
    technologies: ["Redis", "FastAPI", "Token Bucket", "Python"],
    keyPractices: [
      "Sub-millisecond query response by caching frequent read endpoints",
      "Sliding window algorithm to prevent DDoS and API quota abuse",
      "Graceful TTL-based eviction preventing stale data retention",
    ],
    flow: ["Incoming HTTP", "Rate Limit Check (Redis)", "Cache Hit -> Instant 200", "Cache Miss -> DB Query -> Populate Cache"],
  },
  {
    id: "containerization-proxy",
    title: "Multi-Service Containerization & Reverse Proxy",
    summary:
      "Isolating frontend, backend API, and database services within Docker Compose networks, routed through an Nginx reverse proxy.",
    technologies: ["Docker Compose", "Nginx", "Linux", "AWS EC2"],
    keyPractices: [
      "Unified edge entry point handling SSL, header hygiene, and routing",
      "Network isolation preventing public exposure of database ports",
      "Deterministic reproducible environments across local development and EC2",
    ],
    flow: ["HTTPS Request", "Nginx Proxy", "Docker Network Bridge", "FastAPI / NestJS Container", "Postgres / Redis"],
  },
  {
    id: "multitenancy",
    title: "Multi-Tenant SaaS Backend Architecture",
    summary:
      "Serving diverse business clients through a unified NestJS backend with tenant isolation, shared infrastructure, and role-guarded privilege boundaries.",
    technologies: ["NestJS", "PostgreSQL", "JWT RBAC", "Dokploy"],
    keyPractices: [
      "Tenant context extraction via middleware on every incoming request",
      "Scoped database queries preventing cross-tenant data leakage",
      "Role-Based Access Control (Admin, Staff, Customer) for POS and Member modules",
    ],
    flow: ["User Request + Bearer JWT", "Auth & Tenant Guard", "Tenant Context Bound", "Service Business Logic", "Tenant-Filtered DB"],
  },
  {
    id: "cicd-automation",
    title: "Automated CI/CD Deployment Pipelines",
    summary:
      "Automating code quality validation, unit testing, Docker image building, and automated deployment pushes to AWS EC2 and Dokploy.",
    technologies: ["GitHub Actions", "PyTest", "Docker Buildx", "Dokploy / SSH"],
    keyPractices: [
      "Automated test gates rejecting pull requests with failing suites",
      "Automated container building and image caching for rapid releases",
      "Zero-downtime rolling container swap upon successful staging validation",
    ],
    flow: ["Git Push / PR", "GitHub Actions Runner", "Run Tests (PyTest / Jest)", "Build Container", "Deploy to EC2 / Dokploy"],
  },
];
