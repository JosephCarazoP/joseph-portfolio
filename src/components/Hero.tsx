import { motion, type Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Download, ArrowRight, FileDown, Code2 } from 'lucide-react';

import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { personalInfo } from '../data/portfolio';

export const Hero = () => {
  const [showCVOptions, setShowCVOptions] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const fullText = 'Joseph Carazo Peña';

  useEffect(() => {
    const handleTyping = () => {
      const currentText = fullText;

      if (isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  // Dividir en 2 líneas: "Joseph Carazo" / "Peña"
  const getStyledText = () => {
    const text = displayedText;

    let line1Part1 = ''; // Joseph (blanco)
    let line1Part2 = ''; // Carazo (azul)
    let line2 = ''; // Peña (azul)

    if (text.length <= 7) {
      line1Part1 = text;
    } else if (text.length <= 14) {
      line1Part1 = 'Joseph ';
      line1Part2 = text.substring(7);
    } else {
      line1Part1 = 'Joseph ';
      line1Part2 = 'Carazo';
      line2 = text.substring(14);
    }

    return (
      <div className="flex flex-col gap-1">
        {/* Línea 1: Joseph Carazo - SIEMPRE VISIBLE CON ESPACIO */}
        <div className="leading-none min-h-[1.2em]">
          <span className="text-white">{line1Part1 || '\u00A0'}</span>
          <span className="text-gradient">{line1Part2}</span>
          {text.length > 0 && text.length <= 14 && (
            <span className="cursor-line animate-blink"></span>
          )}
        </div>

        {/* Línea 2: Peña - SIEMPRE OCUPA ESPACIO */}
        <div className="text-gradient leading-none min-h-[1.2em]">
          {line2 || '\u00A0'}
          {text.length > 14 && (
            <span className="cursor-line animate-blink"></span>
          )}
        </div>
      </div>
    );
  };


  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const downloadCV = (language: 'es' | 'en') => {
    const link = document.createElement('a');
    link.href = language === 'es' ? '/cv/Joseph_Carazo_CV_ES.pdf' : '/cv/Joseph_Carazo_CV_EN.pdf';
    link.download = `Joseph_Carazo_CV_${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCVOptions(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full relative z-10"
      >
        {/* Badge de Status */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-400/30 px-4 py-2 text-sm font-medium">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
            </span>
            Disponible para nuevos proyectos
          </Badge>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-xl"
        >
          {/* Nombre con efecto typewriter - ALTURA FIJA */}
          <div className="mb-4">
            <div className="h-[160px] md:h-[240px] lg:h-[300px]">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                {getStyledText()}
              </h1>
            </div>
          </div>

          {/* Título con badges de tecnologías */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-semibold">
                Desarrollador Full Stack
              </h2>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-white/5 text-gray-300 border-white/10">
                  React
                </Badge>
                <Badge variant="secondary" className="bg-white/5 text-gray-300 border-white/10">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="bg-white/5 text-gray-300 border-white/10">
                  Flutter
                </Badge>
              </div>
            </div>
          </motion.div>

          {/* Descripción mejorada */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl leading-relaxed"
          >
            Desarrollador Junior especializado en crear experiencias web y móviles
            innovadoras. Apasionado por transformar ideas en{' '}
            <span className="text-blue-400 font-semibold">soluciones digitales</span>{' '}
            funcionales y escalables.
          </motion.p>

          {/* Información de contacto */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="bg-blue-500/20 p-2 rounded-lg border border-blue-400/30 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-400 text-xs">Email</p>
                <p className="text-white text-sm font-medium truncate">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="bg-blue-500/20 p-2 rounded-lg border border-blue-400/30 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-400 text-xs">Teléfono</p>
                <p className="text-white text-sm font-medium">{personalInfo.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
              <div className="bg-blue-500/20 p-2 rounded-lg border border-blue-400/30">
                <MapPin className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-gray-400 text-xs">Ubicación</p>
                <p className="text-white text-sm font-medium">Costa Rica</p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-base font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Proyectos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* NUEVO - Botón de Habilidades */}
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400/10 px-8 py-6 text-base font-medium rounded-xl group"
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code2 className="mr-2 w-5 h-5" />
              Habilidades
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400/10 px-8 py-6 text-base font-medium rounded-xl group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contactar
            </Button>

            <div className="relative">
              <Button
                size="lg"
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white hover:text-black hover:border-white px-8 py-6 text-base font-medium rounded-xl group transition-all duration-300"
                onClick={() => setShowCVOptions(!showCVOptions)}
              >
                <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Descargar CV
              </Button>

              {showCVOptions && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 left-0 w-full bg-black/90 backdrop-blur-xl border-2 border-white/30 rounded-xl overflow-hidden shadow-2xl z-50"
                >
                  <button
                    onClick={() => downloadCV('es')}
                    className="w-full px-6 py-3 text-left text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <FileDown className="w-4 h-4 text-blue-400" />
                    <span>Español</span>
                  </button>
                  <button
                    onClick={() => downloadCV('en')}
                    className="w-full px-6 py-3 text-left text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2 border-t border-white/20"
                  >
                    <FileDown className="w-4 h-4 text-blue-400" />
                    <span>English</span>
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>


          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10"
          >
            <span className="text-gray-400 text-sm font-medium">Sígueme:</span>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 hover:border-pink-400/50 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </motion.div>
        </motion.div>
        {/* ☝️ CIERRE del Main Content Card */}

        {/* Stats Section - FUERA de la card principal */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          <div className="glass-card p-6 rounded-2xl text-center hover:border-blue-400/30 transition-colors">
            <h3 className="text-3xl font-bold text-blue-400 mb-1">4+</h3>
            <p className="text-gray-400 text-sm">Proyectos</p>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center hover:border-blue-400/30 transition-colors">
            <h3 className="text-3xl font-bold text-blue-400 mb-1">2+</h3>
            <p className="text-gray-400 text-sm">Años Exp.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center hover:border-blue-400/30 transition-colors">
            <h3 className="text-3xl font-bold text-blue-400 mb-1">10+</h3>
            <p className="text-gray-400 text-sm">Tecnologías</p>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center hover:border-blue-400/30 transition-colors">
            <h3 className="text-3xl font-bold text-blue-400 mb-1">100%</h3>
            <p className="text-gray-400 text-sm">Dedicación</p>
          </div>
        </motion.div>
        {/* ☝️ CIERRE de Stats Section */}

      </motion.div>
      {/* ☝️ CIERRE del contenedor principal motion.div */}
    </section>
  );
};
