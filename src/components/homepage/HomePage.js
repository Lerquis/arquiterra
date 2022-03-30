import React, { useEffect, useState } from "react";
import { FooterPag } from "../footerPag/FooterPag";
import { Topbar } from "../topbar/Topbar";
import { LandingPage } from "./LandingPage";
import { NuestrosServicios } from "./NuestrosServicios";
import { Proyectos } from "./Proyectos";

export const HomePage = () => {
  return (
    <>
      <Topbar />
      <LandingPage />
      <NuestrosServicios />
      <Proyectos />
      <FooterPag />
    </>
  );
};
