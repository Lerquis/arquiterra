import React, { useEffect } from "react";
import { Topbar } from "../topbar/Topbar";
import { ProjectInfo } from "./ProjectInfo";
import { ProjectLanding } from "./ProjectLanding";
import { FooterPag } from "../footerPag/FooterPag";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export const Project = () => {
  let navigate = useNavigate();
  // ?Conseguimos el nombre de proyecto gracias a la url
  // TODO: En un futuro tiene que ser con el id de la base de datos
  // TODO: De momento esta bien que sea con el nombre del proyecto
  const proyecto = useParams().idProject;

  // ?Datos quemados, se tiene que cambiar para cuando se tengan
  // ?Los proyectos en la base de datos
  const proyectos = ["aserri", "guanacaste"];
  useEffect(() => {
    if (!proyectos.includes(proyecto)) {
      navigate("/");
    }
  }, [proyecto]);

  return (
    <>
      <Topbar url={"../"} />
      <ProjectLanding />
      <ProjectInfo />
      <FooterPag url={"../"} />
    </>
  );
};
