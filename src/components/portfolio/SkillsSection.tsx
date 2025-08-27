"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiTensorflow } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML & CSS", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Responsive Design", icon: <TbBrandCpp className="text-green-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      { name: "JWT Auth", icon: <FaReact className="text-pink-400" /> },
      { name: "Auth.js", icon: <FaReact className="text-indigo-400" /> },
    ],
  },
  {
    title: "Tools & AI",
    skills: [
      { name: "Git & GitHub", icon: <FaGithub className="text-gray-400" /> },
      { name: "Cloudinary", icon: <FaReact className="text-blue-400" /> },
      { name: "AI Integration", icon: <SiTensorflow className="text-pink-400" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "TensorFlow.js", icon: <SiTensorflow className="text-red-400" /> },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      <div className="container px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A blend of frontend, backend, and emerging technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 shadow-lg"
            >
              <h3 className="text-2xl font-bold gradient-text mb-6 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    <div className="text-4xl">{skill.icon}</div>
                    <p className="text-sm font-medium text-white">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Exploring */}
        <div className="mt-20 text-center">
          <div className="glass p-8 rounded-3xl max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary-glow/5">
            <h3 className="text-xl font-bold gradient-text mb-6">
              Currently Exploring
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Docker",
                "AWS",
                "LangChain",
                "RAG",
                "Microservices",
                "GraphQL",
                "TypeScript",
              ].map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="glass px-6 py-3 rounded-full text-sm font-mono border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default"
                >
                  <span className="gradient-text font-semibold">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-primary rounded-full opacity-5 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-glow rounded-full opacity-10 animate-float" />
    </section>
  );
};
