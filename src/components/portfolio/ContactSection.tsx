import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      toast.success("Phone number copied to clipboard!");
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId = import.meta.env.VITE_USER_ID;

    if (serviceId && templateId && userId) {
      try {
        await emailjs.send(serviceId, templateId, formData, userId);
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (err) {
        console.error("EmailJS dispatch error:", err);
        toast.error("Failed to send message via automated service. Please reach out directly to shivagundeti1403@gmail.com!");
      } finally {
        setLoading(false);
      }
    } else {
      setTimeout(() => {
        toast.success("Thank you! Since email API keys are not configured in this environment, please also email directly to shivagundeti1403@gmail.com.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setLoading(false);
      }, 700);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono font-medium shadow-sm shadow-indigo-500/10">
            <Mail className="w-3 h-3 text-cyan-400" />
            <span>DIRECT CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text-accent">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Have an open role, an interview inquiry, or a project to build? I respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-5">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Contact Coordinates
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-500/30 transition-colors flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors shrink-0"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/30 transition-colors flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">
                      Phone / WhatsApp
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors shrink-0"
                  title="Copy phone"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-cyan-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-violet-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase">
                    Location
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-3xl bg-[#0b0f19]/70 border border-white/[0.08] space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                Professional Profiles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/30 flex items-center justify-between text-xs font-medium text-zinc-300 hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/30 flex items-center justify-between text-xs font-medium text-zinc-300 hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/30 flex items-center justify-between text-xs font-medium text-zinc-300 hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <SiLeetcode className="w-4 h-4 text-indigo-400" />
                    <span>LeetCode</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/[0.1] space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Fill in the form below and I'll receive it directly in my inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3 rounded-xl bg-[#080d18]/70 border border-white/[0.1] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                    >
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#080d18]/70 border border-white/[0.1] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Software Engineer Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[#080d18]/70 border border-white/[0.1] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-300"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your engineering role, project, or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-[#080d18]/70 border border-white/[0.1] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:opacity-95 text-white font-semibold text-sm shadow-md shadow-indigo-600/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
