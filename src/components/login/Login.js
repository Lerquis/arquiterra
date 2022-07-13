import React, { useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { client } from "../../lib/client";
import { getAdmin } from "../../utils/data";
import { useNavigate } from "react-router-dom";

import { fetchFun } from "../../helper/fetch";

export const Login = () => {
  const [error, setError] = useState(false);
  const [admin, setAdmin] = useState({});

  const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
    name: "",
    password: "",
  });

  const { name, password } = values;

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await fetchFun("auth/login", values, "POST");
    const response = await data.json();
    if (response.ok) {
      reset();
      localStorage.setItem("user", response.admin._id);
      navigate("/administracion/panelPrincipal");
    } else {
      reset();
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  useEffect(async () => {
    const data = await fetchFun("auth/administrador");
    const response = await data.json();
    if (response.ok) {
      if (localStorage.getItem("user") === response.admin[0]._id)
        return navigate("/administracion/panelPrincipal");
    }
  }, [navigate]);

  return (
    <div className="login">
      <h1 className="textoLogin">Arquiterra Administracion</h1>
      <p className={`error ${!error ? "notSeen" : ""}`}>Datos incorrectos</p>
      <form className="formLogin" autoComplete="off">
        <input
          type="text"
          placeholder="Usuario"
          name="name"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Contrasena"
          name="password"
          value={password}
          onChange={handleInputChange}
        />

        <button type="submit" className="boton-rojo" onClick={handleLogin}>
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};
