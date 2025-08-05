import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Mail, Lock, User, Loader2, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs.jsx";

const AuthModal = ({ isOpen, setIsOpen, initialAction = 'login' }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleAuthAction = (action, provider = '') => {
    setIsSubmitting(true);
    let message = '';
    if (provider) {
        message = `Iniciando sesión con ${provider}...`;
    } else {
        message = action === 'login' ? 'Iniciando sesión...' : 'Creando cuenta...';
    }

    toast({
        title: "🚧 Funcionalidad en desarrollo",
        description: "El sistema de autenticación no está implementado aún. ¡Puedes solicitarlo en tu próximo prompt! 🚀",
        duration: 4000
    });

    setTimeout(() => {
        setIsSubmitting(false);
        setIsOpen(false);
    }, 1500);
  };
  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md p-8 shadow-2xl shadow-purple-500/10"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>

          <Tabs defaultValue={initialAction} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-slate-800/50">
                <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                <TabsTrigger value="register">Registrarse</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-6">
                <h2 className="text-2xl font-bold text-center text-white mb-2">Bienvenido de nuevo</h2>
                <p className="text-center text-gray-400 mb-6">Ingresa tus credenciales para acceder.</p>
                <form onSubmit={(e) => { e.preventDefault(); handleAuthAction('login'); }} className="space-y-4">
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="email" placeholder="Correo electrónico" required className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none transition" />
                    </div>
                     <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type={showPassword ? 'text' : 'password'} placeholder="Contraseña" required className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-10 pr-10 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none transition" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg" disabled={isSubmitting}>
                         {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Iniciar Sesión'}
                    </Button>
                </form>
            </TabsContent>

            <TabsContent value="register" className="mt-6">
                <h2 className="text-2xl font-bold text-center text-white mb-2">Crea tu cuenta</h2>
                <p className="text-center text-gray-400 mb-6">Es rápido, fácil y gratis.</p>
                <form onSubmit={(e) => { e.preventDefault(); handleAuthAction('register'); }} className="space-y-4">
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" placeholder="Nombre completo" required className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none transition" />
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="email" placeholder="Correo electrónico" required className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none transition" />
                    </div>
                     <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type={showPassword ? 'text' : 'password'} placeholder="Contraseña" required className="w-full bg-white/5 border border-white/20 rounded-lg py-3 pl-10 pr-10 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none transition" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg" disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Crear Cuenta'}
                    </Button>
                </form>
            </TabsContent>

            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm">O continúa con</span>
                <div className="flex-grow border-t border-white/10"></div>
            </div>

            <div className="flex gap-4">
                <Button variant="outline" className="w-full bg-transparent border-white/20 hover:bg-white/10" onClick={() => handleAuthAction('login', 'Google')} disabled={isSubmitting}>
                    {/* Placeholder for Google Icon */}
                    <svg className="w-5 h-5 mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.3 1.84-4.24 1.84A6.13 6.13 0 0 1 6 12a6.13 6.13 0 0 1 6-6c1.66 0 2.89.63 3.61 1.33l2.67-2.67C16.38 2.72 14.41 2 12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10c2.76 0 5.12-1.02 6.84-2.73 1.79-1.73 2.53-4.11 2.53-6.62 0-.63-.05-1.22-.16-1.73z" fill="currentColor"/></svg>
                    Google
                </Button>
                <Button variant="outline" className="w-full bg-transparent border-white/20 hover:bg-white/10" onClick={() => handleAuthAction('login', 'GitHub')} disabled={isSubmitting}>
                     {/* Placeholder for GitHub Icon */}
                    <svg className="w-5 h-5 mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>
                    GitHub
                </Button>
            </div>
          </Tabs>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModal;