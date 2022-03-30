import React from "react";
import { FooterContact } from "../footerPag/FooterContact";
import { Topbar } from "../topbar/Topbar";
import { Info } from "./Info";
import { Map } from "./Map";

export const Contact = () => {
  return (
    <>
      <Topbar contact="true" />
      <Map />
      <Info />
      <FooterContact />
    </>
  );
};
