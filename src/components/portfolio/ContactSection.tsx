import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send, MessageSquare, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "shivagundeti1403@gmail.com",
    description: "Send me an email anytime",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageSquare,
    title: "Let's Chat",
    value: "Quick Response",
    description: "I typically respond within 24 hours",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Calendar,
    title: "Schedule Call",
    value: "Available",
    description: "Book a consultation call",
    color: "from-purple-500 to-violet-500"
  }
];

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const sectionRef = useRef<HTMLElement>(null);
// console.log(process.env)
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
const [loading, setLoading] = useState(false);
// console.log(process.env);

  const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
  import.meta.env.VITE_TEMPLATE_ID,
  formData,
  import.meta.env.VITE_USER_ID  // 🔑 from EmailJS
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("❌ Failed to send:", error);
          alert("Something went wrong, please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 lg:py-32 relative">
      <div className="container px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Contact Methods */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-primary mb-1">{method.title}</h3>
                <p className="text-sm font-mono text-foreground mb-2">{method.value}</p>
                <p className="text-xs text-muted-foreground">{method.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="glass p-8 rounded-3xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold gradient-text mb-2">Send Message</h3>
                  <p className="text-muted-foreground">Fill out the form and I'll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-background/50 border-border/50 focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full group"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Social */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="space-y-8">
                {/* Personal Info */}
                <div className="glass p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold gradient-text mb-6">Contact Info</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-muted-foreground">shivagundeti1403@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-sm text-muted-foreground">+91 9392240740</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-sm text-muted-foreground">India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass p-8 rounded-3xl">
                  <h3 className="text-xl font-bold gradient-text mb-6">Follow Me</h3>
                  <div className="flex gap-4">
                    <Button
                      variant="glass"
                      size="icon"
                      className="hover:scale-110 transition-all duration-300 w-12 h-12"
                      asChild
                    >
                      <a href="https://github.com/ShivaGundeti?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="glass"
                      size="icon"
                      className="hover:scale-110 transition-all duration-300 w-12 h-12"
                      asChild
                    >
                      <a href="https://www.linkedin.com/in/gundeti-shiva-kumar-238330350/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="glass"
                      size="icon"
                      className="hover:scale-110 transition-all duration-300 w-12 h-12"
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* CTA */}
                <div className="glass p-8 rounded-3xl bg-gradient-to-r from-primary/5 to-primary-glow/5">
                  <h3 className="text-xl font-bold gradient-text mb-4">Ready to Start?</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    I'm currently available for freelance work and full-time opportunities.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="hero" size="sm">
                      Hire Me
                    </Button>
                    <Button variant="glass" size="sm">
                      Download CV
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-36 h-36 bg-gradient-primary rounded-full opacity-5 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-28 h-28 bg-gradient-glow rounded-full opacity-10 animate-float" />
    </section>
  );
};