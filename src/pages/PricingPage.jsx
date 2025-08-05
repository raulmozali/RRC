import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const tiers = [
  {
    name: 'Esencial',
    price: '49',
    description: 'Perfecto para startups y pequeños negocios que empiezan.',
    features: [
      'Dispersión de hasta 100 pagos/mes',
      '1 Cuenta Balance Cero',
      'Soporte por correo electrónico',
      'Dashboard analítico básico',
    ],
    cta: 'Empezar ahora',
    popular: false,
  },
  {
    name: 'Profesional',
    price: '99',
    description: 'Ideal para empresas en crecimiento que necesitan más potencia.',
    features: [
      'Dispersión de hasta 1,000 pagos/mes',
      '10 Cuentas Balance Cero',
      'Tesorería Global (multi-divisa)',
      'Sistema de Gastos de Viaje',
      'Soporte prioritario 24/7',
    ],
    cta: 'Seleccionar Plan',
    popular: true,
  },
  {
    name: 'Empresarial',
    price: 'Custom',
    description: 'Soluciones a medida para grandes corporaciones.',
    features: [
      'Pagos masivos ilimitados',
      'Cuentas Balance Cero ilimitadas',
      'Integración con ERP a medida',
      'Auditorías y reportes avanzados',
      'Manager de cuenta dedicado',
    ],
    cta: 'Contactar Ventas',
    popular: false,
  },
];

const PricingPage = () => {
  const { toast } = useToast();

  const handleCtaClick = (ctaText) => {
    toast({
      title: "🚧 Funcionalidad en desarrollo",
      description: `La opción de "${ctaText}" no está implementada aún. ¡Puedes solicitarla en tu próximo prompt! 🚀`,
      duration: 3000,
    });
  };

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
            Planes y Precios
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Encuentra el plan perfecto que se ajusta a la escala y necesidades de tu negocio. Sin costos ocultos, solo crecimiento.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col bg-black/20 backdrop-blur-lg border rounded-2xl p-8 ${
                tier.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/10' : 'border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase">
                    Más Popular
                  </span>
                </div>
              )}
              <h2 className="text-2xl font-bold text-white mb-2">{tier.name}</h2>
              <p className="text-gray-400 mb-6 flex-grow">{tier.description}</p>
              
              <div className="mb-8">
                {tier.price.toLowerCase() === 'custom' ? (
                  <p className="text-4xl font-extrabold text-white">A medida</p>
                ) : (
                  <p className="text-5xl font-extrabold text-white">
                    ${tier.price}
                    <span className="text-lg font-medium text-gray-400">/mes</span>
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleCtaClick(tier.cta)}
                size="lg"
                className={`w-full mt-auto font-semibold text-lg py-3 rounded-lg ${
                  tier.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PricingPage;