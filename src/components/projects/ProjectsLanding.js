import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animacionesParallax } from "../../animations/parallax";

export const ProjectsLanding = ({ project }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [dataRate, setDataRate] = useState("");

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  useLayoutEffect(() => {
    if (width > 1000) {
      setDataRate(".2");
    } else {
      setDataRate(".08");
    }
  }, [width]);

  useEffect(() => {
    animacionesParallax();
  }, [project]);

  return (
    <div className="projectsLandingPage">
      <h2
        className="parallax animate__animated animate__fadeIn"
        data-rate=".4"
        data-direction="vertical"
      >
        Nuestros <span className="projects-titleSpan">Proyectos</span>
      </h2>

      <div
        className="projectsLandingPage-lastProject parallax"
        data-rate={dataRate}
        data-direction="vertical"
      >
        {project && (
          <>
            <Link to={`/project/${project._id}`}>
              <img
                className="animate__animated animate__fadeInLeft animate__slow"
                src={project.images[0].url}
                alt="Imagen Proyecto"
              />
            </Link>
            <div className="projectsLandingPage-lastProject-content animate__animated animate__fadeIn animate__slower">
              <svg viewBox="0 0 39 34" fill="none">
                <path
                  d="M19.5 0L38.9856 33.75H0.0144291L19.5 0Z"
                  fill="white"
                />
              </svg>
              <h4>Ultimo Proyecto</h4>
              <h3>
                <span style={{ marginRight: "10px" }}>
                  {project?.nombre.slice(0, 8)}
                </span>
                {project.nombre.slice(9)}
              </h3>
              <p className="marginSide ">{project.descripcion}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
