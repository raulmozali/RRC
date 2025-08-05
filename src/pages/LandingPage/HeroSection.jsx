import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const { toast } = useToast();

  const handleActionClick = (action) => {
    toast({
      title: "🚧 Funcionalidad en desarrollo",
      description: `La acción '${action}' no está implementada aún. ¡Puedes solicitarla en tu próximo prompt! 🚀`,
      duration: 3000,
    });
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-purple-500/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            La forma más <span className="gradient-text">segura e inteligente</span>
            <br />
            de administrar tu negocio
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
            Potencia tus finanzas con nuestras soluciones de tesorería global, pagos masivos y control de gastos. Todo en un solo lugar.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Button
              size="lg"
              onClick={() => handleActionClick('Empezar ahora')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover-lift"
            >
              Empezar ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleActionClick('Solicitar demo')}
              className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold bg-transparent backdrop-blur-sm hover-lift"
            >
              Solicitar demo
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-2xl"></div>
            <img 
              className="relative rounded-xl shadow-2xl border border-white/10"
              alt="Dashboard de la aplicación Fintech mostrando gráficos y métricas financieras"
             src="/src/imagenes conoce al equipo/Imagen LP.jpeg"/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;