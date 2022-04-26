import React, { useLayoutEffect, useState } from "react";

export const ProjectsLanding = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [dataRate, setDataRate] = useState("");

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  useLayoutEffect(() => {
    let dataRate;
    if (width > 1000) {
      setDataRate(".2");
    } else {
      setDataRate(".08");
    }
  }, [width]);

  return (
    <div className="projectsLandingPage">
      <h2
        className="parallax animate__animated "
        data-rate=".4"
        data-porcentaje="mitad"
        data-animacion="fadeIn"
        data-direction="vertical"
      >
        Nuestros <span className="projects-titleSpan">Proyectos</span>
      </h2>

      <div
        className="projectsLandingPage-lastProject parallax"
        data-rate={dataRate}
        data-direction="vertical"
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/casaFlorencia.jpg`}
          className="animate__animated"
          data-porcentaje="mitad"
          data-animacion="fadeInLeft"
        />
        <div
          data-porcentaje="mitad"
          data-animacion="fadeIn"
          className="projectsLandingPage-lastProject-content animate__animated "
        >
          <svg viewBox="0 0 39 34" fill="none">
            <path d="M19.5 0L38.9856 33.75H0.0144291L19.5 0Z" fill="white" />
          </svg>

          <h4>Ultimo Proyecto</h4>
          <h3>
            Proyecto <span>Sabana</span>
          </h3>
          <p className="marginSide ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi,
            facilisis sollicitudin sit egestas amet pellentesque id. Sit aliquam
            neque velit netus. Nec, eget vel feugiat in phasellus. Non in
            rhoncus, in faucibus risus eget ut.
          </p>
        </div>
      </div>
    </div>
  );
};
