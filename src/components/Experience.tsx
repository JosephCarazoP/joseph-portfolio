import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/portfolio';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mi trayectoria profesional en desarrollo y tecnología
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Línea vertical central - Solo Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent"></div>

          {/* Línea vertical izquierda - Mobile y Tablet */}
          <div className="lg:hidden absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative"
                >
                  {/* Desktop Layout - Zigzag */}
                  <div className={`hidden lg:block ${
                    isLeft ? 'pr-[calc(50%+3rem)]' : 'pl-[calc(50%+3rem)] ml-auto'
                  }`}>
                    {/* Timeline Dot - Desktop */}
                    <div className={`absolute top-8 ${
                      isLeft ? 'right-[calc(50%-1rem)]' : 'left-[calc(50%-1rem)]'
                    } w-8 h-8 bg-blue-500 rounded-full border-4 border-black z-10 flex items-center justify-center shadow-lg shadow-blue-500/50`}>
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>

                    <Card className="glass-card p-6 hover:border-blue-400/50 transition-all duration-300 group">
                      <div className={`${isLeft ? 'text-right' : 'text-left'}`}>
                        {/* Date */}
                        <div className={`flex items-center gap-2 text-gray-400 text-sm mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                          {exp.position}
                        </h3>

                        {/* Company & Location */}
                        <div className={`flex items-center gap-2 mb-4 ${isLeft ? 'justify-end' : 'justify-start'} flex-wrap`}>
                          <Badge className="bg-blue-500/10 text-blue-400 border-blue-400/30">
                            {exp.company}
                          </Badge>
                          <span className="text-gray-400 text-sm">• {exp.location}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Divider */}
                        <div className={`h-px bg-gradient-to-r ${
                          isLeft 
                            ? 'from-transparent via-blue-400/30 to-blue-400/30' 
                            : 'from-blue-400/30 via-blue-400/30 to-transparent'
                        } mb-4`}></div>

                        {/* Achievements */}
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                            Logros Destacados
                          </p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className={`flex ${isLeft ? 'flex-row-reverse justify-end' : 'flex-row justify-start'} items-start gap-2 text-gray-400 text-sm`}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                                <span className="flex-1">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        {exp.technologies && (
                          <div className={`mt-4 flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                            {exp.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="bg-white/5 text-gray-300 border-white/10 text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>

                  {/* Mobile & Tablet Layout - Vertical Left */}
                  <div className="lg:hidden pl-12 md:pl-16">
                    {/* Timeline Dot - Mobile */}
                    <div className="absolute left-2 md:left-6 top-8 w-8 h-8 bg-blue-500 rounded-full border-4 border-black z-10 flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>

                    <Card className="glass-card p-6 hover:border-blue-400/50 transition-all duration-300 group">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                        {exp.position}
                      </h3>

                      {/* Company & Location */}
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <Badge className="bg-blue-500/10 text-blue-400 border-blue-400/30 text-xs">
                          {exp.company}
                        </Badge>
                        <span className="text-gray-400 text-xs md:text-sm">• {exp.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-blue-400/30 via-blue-400/30 to-transparent mb-4"></div>

                      {/* Achievements */}
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                          Logros Destacados
                        </p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * i }}
                              className="flex items-start gap-2 text-gray-400 text-xs md:text-sm"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                              <span className="flex-1">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-white/5 text-gray-300 border-white/10 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
