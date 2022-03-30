import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const Map = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Control") {
        const map = document.querySelector(".leaflet-container");
        map.classList.toggle("negativeZindex");
      }
    });
  });
  const position = [10.325242, -84.431761];
  return (
    <div
      className="map negativeZindex animate__animated"
      data-porcentaje="mitad"
      data-animacion="fadeInDown"
    >
      <p>
        Si estas en computadora, presiona la tecla
        <span> control</span> para activar funciones del mapa.
      </p>
      <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
