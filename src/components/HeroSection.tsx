export default function HeroSection() {
  return (
      <div className="hero-gradient">
          <div className="container text-center py-20">
              <h1 className=" mb-8">
                  Bienvenido a <span className="text-primary">Capital Infinity</span>. 
                  <br />
                  Donde el conocimiento se transforma en acción
              </h1>
              <div className="flex justify-center">
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