import React, { useEffect, useState } from "react";
import { FooterPag } from "../footerPag/FooterPag";
import { Topbar } from "../topbar/Topbar";
import { LandingPage } from "./LandingPage";
import { NuestrosServicios } from "./NuestrosServicios";
import { Proyectos } from "./Proyectos";

import "../../animations/gsap";
import { Nosotros } from "./Nosotros";

export const HomePage = () => {
  return (
    <>
      <div className="lineas">
        <div className="linea1" id="linea"></div>
        <div className="linea2" id="linea"></div>
        <div className="linea3" id="linea"></div>
        <div className="linea4" id="linea"></div>
        <div className="linea5" id="linea"></div>
      </div>
      <Topbar />
      <LandingPage />
      <NuestrosServicios />
      <Nosotros />
      <Proyectos />
      <FooterPag />
    </>
  );
};
