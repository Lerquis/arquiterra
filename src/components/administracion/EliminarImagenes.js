import React from "react";
import { useState, useEffect } from "react";
import { fetchFun } from "../../helper/fetch";
import { TopbarAdministracion } from "./TopbarAdministracion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { hover } from "@testing-library/user-event/dist/hover";
export const EliminarImagenes = () => {
  const [imagenesArray, setImagenesArray] = useState([]);
  const navigate = useNavigate();

  const handleDeleteImage = async (id) => {
    const data = await fetchFun(`images/${id}`, {}, "DELETE");
    const response = await data.json();

    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Imagen eliminada de la base de datos",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    getImages();
  };

  const getImages = async () => {
    const data = await fetchFun("images/imagenes");
    const response = await data.json();
    if (response.ok) {
      setImagenesArray(response.data);
    }
    if (response.data.length === 0) {
      navigate(-1);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="panelAdministrativo">
      <TopbarAdministracion mostrar={false} />

      <div className="tablaImagenes">
        {imagenesArray.map((imagen) => {
          return (
            <div className="tablaImagenes-datos" key={imagen.id}>
              <div className="tablaImagenes-texto">
                <p>{imagen.name}</p>
                <a href={imagen.link} target="__blank">
                  {imagen.link.length >= 18
                    ? imagen.link.slice(0, 18) + "..."
                    : imagen.link}
                </a>
                <p>{imagen.id}</p>
              </div>
              <button className="tablaImagenes-check">
                <AiOutlineCheckCircle
                  onClick={() => {
                    handleDeleteImage(imagen._id);
                  }}
                  size={30}
                  color={"green"}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
