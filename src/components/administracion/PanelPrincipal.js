import React, { useState, useEffect } from "react";
import { Proyecto } from "./Proyecto";
import { TopbarAdministracion } from "./TopbarAdministracion";
import { fetchFun } from "../../helper/fetch";

export const PanelPrincipal = () => {
  const [loading, setLoading] = useState(true);
  const [proyectos, setProyectos] = useState([]);
  const [pagActual, setPagActual] = useState(1);
  const [numPaginas, setNumPaginas] = useState([]);
  const [proyectosMostrar, setProyectosMostrar] = useState([]);
  const [imagenesBorrar, setImagenesBorrar] = useState([]);

  const seleccionarProyectos = () => {
    let projectsToShowArray = [];
    for (var index = 0; index !== 10; index++) {
      if (proyectos[(pagActual - 1) * 10 + index]) {
        projectsToShowArray.push(proyectos[(pagActual - 1) * 10 + index]);
        setProyectosMostrar(projectsToShowArray);
      } else {
        return;
      }
    }
  };

  useEffect(async () => {
    let data = await fetchFun("proyecto/proyectos");
    let response = await data.json();

    if (response.ok) {
      setProyectos(response.data);
    }

    data = await fetchFun("images/imagenes");
    response = await data.json();
    console.log(response);
    if (response.ok) {
      setImagenesBorrar(response.data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (numPaginas.length === 0) {
      for (var index = 0; index < Math.round(proyectos.length / 10); index++) {
        setNumPaginas((prevNumPaginas) => [...prevNumPaginas, index]);
      }
    }
    seleccionarProyectos();
  }, [loading]);

  useEffect(() => {
    seleccionarProyectos();
  }, [pagActual]);

  return (
    <div className="panelAdministrativo">
      <TopbarAdministracion
        imagenesBorrar={imagenesBorrar?.length >= 1 ? true : false}
      />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="tablaProyectos">
          <div className="projects-numsPagina" style={{ marginBottom: 0 }}>
            {numPaginas.length > 1 &&
              numPaginas.map((index, i) => {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      setPagActual(i + 1);
                    }}
                    key={i}
                    style={{ background: "none", fontSize: ".8em" }}
                    className={pagActual === i + 1 ? "active" : ""}
                  >
                    {i + 1}
                  </button>
                );
              })}
          </div>
          {proyectosMostrar.map((proyecto) => {
            return <Proyecto proyecto={proyecto} key={proyecto._id} />;
          })}
        </div>
      )}
    </div>
  );
};
