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
      {/* Magic Hat Background Design */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <motion.div
          className="relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          {/* Magic Hat SVG */}
          <svg width="300" height="400" viewBox="0 0 300 400" fill="none">
            {/* Hat Base */}
            <ellipse cx="150" cy="350" rx="120" ry="30" fill="rgba(0, 0, 0, 0.6)" />
            
            {/* Hat Body */}
            <path
              d="M60 350 L60 250 Q60 220 90 220 L210 220 Q240 220 240 250 L240 350 Z"
              fill="url(#hatGradient)"
              stroke="rgba(230, 43, 30, 0.3)"
              strokeWidth="2"
            />
            
            {/* Hat Brim */}
            <ellipse cx="150" cy="350" rx="140" ry="20" fill="rgba(139, 69, 19, 0.7)" />
            <ellipse cx="150" cy="345" rx="140" ry="20" fill="rgba(160, 82, 45, 0.8)" />
            
            {/* Magic Text */}
            <text x="150" y="300" textAnchor="middle" fill="url(#textGradient)" fontSize="24" fontFamily="serif" fontStyle="italic">
              Maginity
            </text>
            
            {/* Rabbit Ears emerging */}
            <motion.g
              animate={{
                y: [-10, 0, -10],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ellipse cx="130" cy="180" rx="8" ry="40" fill="rgba(255, 248, 220, 0.8)" stroke="rgba(230, 43, 30, 0.4)" strokeWidth="1" />
              <ellipse cx="170" cy="180" rx="8" ry="40" fill="rgba(255, 248, 220, 0.8)" stroke="rgba(230, 43, 30, 0.4)" strokeWidth="1" />
              <ellipse cx="130" cy="185" rx="4" ry="35" fill="rgba(255, 192, 203, 0.6)" />
              <ellipse cx="170" cy="185" rx="4" ry="35" fill="rgba(255, 192, 203, 0.6)" />
            </motion.g>
            
            {/* Magic Stars */}
            <motion.g
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <path d="M150 120 L155 135 L170 135 L158 145 L163 160 L150 150 L137 160 L142 145 L130 135 L145 135 Z" fill="rgba(255, 215, 0, 0.8)" />
            </motion.g>
            
            {/* Infinity Symbol */}
            <motion.path
              d="M100 380 Q125 360 150 380 Q175 400 200 380 Q175 360 150 380 Q125 400 100 380"
              fill="none"
              stroke="url(#infinityGradient)"
              strokeWidth="3"
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <defs>
              <linearGradient id="hatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 0, 0, 0.8)" />
                <stop offset="50%" stopColor="rgba(139, 69, 19, 0.6)" />
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0.9)" />
              </linearGradient>
              
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(230, 43, 30, 0.8)" />
                <stop offset="50%" stopColor="rgba(255, 215, 0, 0.9)" />
                <stop offset="100%" stopColor="rgba(230, 43, 30, 0.8)" />
              </linearGradient>
              
              <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 215, 0, 0.8)" />
                <stop offset="50%" stopColor="rgba(255, 140, 0, 1)" />
                <stop offset="100%" stopColor="rgba(255, 215, 0, 0.8)" />
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