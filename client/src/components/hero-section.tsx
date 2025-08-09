import { motion } from "framer-motion";
import SocialButton from "./social-button";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex-1 flex items-center justify-center px-6 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div 
          className="text-center lg:text-left"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="hero-text">Ideas Worth</span>
            <br />
            <span className="text-tedx-red">Spreading</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            variants={itemVariants}
          >
            Empowering young minds through STEM education and inspiring talks.
            Join our community of innovators and change-makers.
          </motion.p>

          {/* Mission Statement Card */}
          <motion.div
            className="glass-card rounded-2xl p-6 mb-8"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
            data-testid="mission-card"
          >
            <h3 className="text-xl font-bold text-tedx-red mb-3">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To inspire and educate youth in STEM fields through powerful talks,
              innovative thinking, and community collaboration in the Red Sea region.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Content - Floating TEDx Logo and Social Links */}
        <motion.div 
          className="flex flex-col items-center space-y-8"
          variants={itemVariants}
        >
          {/* TEDx Logo (floating element) */}
          <motion.div
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            data-testid="floating-logo"
          >
            <motion.div
              className="glass-card rounded-3xl p-8"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(230, 43, 30, 0.3)",
                  "0 0 40px rgba(230, 43, 30, 0.6)",
                  "0 0 20px rgba(230, 43, 30, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex items-center justify-center bg-black/20">
                <img 
                  src="/attached_assets/image_1754700248319.png"
                  alt="TEDx Red Sea STEM School Youth Logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Social Media Grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            <SocialButton
              href="https://www.instagram.com/tedx_youth_stem_red_sea?igsh=MXZua3VwNDZrb3Fkbg=="
              icon={<i className="fab fa-instagram" />}
              title="Instagram"
              description="Follow our journey"
              colorClass="text-pink-400 group-hover:text-pink-300"
              delay={0.4}
              testId="social-instagram"
            />

            <SocialButton
              href="https://www.facebook.com/share/1ADBVPMWpQ/"
              icon={<i className="fab fa-facebook" />}
              title="Facebook"
              description="Join community"
              colorClass="text-blue-400 group-hover:text-blue-300"
              delay={0.5}
              testId="social-facebook"
            />

            <SocialButton
              href="https://whatsapp.com/channel/0029VbBAPhO7IUYSt7Gdn91Z"
              icon={<i className="fab fa-whatsapp" />}
              title="WhatsApp"
              description="Get updates"
              colorClass="text-green-400 group-hover:text-green-300"
              delay={0.6}
              testId="social-whatsapp"
            />

            <SocialButton
              href="https://www.linkedin.com/company/tedxyouthredseastem/"
              icon={<i className="fab fa-linkedin" />}
              title="LinkedIn"
              description="Professional network"
              colorClass="text-blue-500 group-hover:text-blue-400"
              delay={0.7}
              testId="social-linkedin"
            />
          </div>

          {/* TikTok - Featured */}
          <SocialButton
            href="https://www.tiktok.com/@tedxredseayouth"
            icon={<i className="fab fa-tiktok" />}
            title="TikTok"
            description="Creative content & highlights"
            colorClass="text-white group-hover:text-tedx-red"
            delay={0.8}
            featured={true}
            testId="social-tiktok"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
