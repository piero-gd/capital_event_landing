export default function HeroSection() {
  return (
      <div className="p-4 mt-12 w-full">
          <div className="text-center py-20">
              <h1 className="text-4xl font-bold mb-8 text-white">
                  Bienvenido a <span className="text-yellow-400">Capital Infinity</span>.
                  <br className="hidden md:block" />
                  <span className="block mt-2 text-xl font-normal text-gray-300">
                    Donde el conocimiento se transforma en acción
                  </span>
              </h1>
              <div className="flex justify-center mt-10">
                  <img 
                      src="img/Logo Infinity Capital.png" 
                      alt="Capital Infinity Logo" 
                      className="w-40 h-auto animate-float"
                  />
              </div>
          </div>
      </div>
  );
}