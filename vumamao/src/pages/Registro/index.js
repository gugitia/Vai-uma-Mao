import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiUsers } from "react-icons/fi";

import api from "../../services/api";

import logonobackground from "../../assets/logonobackground.png";

import "./styles.css";
import "../../global.css";

export default function Registro() {
  const [u_Nome, setName] = useState("");
  const [u_Email, setEmail] = useState("");
  const [u_Endereco, setEndereco] = useState("");
  const [u_Senha, setSenha] = useState("");
  const [u_Descricao, setDescricao] = useState("");
  const [u_Score, setScore] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      u_Email,
      u_Endereco,
      u_Nome,
      u_Senha,
      u_Descricao,
      u_Score,
    };
    console.log(data);
    try {
      const response = await api.post("usera", data);

      alert(`Seu ID de acesso: ${response.data.u_Id}`);
    } catch (err) {
      alert("erro no cadastro");
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img className="logo" src={logonobackground} alt="Logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e se torne nosso parceito !
          </p>
          <Link className="backlink" to="/">
            <FiArrowLeft size={16} />
            voltar
          </Link>
          <Link className="backlink" to="/lista">
            <FiUsers size={16} />
            usuarios
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="E-mail"
            value={u_Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nome"
            value={u_Nome}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={u_Senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            type="text"
            placeholder="Endereço"
            value={u_Endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descricao"
            value={u_Descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <input
            type="decimal"
            placeholder="Score"
            value={u_Score}
            onChange={(e) => setScore(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
