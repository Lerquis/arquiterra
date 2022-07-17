import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Proyecto } from "./Proyecto";
import { fetchFun } from "../../helper/fetch";

export const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const seleccionarProyectos = async () => {
    const data = await fetchFun("proyecto/proyectos");
    const response = await data.json();

    const proyectosDB = response.data;

    proyectosDB.reverse();

    for (let i = 0; i < 3; i++) {
      if (proyectosDB[i]) {
        setProyectos((prevArray) => [...prevArray, proyectosDB[i]]);
      }
    }
  };
  useEffect(() => {}, [proyectos]);

  useEffect(() => {
    seleccionarProyectos();
  }, []);
  return (
    <div className="proyectosHP">
      <h2
        className="homepage-title animate__animated notSeen parallax"
        data-rate=".4"
        data-direction="vertical"
      >
        Nuestros <span className="homepage-titleSpan">Proyectos</span>
      </h2>
      {proyectos.map((proyecto) => {
        return <Proyecto proyecto={proyecto} key={proyecto._id} />;
      })}

      <Link to={"/projects"} className="noBorder">
        <button type="button" className="boton-rojo">
          Ver todos los proyectos
        </button>
      </Link>
    </div>
  );
};
