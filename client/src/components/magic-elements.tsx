import { motion } from "framer-motion";

export default function MagicElements() {
  const magicOrbs = [
    { id: 1, size: "w-4 h-4", top: "15%", left: "10%", delay: 0, duration: 8 },
    { id: 2, size: "w-6 h-6", top: "30%", left: "85%", delay: 2, duration: 12 },
    { id: 3, size: "w-3 h-3", top: "60%", left: "20%", delay: 4, duration: 10 },
    { id: 4, size: "w-5 h-5", top: "80%", left: "70%", delay: 6, duration: 9 },
    { id: 5, size: "w-2 h-2", top: "45%", left: "55%", delay: 1, duration: 15 },
    { id: 6, size: "w-4 h-4", top: "25%", left: "45%", delay: 3, duration: 11 },
    { id: 7, size: "w-3 h-3", top: "70%", left: "90%", delay: 5, duration: 7 },
  ];

  const sparkleElements = [
    { id: 1, top: "20%", left: "25%", delay: 0, scale: 1 },
    { id: 2, top: "50%", left: "75%", delay: 2, scale: 0.8 },
    { id: 3, top: "75%", left: "15%", delay: 4, scale: 1.2 },
    { id: 4, top: "35%", left: "65%", delay: 1, scale: 0.9 },
    { id: 5, top: "85%", left: "80%", delay: 3, scale: 1.1 },
  ];

  return (
    <div className="fixed inset-0 z-5 pointer-events-none" data-testid="magic-elements">
      {/* Floating Magic Orbs */}
      {magicOrbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className={`absolute ${orb.size} rounded-full`}
          style={{
            top: orb.top,
            left: orb.left,
            background: "radial-gradient(circle, rgba(230, 43, 30, 0.8) 0%, rgba(255, 68, 68, 0.4) 50%, transparent 100%)",
            boxShadow: "0 0 20px rgba(230, 43, 30, 0.6), 0 0 40px rgba(230, 43, 30, 0.3)"
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
          data-testid={`magic-orb-${orb.id}`}
        />
      ))}

      {/* Sparkle Elements */}
      {sparkleElements.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute"
          style={{
            top: sparkle.top,
            left: sparkle.left,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, sparkle.scale, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: sparkle.delay,
          }}
          data-testid={`sparkle-${sparkle.id}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              fill="url(#sparkleGradient)"
              stroke="rgba(230, 43, 30, 0.8)"
              strokeWidth="1"
            />
            <defs>
              <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="50%" stopColor="rgba(230, 43, 30, 0.8)" />
                <stop offset="100%" stopColor="rgba(255, 68, 68, 0.6)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}

      {/* Energy Waves */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 40%, rgba(230, 43, 30, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 60%, rgba(255, 68, 68, 0.08) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 20%, rgba(230, 43, 30, 0.06) 0%, transparent 70%)",
            "radial-gradient(circle at 30% 40%, rgba(230, 43, 30, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        data-testid="energy-waves"
      />

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-10 right-20 w-8 h-8"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        data-testid="floating-shape-1"
      >
        <svg viewBox="0 0 32 32" fill="none">
          <polygon
            points="16,4 28,16 16,28 4,16"
            fill="none"
            stroke="rgba(230, 43, 30, 0.6)"
            strokeWidth="2"
          />
          <circle cx="16" cy="16" r="6" fill="rgba(230, 43, 30, 0.2)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-16 w-6 h-6"
        animate={{
          rotate: [360, 0],
          y: [-10, 10, -10],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        data-testid="floating-shape-2"
      >
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L22 12L12 22L2 12L12 2Z"
            fill="none"
            stroke="rgba(255, 68, 68, 0.7)"
            strokeWidth="1.5"
          />
          <path
            d="M8 12L16 12M12 8L12 16"
            stroke="rgba(230, 43, 30, 0.8)"
            strokeWidth="1"
          />
        </svg>
      </motion.div>
    </div>
  );
}