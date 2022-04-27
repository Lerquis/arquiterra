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
    });
    lineas.forEach((linea) => {
      tl.from(document.querySelector(`.${linea.className}`), {
        duration: 0.35,
        y: 2000,
      });
    });

    tl.from(document.querySelector(".landing-sloganFondo-desktop"), {
      duration: 1,
      x: -1000,
    });

    tl.from(document.querySelector(".landingPage-slider-desktop"), {
      duration: 1,
      x: -2000,
    });

    tl.from(
      document.querySelector(".desktop"),
      {
        duration: 1.5,
        x: 2000,
      },
      // ?Es para que la animacion salga al mismo tiempo que la animacion
      // ?pasada
      "-=1.5"
    );

    tl.from(
      document.querySelector(".arrows"),
      {
        duration: 1.5,
        x: 1000,
      },
      "-=1.5"
    );
  });
}
