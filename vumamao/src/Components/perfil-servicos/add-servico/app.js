import React, { useState } from "react";

import api from "../../../services/api";

import "../../../global.css";

export default function AddServico(props) {
  const u_Id = localStorage.getItem("u_Id");
  const [servico_Tipo, SetServicoTipo] = useState("");
  const [servico_Valor, SetServicoValor] = useState("");

  async function handleInsert(e) {
    e.preventDefault();
    const data = {
      headers: {
        Authorization: u_Id,
      },
      data: {
        servico_Tipo: servico_Tipo,
        servico_Valor: servico_Valor,
      },
    };
    console.log(data);
    const response = await api.post(
      "servico",
      {
        servico_Tipo: servico_Tipo,
        servico_Valor: servico_Valor,
      },
      {
        headers: {
          Authorization: u_Id,
        },
      }
    );

    console.log(response.data);
    props.atualizarServicos();
    props.toggleComponenteAdd();
  }
  return (
    <div className="edit-service-component">
      <br />
      <h2>Adicionar serviço !</h2>
      <form onSubmit={handleInsert}>
        <input
          placeholder="Qual o tipo de serviço ?"
          value={servico_Tipo}
          onChange={(e) => SetServicoTipo(e.target.value)}
        />
        <input
          placeholder="Qual o valor do serviço ?"
          value={servico_Valor}
          onChange={(e) => SetServicoValor(e.target.value)}
        />
        <button type="submit" className="edit-service-button">
          Adicionar
        </button>
      </form>
    </div>
  );
}
