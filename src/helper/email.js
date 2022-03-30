import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const verificarDatos = (values) => {
  if (!values.nombre) {
    return { status: "error", msg: "El nombre es requerido" };
  }
  if (!values.email && !values.telefono) {
    return {
      status: "error",
      msg: "Telefono o correo electronico es requerido",
    };
  }
  if (!values.mensaje) {
    return {
      status: "error",
      msg: "Dejanos tu mensaje!",
    };
  }
};

export const enviarEmail = (values) => {
  const error = verificarDatos(values);
  if (error)
    return Swal.fire({
      icon: "error",
      title: "Faltan datos!",
      text: error.msg,
    });
  emailjs
    .send("service_yy8fogu", "template_x1li3re", values, "PbixiwkCt19jA3NwA")
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado correctamente",
        text: "Te contactaremos lo mas pronto posible",
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salio mal, contactanos de otra manera!",
      });
    });
};
