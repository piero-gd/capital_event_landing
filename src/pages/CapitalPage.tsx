import Header from '../components/Header';  
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import ImageCard from '../components/ImageCard';
import ProductCards from '../components/ProductCard';
import PreLaunch from '../components/PreLaunch';

export default function CapitalPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="relative px-2">
        {/* Hero Section */}
        <div className="mt-12 mb-20">
          <HeroSection/>
        </div>

        {/* Timeline - Se muestra una sola vez */}
        <div className="relative w-full -mt-5 md:-mt-5" style={{ zIndex: 1 }}>
          {/* Contenedor absoluto para tarjetas que pueden salir del contenedor */}
          <div className="absolute w-full" style={{ top: '-100px', bottom: '0' }}>
            <ProductCards />
          </div>
          
          {/* Timeline para móvil */}
          <div className="relative z-0">
            <img 
              src="/img/roadmap_mob.png" 
              className="w-full h-auto md:hidden" 
            />
          </div>
          
          {/* Timeline para desktop */}
          <div className="relative z-0">
            <img 
              src="/img/roadmap_des.png" 
              className="w-full h-auto hidden md:block" 
            />
          </div>
        </div>

        {/* Stats Section */} 
        <StatsSection />

        <ImageCard />

        <PreLaunch />

        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
}