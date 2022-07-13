import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TopbarAdministracion } from "./TopbarAdministracion";
import { Formulario } from "./Formulario";
import { fetchFun } from "../../helper/fetch";

export const EditarProyecto = () => {
  const [proyecto, setProyecto] = useState({});
  const [loading, setLoading] = useState(true);

  const { idProject } = useParams();
  const navigate = useNavigate();

  useEffect(async () => {
    const data = await fetchFun(`proyecto/${idProject}`);
    const response = await data.json();

    if (!response.ok) return navigate("/administracion/panelPrincipal");

    setProyecto(response.proyecto);
    setLoading(false);
  }, []);

  return (
    <div className="panelAdministrativo">
      <TopbarAdministracion mostrar={false} />
      {loading ? <p>Cargando...</p> : <div></div>}
      <Formulario proyecto={proyecto} />
    </div>
  );
};
