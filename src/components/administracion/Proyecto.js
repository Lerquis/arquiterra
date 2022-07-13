import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { fetchFun } from "../../helper/fetch";
import Swal from "sweetalert2";

export const Proyecto = ({ proyecto }) => {
  const navigate = useNavigate();

  const handleDeleteProject = async () => {
    const data = await fetchFun(`proyecto/${proyecto._id}`, {}, "DELETE");
    const response = await data.json();

    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Proyecto eliminado",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2100);
    }
  };
  return (
    <div className="proyectoInformacionAcciones">
      <div className="proyectoDatos">
        <img
          src={proyecto.images[0].url}
          alt="Imagen proyecto"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
          }}
        />
        <div className="proyectoDatos-texto">
          <p>
            <span>Nombre:</span> {proyecto.nombre}
          </p>
          <p>
            <span>Tipo:</span> {proyecto.tipoProyecto}
          </p>
        </div>
      </div>
      <div className="accionesProyecto">
        <button
          type="button"
          onClick={() => {
            navigate(`/administracion/editarProyecto/${proyecto._id}`);
          }}
        >
          <AiFillEdit size={"2em"} color={"#2a2932"} />
        </button>

        <button type="button" onClick={handleDeleteProject}>
          <AiFillDelete size={"2em"} color={"#ca2527"} />
        </button>
      </div>
    </div>
  );
};
