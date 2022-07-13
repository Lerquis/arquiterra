export default {
  // ?Lo primero que seteamos es la tabla
  name: "proyecto",
  title: "Proyecto",
  type: "document",
  // ?Ahora que atributos va a tener esa tabla
  fields: [
    {
      name: "nombreProyecto",
      title: "Nombre Proyecto",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      // ?Un array de archivos de imagenes
      of: [{ type: "image" }],
      options: {
        // ?Es para recortar la imagen de manera automatica para que
        // ?se vea mejor
        hotspot: true,
      },
    },
    {
      // ?Es como un generador unico de nombres
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "medidas",
      title: "Medidas",
      type: "string",
    },
    {
      name: "ubicacion",
      title: "Ubicacion",
      type: "string",
    },
    {
      name: "tipoProyecto",
      title: "Tipo de proyecto",
      type: "string",
    },
    {
      name: "descripcion",
      title: "Descripcion",
      type: "string",
    },
  ],
};
