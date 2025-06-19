import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative mb-4">

      <img src="img/roadmap_mob.png" alt="" />

      {/* Product Card */}
      <div className={`${
        product.position === 'left' 
          ? 'pr-8 text-right mr-4' 
          : 'pl-8 text-left ml-4'
      }`}>
        <div className=" backdrop-blur-sm p-2 max-w-sm shadow-xl">
          {/* Logo */}
          <div className={`flex ${
            product.position === 'left' ? 'justify-end' : 'justify-start'
          } mb-4`}>
            <div className="w-20 h-20  flex items-center justify-center ">
              {product.logo.endsWith('.png') || product.logo.endsWith('.jpg') || product.logo.endsWith('.svg') ? (
                <img 
                  src={product.logo} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-1"
                />
              ) : (
                <span className="text-black font-bold text-lg">{product.logo}</span>
              )}
            </div>
          </div>
          
          {/* Product Name */}
          <h3 className="font-bold text-white text-lg mb-2 leading-tight">
            {product.name}
          </h3>
          
          {/* Product Description */}
          <div className="space-y-1">
            <p className="text-sm text-gray-200 leading-relaxed">
              {product.title}
            </p>
            {product.subtitle && (
              <p className="text-sm text-gray-200 leading-relaxed">
                {product.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};