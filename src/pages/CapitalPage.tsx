import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import ProductCards from '../components/ProductCard';
import PreLaunch from '../components/PreLaunch';

export default function CapitalPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative">
    

      {/* Main Content */}
      <main className="relative px-2">
        {/* Hero Section */}
        <div className="mt-0 mb-0 md:mb-20">
          <HeroSection/>
        </div>

        {/* Contenedor principal para el timeline */}
        <div className="relative w-full -mt-5 md:mt-0 md:pb-4" style={{ zIndex: 1 }}>
          {/* Contenedor absoluto para tarjetas */}
          <div className="absolute w-full md:relative" style={{ top: '-100px', bottom: '0' }}>
            <ProductCards />
          </div>
          
          {/* Timeline solo para móvil */}
          <div className="relative z-0 md:hidden">
            <img 
              src="/img/roadmap_mob.png" 
              className="w-full h-auto" 
              alt="Timeline móvil"
            />
          </div>
        </div>

       
      </main>

 {/* Stats Section */} 
 <div className="mt-12">
        <StatsSection/>
</div>
<div className="mt-0">  
        <PreLaunch />
</div>
        {/* CTA Section */}

<div className="mt-0 mb-20">  
        <CTASection />
</div>


    </div>
  );
}