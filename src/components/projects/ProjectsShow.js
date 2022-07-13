import React from "react";
import { Link } from "react-router-dom";

export const ProjectsShow = ({ project }) => {
  return (
    <div
      className="projectsLandingPage-projects animate__animated"
      data-porcentaje="mitad"
      data-animacion="fadeIn"
    >
      <Link to={`/project/${project._id}`} style={{ textDecoration: "none" }}>
        <div className="projectsLandingPage-projects-project">
          {/* <img src={`${process.env.PUBLIC_URL}/assets/casaFlorencia.jpg`} /> */}
          <img src={project.images[0].url} alt="Imagen Proyecto" />
          <div className="projectsLandingPage-projects-project-content">
            <p className="projectsLandingPage-projects-project-content-project">
              <span>{project.nombre.slice(0, 8)}</span>{" "}
              {project.nombre.slice(9)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
