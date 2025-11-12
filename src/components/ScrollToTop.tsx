import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl group hover:border-blue-400/50 transition-all duration-300"
          aria-label="Volver arriba"
        >
          {/* Glow interno */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Icono - Responsive size */}
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 relative z-10 group-hover:translate-y-[-2px] transition-transform" />
          
          {/* Shadow glow externo */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-blue-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
