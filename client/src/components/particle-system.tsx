import { motion } from "framer-motion";

export default function ParticleSystem() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none" data-testid="particle-system">
      {/* Simple Rabbit SVG */}
      <motion.div
        className="absolute bottom-20 right-20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.3 }}
        transition={{ 
          duration: 2,
          delay: 3,
          ease: "easeOut"
        }}
        data-testid="rabbit-element"
      >
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Rabbit silhouette */}
          <path
            d="M60 90 C45 90 35 80 35 65 C35 55 40 45 50 40 C45 35 45 25 55 20 C60 15 65 20 65 25 C70 15 75 20 75 25 C80 30 80 35 75 40 C85 45 85 55 85 65 C85 80 75 90 60 90 Z"
            fill="rgba(230, 43, 30, 0.2)"
            stroke="rgba(230, 43, 30, 0.4)"
            strokeWidth="1"
          />
          {/* Ears */}
          <ellipse cx="52" cy="25" rx="3" ry="12" fill="rgba(230, 43, 30, 0.15)" />
          <ellipse cx="68" cy="25" rx="3" ry="12" fill="rgba(230, 43, 30, 0.15)" />
          {/* Eyes */}
          <circle cx="55" cy="50" r="2" fill="rgba(230, 43, 30, 0.6)" />
          <circle cx="65" cy="50" r="2" fill="rgba(230, 43, 30, 0.6)" />
          {/* Nose */}
          <circle cx="60" cy="60" r="1.5" fill="rgba(230, 43, 30, 0.5)" />
        </motion.svg>
      </motion.div>

      {/* Few subtle particles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-tedx-red rounded-full opacity-20"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        data-testid="particle-1"
      />
      
      <motion.div
        className="absolute top-3/4 right-1/3 w-1 h-1 bg-tedx-red rounded-full opacity-20"
        animate={{
          y: [-15, 15, -15],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        data-testid="particle-2"
      />
      
      <motion.div
        className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-tedx-red rounded-full opacity-20"
        animate={{
          y: [-12, 12, -12],
          opacity: [0.1, 0.28, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        data-testid="particle-3"
      />
    </div>
  );
}
