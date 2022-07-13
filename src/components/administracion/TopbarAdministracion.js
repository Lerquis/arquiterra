import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useValidation } from "../../hooks/useValidation";

export const TopbarAdministracion = ({
  mostrar = true,
  imagenesBorrar = false,
}) => {
  // ?Verificacion para saber si existe un usuario con sesion iniciada
  useValidation();

  const navigate = useNavigate();
  return (
    <div className="topbar-administracion">
      <h1 className="topbar-administracion-texto">
        Arquiterra<span>Panel Administrativo</span>
      </h1>
      <button
        type="button"
        className="boton-rojo cerrarSesion"
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Cerrar Sesion
      </button>
      {mostrar ? (
        <Link
          to={"/administracion/crearProyecto"}
          style={{ textDecoration: "none" }}
        >
          <button type="button" className="boton-rojo">
            Crear Proyecto
          </button>
        </Link>
      ) : (
        <Link to={-1} style={{ textDecoration: "none" }}>
          <button type="button" className="boton-rojo">
            Volver
          </button>
        </Link>
      )}
      {imagenesBorrar && (
        <Link
          to={"/administracion/eliminarImagenes"}
          style={{ textDecoration: "none" }}
        >
          <button type="button" className="boton-rojo">
            Eliminar Imagenes
          </button>
        </Link>
      )}
    </div>
  );
};
