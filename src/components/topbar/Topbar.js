import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Topbar = ({ url = "./", contact = "" }) => {
  const observerFooter = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const topbar = document.querySelector(".topbar-fixed");
        if (entry.isIntersecting) {
          topbar.classList.remove("show");
        } else {
          topbar.classList.add("show");
        }
      });
    },
    { threshold: 0.5 }
  );

  document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");
    observerFooter.observe(footer);
  });

  document.addEventListener("scroll", () => {
    const footer = document.querySelector(".footer");
    observerFooter.observe(footer);
  });

  return (
    <>
      <div className="topbar">
        <div className="topbar-fixed show">
          <Link to="/" className="noBorder">
            <div className="logo">
              <img src={`${process.env.PUBLIC_URL}/assets/Logo.svg`} />
            </div>
          </Link>
          {contact !== "true" && (
            <Link to="/contact" className="noBorder">
              <button type="button" className="boton-Contactanos">
                Contactanos
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
