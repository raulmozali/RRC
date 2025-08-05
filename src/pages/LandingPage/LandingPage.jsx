import React from 'react';
import HeroSection from '@/pages/LandingPage/HeroSection';
import CtaSection from '@/pages/LandingPage/CtaSection';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <CtaSection />
    </motion.div>
  );
};

export default LandingPage;