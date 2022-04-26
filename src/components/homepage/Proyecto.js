import React from "react";
import { Link } from "react-router-dom";

export const Proyecto = () => {
  // TODO: Cambiar las url de las imagenes
  return (
    <div className="proyectoHP">
      <div
        className="proyectoHP-background animate__animated notSeen"
        data-animacion="fadeIn"
        data-porcentaje="mitad"
        style={{
          background: `url(${process.env.PUBLIC_URL}/assets/casaSanGerardo.jpg)`,
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

        <Link to="/project/aserri" className="noBorder">
          <button type="button" className="boton-rojo">
            Ver mas
          </button>
        </Link>
      </div>
    </div>
  );
};
