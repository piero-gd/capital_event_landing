import React from 'react';
import './index.css';

const CapitalPage = React.lazy(() => import('./pages/CapitalPage'));

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col items-center overflow-hidden">
      {/* Fondo circular - Visible en todos los tamaños */}
      <div className="fixed inset-0 bg-[url('/img/Bg Circulo.png')] bg-no-repeat bg-center bg-contain opacity-20"></div>
      
      {/* Fondos para móvil */}
      <div className="md:hidden">
        <div className="fixed inset-x-0 top-0 h-1/4 bg-[url('/img/bg_sup_m.png')] bg-cover bg-no-repeat"></div>
        <div className="fixed inset-x-0 bottom-0 h-1/3 bg-[url('/img/bg_inf_m.png')] bg-cover bg-no-repeat bg-bottom"></div>
      </div>
      
      {/* Fondos para desktop */}
      <div className="hidden md:block">
        <div className="fixed inset-0 bg-[url('/img/bg_sup_d.png')] bg-cover bg-no-repeat bg-top"></div>
        <div className="fixed inset-0 bg-[url('/img/bg_inf_d.png')] bg-cover bg-no-repeat bg-bottom"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <CapitalPage />
      </div>
    </div>
  );
};

export default App;
