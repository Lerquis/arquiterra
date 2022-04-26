import React from "react";
import { Link } from "react-router-dom";

export const BonoVivienda = () => {
  return (
    <div className="servicio-bonoVivienda">
      <div className="servicio-bonoViviendaImg"></div>
      <div className="servicio-bonoViviendaContenido">
        <p className="marginSide">
          Si estas interesado en cotizar con <span>bonos de vivienda</span>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat in
          elit in pellentesque neque.
        </p>
        <Link to={"/bonos"} style={{ textDecoration: "none" }}>
          <button type="button" className="boton-rojo difumidado-rojo">
            Mas información
          </button>
        </Link>
      </div>
    </div>
  );
};
