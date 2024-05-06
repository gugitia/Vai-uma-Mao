import React, { useEffect, useState } from "react";
import { FiTrash, FiPlus } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";

import AddServico from "./add-servico/app";
import DeletarServico from "./deletar-servico/app";

export default function Perfil() {
  const idUsuario = localStorage.getItem("u_Id");
  const [servicos, setServicos] = useState([]);
  const [componenteVisivelAdd, setComponenteVisivelAdd] = useState(false);
  const [componenteVisivelDel, setComponenteVisivelDel] = useState(false);

  const toggleComponenteAdd = () => {
    setComponenteVisivelAdd(!componenteVisivelAdd);
  };

  const toggleComponenteDel = () => {
    setComponenteVisivelDel(!componenteVisivelDel);
  };

  useEffect(() => {
    api
      .get("perfil", {
        headers: {
          Authorization: idUsuario,
        },
      })
      .then((response) => {
        setServicos(response.data.servicos);
      });
  }, [idUsuario]);

  const atualizarServicos = () => {
    api
      .get("perfil", {
        headers: {
          Authorization: idUsuario,
        },
      })
      .then((response) => {
        setServicos(response.data.servicos);
      });
  };

  return (
    <section className="perfil-servicos">
      <h3>Serviços cadastrados</h3>
      {servicos ? (
        <table className="lista-servico">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {servicos.map((servico) => (
              <tr key={servico.u_Id} className="linha">
                <td style={{ height: "50px" }}>{servico.servico_Id}</td>
                <td>{servico.servico_Tipo}</td>
                <td>{servico.servico_Valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Carregando...</p>
      )}

      <FiTrash className="del-servico" onClick={toggleComponenteDel} />

      <section className="edit-service">
        {componenteVisivelDel && (
          <DeletarServico
            atualizarServicos={atualizarServicos}
            toggleComponenteDel={toggleComponenteDel}
          />
        )}
      </section>

      <FiPlus className="add-servico" onClick={toggleComponenteAdd} />

      <section className="edit-service">
        {componenteVisivelAdd && (
          <AddServico
            atualizarServicos={atualizarServicos}
            toggleComponenteAdd={toggleComponenteAdd}
          />
        )}
      </section>
    </section>
  );
}
