import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FeaturesSection from '@/pages/LandingPage/FeaturesSection';
import ServicesCatalog from '@/pages/LandingPage/ServicesCatalog';
import { motion } from 'framer-motion';

const SolutionsPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
        window.scrollTo(0, 0);
    }
  }, [location]);


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
        <div id="herramientas">
            <FeaturesSection />
        </div>
        <div id="auditoria">
            <ServicesCatalog />
        </div>
    </motion.div>
  );
};

export default SolutionsPage;