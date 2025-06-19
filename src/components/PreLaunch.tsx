export default function PreLaunch() {

  const handlePreRegister = () => {
    console.log('Pre-registrarme ahora');
  };
  
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-block px-6 py-2 border border-white rounded-full text-white text-sm mb-8">
          Pre - Lanzamiento
        </div>
        
        <h1 className="text-white text-5xl font-bold mb-4">
          CCX Card
        </h1>
        
        <p className="text-white text-xl mb-12">
          Una sola tarjeta. Muchas puertas.
        </p>
        
        <div className="mb-12">
          <p className="text-white text-lg mb-2">
            Solo 2,000 usuarios accederán primero.
          </p>
          <p className="text-white text-lg">
            Haz tu pre-registro y asegura la tuya.
          </p>
        </div>
        
        <button onClick={handlePreRegister} className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-4 rounded-full text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200">
          Pre-registrarme ahora
        </button>
      </div>
    </div>
  );
};