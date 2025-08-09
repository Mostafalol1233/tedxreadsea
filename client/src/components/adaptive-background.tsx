import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeBasedTheme {
  background: string;
  particles: string;
  mood: string;
}

export default function AdaptiveBackground() {
  const [currentTheme, setCurrentTheme] = useState<TimeBasedTheme>({
    background: "from-gray-900 via-black to-gray-800",
    particles: "rgba(230, 43, 30, 0.3)",
    mood: "night"
  });

  useEffect(() => {
    const updateTheme = () => {
      const hour = new Date().getHours();
      
      if (hour >= 6 && hour < 12) {
        // Morning (6 AM - 12 PM)
        setCurrentTheme({
          background: "from-orange-200 via-red-300 to-pink-400",
          particles: "rgba(255, 140, 0, 0.4)",
          mood: "morning"
        });
      } else if (hour >= 12 && hour < 18) {
        // Afternoon (12 PM - 6 PM)
        setCurrentTheme({
          background: "from-blue-300 via-indigo-400 to-purple-500",
          particles: "rgba(59, 130, 246, 0.4)",
          mood: "afternoon"
        });
      } else if (hour >= 18 && hour < 22) {
        // Evening (6 PM - 10 PM)
        setCurrentTheme({
          background: "from-purple-600 via-red-500 to-orange-600",
          particles: "rgba(230, 43, 30, 0.5)",
          mood: "evening"
        });
      } else {
        // Night (10 PM - 6 AM)
        setCurrentTheme({
          background: "from-gray-900 via-black to-red-900",
          particles: "rgba(230, 43, 30, 0.3)",
          mood: "night"
        });
      }
    };

    updateTheme();
    const interval = setInterval(updateTheme, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-0"
      data-testid="adaptive-background"
      animate={{
        background: `linear-gradient(135deg, ${currentTheme.background.split(' ').join(', ')})`
      }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {/* Magic Hat Background Design - Exact recreation with subtle lighting */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <motion.div
          className="relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <svg width="400" height="500" viewBox="0 0 400 500" fill="none">
            {/* Shadow base */}
            <ellipse cx="200" cy="450" rx="150" ry="25" fill="rgba(0, 0, 0, 0.2)" />
            
            {/* Hat base/brim */}
            <ellipse cx="200" cy="420" rx="170" ry="25" fill="url(#hatBrimGradient)" />
            <ellipse cx="200" cy="415" rx="170" ry="25" fill="url(#hatBrimTopGradient)" />
            
            {/* Hat body/cylinder */}
            <rect x="80" y="280" width="240" height="140" rx="10" fill="url(#hatBodyGradient)" />
            
            {/* Hat body outline */}
            <rect x="80" y="280" width="240" height="140" rx="10" fill="none" stroke="rgba(139, 69, 19, 0.3)" strokeWidth="1" />
            
            {/* Magic text "Maginity" */}
            <text x="200" y="360" textAnchor="middle" fill="url(#magicTextGradient)" fontSize="28" fontFamily="serif" fontStyle="italic" fontWeight="bold">
              Maginity
            </text>
            
            {/* Central subtle star/light */}
            <motion.g
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Main star rays - much more subtle */}
              <path d="M200 140 L205 180 L200 220 L195 180 Z" fill="url(#starRayGradientSubtle)" />
              <path d="M160 200 L200 195 L240 200 L200 205 Z" fill="url(#starRayGradientSubtle)" />
              <path d="M175 160 L200 185 L225 160 L200 175 Z" fill="url(#starRayGradientSubtle)" />
              <path d="M175 240 L200 215 L225 240 L200 225 Z" fill="url(#starRayGradientSubtle)" />
              
              {/* Central very subtle core */}
              <circle cx="200" cy="200" r="4" fill="rgba(255, 255, 255, 0.4)" />
              <circle cx="200" cy="200" r="8" fill="rgba(255, 215, 0, 0.3)" />
            </motion.g>
            
            {/* Rabbit ears emerging from hat with gentle animation */}
            <motion.g
              animate={{
                y: [-8, 2, -8],
                opacity: [0.7, 0.9, 0.7]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Left ear */}
              <ellipse cx="175" cy="240" rx="12" ry="50" fill="rgba(255, 248, 220, 0.8)" stroke="rgba(230, 43, 30, 0.2)" strokeWidth="1" />
              <ellipse cx="175" cy="245" rx="6" ry="45" fill="rgba(255, 192, 203, 0.4)" />
              
              {/* Right ear */}
              <ellipse cx="225" cy="240" rx="12" ry="50" fill="rgba(255, 248, 220, 0.8)" stroke="rgba(230, 43, 30, 0.2)" strokeWidth="1" />
              <ellipse cx="225" cy="245" rx="6" ry="45" fill="rgba(255, 192, 203, 0.4)" />
            </motion.g>
            
            {/* Infinity symbol at bottom with subtle glow */}
            <motion.path
              d="M120 470 Q150 450 200 470 Q250 490 280 470 Q250 450 200 470 Q150 490 120 470"
              fill="none"
              stroke="url(#infinityGradientSubtle)"
              strokeWidth="4"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Subtle sparkles around */}
            <motion.circle
              cx="120" cy="150" r="2"
              fill="rgba(255, 215, 0, 0.4)"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }}
            />
            <motion.circle
              cx="300" cy="180" r="1.5"
              fill="rgba(255, 215, 0, 0.4)"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.circle
              cx="340" cy="300" r="2"
              fill="rgba(255, 215, 0, 0.4)"
              animate={{
                opacity: [0.2, 0.6, 0.2],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            <defs>
              <radialGradient id="hatBrimGradient" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="rgba(139, 69, 19, 0.6)" />
                <stop offset="100%" stopColor="rgba(101, 67, 33, 0.8)" />
              </radialGradient>
              
              <radialGradient id="hatBrimTopGradient" cx="50%" cy="20%" r="60%">
                <stop offset="0%" stopColor="rgba(160, 82, 45, 0.5)" />
                <stop offset="100%" stopColor="rgba(139, 69, 19, 0.7)" />
              </radialGradient>
              
              <linearGradient id="hatBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(20, 20, 20, 0.9)" />
                <stop offset="30%" stopColor="rgba(50, 25, 25, 0.8)" />
                <stop offset="70%" stopColor="rgba(30, 30, 30, 0.9)" />
                <stop offset="100%" stopColor="rgba(10, 10, 10, 0.95)" />
              </linearGradient>
              
              <linearGradient id="magicTextGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(230, 43, 30, 0.6)" />
                <stop offset="50%" stopColor="rgba(255, 215, 0, 0.7)" />
                <stop offset="100%" stopColor="rgba(230, 43, 30, 0.6)" />
              </linearGradient>
              
              <radialGradient id="starRayGradientSubtle" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                <stop offset="30%" stopColor="rgba(255, 215, 0, 0.2)" />
                <stop offset="100%" stopColor="rgba(255, 140, 0, 0.1)" />
              </radialGradient>
              
              <linearGradient id="infinityGradientSubtle" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 215, 0, 0.4)" />
                <stop offset="50%" stopColor="rgba(255, 140, 0, 0.6)" />
                <stop offset="100%" stopColor="rgba(255, 215, 0, 0.4)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: currentTheme.particles,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            data-testid={`floating-sparkle-${i}`}
          />
        ))}
      </div>
    </motion.div>
  );
}