export default function HeroSection() {
  return (
      <div className="w-full pt-4 md:pt-12 pb-8 md:pb-16">
          <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                  <h1 className="text-xl md:text-2xl lg:text-4xl font-normal text-white leading-tight">
                      Bienvenido a Capital Infinity. <br /> Donde el conocimiento se transforma en acción
                  </h1>
                  <div className="flex justify-center pt-6">
                      <img 
                          src="img/Logo Infinity Capital.png" 
                          alt="Capital Infinity Logo" 
                          className="w-48 md:w-56 lg:w-70 h-auto animate-float"
                      />
                  </div>
              </div>
          </div>
      </div>
  );
}