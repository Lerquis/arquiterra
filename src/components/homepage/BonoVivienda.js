import React from "react";

export const BonoVivienda = () => {
  const handleOnClick = () => {
    // TODO: Redireccionar a mas informacion
    console.log("Mas informacion");
  };
  return (
    <div className="servicio-bonoVivienda">
      {/* <img className="servicio-bonoViviendaImg" src="./assets/contract.jpg" /> */}
      <div className="servicio-bonoViviendaImg"></div>
      <div className="servicio-bonoViviendaContenido">
        {" "}
        <p className="marginSide">
          Si estas interesado en cotizar con <span>bonos de vivienda</span>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat in
          elit in pellentesque neque.
        </p>
        <button
          type="button"
          className="boton-rojo difumidado-rojo"
          onClick={handleOnClick}
        >
          Mas información
        </button>
      </div>
    </div>
  );
};
