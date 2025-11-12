import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Ocultar cuando el usuario hace scroll
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 hidden md:flex flex-col items-center gap-2 cursor-pointer"
      onClick={scrollToNext}
    >
      {/* Texto */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-gray-400 text-sm font-medium tracking-wider uppercase"
      >
        Scroll
      </motion.p>

      {/* Línea animada */}
      <motion.div
        className="w-px h-12 bg-gradient-to-b from-transparent via-blue-400 to-transparent relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-400 to-transparent"
          animate={{
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Icono */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full p-2"
      >
        <ChevronDown className="w-4 h-4 text-blue-400" />
      </motion.div>
    </motion.div>
  );
};
