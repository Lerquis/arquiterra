import React from "react";

export const ProjectLanding = () => {
  return (
    <div className="projectLanding landingObserver">
      <div className="projectLanding-basicInfo">
        <img src={`${process.env.PUBLIC_URL}/assets/casaFlorencia.jpg`} />
        <div
          className="projectLanding-basicInfo-content animate__animated"
          data-porcentaje="mitad"
          data-animacion="fadeIn"
        >
          <h2>
            Proyecto <span>Aserri</span>
          </h2>
          <div className="projectLanding-basicInfo-content-feature">
            <div className="projectLanding-basicInfo-content-feature-info">
              <h3>Medidas</h3>
              <p>500 metros cuadrados</p>
            </div>
            <div className="projectLanding-basicInfo-content-feature-info">
              <h3>Ubicacion</h3>
              <p>Aserri</p>
            </div>
            <div className="projectLanding-basicInfo-content-feature-info">
              <h3>Tipo de Proyecto</h3>
              <p>Casa 2 pisos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
