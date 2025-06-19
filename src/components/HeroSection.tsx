export default function HeroSection() {
  return (
      <div className="w-full pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32">
          <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      Bienvenido a <span className="text-yellow-400">Capital Infinity</span>
                      <span className="block mt-4 text-xl md:text-2xl font-normal text-gray-300">
                          Donde el conocimiento se transforma en acción
                      </span>
                  </h1>
                  <div className="flex justify-center pt-8">
                      <img 
                          src="img/Logo Infinity Capital.png" 
                          alt="Capital Infinity Logo" 
                          className="w-48 md:w-56 h-auto animate-float"
                      />
                  </div>
              </div>
          </div>
      </div>
  );
}