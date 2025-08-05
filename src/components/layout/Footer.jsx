import React from 'react';
import { DollarSign, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const XIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="50px"
    height="50px"
    fill="currentColor"
  >
    <path d="M 5.9199219 6 L 20.582031 25.09375 L 6.2304688 44 L 9.4101562 44 L 21.986328 27.40625 L 31.986328 44 L 44 44 L 28.681641 24.320312 L 42.199219 6 L 39.029297 6 L 27.244141 21.808594 L 17.632812 6 L 5.9199219 6 z M 12.189453 8 L 16.328125 8 L 37.810547 42 L 33.671875 42 L 12.189453 8 z" />
  </svg>
);


const Footer = () => {
  const socialLinks = [
    { icon: XIcon, href: '#', name: 'X' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Facebook, href: '#', name: 'Facebook' },
  ];

  const footerSections = [
    {
      title: 'Soluciones',
      links: [
        { name: 'Herramientas Fintech', path: '/soluciones#herramientas' },
        { name: 'Servicios de Auditoría', path: '/soluciones#auditoria' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Precios', path: '/precios' },
        { name: 'Contacto', path: '/contacto' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacidad', path: '#' },
        { name: 'Términos', path: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900/50 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 pr-8">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-white">RRC Gestión Inteligente</p>
            </Link>
            <p className="text-gray-400 mb-6">
              La forma más segura e inteligente de administrar las finanzas de tu negocio.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={`Visita nuestro perfil de ${social.name}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="font-semibold text-white mb-4">{section.title}</p>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} RRC Gestión Inteligente. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;