import React, { useState } from "react";

import api from "../../../services/api";

import "../../../global.css";

export default function DeletarServico(props) {
  const u_Id = localStorage.getItem("u_Id");
  const [servico_Id, SetServicoId] = useState("");
  console.log(u_Id);

  async function handleDelete(e) {
    e.preventDefault();
    console.log(servico_Id, u_Id);
    const data = {
      headers: {
        Authorization: u_Id,
      },
      data: {
        servico_Id: servico_Id,
      },
    };
    console.log(data);
    const response = await api.delete("servico", data);

    console.log(response.data);
    props.atualizarServicos();
    props.toggleComponenteDel();
  }
  return (
    <div className="edit-service-component">
      <br />
      <h2>Excluir</h2>
      <form onSubmit={handleDelete}>
        <input
          placeholder="id do seu serviço"
          value={servico_Id}
          onChange={(e) => SetServicoId(e.target.value)}
        />
        <button type="submit" className="edit-service-button">
          Excluir
        </button>
      </form>
    </div>
  );
}
