import React from "react";

export const Servicio = ({ icono = {}, title = "", text = "" }) => {
  // *CODIGO PARA OBTENER LA ULTIMA PALABRA
  const palabras = title.split(" ");
  const palabraResaltada = palabras[palabras.length - 1];

  // *CODIGO PARA OBTENER EL SERVICIO SIN LA ULTIMA PALABRA
  let servicio = title;
  servicio = servicio.substring(0, servicio.lastIndexOf(" "));
  return (
    <div
      className="servicio marginSide animate__animated notSeen"
      data-animacion="fadeIn"
      data-porcentaje="mitad"
    >
      <div className="servicio-icono">{icono}</div>

      <h3 className="contentTitle">
        {servicio + " "}
        <span>{palabraResaltada}</span>
      </h3>

      <p>{text}</p>
    </div>
  );
};
