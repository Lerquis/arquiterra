import React, { useEffect, useState } from "react";
import { Topbar } from "../topbar/Topbar";
import { ProjectInfo } from "./ProjectInfo";
import { ProjectLanding } from "./ProjectLanding";
import { FooterPag } from "../footerPag/FooterPag";
import { useNavigate, useParams } from "react-router-dom";
import { animacionesParallax } from "../../animations/parallax";
import { fetchFun } from "../../helper/fetch";

export const Project = () => {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();
  // ?Conseguimos el nombre de proyecto gracias a la url
  // TODO: En un futuro tiene que ser con el id de la base de datos
  // TODO: De momento esta bien que sea con el nombre del proyecto
  const proyecto = useParams().idProject;

  useEffect(async () => {
    const data = await fetchFun(`proyecto/${proyecto}`);
    const response = await data.json();

    if (!response.ok) return navigate("/");

    setProject(response.proyecto);
    setLoading(true);
  }, []);

  useEffect(() => {
    animacionesParallax();
  }, [loading]);

  if (!loading) return "";

  return (
    <>
      <Topbar show={false} />
      <ProjectLanding
        imgs={project.images}
        nombreProyecto={project.nombre}
        medidas={project.medidas}
        ubicacion={project.ubicacion}
        tipoProyecto={project.tipoProyecto}
      />
      <ProjectInfo descripcion={project.descripcion} imgs={project.images} />
      <FooterPag url={"../"} />
    </>
  );
};
