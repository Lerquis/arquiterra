import React from "react";
import { BonoBloque } from "./BonoBloque";

export const BonoInformacion = () => {
  return (
    <div className="bonosVivienda">
      <h2
        className="homepage-title animate__animated notSeen parallax"
        data-rate=".2"
        data-direction="vertical"
      >
        Informacion de{" "}
        <span className="homepage-titleSpan">Bonos de Vivienda</span>
      </h2>

      <div className="bonosVivienda-informacion">
        <BonoBloque pregunta={"Pregunta?"} respuesta={"Respuesta!"} />
        <BonoBloque pregunta={"Pregunta?"} respuesta={"Respuesta!"} />
        <BonoBloque pregunta={"Pregunta?"} respuesta={"Respuesta!"} />
        <BonoBloque pregunta={"Pregunta?"} respuesta={"Respuesta!"} />
        <BonoBloque pregunta={"Pregunta?"} respuesta={"Respuesta!"} />
      </div>
    </div>
  );
};
