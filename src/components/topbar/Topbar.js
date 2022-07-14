import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Topbar = ({ show = true, contact }) => {
  const [location, setLocation] = useState("");
  const observerFooter = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const topbar = document.querySelector(".topbar-fixed");
        if (entry.isIntersecting) {
          topbar.classList.remove("show");
        } else {
          if (window.scrollY != 0) {
            topbar.classList.add("show");
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  window.addEventListener("load", () => {
    const footer = document.querySelector(".footer");
    observerFooter.observe(footer);
  });

  document.addEventListener("scroll", () => {
    const footer = document.querySelector(".footer");
    observerFooter.observe(footer);
  });

  useEffect(() => {
    setLocation(window.location.pathname);
    setTimeout(() => {
      const topbar = document.querySelector(".topbar-fixed");
      topbar.classList.add("show");
    }, 3500);
  }, [location]);

  return (
    <>
      <div className="topbar">
        <div className={show ? "topbar-fixed show" : "topbar-fixed"}>
          <Link to="/" className="noBorder">
            <div className="logo">
              <img
                src={`${process.env.PUBLIC_URL}/assets/Logo.svg`}
                alt="Logo"
              />
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
