import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bonos } from "../components/bonos/Bonos";
import { Contact } from "../components/contact/Contact";
import { HomePage } from "../components/homepage/HomePage";
import { Project } from "../components/project/Project";
import { Projects } from "../components/projects/Projects";
import { ScrollToTop } from "../hooks/ScrollToTop";

export const AppRouter = () => {
  // ?tenemos que poner el basename para que en gh-pages pueda
  // ?renderizar el roouter de manera correcta
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/project/:idProject" element={<Project />} />

          <Route path="/bonos" element={<Bonos />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
