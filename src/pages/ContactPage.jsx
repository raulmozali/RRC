import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Mail, Phone, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import emailjsConfig from '@/emailjs-config.js';

const ContactPage = () => {
  const { toast } = useToast();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = emailjsConfig;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || SERVICE_ID === 'YOUR_SERVICE_ID') {
        toast({
            title: "🚫 Configuración Requerida",
            description: "Aún no has conectado tu cuenta de EmailJS. Por favor, proporciona tus claves para activar el formulario.",
            variant: "destructive",
            duration: 8000,
        });
        setIsSubmitting(false);
        return;
    }

    const templateParams = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      from_phone: form.current.from_phone.value,
      message: form.current.message.value,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((result) => {
          toast({
            title: "✅ ¡Mensaje Enviado!",
            description: "Gracias por contactarnos. Te responderemos a la brevedad.",
          });
          form.current.reset();
      }, (error) => {
          console.error("EmailJS Error:", error);
          toast({
            title: "❌ Error al enviar",
            description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
            variant: "destructive",
          });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  const contactInfo = [
    { icon: Mail, text: "contacto@rrcgestion.com", type: "Email" },
    { icon: Phone, text: "+52 55 4877 6672", type: "Teléfono" },
    { icon: MapPin, text: "Av. Reforma 222, CDMX, México", type: "Dirección" },
  ];

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
            Ponte en <span className="gradient-text">Contacto</span>
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
          >
            ¿Tienes alguna pregunta o quieres una demostración? Nuestro equipo está listo para ayudarte a llevar tu negocio al siguiente nivel.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Envíanos un mensaje</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="text-sm font-medium text-gray-300">Nombre completo</label>
                <input type="text" id="from_name" name="from_name" required className="mt-2 w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="from_email" className="text-sm font-medium text-gray-300">Correo electrónico</label>
                <input type="email" id="from_email" name="from_email" required className="mt-2 w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" placeholder="tu@email.com" />
              </div>
              <div>
                <label htmlFor="from_phone" className="text-sm font-medium text-gray-300">Teléfono</label>
                <input type="tel" id="from_phone" name="from_phone" required className="mt-2 w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" placeholder="Tu número de teléfono" />
              </div>
               <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Mensaje</label>
                <textarea id="message" name="message" rows="5" required className="mt-2 w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold text-lg py-3 rounded-lg" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Enviar Mensaje"}
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.type} className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{info.type}</p>
                      <p className="text-gray-400">{info.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">Nuestra Ubicación</h4>
              <div className="w-full h-64 rounded-lg bg-gray-800 overflow-hidden border border-white/10">
                 <img  className="w-full h-full object-cover" alt="Mapa de la ubicación de la oficina" src="https://images.unsplash.com/photo-1621273961349-0612be84b10a" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;