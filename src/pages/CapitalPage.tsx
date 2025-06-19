import Header from '../components/Header';  
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import ImageCard from '../components/ImageCard';
import ProductCard from '../components/ProductCard';
import PreLaunch from '../components/PreLaunch';
import { products } from '../data/product';

export interface Product {
  id: string;
  icon: string;
  name: string;
  title: string;
  subtitle: string;
  position: string;
  logo: string;
}

export default function CapitalPage() {
  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="relative px-2">
        {/* Hero Section */}
        <div className="mt-12">
          <HeroSection/>
        </div>

        {/* Timeline - Se muestra una sola vez */}
        <div className="relative w-full mt-12">
          {/* Timeline para móvil */}
          <img 
            src="/img/roadmap_mob.png" 
            alt="Roadmap" 
            className="w-full h-auto md:hidden" 
          />
          
          {/* Timeline para desktop */}
          <img 
            src="/img/roadmap_des.png" 
            alt="Roadmap" 
            className="w-full h-auto hidden md:block" 
          />
          
          {/* Contenedor para las tarjetas */}
          <div className="absolute inset-0">
            {/* Aquí irían las tarjetas posicionadas manualmente */}
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
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