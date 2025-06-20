import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

// Componentes de páginas
const CapitalPage = React.lazy(() => import('./pages/CapitalPage'));
const InfoPage = React.lazy(() => import('./pages/InfoPage'));

// Componente de carga con spinner y gradientes
const Loading = () => (
  <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
    {/* Fondo con gradiente */}
    <div className="absolute inset-0 ">
      <div className="absolute inset-0 bg-[url('/img/Bg Circulo.png')] bg-no-repeat bg-center bg-contain opacity-20"></div>
    </div>
    
    {/* Spinner animado */}
    <div className="relative z-10 flex flex-col items-center">
      <div className="relative w-24 h-24">
        {/* Anillo exterior */}
        <div className="absolute inset-0 border-4 border-yellow-500/30 rounded-full"></div>
        
        {/* Anillo animado */}
        <div className="absolute inset-0 border-4 border-t-yellow-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin">
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
        </div>
        
        {/* Logo o ícono en el centro */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96  flex items-center justify-center">
            <img src="img/Logo Infinity Capital.png" alt="Logo" className="w-18 h-8" />
          </div>
        </div>
      </div>
      
      {/* Texto de carga */}
      <p className="mt-6 text-white font-medium text-lg">Cargando...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen w-full bg-black text-white flex flex-col items-center overflow-hidden">
        {/* Fondo circular - Visible en todos los tamaños */}
        <div className="fixed inset-0 bg-[url('/img/Bg Circulo.png')] bg-no-repeat bg-center bg-contain opacity-20"></div>
        
        {/* Fondos para móvil */}
        <div className="md:hidden">
          <div className="fixed inset-0 bg-gradient-to-b from-black via-black to-transparent">
            <div className="absolute inset-0 bg-[url('/img/bg_sup_m.png')] bg-cover bg-no-repeat bg-top "></div>
            <div className="absolute inset-0 bg-[url('/img/bg_inf_m.png')] bg-cover bg-no-repeat bg-bottom mix-blend-overlay"></div>
          </div>
        </div>
        
        {/* Fondos para desktop */}
        <div className="hidden md:block">
          <div
            className="fixed inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/img/bg_sup_d.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top left",
              backgroundSize: "480px auto" // Ajusta el tamaño aquí
            }}
          ></div>
          <div
            className="fixed inset-0 pointer-events-none"
            style={{
              backgroundImage: "url('/img/bg_inf_d.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom right",
              backgroundSize: "480px auto" // Ajusta el tamaño aquí
            }}
          ></div>
        </div>
      
      {/* Contenido principal */}
      <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<CapitalPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </React.Suspense>
      </div>
      </div>
    </Router>
  );
}

export default App;
