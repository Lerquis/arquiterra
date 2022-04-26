import React from "react";
import { FooterPag } from "../footerPag/FooterPag";
import { Topbar } from "../topbar/Topbar";
import { BonoInformacion } from "./BonoInformacion";

export const Bonos = () => {
  return (
    <>
      <Topbar />
      <BonoInformacion />
      <FooterPag />
    </>
  );
};
