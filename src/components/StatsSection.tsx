export default function StatsSection() {
  return (
    <section className="mt-16 mb-8 md:mb-15 lg:mb-20 w-full max-w-4xl mx-auto px-4">
      <div className="bg-black/20 md:bg-black/20 backdrop-blur-sm border border-yellow-400 rounded-2xl p-4 md:p-6 text-center">
        <div className="flex flex-col items-center">
          {/* Icon */}
          <div className="w-16 h-16 bg--800 rounded-full flex items-center justify-center mb-4">
            <img 
              src="img/img.png" 
              alt="Users"
              className="w-12 h-14 md:w-13 md:h-15"
            />
          </div>
          
          {/* Text */}
          <p className="text-sm md:text-base lg:text-lg font-semibold text-white">
            <span className="text-yellow-400">+10,000</span> personas ya usan{' '}
            <span className="block">
              <span className="text-yellow-400">Capital Infinity</span> en Latinoamérica
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};