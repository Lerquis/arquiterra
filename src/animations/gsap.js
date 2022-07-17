import { gsap } from "gsap";

if (window.innerWidth > 1200) {
  document.addEventListener("DOMContentLoaded", () => {
    // ?Esperamos a que cargue el documento para tener los elementos
    const lineas = document.querySelectorAll("#linea");
    if (lineas.length === 0) return;
    // ?Timeline para que cuando termine una animacion, comience
    // ?la otra
    let tl = gsap.timeline({
      repeat: 0,
      delay: 1,
    });
    lineas.forEach((linea) => {
      tl.from(document.querySelector(`.${linea.className}`), {
        duration: 0.35,
        background: "#2a2932",
      });
    });

    tl.from(document.querySelector(".landing-sloganFondo-desktop"), {
      duration: 1,
      x: -2000,
    });

    tl.from(
      document.querySelector(".landingPage-slider-desktop"),
      {
        duration: 1,
        x: -2000,
      },
      "-=1"
    );

    tl.from(
      document.querySelector(".desktop"),
      {
        duration: 1.5,
        opacity: 0,
      },
      // ?Es para que la animacion salga al mismo tiempo que la animacion
      // ?pasada
      "-=0.5"
    );

    tl.from(
      document.querySelector(".arrows"),
      {
        duration: 1.5,
        opacity: 0,
      },
      "-=1.5"
    );
  });
}
