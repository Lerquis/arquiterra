import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bonos } from "../components/bonos/Bonos";
import { Contact } from "../components/contact/Contact";
import { HomePage } from "../components/homepage/HomePage";
import { Project } from "../components/project/Project";
import { Projects } from "../components/projects/Projects";
import { Login } from "../components/login/Login";
import { PanelPrincipal } from "../components/administracion/PanelPrincipal";
import { CrearProyecto } from "../components/administracion/CrearProyecto";
import { EditarProyecto } from "../components/administracion/EditarProyecto";
import { ScrollToTop } from "../hooks/ScrollToTop";
import { EliminarImagenes } from "../components/administracion/EliminarImagenes";

export const AppRouter = () => {
  // ?tenemos que poner el basename para que en gh-pages pueda
  // ?renderizar el roouter de manera correcta
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* Esto esta aqui para que cuando entre a una pagina nueva, suba ya 
    que si no se queda donde quedo la pagina anterior */}
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/project/:idProject" element={<Project />} />

          <Route path="/bonos" element={<Bonos />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/administracion" element={<Login />} />

          <Route
            path="/administracion/panelPrincipal"
            element={<PanelPrincipal />}
          />

          <Route
            path="/administracion/crearProyecto"
            element={<CrearProyecto />}
          />

          <Route
            path="/administracion/editarProyecto/:idProject"
            element={<EditarProyecto />}
          />

          <Route
            path="/administracion/eliminarImagenes"
            element={<EliminarImagenes />}
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
