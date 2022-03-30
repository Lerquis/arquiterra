import React from "react";

export const ProjectsShow = () => {
  return (
    <div
      className="projectsLandingPage-projects animate__animated notSeen"
      data-porcentaje="mitad"
      data-animacion="fadeIn"
    >
      <div className="projectsLandingPage-projects-project">
        <img src="./assets/casaFlorencia.jpg" />
        <div className="projectsLandingPage-projects-project-content">
          <p className="projectsLandingPage-projects-project-content-project">
            Proyecto <span>Aserri</span>
          </p>

          <p className="projectsLandingPage-projects-project-content-features">
            Casa Rural/Moderna/Terraza
          </p>
        </div>
      </div>
    </div>
  );
};
