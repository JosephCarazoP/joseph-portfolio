import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { personalInfo, projects } from '../data/portfolio';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
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
            <span className="text-sm font-medium">Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora una selección de mis trabajos más recientes y significativos
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="glass-card p-0 h-full flex flex-col overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                {/* Header con Icon y Link */}
                <div className="relative p-6 pb-4 bg-gradient-to-br from-blue-500/10 to-transparent">
                  {/* Decorative Blur */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>

                  <div className="relative flex items-start justify-between">
                    <div className="bg-blue-500/20 p-4 rounded-2xl border border-blue-400/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Code2 className="w-8 h-8 text-blue-400" />
                    </div>

                    {project.url && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-full p-2"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-2 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-blue-500/10 text-blue-400 border border-blue-400/30 hover:bg-blue-500/20 hover:scale-105 transition-all duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent mb-4"></div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Características Clave
                    </p>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-2 text-gray-400 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with CTA */}
                {project.url && (
                  <div className="p-6 pt-0">
                    <Button
                      className="w-full bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white border border-blue-400/30 hover:border-blue-500 group/btn transition-all duration-300"
                      onClick={() => window.open(project.url, '_blank')}
                    >
                      <span>Ver Proyecto</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                )}

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-400/10 rounded-2xl"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card inline-flex items-center gap-3 px-6 py-4 rounded-2xl border-blue-400/50">
            <Code2 className="w-5 h-5 text-blue-400" />
            <p className="text-gray-300">
              ¿Interesado en colaborar?{' '}
              <button
                onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`, '_blank')}
                className="text-blue-400 font-semibold hover:underline ml-1"
              >
                Hablemos
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
