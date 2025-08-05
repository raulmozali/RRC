import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Link, NavLink } from 'react-router-dom';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import AuthModal from '@/components/auth/AuthModal';

const Header = () => {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authAction, setAuthAction] = useState('login');

  const handleAuthClick = (action) => {
    setAuthAction(action);
    setAuthModalOpen(true);
  };

  const navItems = [
    { name: "Precios", path: "/precios" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Contacto", path: "/contacto" },
  ];

  const solutions = [
    { name: "Herramientas Fintech", path: "/soluciones#herramientas" },
    { name: "Servicios de Auditoría", path: "/soluciones#auditoria" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">RRC Gestión Inteligente</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-2">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 font-medium p-2 rounded-md focus:outline-none focus:bg-white/10">
                    Soluciones
                    <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    sideOffset={15}
                    className="z-50 min-w-[240px] bg-black/50 backdrop-blur-2xl border border-white/10 rounded-lg p-2 shadow-lg animate-in fade-in-0 zoom-in-95"
                  >
                    {solutions.map((item) => (
                      <DropdownMenu.Item key={item.name} asChild>
                         <Link to={item.path} className="block p-2 rounded-md text-sm text-gray-300 hover:bg-white/10 hover:text-white focus:outline-none focus:bg-white/10 focus:text-white transition-colors">
                            {item.name}
                          </Link>
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({isActive}) => `text-gray-300 hover:text-white transition-colors duration-200 font-medium p-2 rounded-md ${isActive ? 'bg-white/10 text-white' : ''}`}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" onClick={() => handleAuthClick('login')} className="text-white hover:bg-white/10">
                Iniciar Sesión
              </Button>
              <Button onClick={() => handleAuthClick('register')} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6">
                Registrarse
              </Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)} className="text-white hover:bg-white/10">
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden"
            onClick={closeMobileMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-slate-900 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold">Menú</span>
                <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-4">
                 <p className="text-lg font-medium text-gray-200">Soluciones</p>
                 {solutions.map(item => (
                    <Link key={item.name} to={item.path} onClick={closeMobileMenu} className="flex items-center pl-4 text-gray-400 hover:text-white">
                      {item.name}
                    </Link>
                ))}

                {navItems.map((item) => (
                  <Link key={item.name} to={item.path} onClick={closeMobileMenu} className="text-lg font-medium text-gray-200 hover:text-white">
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 border-t border-white/10 pt-6 flex flex-col space-y-4">
                 <Button variant="outline" onClick={() => {handleAuthClick('login'); closeMobileMenu();}} className="w-full border-white/30 text-white hover:bg-white/10">
                  Iniciar Sesión
                </Button>
                <Button onClick={() => {handleAuthClick('register'); closeMobileMenu();}} className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                  Registrarse
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal 
        isOpen={authModalOpen} 
        setIsOpen={setAuthModalOpen} 
        initialAction={authAction}
      />
    </>
  );
};

export default Header;