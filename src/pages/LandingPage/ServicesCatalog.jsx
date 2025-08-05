import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  ShieldCheck, 
  UserCheck, 
  Receipt, 
  Activity, 
  ClipboardCheck, 
  ServerCog, 
  Fingerprint, 
  Leaf, 
  HeartHandshake 
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Scale,
    title: 'Auditoría Financiera',
    description: 'Examinamos estados financieros para verificar su razonabilidad y cumplimiento con normativas como IFRS o NIF.',
  },
  {
    icon: ShieldCheck,
    title: 'Auditoría Interna',
    description: 'Evaluación continua de procesos internos, controles y riesgos para mejorar la eficiencia operativa.',
  },
  {
    icon: UserCheck,
    title: 'Auditoría Externa',
    description: 'Realizada por un tercero independiente para validar la información financiera y operativa de la empresa.',
  },
  {
    icon: Receipt,
    title: 'Auditoría Fiscal o Tributaria',
    description: 'Verificamos el cumplimiento de obligaciones fiscales, revisando declaraciones, pagos y registros contables.',
  },
  {
    icon: Activity,
    title: 'Auditoría Operativa',
    description: 'Analizamos la eficiencia y eficacia de las operaciones para identificar oportunidades de mejora.',
  },
  {
    icon: ClipboardCheck,
    title: 'Auditoría de Cumplimiento',
    description: 'Evaluamos si la organización cumple con políticas internas, normativas legales y requisitos contractuales.',
  },
  {
    icon: ServerCog,
    title: 'Auditoría de TI',
    description: 'Examinamos sistemas informáticos, ciberseguridad e infraestructura para asegurar la integridad de la información.',
  },
  {
    icon: Fingerprint,
    title: 'Auditoría Forense',
    description: 'Investigación especializada para detectar fraudes, actos ilícitos o irregularidades financieras.',
  },
  {
    icon: Leaf,
    title: 'Auditoría Ambiental',
    description: 'Evaluamos el cumplimiento de normas ambientales, impacto ecológico y gestión de residuos.',
  },
  {
    icon: HeartHandshake,
    title: 'Auditoría Social',
    description: 'Analizamos el impacto de la empresa en sus grupos de interés y el cumplimiento de estándares éticos.',
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

const ServicesCatalog = () => {
  const { toast } = useToast();

  const handleExpertClick = () => {
    toast({
      title: "🚧 Funcionalidad en desarrollo",
      description: "La opción de contacto no está implementada aún. ¡Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nuestro Catálogo de <span className="gradient-text">Servicios de Auditoría</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Soluciones especializadas para garantizar la transparencia, eficiencia y cumplimiento en cada área de tu organización.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: index * 0.05 }}
                className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6 flex flex-col items-start hover-lift-deeper transform-gpu transition-all duration-300 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/10 h-full"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-lg mb-4">
                  <Icon className="w-7 h-7 text-purple-300" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm flex-grow">{service.description}</p>
              </motion.div>
            );
          })}
           <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: services.length * 0.05 }}
              className="md:col-span-2 lg:col-span-1 xl:col-span-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 flex flex-col justify-center items-center text-center hover-lift-deeper transform-gpu transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">¿Necesitas una solución a medida?</h3>
              <p className="text-purple-200 mb-4">Contáctanos para diseñar un plan de auditoría que se ajuste a tus necesidades específicas.</p>
              <Button onClick={handleExpertClick} className="bg-white/90 text-purple-700 font-semibold rounded-full px-6 py-2 hover:bg-white transition-colors">
                Hablar con un experto
              </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCatalog;