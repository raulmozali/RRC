import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 md:py-32">
       <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        <AlertTriangle className="w-24 h-24 text-yellow-400 mb-8" />
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-6">Página no encontrada</h2>
        <p className="text-lg text-gray-400 max-w-md mx-auto mb-10">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover-lift">
          <Link to="/">Volver al inicio</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;