import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const handleScroll = () => {
    document.getElementById('experience')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      style={{ opacity }}
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer"
      onClick={handleScroll}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
          Scroll
        </span>
        
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2 hover:border-blue-400 transition-colors">
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-blue-400 rounded-full"
          />
        </div>

        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </div>
    </motion.div>
  );
};
