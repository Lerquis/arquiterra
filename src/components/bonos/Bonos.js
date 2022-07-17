import React from "react";
import { FooterPag } from "../footerPag/FooterPag";
import { Topbar } from "../topbar/Topbar";
import { BonoInformacion } from "./BonoInformacion";

export const Bonos = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".question-header");
    [...items].forEach((item) => {
      const plusSign = item.querySelector(".plus-sign");
      const answer = item.querySelector(".answer-to-questions");
      const elemnts = [plusSign, item, answer];

      plusSign.addEventListener("click", (e) => {
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }

        elemnts.forEach((e) => {
          e.classList.toggle("expanded");
        });
      });
    });
  });
  return (
    <>
      <Topbar />
      <BonoInformacion />
      <FooterPag />
    </>
  );
};
