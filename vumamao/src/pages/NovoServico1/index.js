import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logonobackground from "../../assets/logonobackground.png";

import "./styles.css";
import "../../global.css";

export default function RegistroServico() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img className="logo" src={logonobackground} alt="Logo" />
          <h1>Registrar serviço</h1>
          <p>Registre um novo serviço</p>
          <Link className="backlink" to="/perfil">
            <FiArrowLeft size={16} />
            voltar
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Nome do Serviço" />
          <input type="float" placeholder="Valor" />
          <button className="button" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
