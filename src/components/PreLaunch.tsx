export default function PreLaunch() {
  const handlePreRegister = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdihExEA3f6fqIg-BQ-oGo3SKrfeQjpO0pbkjcaj1TRbFdDzw/viewform', '_blank');
  };
  
  return (
    <div className="w-full flex justify-center px-4 md:px-8">
      <div className="w-full max-w-4xl">
        {/* Mobile: Image on top */}
        <div className="md:hidden mb-8 w-full">
          <img 
            src="img/CARD CTA MOBILE.png" 
            alt="CCX Card" 
            className="w-full h-auto mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-2 items-center">
          {/* Content */}
          <div className="text-left">
            <div className="inline-block px-6 py-2 border border-white rounded-full text-white text-sm mb-6">
              Pre - Lanzamiento
            </div>
            
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              CCX Card
            </h1>
            
            <p className="text-white text-xl mb-4 md:mb-6">
              Una sola tarjeta. Muchas puertas.
            </p>
            
            <div className="mb-8 md:mb-12">
              <p className="text-white text-lg mb-0">
                Solo 2,000 usuarios accederán primero.
              </p>
              <p className="text-white text-md">
                Haz tu pre-registro y asegura la tuya.
              </p>
            </div>
            
            <button 
              onClick={handlePreRegister} 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-4 rounded-full text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 w-full md:w-auto"
            >
              Pre-registrarme ahora
            </button>
          </div>

          {/* Desktop: Image on the right */}
          <div className="hidden md:block w-full">
            <img 
              src="img/CARD CTA MOBILE.png" 
              alt="CCX Card" 
              className="w-full h-auto max-w-2xl ml-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
