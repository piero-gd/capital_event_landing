export default function CTASection() {
  const handleLearnMore = () => {
    // Lógica para conocer más sobre Capital Infinity
    console.log('Conocer Capital Infinity');
  };
      
  
    return (
      <section className="text-center mb-8">
        <h2 className="text-lg font-light mb-2">
          Esto es solo el comienzo.
        </h2>
        <p className="text-base text-gray-200 mb-6">
          Vive la nueva era financiera con Capital Infinity
        </p>
        
        <div className="flex flex-col gap-3">
      
          <button 
            onClick={handleLearnMore}
            className="border border-gray-400 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
          >
            Conoce Capital Infinity
          </button>
        </div>
      </section>
    );
  };
