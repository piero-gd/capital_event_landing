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
    <div className="min-h-screen bg-gradient-to-br from-yellow-600 via-yellow-500 to-black text-white overflow-hidden relative">

      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="relative px-2">
        {/* Hero Section */}
        <div className="mt-12">
          <HeroSection/>
        </div>

        {/* Mapear todos los productos */}
        <div className="space-y-12 mt-12">
          {products.map((product) => (
            <ProductCard 
              key={product.name} 
              product={product} 
            />
          ))}
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
};