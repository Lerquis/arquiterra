// ?Para realizar las peticiones
const baseUrl = "https://arquiterra-backend.herokuapp.com/api";

export const fetchFun = (endpoint, data, method = "GET") => {
  // ?localhost:4000/api/events/ por ejemplo
  const url = `${baseUrl}/${endpoint}`;

  // ?Si solo queremos pedir informacion
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      // ?El tipo de informacion que maneja el header
      headers: {
        "Content-type": "application/json",
      },
      // ?Pasamos el objeto de los datos, a un JSON para enviarlo
      // ?como el contenido
      body: JSON.stringify(data),
    });
  }
};
