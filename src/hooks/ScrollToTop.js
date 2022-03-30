import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";

// ?Hook porque el link de react-router-dom deja el scroll en donde
// ?quedo la pagina anterior, entonces esta funcion es para que
// ?cuando la pagina cambie, nos scrollee al tope de la pagina

export const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};
