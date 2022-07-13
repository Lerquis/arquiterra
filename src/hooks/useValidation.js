import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFun } from "../helper/fetch";
import { client } from "../lib/client";
import { getAdmin } from "../utils/data";

// ?Hook para las paginas que ocupan una confirmacion del login del
// ?administrador

export const useValidation = () => {
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  useEffect(async () => {
    if (!localStorage.getItem("user")) return navigate("/");

    const data = await fetchFun("auth/administrador");
    const response = await data.json();

    if (!response.ok) return navigate("/");
    if (response.admin[0]._id !== localStorage.getItem("user"))
      return navigate("/");

    // ?Por si hay un cambio en el local storage
    window.addEventListener("storage", () => {
      window.removeEventListener("storage", () => {});
      setReload(true);
    });
  }, [reload, navigate]);
};
