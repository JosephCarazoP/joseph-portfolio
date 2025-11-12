import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Palette, Wrench, Users, Zap } from 'lucide-react';
import { skills } from '../data/portfolio';

export const Skills = () => {
  const categories = [
    { 
      title: 'Lenguajes', 
      items: skills.languages,
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Frameworks', 
      items: skills.frameworks,
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Bases de Datos', 
      items: skills.databases,
      icon: Database,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'Herramientas', 
      items: skills.tools,
      icon: Wrench,
      color: 'from-orange-500 to-red-500'
    },
    { 
      title: 'Diseño', 
      items: skills.design,
      icon: Palette,
      color: 'from-pink-500 to-rose-500'
    },
    { 
      title: 'Metodologías', 
      items: skills.methodologies,
      icon: Users,
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dominio de tecnologías modernas y herramientas esenciales para el desarrollo
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-card p-6 h-full group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                  {/* Gradient Background Decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5 relative">
                    <div className={`bg-gradient-to-br ${category.color} p-3 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4"></div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 relative">
                    {category.items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-white/5 text-gray-300 border border-white/10 hover:border-blue-400/50 hover:text-blue-400 hover:scale-105 transition-all duration-200 cursor-default"
                        >
                          {item}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="glass-card p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-blue-400 mb-1">10+</h3>
            <p className="text-gray-400 text-sm">Tecnologías</p>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-blue-400 mb-1">5+</h3>
            <p className="text-gray-400 text-sm">Frameworks</p>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-blue-400 mb-1">8+</h3>
            <p className="text-gray-400 text-sm">Herramientas</p>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-blue-400 mb-1">2+</h3>
            <p className="text-gray-400 text-sm">Años Aprendiendo</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
