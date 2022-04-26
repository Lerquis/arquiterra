import React from "react";
import { FooterPag } from "../footerPag/FooterPag";
import { Topbar } from "../topbar/Topbar";
import { ProjectsLanding } from "./ProjectsLanding";
import { ProjectsShow } from "./ProjectsShow";

export const Projects = () => {
  // ?Donde vamos a guardar los proyectos que se encuentren con animacion
  // ?diferente
  let proyectos = [];
  document.addEventListener("DOMContentLoaded", () => {
    const segundasFilas = document.querySelectorAll(
      ".projectsLandingPage-projects-project"
    );
    segundasFilas.forEach((proyecto) => {
      // ?Tenemos los proyectos que tienen una animacion diferente
      const proyectoWidth = -1 * parseInt(getComputedStyle(proyecto).width);

      const fondo = proyecto.children[1];
      const matrix = new DOMMatrix(getComputedStyle(fondo).transform);
      // ?A veces se pasa por +1 o por -1
      if (
        matrix.e === proyectoWidth + 1 ||
        matrix.e === proyectoWidth - 1 ||
        matrix.e === proyectoWidth
      ) {
        // ?tenemos una lista con los proyectos que ocupan una animacion diferente
        proyectos = [...proyectos, proyecto];
      }
    });

    segundasFilas.forEach((proyecto) => {
      proyecto.addEventListener("mouseenter", () => {
        // ?Empezamos la animacion porque el mouse entro a un proyecto

        // ?Agarramos el texto que tiene el fondo para crear la animacion
        const fondo = proyecto.children[1];

        if (proyectos.includes(proyecto)) {
          // ?Proyecto con animacion diferente
          fondo.style.transform = "translateX(-100%)";
        }
        // ?Para que la animacion no se haga de manera instantanea
        // ?Ya que este se buggea
        setTimeout(() => {
          fondo.style.width = "100%";
        }, 10);
      });
    });

    segundasFilas.forEach((proyecto) => {
      proyecto.addEventListener("mouseleave", () => {
        // ?Terminamos la animacion

        // ?Agarramos el texto que tiene el fondo para crear la animacion
        const fondo = proyecto.children[1];
        fondo.style.width = "50%";
        if (proyectos.includes(proyecto)) {
          // ?Proyecto con animacion diferente
          fondo.style.transform = "translateX(-200%)";
        } else {
          fondo.style.transform = "translateX(-100%)";
        }
      });
    });
  });

  return (
    <>
      <Topbar />
      <ProjectsLanding />
      <div className="projects-projects">
        <ProjectsShow />
        <ProjectsShow />
        <ProjectsShow />
        <ProjectsShow />
      </div>

      <FooterPag />
    </>
  );
};
