import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiStar, FiEdit } from "react-icons/fi";

import logonobackground from "../../assets/logonobackground.png";
import pfp from "../../assets/pfp.jpg";
import PerfilServicos from "../../Components/perfil-servicos/app";
import PerfilHistorico from "../../Components/perfil-historico/app";
import Grafico from "../../Components/grafico-nServico/Graphics";

import "./styles.css";
import "../../global.css";

export default function Perfil() {
  const idUsuario = localStorage.getItem("u_Id");
  const nomeUsuario = localStorage.getItem("u_Nome");
  const scoreUsuario = localStorage.getItem("u_Score");
  const enderecoUsuario = localStorage.getItem("u_Endereco");
  const descricaoUsuario = localStorage.getItem("u_Descricao");

  return (
    <div className="perfil-container-header">
      <div className="content">
        <header>
          <img className="logo" src={logonobackground} alt="Logo" />
          <Link className="backlink" to="/">
            <FiArrowLeft size={16} />
            voltar
          </Link>
        </header>
        <section className="perfil-container">
          <img src={pfp} alt="Foto de perfil" className="perfil-foto" />
          <h3>
            {nomeUsuario}, id {idUsuario}
          </h3>
          <p>
            {scoreUsuario}
            <FiStar size={14} />
          </p>

          <p>
            Descrição: {descricaoUsuario} <FiEdit className="add-buttom" />
          </p>
          <p>
            Endereço: {enderecoUsuario} <FiEdit className="add-buttom" />
          </p>
        </section>
        <section className="perfil-servicos">
          <PerfilServicos />
        </section>
        <section className="perfil-historico">
          <PerfilHistorico />
        </section>
        <section className="grafico">
          <h3>Serviço ultimo mes</h3>
          <Grafico />
        </section>
      </div>
    </div>
  );
}
