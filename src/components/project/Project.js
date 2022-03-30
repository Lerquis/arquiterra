import React from "react";
import { Topbar } from "../topbar/Topbar";
import { ProjectInfo } from "./ProjectInfo";
import { ProjectLanding } from "./ProjectLanding";
import { FooterPag } from "../footerPag/FooterPag";

export const Project = () => {
  return (
    <>
      <Topbar url={"../"} />
      <ProjectLanding />
      <ProjectInfo />
      <FooterPag url={"../"} />
    </>
  );
};
