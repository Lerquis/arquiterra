import React from "react";

export const BonoBloque = ({ pregunta, respuesta }) => {
  return (
    <div
      className="bonoVivienda-informacion-contenido animate__animated"
      data-porcentaje="mitad"
      data-animacion="fadeIn"
    >
      <div className="question-header">
        <div className="title">
          <h3 className="pregunta">{pregunta}</h3>
          <span className="plus-sign"></span>
        </div>
        <div className="answer-to-questions">
          <p className="respuesta">{respuesta}</p>
        </div>
      </div>
    </div>
  );
};
