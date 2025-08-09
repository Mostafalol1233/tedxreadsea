import { motion } from "framer-motion";
import LoadingOverlay from "@/components/loading-overlay";
import ParticleSystem from "@/components/particle-system";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-inter overflow-x-hidden">
      <LoadingOverlay />

      {/* Background with overlay effects */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url('/attached_assets/image_1754700180189.png')`,
          }}
          data-testid="background-image"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/70 via-transparent to-tedx-red/30 opacity-90" />
        <div className="absolute inset-0 bg-geometric" />
      </div>

      <ParticleSystem />

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 md:p-8"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-xl md:text-2xl font-bold" data-testid="nav-title">
                <span className="text-tedx-red">TEDx</span> Youth STEM Red Sea
              </h1>
            </motion.div>

            {/* Social Icons in Nav */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden md:flex space-x-4"
            >
              <motion.a
                href="https://www.instagram.com/tedx_youth_stem_red_sea?igsh=MXZua3VwNDZrb3Fkbg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tedx-red transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-testid="nav-instagram"
              >
                <i className="fab fa-instagram text-xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/tedxyouthredseastem/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tedx-red transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                data-testid="nav-linkedin"
              >
                <i className="fab fa-linkedin text-xl" />
              </motion.a>
            </motion.div>
          </div>
        </motion.nav>

        <HeroSection />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="p-6 md:p-8"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              className="glass-card rounded-2xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              data-testid="footer-card"
            >
              <p className="text-gray-400 mb-2">
                © 2024 TEDx Youth STEM Red Sea. Independently organized TED event.
              </p>
              <p className="text-sm text-gray-500">
                Designed for inspiring the next generation of innovators
              </p>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
