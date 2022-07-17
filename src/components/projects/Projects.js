import React, { useEffect, useState } from "react";
import { FooterPag } from "../footerPag/FooterPag";
import { Topbar } from "../topbar/Topbar";
import { ProjectsLanding } from "./ProjectsLanding";
import { ProjectsShow } from "./ProjectsShow";
import { animacionesParallax } from "../../animations/parallax";
import { fetchFun } from "../../helper/fetch";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [projectsToShow, setProjectsToShow] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numPaginas, setNumPaginas] = useState([]);
  const [pagActual, setPagActual] = useState(1);
  const [cambiandoProyectos, setCambiandoProyectos] = useState(false);

  // ?Donde vamos a guardar los proyectos que se encuentren con animacion
  // ?diferente
  let proyectos = [];
  const observar = () => {
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
  };

  const scrollToTop = () => {
    const elemento = document.querySelector(".projects-projects");
    window.scrollTo(elemento.offsetLeft, elemento.offsetTop - 100);
  };

  const seleccionarProyectos = () => {
    let projectsToShowArray = [];
    for (var index = 1; index !== 5; index++) {
      if (projects[(pagActual - 1) * 4 + index]) {
        projectsToShowArray.push(projects[(pagActual - 1) * 4 + index]);
        setProjectsToShow(projectsToShowArray);
      } else {
        return;
      }
    }
  };

  useEffect(async () => {
    // ?Sacamos el numero de paginas que queremos. Ya que vamos a mostrar
    // ?4 proyectos por pagina

    const data = await fetchFun("proyecto/proyectos");
    const response = await data.json();

    setProjects(response.data.reverse());
    setLoading(true);
  }, []);

  useEffect(() => {
    if (numPaginas.length === 0) {
      for (var index = 0; index < Math.round(projects.length / 4); index++) {
        setNumPaginas((prevNumPaginas) => [...prevNumPaginas, index]);
      }
    }
    seleccionarProyectos();
    observar();
    animacionesParallax();
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      setCambiandoProyectos(true);
    }, 500);
    seleccionarProyectos();
    setCambiandoProyectos(false);
  }, [pagActual]);

  if (!loading) return "";

  return (
    <>
      <Topbar />
      <ProjectsLanding project={projects[0]} />
      <div
        className={`projects-projects ${
          !cambiandoProyectos ? "cambiandoProyecto" : ""
        }`}
      >
        {projectsToShow.map((project) => {
          if (projects[0] === project) return;
          return <ProjectsShow project={project} key={project._id} />;
        })}
      </div>
      {/* Para que no muestre el boton de 1, ya que no es necesario, que se muestre cuando es mas de 1 boton para moverse */}
      <div className="projects-numsPagina">
        {numPaginas.length > 1 &&
          numPaginas.map((index, i) => {
            return (
              <button
                type="button"
                onClick={() => {
                  setPagActual(i + 1);
                  scrollToTop();
                }}
                key={i}
                className={pagActual === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            );
          })}
      </div>
      <FooterPag />
    </>
  );
};
