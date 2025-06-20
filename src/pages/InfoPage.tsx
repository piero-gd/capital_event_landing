import React from "react";

const InfoPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-0 py-0 relative">
      {/* Fondo Bg Circulo Desktop */}
      <img
        src="/img/bg-circulo-d.png"
        alt="Fondo círculo"
        className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 max-w-none pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* Fondo Bg Circulo Mobile */}
      <img
        src="/img/Bg Circulo.png"
        alt="Fondo círculo"
        className="block md:hidden absolute left-1/2 top-0 -translate-x-1/2 w-[100vw] max-w-none pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* Encabezado */}
      <section
        className="flex flex-col items-center text-center space-y-4 z-10 pt-8 md:pt-12 md:mb-12"
        data-aos="fade-down"
      >
        {/* Logo y título */}
        <img
          src="/img/INFINITY REAL STATE 3.png"
          alt="logo"
          className="w-20 h-auto mb-1 md:w-16"
        />
        <h1 className="text-2xl md:text-xl font-light text-white tracking-wide mb-2">
          INFINITY REAL STATE
        </h1>
      </section>

      {/* Imagen 1 (arriba en mobile, derecha en desktop) */}
      <div
        className="w-full flex justify-center mt-6 mb-6 md:hidden z-10"
        data-aos="zoom-in"
      >
        {/* Imagen 1 */}
        <img
          src="/img/Infinity Real state.png"
          alt="Infografía top"
          className="w-[65vw] max-w-[220px] h-auto object-contain"
        />
      </div>

      {/* Layout principal */}
      <section
        className="w-full flex flex-col md:flex-row md:justify-center md:items-start md:gap-12 mt-0 md:mt-6 mb-10 relative overflow-visible max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {/* Columna izquierda */}
        <div className="flex-1 flex flex-col items-center md:items-start md:text-left">
          {/* ¿Qué es la tokenización? */}
          <div className="w-full max-w-[370px] md:max-w-none text-center md:text-left z-10 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              ¿Qué es la{" "}
              <span className="text-[#FFB800]">tokenización</span> de inmuebles?
            </h2>
            <p className="mt-2 text-base md:text-lg text-gray-200 leading-relaxed">
              Es el proceso de convertir un bien raíz (como un departamento, local o
              terreno) en tokens digitales registrados en una blockchain. Cada token
              representa una fracción de propiedad, permitiendo invertir, comprar o
              vender de forma segura y accesible desde cualquier parte del mundo.
            </p>
          </div>
          {/* Caso de referencia */}
          <div className="mt-6 w-full max-w-[370px] md:max-w-none text-center md:text-left z-10 px-4 md:px-0">
            <h3 className="text-xl md:text-2xl font-light text-white mb-1">
              Caso de referencia:{" "}
              <span className="text-[#FFB800] font-normal">Hilton en El Salvador</span>
            </h3>
            <p className="mt-2 text-base md:text-lg text-gray-200 leading-relaxed">
              Hilton recibió licencia para tokenizar habitaciones de hotel, permitiendo a
              cualquier persona adquirir una parte del inmueble y recibir beneficios
              proporcionales.
            </p>
          </div>
          {/* Imagen inferior solo en desktop */}
          <div className="hidden md:block mt-10">
            <img
              src="/img/Image Real State 2.png"
              alt="Infografía bottom"
              className="w-[350px] max-w-full h-auto"
            />
          </div>
        </div>

        {/* Columna derecha solo en desktop */}
        <div className="hidden md:flex flex-1 flex-col items-end justify-start relative mt-0">
          {/* Imagen principal */}
          <div className="relative w-full flex justify-end z-10">
            <img
              src="/img/Infinity Real state.png"
              alt="Infografía top"
              className="w-[350px] max-w-[350px] h-auto object-contain"
            />
          </div>
          {/* ¿Qué busca Infinity Real State? */}
          <div className="mt-16 w-full max-w-[400px] text-left z-10 px-0">
            <h2 className="text-3xl font-semibold text-white">
              ¿Qué busca Infinity Real State?
            </h2>
            <p className="mt-4 text-lg text-gray-200 leading-relaxed">
              En Capital Infinity, corporación peruana enfocada en innovación
              financiera, estamos tramitando la licencia en El Salvador para
              tokenizar proyectos inmobiliarios, como ya lo hizo Hilton. <br />
              <br />
              Seremos la Primera Corporación Peruana en implementar esta tecnología,
              transformando propiedades en activos digitales accesibles desde cualquier
              parte del mundo. <br />
              <br />
              Nuestro objetivo: democratizar la inversión inmobiliaria, permitiendo que
              más personas participen desde montos bajos, con respaldo y transparencia
              gracias a la blockchain.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué busca Infinity Real State? solo en mobile */}
      <section
        className="md:hidden w-full max-w-[370px] text-center z-10 px-4 mt-8 mb-4"
        data-aos="fade-up"
      >
        {/* ¿Qué busca Infinity Real State? mobile */}
        <h2 className="text-2xl font-semibold text-white">
          ¿Qué busca Infinity Real State?
        </h2>
        <p className="mt-4 text-base text-gray-200 leading-relaxed">
          En Capital Infinity, corporación peruana enfocada en innovación financiera, estamos tramitando la licencia en El Salvador para tokenizar proyectos inmobiliarios, como ya lo hizo Hilton. <br />
          <br />
          Seremos la Primera Corporación Peruana en implementar esta tecnología, transformando propiedades en activos digitales accesibles desde cualquier parte del mundo. <br />
          <br />
          Nuestro objetivo: democratizar la inversión inmobiliaria, permitiendo que más personas participen desde montos bajos, con respaldo y transparencia gracias a la blockchain.
        </p>
      </section>

      {/* Imagen inferior solo en mobile */}
      <section
        className="mt-4 z-10 mb-18 md:hidden"
        data-aos="fade-up"
      >
        {/* Imagen inferior mobile */}
        <img
          src="/img/Image Real State 2.png"
          alt="Infografía bottom"
          className="w-[85vw] max-w-[320px] h-auto"
        />
      </section>

      {/* Margen inferior solo en desktop */}
      <div className="hidden md:block w-full" style={{ height: "64px" }}></div>
    </div>
  );
};

export default InfoPage;
