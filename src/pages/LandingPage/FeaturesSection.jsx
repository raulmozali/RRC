import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRightLeft, Globe, Briefcase } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Dispersión masiva de pagos',
    description: 'Diseña tus propios layouts de pago y realiza miles de transferencias en un solo clic, de forma segura y eficiente.',
    color: 'text-purple-400',
  },
  {
    icon: ArrowRightLeft,
    title: 'Cuentas Balance Cero',
    description: 'Crea y comparte referencias numéricas para identificar pagos y conciliar tus cobros de manera automática y sin errores.',
    color: 'text-pink-400',
  },
  {
    icon: Globe,
    title: 'Tesorería global',
    description: 'Visualiza todas tus cuentas desde un módulo central y toma control total de tus finanzas nacionales e internacionales.',
    color: 'text-cyan-400',
  },
  {
    icon: Briefcase,
    title: 'Sistema de Gastos de Viaje',
    description: 'Gestiona gastos menores, caja chica, anticipos y reembolsos con conciliación directa a tu ERP.',
    color: 'text-green-400',
  },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Herramientas <span className="gradient-text">diseñadas para tu crecimiento</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Nuestra plataforma te ofrece todo lo que necesitas para optimizar tu operación financiera y escalar tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
                transition={{ delay: index * 0.1 }}
                className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover-lift h-full flex flex-col"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-6 mx-auto`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 flex-grow">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;