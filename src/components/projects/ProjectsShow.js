import React from "react";
import { Link } from "react-router-dom";

export const ProjectsShow = () => {
  return (
    <div
      className="projectsLandingPage-projects animate__animated notSeen"
      data-porcentaje="mitad"
      data-animacion="fadeIn"
    >
      <Link to={"/project/aserri"} style={{ textDecoration: "none" }}>
        <div className="projectsLandingPage-projects-project">
          <img src={`${process.env.PUBLIC_URL}/assets/casaFlorencia.jpg`} />
          <div className="projectsLandingPage-projects-project-content">
            <p className="projectsLandingPage-projects-project-content-project">
              Proyecto <span>Aserri</span>
            </p>

            <p className="projectsLandingPage-projects-project-content-features">
              Casa Rural/Moderna/Terraza
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
