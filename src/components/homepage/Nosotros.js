import React from "react";

export const Nosotros = () => {
  return (
    <div className="sobreNosotros">
      <h2
        className="homepage-title animate__animated notSeen parallax"
        data-rate=".2"
        data-direction="vertical"
      >
        Sobre <span className="homepage-titleSpan">Nosotros</span>
      </h2>
      <div
        className="sobreNosotros-bloque animate__animated notSeen"
        data-porcentaje="mitad"
        data-animacion="fadeIn"
      >
        <div className="sobreNosotros-imagen">
          <p>Arquitecto Luis Rojas Salazar</p>
          <img src="/arquiterra/assets/profile.jpg" />
        </div>

        <div
          className="sobreNosotros-informacion marginSide animate__animated notSeen"
          data-porcentaje="mitad"
          data-animacion="fadeIn"
        >
          <p>
            Somos una oficina de <span className="borde">arquitectura</span> e{" "}
            <span className="borde">interiores</span> en Costa Rica, enfocado en
            desarrollo de proyectos inmobiliarios que integran la mejor
            arquitectura con una visión de negocios altamente rentable y
            sustentable. Su filosofía es construir obras arquitectónicas{" "}
            <span className="borde">eficientes</span>,{" "}
            <span className="borde">ecológicas</span> y{" "}
            <span className="borde">extraordinarias</span>. Fundado en 2007 por
            Arq. Luis Rojas Salazar.
          </p>

          <p>
            Somos un complemento de <span className="borde">grandeza</span>,{" "}
            <span className="borde">innovación</span> y{" "}
            <span className="borde">creatividad</span> de diseñar, proyectar y
            construir espacios arquitectónicos de acuerdo a sus{" "}
            <span className="borde">necesidades</span>.
          </p>

          <p>
            Somos un grupo de profesionales comprometidos con el{" "}
            <span className="borde">diseño sostenible</span>y la{" "}
            <span className="borde">arquitectura de vanguardia</span>, enfocados
            a{" "}
            <span className="borde">
              solucionar las necesidades del cliente
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
