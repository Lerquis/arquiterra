import React from "react";
import { useState, useEffect } from "react";
import { imgsSlider } from "../../helper/imgUrls";

export const ProjectInfo = () => {
  // ?Indices de la lista de imagenes
  const [index, setIndex] = useState(0);

  const lastIndex = imgsSlider.length - 1;

  // ?Para saber si se tiene que devolver a la ultima imagen o
  // ?a la primera
  useEffect(() => {
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  // ?Como se renderiza esto, se hace un intervalo de 5 segundos para
  // ?que se mueva solo. Al cambiarse el index se  activa el use effect
  // ?para saber si  tiene que ponerse de inicio o no
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    // ?Quitamos el intervalo  para que no se pongan encima de otros
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div
      className="projectInfo animate__animated notSeen"
      data-porcentaje="mitad"
      data-animacion="fadeIn"
    >
      <p className="marginSide">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
        vulputate massa interdum diam congue. Varius enim, gravida mauris sed.
        Sit ullamcorper eleifend habitasse aliquam nisl. Neque sed ultrices
        lacus dignissim.
      </p>

      <section className="projectInfo-slider">
        {imgsSlider.map((img, indx) => {
          return (
            <div
              className={
                indx === index ? "slideProject activeProject" : "slideProject"
              }
              key={indx}
            >
              {indx === index && (
                <img
                  className="projectInfo-backgroundImage"
                  src={`../assets/${img}.jpg`}
                />
              )}
            </div>
          );
        })}
        <div className="projectArrows">
          <button type="button">
            <svg
              className="projecrArrowLeft"
              viewBox="0 0 36 12"
              fill="none"
              onClick={() => {
                setIndex(index - 1);
              }}
            >
              <path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989592 6.3033 0.696699C6.01041 0.403805 5.53553 0.403805 5.24264 0.696699L0.46967 5.46967ZM1 6.75L36 6.75L36 5.25L1 5.25L1 6.75Z" />
            </svg>
          </button>

          <button type="button">
            <svg
              onClick={() => {
                setIndex(index + 1);
              }}
              viewBox="0 0 36 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="projectArrowRight"
            >
              <path
                d="M35.5303 6.53033C35.8232 6.23743 35.8232 5.76256 35.5303 5.46967L30.7574 0.696696C30.4645 0.403803 29.9896 0.403803 29.6967 0.696697C29.4038 0.98959 29.4038 1.46446 29.6967 1.75736L33.9393 6L29.6967 10.2426C29.4038 10.5355 29.4038 11.0104 29.6967 11.3033C29.9896 11.5962 30.4645 11.5962 30.7574 11.3033L35.5303 6.53033ZM6.55671e-08 6.75L35 6.75L35 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                fill="#2a2932"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};
