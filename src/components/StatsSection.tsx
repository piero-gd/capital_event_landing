export default function StatsSection() {
  return (
    <section className="mb-4 mt-10 md:mt-25 w-full max-w-4xl mx-auto px-4">
      <div className="bg-black/90 md:bg-black/20 backdrop-blur-sm border border-yellow-400 rounded-2xl p-4 md:p-6 text-center">
        <div className="flex flex-col items-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-yellow-800 rounded-full flex items-center justify-center mb-4">
            <img 
              src="img/img.png" 
              alt="Users"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </div>
          
          {/* Text */}
          <p className="text-sm md:text-base lg:text-lg font-semibold text-white">
            <span className="text-primary-gold">+10,000</span> personas ya usan{' '}
            <span className="block">
              <span className="text-primary-gold">Capital Infinity</span> en Latinoamérica
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};