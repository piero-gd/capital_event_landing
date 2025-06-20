export default function CTASection() {
  const handleLearnMore = () => {
    window.open("https://capitalinfinity.com/", "_blank");
  };
      
  
    return (
      <section className="text-center mb-12 md:mb-24 mt-16 md:mt-24 px-4">
        <h2 className="text-2xl font-semibold mb-2">
          Esto es solo el comienzo.
        </h2>
        <p className="text-md lg:text-2xl text-gray-200 mb-6">
          Vive la nueva era financiera con Capital Infinity
        </p>
        
        <div className="flex justify-center">
          <button 
            onClick={handleLearnMore}
            className="inline-flex items-center justify-center border border-gray-400 text-white px-8 py-3 rounded-full font-semibold text-sm hover:border-yellow-400 hover:bg-gradient-to-r from-yellow-400 to-yellow-600 hover:text-black transition-all duration-200 whitespace-nowrap"
          >
            Conoce Capital Infinity
          </button>
        </div>
      </section>
    );
  };
