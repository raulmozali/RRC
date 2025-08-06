import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye } from 'lucide-react';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Sobre <span className="gradient-text">RRC Gestión Inteligente</span>
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Ofrecemos transformación digital de la gestión financiera, comprometidos con la seguridad, eficiencia e innovación.
          </motion.p>
        </div>

        <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Nuestra Historia</h2>
              <p className="text-gray-300 leading-relaxed">
                RRC Gestión Inteligente nació de una simple observación: las empresas, sin importar su tamaño, luchaban con herramientas financieras fragmentadas y complejas. Fundada en 2025 por un equipo de veteranos en finanzas y tecnología, nos propusimos crear una plataforma unificada que no solo resolviera estos desafíos, sino que también transformara la gestión financiera en una ventaja competitiva. Nuestra pasión es simplificar lo complejo y dar a cada negocio el control total sobre su futuro financiero.
              </p>
            </motion.div>
            <motion.div 
              className="w-full h-64 md:h-80 rounded-lg overflow-hidden"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img  className="w-full h-full object-cover" alt="Equipo de RRC trabajando en la oficina" src="https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd" />
            </motion.div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center text-purple-400 mb-4">
              <Target className="w-8 h-8 mr-4" />
              <h3 className="text-2xl font-bold text-white">Nuestra Misión</h3>
            </div>
            <p className="text-gray-300 text-justify">
              Empoderar a las empresas con herramientas financieras inteligentes que simplifiquen la complejidad, impulsen la eficiencia y garanticen un crecimiento seguro y sostenible a través de la innovación tecnológica y un soporte excepcional.
            </p>
          </motion.div>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center text-pink-400 mb-4">
              <Eye className="w-8 h-8 mr-4" />
              <h3 className="text-2xl font-bold text-white">Nuestra Visión</h3>
            </div>
            <p className="text-gray-300 text-justify">
             Ser la plataforma de gestión financiera líder y de mayor confianza a nivel global, reconocida por nuestra innovación constante, seguridad de grado bancario y un compromiso inquebrantable con el éxito y la tranquilidad de nuestros clientes.
            </p>
          </motion.div>
        </div>
        <div className="text-center">
  <h2 className="text-3xl font-bold text-white mb-4">Conoce al Equipo</h2>
  <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
    Las mentes brillantes detrás de nuestra innovación.
  </p>

  <div className="flex justify-center gap-8 flex-wrap">
    {[
      {
        name: "Jessica Correa González",
        title: "CEO",
        image: "/src/imagenes conoce al equipo/JLCG.jpeg"
      },
      {
        name: "Raúl Rojas Resendiz",
        title: "COO",
        image: "/src/imagenes conoce al equipo/Foto_RRR.jpg"
      }
    ].map((member, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: i * 0.15 }}
        className="text-center"
      >
        <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 p-1">
          <img
            className="w-full h-full rounded-full object-cover"
            alt={`Miembro del equipo ${member.name}`}
            src={member.image}
          />
        </div>
        <h4 className="text-xl font-semibold text-white">{member.name}</h4>
        <p className="text-purple-300">{member.title}</p>
      </motion.div>
    ))}
  </div>
</div>
      </div>
    </motion.div>
  );
};

export default AboutPage;