import React from "react";
import { urlFor } from "../../lib/client";

export const ProjectLanding = ({
  nombreProyecto,
  imgs,
  medidas,
  ubicacion,
  tipoProyecto,
}) => {
  return (
    <div className="projectLanding landingObserver ">
      <div className="projectLanding-basicInfo">
        <img
          src={imgs[0].url}
          alt="Imagen Proyecto"
          className="notShowTopbar"
        />
        {/* Este div de abajo es el que provoca que la pagina se trabe */}
        <div className="projectLanding-basicInfo-content animate__animated animate__fadeIn">
          <h2>
            <span style={{ marginRight: ".3em" }}>
              {nombreProyecto.slice(0, 8)}
            </span>
            {nombreProyecto.slice(9)}
          </h2>
          <div className="projectLanding-basicInfo-content-feature">
            <div className="projectLanding-basicInfo-content-feature-info">
              <h3>Medidas</h3>
              <p>{medidas} metros cuadrados</p>
            </div>
            <div className="projectLanding-basicInfo-content-feature-info">
              <h3>Ubicacion</h3>
              <p>{ubicacion}</p>
            </div>
            <div className="projectLanding-basicInfo-content-feature-info">
              <h3>Tipo de Proyecto</h3>
              <p>{tipoProyecto}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
