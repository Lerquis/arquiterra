import React from "react";
import { FooterPag } from "../footerPag/FooterPag";
import { Topbar } from "../topbar/Topbar";
import { ProjectsLanding } from "./ProjectsLanding";
import { ProjectsShow } from "./ProjectsShow";

export const Projects = () => {
  return (
    <>
      <Topbar />
      <ProjectsLanding />
      <div className="projects-projects">
        <ProjectsShow />
        <ProjectsShow />
        <ProjectsShow />
        <ProjectsShow />
      </div>

      <FooterPag />
    </>
  );
};
