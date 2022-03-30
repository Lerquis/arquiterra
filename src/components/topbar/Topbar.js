import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Topbar = ({ url = "./", contact = "" }) => {
  const [width, setWidth] = useState(window.innerWidth);
  // TODO: Redireccionar al homepage y al contactanos

  const handleHomePage = () => {
    console.log("Homepage");
  };
  const handleContact = () => {
    console.log("Contactanos");
  };

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  useEffect(() => {
    const landingObserver = document.querySelector(".landingObserver");
    if (landingObserver) {
      if (width > 768) {
        observerTopbar.observe(landingObserver);
      }
    } else {
      const topbar = document.querySelector(".topbar-fixed");
      topbar.classList.add("show");
    }
  }, [width]);

  const observerTopbar = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        //console.log(entry);
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
    const landingObserver = document.querySelector(".landingObserver");
    const footer = document.querySelector(".footer");
    if (landingObserver) {
      if (width > 767) {
        observerTopbar.observe(landingObserver);
      }
    } else {
      const topbar = document.querySelector(".topbar-fixed");
      topbar.classList.add("show");
    }

    observerFooter.observe(footer);
  });

  return (
    <>
      <div className="topbar">
        <div className="topbar-fixed">
          <Link to="/" className="noBorder">
            <div className="logo">
              <img src={`${url}assets/Logo.svg`} onClick={handleHomePage} />
            </div>
          </Link>
          {contact !== "true" && (
            <Link to="/contact" className="noBorder">
              <button
                type="button"
                className="boton-Contactanos"
                onClick={handleContact}
              >
                Contactanos
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
