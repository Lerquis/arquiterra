import React from "react";

export const BonoBloque = ({ pregunta, respuesta }) => {
  return (
    <div
      className="bonoVivienda-informacion-contenido animate__animated"
      data-porcentaje="mitad"
      data-animacion="fadeIn"
    >
      <p className="pregunta">{pregunta}</p>
      <p className="respuesta">{respuesta}</p>
    </div>
  );
};
