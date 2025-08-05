import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/layout/Layout';
import LandingPage from '@/pages/LandingPage/LandingPage';
import SolutionsPage from '@/pages/SolutionsPage';
import PricingPage from '@/pages/PricingPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <>
      <Helmet>
        <title>RRC Gestión Inteligente - Soluciones Financieras y de Auditoría</title>
        <meta name="description" content="Ofrecemos servicios de dispersión masiva de pagos, cuentas balance cero, tesorería global, gestión de gastos y un completo catálogo de auditorías especializadas." />
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="soluciones" element={<SolutionsPage />} />
          <Route path="precios" element={<PricingPage />} />
          <Route path="nosotros" element={<AboutPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;