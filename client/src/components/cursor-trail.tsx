import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export default function CursorTrail() {
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationId: number;
    let pointId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const newPoint: TrailPoint = {
        id: pointId++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };

      setTrailPoints(prev => [...prev, newPoint].slice(-15)); // Keep last 15 points
    };

    const cleanupTrail = () => {
      const now = Date.now();
      setTrailPoints(prev => prev.filter(point => now - point.timestamp < 1000));
      animationId = requestAnimationFrame(cleanupTrail);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animationId = requestAnimationFrame(cleanupTrail);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50" data-testid="cursor-trail">
      <AnimatePresence>
        {trailPoints.map((point, index) => (
          <motion.div
            key={point.id}
            className="absolute"
            style={{
              left: point.x - 8,
              top: point.y - 8,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0], 
              opacity: [0, 0.8, 0],
              rotate: [0, 180, 360]
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            data-testid={`trail-sparkle-${point.id}`}
          >
            {/* Sparkle SVG */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z"
                fill="url(#sparkleGradient)"
                stroke="rgba(255, 215, 0, 0.8)"
                strokeWidth="0.5"
              />
              <defs>
                <radialGradient id="sparkleGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
                  <stop offset="30%" stopColor="rgba(255, 215, 0, 0.8)" />
                  <stop offset="70%" stopColor="rgba(230, 43, 30, 0.7)" />
                  <stop offset="100%" stopColor="rgba(255, 68, 68, 0.5)" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main cursor sparkle */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "linear" }
        }}
        data-testid="main-cursor-sparkle"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="url(#mainSparkleGradient)"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="1"
          />
          <circle cx="12" cy="12" r="2" fill="rgba(255, 255, 255, 0.9)" />
          <defs>
            <radialGradient id="mainSparkleGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
              <stop offset="40%" stopColor="rgba(255, 215, 0, 0.8)" />
              <stop offset="80%" stopColor="rgba(230, 43, 30, 0.7)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Magical glow around cursor */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          width: 40,
          height: 40,
          background: "radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, rgba(230, 43, 30, 0.1) 50%, transparent 100%)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        data-testid="cursor-glow"
      />
    </div>
  );
}