const observerParallax = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target;
    if (entry.isIntersecting) {
      target.classList.toggle("scroll");
    } else {
      target.classList.remove("scroll");
    }
  });
});

const observerAnimacionCompleta = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio === 1) {
        if (entry.target.dataset.animacion === "fadeInUp") {
          entry.target.classList.add("animate__fadeInUp", "animate__faster");
        }
        if (entry.target.dataset.animacion === "fadeInDown") {
          entry.target.classList.add("animate__fadeInDown");
        } else {
          entry.target.classList.add(
            "animate__fadeIn",
            "animate__delay",
            "animate__slower"
          );
        }

        entry.target.classList.remove("notSeen");
      }
    });
  },
  {
    threshold: 1,
  }
);

const observerAnimacionMitad = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.5) {
        if (entry.target.dataset.animacion === "fadeInUp") {
          entry.target.classList.add("animate__fadeInUp");
        }
        if (entry.target.dataset.animacion === "fadeInDown") {
          entry.target.classList.add("animate__fadeInDown");
        }
        if (entry.target.dataset.animacion === "fadeIn") {
          entry.target.classList.add("animate__fadeIn");
        }
        if (entry.target.dataset.animacion === "fadeInLeft") {
          entry.target.classList.add("animate__fadeInLeft");
        }
        if (entry.target.dataset.animacion === "fadeInRight") {
          entry.target.classList.add("animate__fadeInRight");
        }
        entry.target.classList.remove("notSeen");
      }
    });
  },
  { threshold: 0.5 }
);

window.addEventListener("scroll", () => {
  const targets = document.querySelectorAll(".parallax");
  const animaciones = document.querySelectorAll(".animate__animated");

  targets.forEach((target) => {
    observerParallax.observe(target);
  });

  animaciones.forEach((animacion) => {
    if (animacion.dataset.porcentaje === "mitad") {
      observerAnimacionMitad.observe(animacion);
    } else {
      observerAnimacionCompleta.observe(animacion);
    }
  });

  const target = document.querySelector(".scroll");
  if (target) {
    const datosTarget = target.getBoundingClientRect();

    let pos = datosTarget.top * target.dataset.rate * -1;

    if (target.dataset.direction === "vertical") {
      //target.style.transform = "translate3d(0px," + pos + "px,0px";
      target.style.transform = "translateY(" + pos + "px)";
    }
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".parallax");
  const animaciones = document.querySelectorAll(".animate__animated");

  targets.forEach((target) => {
    observerParallax.observe(target);
  });

  animaciones.forEach((animacion) => {
    if (animacion.dataset.porcentaje === "mitad") {
      observerAnimacionMitad.observe(animacion);
    } else {
      observerAnimacionCompleta.observe(animacion);
    }
  });

  setTimeout(() => {
    const target = document.querySelector(".scroll");
    if (target) {
      const datosTarget = target.getBoundingClientRect();

      let pos = datosTarget.top * target.dataset.rate * -1;

      if (target.dataset.direction === "vertical") {
        target.style.transform = "translateY(" + pos + "px)";
      }
    }
  }, 100);
});
