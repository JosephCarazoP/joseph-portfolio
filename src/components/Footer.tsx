import { motion } from 'framer-motion';
import { Heart, Code2, Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Instagram, href: personalInfo.instagram, label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-green-400' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 border-t border-white/10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
      
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-10"
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 group ${social.color}`}
                aria-label={social.label}
              >
                <IconComponent className="w-5 h-5 text-gray-400 group-hover:scale-110 transition-transform" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider with gradient */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mb-8"
        />

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-gray-400 text-sm mb-2">
              <span>© {currentYear}</span>
              <span className="text-blue-400 font-bold text-base">Joseph Carazo Peña</span>
            </div>
            <p className="text-gray-500 text-xs">
              Todos los derechos reservados • Desarrollador Full Stack
            </p>
          </motion.div>

          {/* Made with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Diseñado y desarrollado con</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
              <span>y</span>
              <Code2 className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <span>🇨🇷</span>
              <span>Tilarán, Guanacaste, Costa Rica</span>
            </div>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white p-4 rounded-2xl border border-blue-400/30 hover:border-blue-500 transition-all duration-300 group"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
          </motion.button>
        </div>

        {/* Tech Stack Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-xs text-gray-400">
            <span>Built with</span>
            <span className="text-blue-400 font-semibold">React</span>
            <span>•</span>
            <span className="text-purple-400 font-semibold">TypeScript</span>
            <span>•</span>
            <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
