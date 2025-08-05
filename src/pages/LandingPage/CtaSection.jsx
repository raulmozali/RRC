import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CtaSection = () => {
  const { toast } = useToast();

  const handleStartClick = () => {
    toast({
      title: "🚧 Funcionalidad en desarrollo",
      description: "¡La opción de registro no está implementada aún, pero estará disponible pronto! 🚀",
      duration: 3000,
    });
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              ¿Listo para transformar tus finanzas?
            </h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto mb-8">
              Únete a las empresas que ya confían en RRC Gestión Inteligente para gestionar su dinero de forma segura e inteligente.
            </p>
            <Button
              size="lg"
              onClick={handleStartClick}
              className="bg-white text-purple-600 hover:bg-gray-200 rounded-full px-10 py-6 text-lg font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              Comienza gratis hoy
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;