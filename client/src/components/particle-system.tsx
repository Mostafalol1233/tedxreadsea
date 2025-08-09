import { motion } from "framer-motion";

interface Particle {
  id: number;
  size: number;
  top: string;
  left: string;
  delay: number;
}

const particles: Particle[] = [
  { id: 1, size: 2, top: "20%", left: "10%", delay: 0 },
  { id: 2, size: 1, top: "40%", left: "80%", delay: 2 },
  { id: 3, size: 3, top: "60%", left: "20%", delay: 4 },
  { id: 4, size: 1, top: "80%", left: "70%", delay: 6 },
  { id: 5, size: 2, top: "10%", left: "60%", delay: 1 },
  { id: 6, size: 2, top: "70%", left: "40%", delay: 3 },
  { id: 7, size: 1, top: "30%", left: "90%", delay: 5 },
];

export default function ParticleSystem() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none" data-testid="particle-system">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-tedx-red rounded-full opacity-30"
          style={{
            width: `${particle.size * 4}px`,
            height: `${particle.size * 4}px`,
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
          data-testid={`particle-${particle.id}`}
        />
      ))}
    </div>
  );
}
