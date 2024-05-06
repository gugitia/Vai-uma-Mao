import React, { useState, useEffect } from "react";

import api from "../../services/api";

import "../../global.css";
import "./styles.css";

export default function AddServico(props) {
  const idUsuario = localStorage.getItem("u_Id");
  const [ocorrencias, setOcorrencias] = useState([]);

  useEffect(() => {
    api
      .get("ocorrencia", {
        headers: {
          Authorization: idUsuario,
        },
      })
      .then((response) => {
        setOcorrencias(response.data);
      });
  }, [idUsuario]);

  return (
    <section className="servico-log">
      <h3>Historico</h3>
      {ocorrencias ? (
        <table className="lista-ocorrencia">
          <thead>
            <tr>
              <th>ID</th>
              <th>Serviço</th>
              <th>Cliente</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {ocorrencias.map((ocorrencia) => (
              <tr key={ocorrencia.ocorrencia_Id} className="linha">
                <td>{ocorrencia.ocorrencia_Id}</td>
                <td>{ocorrencia.servico_Id}</td>
                <td>{ocorrencia.uCliente_Id}</td>
                <td>{ocorrencia.Valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando...</p>
      )}
    </section>
  );
}
