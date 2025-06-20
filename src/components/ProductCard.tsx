// Versión móvil con timeline
export default function ProductCards() {
  return (
    <>
      {/* Línea vertical del timeline */}
      <div className="md:hidden timeline-container">
        <div className="timeline-vertical"></div>
      </div>

      {/* CCX Card */}
      <div className="md:hidden absolute top-[7%] left-[4%] w-64">
        <div className="relative">
          <a 
            href="https://forms.gle/gq8jKku5Y2FWmTpu5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-0 left-0 w-45 h-45 z-10"
            style={{ display: 'block', width: '180px', height: '180px' }}
          >
            <img 
              src="img/Lanzamiento Tarjeta.png" 
              alt="CCX Card" 
              className="w-full h-full object-contain"
            />
          </a>
          <p className="text-sm text-gray-200 mb-0 absolute top-35 left-1">
            <b>CCX Card, Tu cripto, <p></p> en una tarjeta global. </b><p></p>
            Regístrate al pre-lanzamiento.
          </p>
        </div>
      </div>

      {/* CAPITAL STAKING X */}
      <div className="md:hidden absolute top-[27%] right-[4%] w-64">
        <div className="relative">
          <a 
            href="https://capitalstakingx.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-1 right-1 w-36 h-23 mb-2 z-10"
            style={{ display: 'block', width: '144px', height: '92px' }}
          >
            <img 
              src="/img/CAPITAL-STAKING 1.png" 
              alt="CAPITAL STAKING X" 
              className="w-full h-full object-contain"
            />
          </a>
          <p className="text-sm px-2 text-gray-200 mb-0 absolute top-21 right-0 text-right">
            Tu bienestar financiero empieza con
            Blockchain real.
          </p>
        </div>
      </div>

      {/* Capital Crypto X */}
      <div className="md:hidden absolute top-[43%] left-[4%] w-64">
        <div className="relative">
          <a 
            href="https://capitalcryptox.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-0 left-0 w-30 h-20 mb-2 z-10"
            style={{ display: 'block', width: '120px', height: '80px' }}
          >
            <img 
              src="/img/CAPITAL-CRYPTO 1.png" 
              alt="Capital Crypto X" 
              className="w-full h-full object-contain"
            />
          </a>
          <p className="text-sm text-gray-200 mb-0 absolute top-20 left-0">
            Compra, vende y envía cripto al instante.
          </p>
        </div>
      </div>

      {/* INFINITY ACADEMY */}
      <div className="md:hidden absolute top-[58%] right-[4%] w-64">
        <div className="relative">
          <a 
            href="https://infinityacademy.pro/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute -top-0 right-0 left-26 w-45 h-25 z-10"
            style={{ display: 'block', width: '180px', height: '100px' }}
          >
            <img 
              src="/img/INFINITY-ACADEMY 1.png" 
              alt="INFINITY ACADEMY" 
              className="w-full h-full object-contain"
            />
          </a>
          <p className="text-sm text-gray-200 mb-0 absolute top-20 right-1 text-right">
            Domina los mercados, aprende Trading y
            controla tus emociones
          </p>
        </div>
      </div>

      {/* Capital CashX */}
      <div className="md:hidden absolute top-[72%] left-[4%] w-64">
        <div className="relative">
          <a 
            href="https://capitalcashx.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-0 left-0 w-35 h-20 z-10"
            style={{ display: 'block', width: '140px', height: '80px' }}
          >
            <img 
              src="/img/CAPITAL-CASH 1.png" 
              alt="Capital CashX" 
              className="w-full h-full object-contain"
            />
          </a>
          <p className="text-sm text-gray-200 mb-0 absolute top-18 left-1">
            Cambia tu moneda al mejor precio, de manera
            rápida y segura.
          </p>
        </div>
      </div>

      <div className="md:hidden absolute top-[85%] right-[4%] w-64"> 
        <div className="relative">
          <a 
            href="/info" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-0 right-0 w-24 h-20 z-10"
            style={{ display: 'block', width: '96px', height: '80px' }}
          >
            <img 
              src="/img/Real state imagen + titulo.png" 
              alt="Capital Real State" 
              className="w-full h-full object-contain"
            />
          </a>
          <p className="text-sm text-gray-200 mb-0 absolute top-18 right-1 text-right">
            Pioneros en tokenización inmobiliaria desde Perú.
          </p>
        </div>
      </div>

      {/* Versión escritorio - Toda la tarjeta clickeable */}
      <div className="hidden md:flex flex-col items-center w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Tarjeta CCX Card */}
          <a 
            href="https://forms.gle/gq8jKku5Y2FWmTpu5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-all duration-300 block"
          >
            <div className="flex flex-col items-center text-center h-full">
              <img src="img/Lanzamiento Tarjeta.png" alt="CCX Card" className="w-26 h-28 md:w-24 md:h-32 object-contain mb-1 md:mb-0" />
              <p className="text-white text-sm md:mt-1">
                <b>CCX Card</b> Tu cripto, en una tarjeta global.
                Regístrate al pre-lanzamiento.
              </p>
            </div>
          </a>

          {/* Tarjeta Capital Staking X */}
          <a 
            href="https://capitalstakingx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-all duration-300 block"
          >
            <div className="flex flex-col items-center text-center">
              <img src="img/CAPITAL-STAKING 1.png" alt="Capital Staking X" className="w-28 h-28 md:w-32 md:h-32 object-contain mb-1 md:mb-0" />
              <p className="text-white text-sm md:mt-1">
                <b>CAPITAL STAKING X</b> genera ganancias pasivas con tus criptoactivos.
                Asegura tu lugar en la lista de espera.
              </p>
            </div>
          </a>

          {/* Tarjeta Capital Crypto X */}
          <a 
            href="https://capitalcryptox.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-all duration-300 block"
          >
            <div className="flex flex-col items-center text-center">
              <img src="img/CAPITAL-CRYPTO 1.png" alt="Capital Crypto X" className="w-28 h-28 md:w-32 md:h-32 object-contain mb-1 md:mb-0" />
              <p className="text-white text-sm md:mt-1">
                <b>Capital Crypto X</b> la mejor plataforma para operar criptoactivos.
                Únete a la lista de espera.
              </p>
            </div>
          </a>

          {/* Tarjeta Infinity Academy */}
          <a 
            href="https://infinityacademy.pro/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-all duration-300 block"
          >
            <div className="flex flex-col items-center text-center">
              <img src="img/INFINITY-ACADEMY 1.png" alt="Infinity Academy" className="w-28 h-28 md:w-32 md:h-32 object-contain mb-1 md:mb-0" />
              <p className="text-white text-sm md:mt-1">
                <b>INFINITY ACADEMY</b> Domina los mercados, aprende Trading y
                controla tus emociones
              </p>
            </div>
          </a>

          {/* Tarjeta Capital CashX */}
          <a 
            href="https://capitalcashx.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-all duration-300 block"
          >
            <div className="flex flex-col items-center text-center">
              <img src="img/CAPITAL-CASH 1.png" alt="Capital CashX" className="w-28 h-28 md:w-32 md:h-32 object-contain mb-1 md:mb-0" />
              <p className="text-white text-sm md:mt-1">
                <b>Capital CashX</b> obtén préstamos rápidos con tus criptoactivos.
                Sin verificación de crédito. Lista de espera abierta.
              </p>
            </div>
          </a>

          {/* Tarjeta Capital Real State */}
          <a 
            href="/info"
            target="_blank"
            className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-all duration-300 block"
          >
            <div className="flex flex-col items-center text-center">
              <img src="img/Real state imagen + titulo.png" alt="Capital Real State" className="w-28 h-28 md:w-32 md:h-32 object-contain mb-1 md:mb-0" />
              <p className="text-white text-sm md:mt-1">
                <b>Capital Real State</b> invierte en bienes raíces con cripto.
                Fondo de inversión inmobiliaria.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}