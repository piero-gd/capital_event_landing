export default function ProductCards() {
  return (
    <>
      {/* CCX Card */}
      <div className="absolute top-[7%] right-[24%] w-64">
        <div className="relative">
          <img 
            src="img/Lanzamiento Tarjeta.png" 
            alt="CCX Card" 
            className="absolute top-0 left-0 w-45 h-45"
          />
          <p className="text-sm text-gray-200 mb-0 absolute top-35 left-1">
            <b>CCX Card</b> tu cripto, en una tarjeta global.
            Regístrate al pre-lanzamiento.
          </p>
        </div>
      </div>

      {/* CAPITAL STAKING X */}
      <div className="absolute top-[27%] right-[4%] w-64">
        <div className="relative">
          <img 
            src="/img/CAPITAL-STAKING 1.png" 
            alt="CAPITAL STAKING X" 
            className="absolute top-1 right-1 w-36 h-23 mb-2"
          />
          <p className="text-sm px-2 text-gray-200 mb-0 absolute top-21 right-0 text-right">
            <b>CAPITAL STAKING X</b> Tu bienestar financiero empieza con
            Blockchain real.
          </p>
        </div>
      </div>

      {/* Capital Crypto X */}
      <div className="absolute top-[43%] right-[25%] w-64">
        <div className="relative">
          <img 
            src="/img/CAPITAL-CRYPTO 1.png" 
            alt="Capital Crypto X" 
            className="absolute top-0 left-0 w-30 h-20 mb-2"
          />
          <p className="text-sm text-gray-200 mb-0 absolute top-20 left-0">
            <b>Capital Crypto X</b> Compra, vende y envía cripto al instante.
          </p>
        </div>
      </div>

      {/* INFINITY ACADEMY */}
      <div className="absolute top-[58%] left-[24%] w-64">
        <div className="relative">
          <img 
            src="/img/INFINITY-ACADEMY 1.png" 
            alt="INFINITY ACADEMY" 
            className="absolute -top-0 right-0 left-26 w-45 h-25"
          />
          <p className="text-sm text-gray-200 mb-0 absolute top-20 right-1 text-right">
            <b>INFINITY ACADEMY</b> Domina los mercados, aprende Trading y
            controla tus emociones
          </p>
        </div>
      </div>

      {/* Capital CashX */}
      <div className="absolute top-[75%] right-[10%] w-64">
        <div className="relative">
          <img 
            src="/img/CAPITAL-CASHX 1.png" 
            alt="Capital CashX" 
            className="absolute top-0 left-0 w-45 h-45"
          />
          <p className="text-sm text-gray-200 mb-0 absolute top-35 left-1">
            <b>Capital CashX</b> Cambia tu moneda al mejor precio, de manera
            rápida y segura!
          </p>
        </div>
      </div>
    </>
  );
}