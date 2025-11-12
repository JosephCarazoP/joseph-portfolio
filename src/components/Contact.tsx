import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, Instagram } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { personalInfo } from '../data/portfolio';

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Costa Rica',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  // Luego en el componente, actualiza socialLinks:
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.github,
      color: 'hover:text-white hover:bg-white/10',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      color: 'hover:text-blue-400 hover:bg-blue-400/10',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: personalInfo.instagram,
      color: 'hover:text-pink-400 hover:bg-pink-400/10',
    },
  ];


  return (
    <section id="contact" className="py-20 px-4 mb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full mb-6 border border-blue-400/30"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">Hablemos</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ponte en Contacto
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            ¿Tienes un proyecto en mente? Estoy disponible para colaboraciones y nuevas oportunidades
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Contact Card */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-blue-400" />
                Información de Contacto
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {method.href ? (
                        <a
                          href={method.href}
                          className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 group"
                        >
                          <div className={`bg-gradient-to-br ${method.color} p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                              {method.label}
                            </p>
                            <p className="text-white font-semibold">{method.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                          <div className={`bg-gradient-to-br ${method.color} p-3 rounded-lg shadow-lg`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                              {method.label}
                            </p>
                            <p className="text-white font-semibold">{method.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </Card>

            {/* Social Links Card */}
            <Card className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">Redes Sociales</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex-1 bg-white/5 p-4 rounded-xl border border-white/10 ${social.color} transition-all duration-300 flex items-center justify-center group`}
                    >
                      <IconComponent className="w-6 h-6 text-gray-400 group-hover:scale-110 transition-transform" />
                    </motion.a>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card p-8 h-full flex flex-col justify-between relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  ¿Listo para colaborar?
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para formar parte de tus visiones. ¡Trabajemos juntos!
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span>Disponible para proyectos freelance</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    <span>Respuesta en menos de 24 horas</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span>Abierto a nuevas oportunidades</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-base font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group"
                  onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`, '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Email
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
