import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';
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
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mx-auto"></div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Línea vertical del timeline - solo visible en desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot - solo visible en desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-black z-10 shadow-lg shadow-blue-500/50"></div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <Card className="glass-card glass-hover p-6 md:p-8 relative overflow-hidden group">
                    {/* Decorative Corner Accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
                    
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-500/20 p-4 rounded-xl border border-blue-400/30 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-blue-400 font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent mb-4"></div>

                    {/* Description List */}
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-xl border-2 border-blue-400/0 group-hover:border-blue-400/50 transition-all duration-300 pointer-events-none"></div>
                  </Card>
                </div>

                {/* Spacer para mantener el layout en desktop */}
                <div className="hidden md:block w-[calc(50%-2rem)]"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="glass-card px-8 py-4 rounded-full border-blue-400/50">
            <p className="text-gray-400 text-sm font-medium">
              Más de <span className="text-blue-400 font-bold">2 años</span> de experiencia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
