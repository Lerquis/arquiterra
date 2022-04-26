import React from "react";
import { Link } from "react-router-dom";
import { Proyecto } from "./Proyecto";

export const Proyectos = () => {
  return (
    <div className="proyectosHP">
      <h2
        className="homepage-title animate__animated notSeen parallax"
        data-rate=".4"
        data-direction="vertical"
      >
        Nuestros <span className="homepage-titleSpan">Proyectos</span>
      </h2>

      <Proyecto />

      <Proyecto />

      <Proyecto />

      <Link to={"/projects"} className="noBorder">
        <button type="button" className="boton-rojo">
          Ver todos los proyectos
        </button>
      </Link>
    </div>
  );
};
