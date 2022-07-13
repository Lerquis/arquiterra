import React from "react";
import { Link } from "react-router-dom";

export const Proyecto = ({ proyecto }) => {
  // TODO: Cambiar las url de las imagenes
  return (
    <div className="proyectoHP">
      <div
        className="proyectoHP-background animate__animated"
        data-animacion="fadeIn"
        data-porcentaje="mitad"
        style={{
          background: `url(${proyecto.images[0].url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div
        className="proyectoHP-contenido marginSide animate__animated"
        data-animacion="fadeIndown"
      >
        <h3 className="contentTitle">
          <span>{proyecto?.nombre.slice(0, 9)}</span>
          {proyecto.nombre.slice(9)}
        </h3>

        <p className="proyectoHP-contenidoParrafo">
          {proyecto.descripcion.length >= 30
            ? proyecto.descripcion.slice(0, 100) + "..."
            : proyecto.descripcion}
        </p>

        <Link to={`/project/${proyecto._id}`} className="noBorder">
          <button
            type="button"
            className="boton-rojo"
            style={{ fontSize: "1em" }}
          >
            Ver mas
          </button>
        </Link>
      </div>
    </div>
  );
};
