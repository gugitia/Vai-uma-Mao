import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import logonobackground from "../../assets/logonobackground.png";

import "./styles.css";
import "../../global.css";

export default function Listar() {
  const [usuarios, setUsuarios] = useState(null);

  useEffect(() => {
    api.get("usera").then((response) => {
      setUsuarios(response.data);
    });
  }, []);
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img className="logo" src={logonobackground} alt="Logo" />
          <h1>Usuarios</h1>
          {usuarios ? (
            <ul className="lista">
              {usuarios.map((usuario) => (
                <li key={usuario.u_Id}>
                  {usuario.u_Id}
                  <br />
                  {usuario.u_Nome}
                  <br />
                  {usuario.u_Email}
                  <br />
                  {usuario.u_Endereco}
                </li>
              ))}
            </ul>
          ) : (
            <p>Carregando...</p>
          )}
          <Link className="backlink" to="/">
            <FiArrowLeft size={16} />
            voltar
          </Link>
        </section>
      </div>
    </div>
  );
}
