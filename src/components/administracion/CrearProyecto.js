import React from "react";
import { TopbarAdministracion } from "./TopbarAdministracion";
import { Formulario } from "./Formulario";

export const CrearProyecto = () => {
  return (
    <div className="panelAdministrativo">
      <TopbarAdministracion mostrar={false} />
      <Formulario />
    </div>
  );
};
