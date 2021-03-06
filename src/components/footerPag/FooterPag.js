import React from "react";
import { useForm } from "../../hooks/useForm";
import { enviarEmail } from "../../helper/email";

export const FooterPag = ({ url = "./" }) => {
  // TODO: useForm y enviar correo

  const [values, handleInputChange, reset] = useForm({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const { nombre, apellido, telefono, email, mensaje } = values;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    enviarEmail(values);
    setTimeout(() => {
      reset();
    }, 1000);
  };

  window.addEventListener("load", () => {
    const footer = document.querySelector(".footer");
    const footerBottom = Math.round(footer.getBoundingClientRect().bottom);
    const documentHeight = document.documentElement.offsetHeight;

    if (documentHeight > footerBottom) {
      footer.classList.add("footerAbsolute");
    } else {
      footer.classList.remove("footerAbsolute");
    }
    window.addEventListener("resize", () => {
      if (documentHeight > footerBottom) {
        footer.classList.add("footerAbsolute");
      } else {
        footer.classList.remove("footerAbsolute");
      }
    });
  });
  return (
    <div
      className="footer animacion animate__animated notSeen topbarObserver footer"
      data-animacion="fadeInDown"
      data-porcentaje="mitad"
    >
      <div className="footer-info">
        <div className="footer-contentFila">
          <div className="footer-content marginSide">
            <p className="footer-contentParrafo">
              Llamanos y hablamos de tus ideas
            </p>

            <div className="footer-contentTelefonos">
              <p className="footer-contentData">+506 2460-45-61</p>
              <p className="footer-contentData">+506 8330-82-16</p>
            </div>

            <p className="footer-contentParrafo">
              O contactanos mediante nuestras redes sociales
            </p>

            <div className="footer-contentRedes">
              <a href="https://www.facebook.com/Arquiterracr" target="__blank">
                <svg viewBox="0 0 21 40" fill="none">
                  <g clipPath="url(#clip0_79_498)">
                    <path
                      d="M5.74226 40V21.2308H0.779297V14.473H5.74226V8.701C5.74226 4.16528 8.6739 0 15.429 0C18.1641 0 20.1865 0.2622 20.1865 0.2622L20.0271 6.57284C20.0271 6.57284 17.9646 6.55276 15.7138 6.55276C13.2778 6.55276 12.8875 7.67536 12.8875 9.5386V14.473H20.2208L19.9017 21.2308H12.8875V40H5.74226Z"
                      fill="#CA2527"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_79_498">
                      <rect
                        width="19.4415"
                        height="40"
                        fill="white"
                        transform="translate(0.779297)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/arquiterracr/"
                target="__blank"
              >
                <svg viewBox="0 0 41 40" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2213 1.77675C15.1763 1.68675 15.7996 1.66675 20.7796 1.66675C25.7596 1.66675 26.383 1.68841 28.3363 1.77675C30.2896 1.86508 31.623 2.17675 32.7896 2.62841C34.0113 3.09008 35.1196 3.81175 36.0363 4.74508C36.9696 5.66008 37.6896 6.76675 38.1496 7.99008C38.603 9.15675 38.913 10.4901 39.003 12.4401C39.093 14.3984 39.113 15.0217 39.113 20.0001C39.113 24.9801 39.0913 25.6034 39.003 27.5584C38.9146 29.5084 38.603 30.8417 38.1496 32.0084C37.6896 33.2319 36.9684 34.3404 36.0363 35.2567C35.1196 36.1901 34.0113 36.9101 32.7896 37.3701C31.623 37.8234 30.2896 38.1334 28.3396 38.2234C26.383 38.3134 25.7596 38.3334 20.7796 38.3334C15.7996 38.3334 15.1763 38.3117 13.2213 38.2234C11.2713 38.1351 9.93796 37.8234 8.77129 37.3701C7.54782 36.91 6.43932 36.1888 5.52296 35.2567C4.59026 34.3412 3.86848 33.2332 3.40796 32.0101C2.95629 30.8434 2.64629 29.5101 2.55629 27.5601C2.46629 25.6017 2.44629 24.9784 2.44629 20.0001C2.44629 15.0201 2.46796 14.3967 2.55629 12.4434C2.64462 10.4901 2.95629 9.15675 3.40796 7.99008C3.86916 6.76688 4.59149 5.65894 5.52462 4.74341C6.43969 3.81092 7.54708 3.08915 8.76962 2.62841C9.93629 2.17675 11.2696 1.86675 13.2196 1.77675H13.2213ZM28.188 5.07675C26.2546 4.98841 25.6746 4.97008 20.7796 4.97008C15.8846 4.97008 15.3046 4.98841 13.3713 5.07675C11.583 5.15841 10.613 5.45675 9.96629 5.70841C9.11129 6.04175 8.49962 6.43675 7.85796 7.07841C7.2497 7.67017 6.78159 8.39055 6.48796 9.18675C6.23629 9.83341 5.93796 10.8034 5.85629 12.5917C5.76796 14.5251 5.74962 15.1051 5.74962 20.0001C5.74962 24.8951 5.76796 25.4751 5.85629 27.4084C5.93796 29.1967 6.23629 30.1667 6.48796 30.8134C6.78129 31.6084 7.24962 32.3301 7.85796 32.9217C8.44962 33.5301 9.17129 33.9984 9.96629 34.2917C10.613 34.5434 11.583 34.8417 13.3713 34.9234C15.3046 35.0117 15.883 35.0301 20.7796 35.0301C25.6763 35.0301 26.2546 35.0117 28.188 34.9234C29.9763 34.8417 30.9463 34.5434 31.593 34.2917C32.448 33.9584 33.0596 33.5634 33.7013 32.9217C34.3096 32.3301 34.778 31.6084 35.0713 30.8134C35.323 30.1667 35.6213 29.1967 35.703 27.4084C35.7913 25.4751 35.8096 24.8951 35.8096 20.0001C35.8096 15.1051 35.7913 14.5251 35.703 12.5917C35.6213 10.8034 35.323 9.83341 35.0713 9.18675C34.738 8.33175 34.343 7.72008 33.7013 7.07841C33.1095 6.4702 32.3891 6.0021 31.593 5.70841C30.9463 5.45675 29.9763 5.15841 28.188 5.07675V5.07675ZM18.438 25.6517C19.7457 26.1961 21.2019 26.2696 22.5578 25.8596C23.9138 25.4496 25.0853 24.5816 25.8723 23.4038C26.6593 22.226 27.013 20.8115 26.873 19.4019C26.733 17.9923 26.108 16.675 25.1046 15.6751C24.465 15.0359 23.6916 14.5464 22.8402 14.242C21.9887 13.9375 21.0803 13.8257 20.1804 13.9144C19.2806 14.0032 18.4115 14.2904 17.636 14.7553C16.8604 15.2202 16.1975 15.8513 15.6951 16.6032C15.1927 17.355 14.8633 18.2089 14.7305 19.1033C14.5977 19.9978 14.6649 20.9106 14.9272 21.7759C15.1895 22.6413 15.6404 23.4378 16.2475 24.1079C16.8546 24.7781 17.6027 25.3054 18.438 25.6517ZM14.1163 13.3367C14.9913 12.4617 16.0302 11.7676 17.1735 11.294C18.3167 10.8204 19.5421 10.5767 20.7796 10.5767C22.0171 10.5767 23.2425 10.8204 24.3858 11.294C25.5291 11.7676 26.5679 12.4617 27.443 13.3367C28.318 14.2118 29.0121 15.2506 29.4857 16.3939C29.9593 17.5372 30.203 18.7626 30.203 20.0001C30.203 21.2376 29.9593 22.463 29.4857 23.6062C29.0121 24.7495 28.318 25.7884 27.443 26.6634C25.6757 28.4306 23.2789 29.4235 20.7796 29.4235C18.2804 29.4235 15.8835 28.4306 14.1163 26.6634C12.3491 24.8962 11.3562 22.4993 11.3562 20.0001C11.3562 17.5008 12.3491 15.104 14.1163 13.3367V13.3367ZM32.293 11.9801C32.5098 11.7755 32.6834 11.5295 32.8035 11.2567C32.9235 10.9839 32.9876 10.6897 32.992 10.3916C32.9963 10.0936 32.9408 9.79766 32.8288 9.52143C32.7167 9.2452 32.5503 8.99427 32.3396 8.78348C32.1288 8.57269 31.8778 8.40634 31.6016 8.29428C31.3254 8.18221 31.0295 8.12671 30.7314 8.13105C30.4333 8.1354 30.1392 8.1995 29.8663 8.31957C29.5935 8.43965 29.3475 8.61324 29.143 8.83008C28.7451 9.2518 28.5273 9.81195 28.5358 10.3916C28.5442 10.9713 28.7783 11.5249 29.1882 11.9348C29.5982 12.3448 30.1517 12.5788 30.7314 12.5872C31.3111 12.5957 31.8712 12.3779 32.293 11.9801V11.9801Z"
                    fill="#CA2527"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <form className="marginSide" onSubmit={handleOnSubmit}>
          <p className="footer-contentParrafo">
            Tambien puedes dejarnos tus datos con tus preguntas y nos pondremos
            en contacto contigo
          </p>
          <div className="form-group">
            <input
              type="text"
              className="form-label"
              placeholder="Nombre"
              name="nombre"
              autoComplete="off"
              value={nombre}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-label"
              placeholder="Apellido"
              name="apellido"
              autoComplete="off"
              value={apellido}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-label"
              placeholder="Telefono"
              name="telefono"
              autoComplete="off"
              value={telefono}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-label"
              placeholder="Correo electronico"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <label>Mensaje</label>
          <div className="form-group">
            <textarea
              type="text"
              className="form-labelMensaje"
              placeholder=""
              name="mensaje"
              autoComplete="off"
              value={mensaje}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="boton-rojo"
            style={{ fontSize: "1em" }}
          >
            Enviar
          </button>
        </form>
      </div>
      <div className="footer-logo">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Logo.svg`}
          onClick={() => {
            window.scrollTo(0, 0);
            document.querySelector(".topbar-fixed").classList.add("show");
          }}
        />
      </div>
    </div>
  );
};
