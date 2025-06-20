// Versión móvil con timeline
export default function ProductCards() {
  return (
    <>
      {/* Línea vertical del timeline */}
      <div className="md:hidden timeline-container">
        <div className="timeline-vertical"></div>
      </div>

      {/* CCX Card */}
      <div className="md:hidden absolute top-[7%] right-[24%] w-64">
        <div className="relative">
          <img 
            src="img/Lanzamiento Tarjeta.png" 
            alt="CCX Card" 
            onClick={() => window.open('https://forms.gle/gq8jKku5Y2FWmTpu5', '_blank')}
            className="absolute top-0 left-0 w-45 h-45"
          />
          <p className="text-sm text-gray-200 mb-0 absolute top-35 left-1">
            <b>CCX Card</b> tu cripto, en una tarjeta global.
            Regístrate al pre-lanzamiento.
          </p>
        </div>
      </div>

      {/* CAPITAL STAKING X */}
      <div className="md:hidden absolute top-[27%] right-[4%] w-64">
        <div className="relative">
          <img 
            src="/img/CAPITAL-STAKING 1.png" 
            alt="CAPITAL STAKING X" 
            onClick={() => window.open('https://staking.capitalinfinity.io/', '_blank')}
            className="absolute top-1 right-1 w-36 h-23 mb-2"
          />
          <p className="text-sm px-2 text-gray-200 mb-0 absolute top-21 right-0 text-right">
            <b>CAPITAL STAKING X</b> Tu bienestar financiero empieza con
            Blockchain real.
          </p>
        </div>
      </div>

      {/* Capital Crypto X */}
      <div className="md:hidden absolute top-[43%] right-[25%] w-64">
        <div className="relative">
          <img 
            src="/img/CAPITAL-CRYPTO 1.png" 
            alt="Capital Crypto X" 
            onClick={() => window.open('https://exchange.capitalinfinity.io/', '_blank')}
            className="absolute top-0 left-0 w-30 h-20 mb-2"
          />
          <p className="text-sm text-gray-200 mb-0 absolute top-20 left-0">
            <b>Capital Crypto X</b> Compra, vende y envía cripto al instante.
          </p>
        </div>
      </div>

      {/* INFINITY ACADEMY */}
      <div className="md:hidden absolute top-[58%] left-[24%] w-64">
        <div className="relative">
          <img 
            src="/img/INFINITY-ACADEMY 1.png" 
            alt="INFINITY ACADEMY" 
            onClick={() => window.open('https://academy.capitalinfinity.io/', '_blank')}
            className="absolute -top-0 right-0 left-26 w-45 h-25"
          />
          <p className="text-sm text-gray-200 mb-0 absolute top-20 right-1 text-right">
            <b>INFINITY ACADEMY</b> Domina los mercados, aprende Trading y
            controla tus emociones
          </p>
        </div>
      </div>

      {/* Capital CashX */}
      <div className="md:hidden absolute top-[72%] right-[24%] w-64">
        <div className="relative">
          <img 
            src="/img/CAPITAL-CASH 1.png" 
            alt="Capital CashX" 
            onClick={() => window.open('https://cash.capitalinfinity.io/', '_blank')}
            className="absolute top-0 left-0 w-35 h-20"
          />
          <p className="text-sm text-gray-200 mb-0 absolute top-18 left-1">
            <b>Capital CashX</b> Cambia tu moneda al mejor precio, de manera
            rápida y segura!
          </p>
        </div>
      </div>

      <div className="md:hidden absolute top-[85%] left-[24%] w-64"> 
        <div className="relative">
          <img 
            src="/img/INFINITY REAL STATE 2 1.png" 
            alt="Capital Real State" 
            onClick={() => window.open('/info', '_blank')}
            className="absolute top-0 right-0 w-24 h-20"
          />
          <p className="text-sm text-gray-200 mb-0 absolute top-18 right-1 text-right">
            <b>Capital Real State</b> Invierte en bienes raíces de manera
            inteligente y segura.
          </p>
        </div>
      </div>

      {/* Versión escritorio - Solo logos y textos */}
      <div className="hidden md:flex flex-col items-center w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Tarjeta CCX Card */}
          <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img src="img/Lanzamiento Tarjeta.png" onClick={() => window.open('https://forms.gle/gq8jKku5Y2FWmTpu5', '_blank')} alt="CCX Card" className="w-28 h-28 md:w-32 md:h-32 object-contain mb-1 md:mb-0" />
              <p className="text-white text-sm md:mt-1">
                <b>CCX Card</b> tu cripto, en una tarjeta global.
                Regístrate al pre-lanzamiento.
              </p>
            </div>
          </div>

          {/* Tarjeta Capital Staking X */}
          <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img src="img/CAPITAL-STAKING 1.png" onClick={() => window.open('https://staking.capitalinfinity.io/', '_blank')} alt="Capital Staking X" className="w-28 h-28 md:w-32 md:h-32 object-contain mb-1 md:mb-0" />
              <p className="text-white text-sm md:mt-1">
                <b>CAPITAL STAKING X</b> genera ganancias pasivas con tus criptoactivos.
                Asegura tu lugar en la lista de espera.
              </p>
            </div>
          </div>

          {/* Tarjeta Capital Crypto X */}
          <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img src="img/CAPITAL-CRYPTO 1.png" onClick={() => window.open('https://exchange.capitalinfinity.io/', '_blank')} alt="Capital Crypto X" className="w-28 h-28 md:w-32 md:h-32 object-contain mb-1 md:mb-0" />
              <p className="text-white text-sm md:mt-1">
                <b>Capital Crypto X</b> la mejor plataforma para operar criptoactivos.
                Únete a la lista de espera.
              </p>
            </div>
          </div>

          {/* Tarjeta Infinity Academy */}
          <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img src="img/INFINITY-ACADEMY 1.png" onClick={() => window.open('https://academy.capitalinfinity.io/', '_blank')} alt="Infinity Academy" className="w-28 h-28 md:w-32 md:h-32 object-contain mb-1 md:mb-0" />
              <p className="text-white text-sm md:mt-1">
                <b>INFINITY ACADEMY</b> Domina los mercados, aprende Trading y
                controla tus emociones
              </p>
            </div>
          </div>

          {/* Tarjeta Capital CashX */}
          <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img src="img/CAPITAL-CASH 1.png" onClick={() => window.open('https://cash.capitalinfinity.io/', '_blank')} alt="Capital CashX" className="w-28 h-28 md:w-32 md:h-32 object-contain mb-1 md:mb-0" />
              <p className="text-white text-sm md:mt-1">
                <b>Capital CashX</b> obtén préstamos rápidos con tus criptoactivos.
                Sin verificación de crédito. Lista de espera abierta.
              </p>
            </div>
          </div>

          {/* Tarjeta Capital Real State */}
          <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/60 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img src="img/INFINITY REAL STATE 2 1.png" onClick={() => window.open('/info', '_blank')} alt="Capital Real State" className="w-28 h-28 md:w-32 md:h-32 object-contain mb-1 md:mb-0" />
              <p className="text-white text-sm md:mt-1">
                <b>Capital Real State</b> invierte en bienes raíces con cripto.
                Fondo de inversión inmobiliaria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}