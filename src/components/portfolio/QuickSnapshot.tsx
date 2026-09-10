import { motion } from "framer-motion";
import { Server, Database, Cloud, ShieldCheck } from "lucide-react";

const SNAPSHOT_ITEMS = [
  {
    icon: Server,
    label: "Backend & Systems",
    value: "NestJS & FastAPI",
    detail: "Multi-tenant REST APIs, JWT Auth & WebSockets",
    color: "from-indigo-500/20 via-blue-500/5 to-transparent",
    border: "border-indigo-500/25 hover:border-indigo-500/50",
    iconColor: "text-indigo-400",
    badge: "Production",
    hoverColor: "group-hover:text-indigo-300",
  },
  {
    icon: Cloud,
    label: "DevOps & Cloud",
    value: "Docker & AWS EC2",
    detail: "Nginx reverse proxy, CI/CD with GitHub Actions",
    color: "from-cyan-500/20 via-sky-500/5 to-transparent",
    border: "border-cyan-500/25 hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
    badge: "Automated",
    hoverColor: "group-hover:text-cyan-300",
  },
  {
    icon: Database,
    label: "Data & Caching",
    value: "Postgres & Redis",
    detail: "Prisma ORM, MongoDB Atlas & Rate Limiting",
    color: "from-violet-500/20 via-purple-500/5 to-transparent",
    border: "border-violet-500/25 hover:border-violet-500/50",
    iconColor: "text-violet-400",
    badge: "Sub-10ms",
    hoverColor: "group-hover:text-violet-300",
  },
  {
    icon: ShieldCheck,
    label: "Production Track",
    value: "Tellis Technologies",
    detail: "Salon SaaS, POS refunds & Live Dokploy deploys",
    color: "from-emerald-500/20 via-teal-500/5 to-transparent",
    border: "border-emerald-500/25 hover:border-emerald-500/50",
    iconColor: "text-emerald-400",
    badge: "Live Uptime",
    hoverColor: "group-hover:text-emerald-300",
  },
];

export const QuickSnapshot = () => {
  return (
    <section className="relative py-10 border-y border-white/[0.08] bg-[#070a12]/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SNAPSHOT_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-5 rounded-2xl bg-gradient-to-br ${item.color} border ${item.border} backdrop-blur-md shadow-lg shadow-black/40 transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl bg-white/[0.06] ${item.iconColor} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300">
                    {item.badge}
                  </span>
                </div>
                <div className={`text-base font-bold text-white tracking-tight mb-1 ${item.hoverColor} transition-colors`}>
                  {item.value}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
