import React from "react";
import { useForm } from "../../hooks/useForm";
import { enviarEmail } from "../../helper/email";

export const FooterContact = () => {
  const [values, handleInputChange, reset] = useForm({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const { nombre, apellido, telefono, email, mensaje } = values;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    enviarEmail(values);
    setTimeout(() => {
      reset();
    }, 1000);
  };

  return (
    <div
      className="footer animate__animated notSeen topbarObserver"
      data-animacion="fadeInDown"
      data-porcentaje="mitad"
    >
      <footer>
        <div className="footerContacto-titulo">
          <h2>Formulario de contacto</h2>
          <hr></hr>
        </div>
        <form className="" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-label"
              placeholder="Nombre"
              name="nombre"
              autoComplete="off"
              value={nombre}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-label"
              placeholder="Apellido"
              name="apellido"
              autoComplete="off"
              value={apellido}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-label"
              placeholder="Telefono"
              name="telefono"
              autoComplete="off"
              value={telefono}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-label"
              placeholder="Correo electronico"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              type="text"
              className="form-labelMensaje"
              placeholder=""
              name="mensaje"
              autoComplete="off"
              value={mensaje}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="boton-rojo">
            Enviar
          </button>
        </form>
      </footer>
    </div>
  );
};
