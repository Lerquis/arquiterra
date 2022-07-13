import React, { useState, useLayoutEffect, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import Select from "react-select";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { fetchFun } from "../../helper/fetch";
import Swal from "sweetalert2";
import { AiFillDelete } from "react-icons/ai";

export const Formulario = ({ proyecto = {} }) => {
  const [loading, setLoading] = useState(true);
  const [tipoProyecto, setTipoProyecto] = useState("");
  const [defaultSelect, setDefaultSelect] = useState(0);

  const [previewSource, setPreviewSource] = useState("");
  const [imageArray, setImageArray] = useState([]);
  const [imageToUpload, setImageToUpload] = useState("");
  const [imagenCargada, setImagenCargada] = useState(false);
  const [imagenesBorrar, setImagenesBorrar] = useState([]);

  const [values, handleInputChange, reset] = useForm({
    nombre: "Proyecto ",
    medidas: "",
    ubicacion: "",
    descripcion: "",
  });
  const [msgError, setMsgError] = useState("");
  const [error, setError] = useState(false);

  let { nombre, medidas, ubicacion, descripcion } = values;

  const opciones = [
    { value: "", label: "Seleccione un tipo", isDisabled: true },
    { value: "Casa Individual", label: "Casa Individual" },
    { value: "Bono de Vivienda", label: "Bono de Vivienda" },
    { value: "Empresa", label: "Empresa" },
  ];

  const handleSaveProject = async (e) => {
    e.preventDefault();
    const newProyecto = {
      nombre,
      medidas,
      ubicacion,
      descripcion,
      tipoProyecto,
      images: imageArray,
    };
    if (
      nombre === "Proyecto " ||
      nombre === "" ||
      medidas === "" ||
      ubicacion === "" ||
      descripcion === "" ||
      tipoProyecto === "" ||
      imageArray.length === 0
    ) {
      setMsgError("Faltan datos para crear el proyecto");
      setError(true);
      setTimeout(() => {
        setMsgError("");
        setError(false);
      }, 3000);
      return;
    }
    if (imageArray.length < 3) {
      setMsgError(
        "Se recomienda tener al menos 3 imagenes para crear el proyecto"
      );
      setError(true);
      setTimeout(() => {
        setMsgError("");
        setError(false);
      }, 3000);
      return;
    } else {
      // ?Quiere decir que va a actualizar un proyecto
      let data, mensaje;
      if (proyecto.nombre !== undefined) {
        data = await fetchFun(`proyecto/${proyecto._id}`, newProyecto, "PUT");
        mensaje = "actualizado";
      }
      if (proyecto.nombre === undefined) {
        data = await fetchFun("proyecto/crearProyecto", newProyecto, "POST");
        mensaje = "creado";
      }

      const response = await data.json();

      imagenesBorrar.map(async (imagen) => {
        const { fileName, url, publicId } = imagen;
        const datos = { name: fileName, link: url, id: publicId };

        await fetchFun("images/agregarImagen", datos, "POST");
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: `Proyecto ${mensaje}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
      setTimeout(() => {
        window.scrollTo(0, 0);
        window.location.reload();
      }, 2100);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      setImageToUpload(file);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    // ?Form Data para tener los datos que vamos a subir a la pagina de Cloud
    const data = new FormData();
    data.append("file", imageToUpload);
    // ?Por si tenemos una carpeta donde guardemos las imagenes
    data.append("upload_preset", "arquiterraImages");
    uploadImage(data);
  };

  const uploadImage = async (data) => {
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/arquiterra/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await response.json();
      const { original_filename, public_id, signature, url } = file;

      // ?Tenemos los datos necesarios de la imagen para guardarlo en el
      // ?proyecto
      const dataImage = {
        fileName: original_filename,
        publicId: public_id,
        signature,
        url,
      };
      // ?Lista donde tenemos las imagenes de ese proyecto
      setImageArray((prevImageArray) => [...prevImageArray, dataImage]);
      setImagenCargada(true);
      setTimeout(() => {
        setImagenCargada(false);
      }, 2500);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteImage = async (imagen) => {
    // ?Borra la imagen que es igual
    const newImageArray = imageArray.filter((image) => image !== imagen);
    // ?Y guardamos el nuevo array de imagenes
    setImageArray(newImageArray);

    setImagenesBorrar((prevArray) => [...prevArray, imagen]);
  };

  useEffect(() => {
    if (proyecto.nombre !== undefined) {
      values.nombre = proyecto.nombre;
      values.medidas = proyecto.medidas;
      values.ubicacion = proyecto.ubicacion;
      values.descripcion = proyecto.descripcion;

      if (proyecto.tipoProyecto === "Casa Individual") {
        setDefaultSelect(1);
        setTipoProyecto("Casa Individual");
      }
      if (proyecto.tipoProyecto === "Bono de Vivienda") {
        setDefaultSelect(2);
        setTipoProyecto("Bono de Vivienda");
      }

      if (proyecto.tipoProyecto === "Empresa") {
        setDefaultSelect(3);
        setTipoProyecto("Empresa");
      }

      setImageArray(proyecto.images);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [proyecto]);

  if (loading) return <p>Cargando...</p>;

  return (
    <>
      <form className="formularioAdminsitrativo">
        <div className="formularioAdministrativo-div">
          <label>Nombre del Proyecto</label>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </div>

        <div className="formularioAdministrativo-div">
          <label>Medidas</label>
          <input
            placeholder="Solamente la medida"
            type="text"
            name="medidas"
            value={medidas}
            onChange={handleInputChange}
          />
        </div>

        <div className="formularioAdministrativo-div">
          <label>Ubicacion</label>
          <input
            type="text"
            name="ubicacion"
            value={ubicacion}
            onChange={handleInputChange}
          />
        </div>

        <div className="formularioAdministrativo-div">
          <label>Tipo de proyecto</label>
          <Select
            options={opciones}
            defaultValue={opciones[defaultSelect]}
            onChange={(e) => {
              setTipoProyecto(e.value);
            }}
          />
        </div>

        <div className="formularioAdministrativo-div">
          <label>Descripcion del proyecto</label>
          <textarea
            type="text"
            name="descripcion"
            value={descripcion}
            onChange={handleInputChange}
          />
        </div>

        <div className="formularioAdministrativo-imagenes">
          <input
            type="file"
            className="imagenesUser"
            name="image"
            onChange={handleFileInputChange}
          />
          {previewSource && (
            <>
              <img
                src={previewSource}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  objectFit: "cover",
                  height: "200px",
                  margin: "10px auto",
                }}
              />
              {imagenCargada && <p className="exito">Imagen Cargada</p>}
              <button
                type="button"
                className="boton-rojo"
                style={{ padding: ".8em", fontSize: ".8em", margin: "1em 0" }}
                onClick={handleSubmitFile}
              >
                Guardar Imagen
              </button>
            </>
          )}
        </div>
      </form>
      {imageArray.length > 0 && (
        <div className="imagenSlider">
          <Splide
            options={{
              perPage: 1,
              arrows: false,
              pagination: true,
              drag: "false",
              gap: "5rem",
            }}
          >
            {imageArray.map((imagen, index) => {
              return (
                <SplideSlide key={index}>
                  {/* <ImagenCard imagen={imagen.url} id={imagen.publicId} /> */}
                  <div className="accionesImagen">
                    <img
                      src={imagen.url}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                    <AiFillDelete
                      size={40}
                      color={"#ca2527"}
                      style={{
                        position: "absolute",
                        top: 25,
                        right: 25,
                        background: "rgba(255,255,255,.6)",
                        borderRadius: 50,
                        padding: ".3em",
                      }}
                      onClick={() => handleDeleteImage(imagen)}
                    />
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      )}
      {error && (
        <p className={`error ${!error ? "notSeen" : ""}`}>{msgError}</p>
      )}

      <button
        onClick={handleSaveProject}
        type="button"
        className="boton-rojo"
        style={{ margin: "1em 0" }}
      >
        {proyecto.nombre !== undefined
          ? "Actualizar Proyecto"
          : "Guardar Proyecto"}
      </button>
    </>
  );
};
