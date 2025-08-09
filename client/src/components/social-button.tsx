import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SocialButtonProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  colorClass: string;
  delay?: number;
  featured?: boolean;
  testId: string;
}

export default function SocialButton({
  href,
  icon,
  title,
  description,
  colorClass,
  delay = 0,
  featured = false,
  testId,
}: SocialButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-card social-button rounded-xl ${
        featured ? "p-8 w-full max-w-lg" : "p-8"
      } text-center group min-h-[120px] flex flex-col justify-center`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      data-testid={testId}
    >
      <motion.div
        className={`text-${featured ? "5xl" : "4xl"} mb-4 ${colorClass} transition-colors`}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <p className={`font-bold ${featured ? "text-xl" : "text-lg"}`}>{title}</p>
      <p className={`${featured ? "text-base" : "text-sm"} text-gray-400 mt-2`}>{description}</p>
    </motion.a>
  );
}
