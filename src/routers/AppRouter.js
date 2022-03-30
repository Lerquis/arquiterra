import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "../components/contact/Contact";
import { HomePage } from "../components/homepage/HomePage";
import { Project } from "../components/project/Project";
import { Projects } from "../components/projects/Projects";
import { ScrollToTop } from "../hooks/ScrollToTop";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/project/:idProject" element={<Project />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
