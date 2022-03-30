import React from "react";

export const Proyecto = () => {
  // TODO: Cambiar las url de las imagenes
  return (
    <div className="proyectoHP">
      {/* <img src="./assets/casaSanGerardo.jpg" /> */}
      <div
        className="proyectoHP-background animate__animated notSeen"
        data-animacion="fadeIn"
        data-porcentaje="mitad"
        style={{
          background: 'url("./assets/casaSanGerardo.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div
        className="proyectoHP-contenido marginSide notSeen animate__animated"
        data-animacion="fadeIndown"
      >
        <h3 className="contentTitle">
          Proyecto en <span>Guanacaste</span>
        </h3>

        <p className="proyectoHP-contenidoParrafo">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, quae.
        </p>
      </div>
    </div>
  );
};
