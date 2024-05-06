import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";
import "../../global.css";
import api from "../../services/api";

import logonobackground from "../../assets/logonobackground.png";
import handshake from "../../assets/handshake.jpg";

export default function Logon() {
  const [u_Id, setId] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("login", { u_Id });

      console.log(response.data.u_Nome);

      localStorage.setItem("u_Id", u_Id);
      localStorage.setItem("u_Nome", response.data.u_Nome);
      localStorage.setItem("u_Endereco", response.data.u_Endereco);
      localStorage.setItem("u_Score", response.data.u_Score);
      localStorage.setItem("u_Descricao", response.data.u_Descricao);

      navigate("/perfil");
    } catch (err) {
      alert("falha de login");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img className="logo" src={logonobackground} alt="Logo" />

        <form onSubmit={handleLogin}>
          <h1> Faça seu login</h1>

          <input
            placeholder="seu id"
            value={u_Id}
            onChange={(e) => setId(e.target.value)}
          />

          <button type="submit">Entrar</button>

          <br />
          <Link className="backlink" to="/registro">
            <FiLogIn size={16} />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img className="foto" src={handshake} alt="Handshake" />
    </div>
  );
}
