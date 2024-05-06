const express = require("express");
const connection = require("../database/connection");

module.exports = {
  async listAll(request, response) {
    const lista = await connection("Ocorrencias").select("*");

    return response.json(lista);
  },

  async listByUserId(request, response) {
    const u_Id = request.headers.authorization;

    const lista = await connection("Ocorrencias")
      .where("uParceiro_Id", u_Id)
      .select("*");

    return response.json(lista);
  },

  async create(request, response) {
    const { Valor, servico_Id, uCliente_Id, uParceiro_Id } = request.body;

    const data = new Date();
    const { getFullYear, getMonth, getDate, getHours, getMinutes } = data;

    const [ocorrencia_Id] = await connection("Ocorrencias").insert({
      data,
      Valor,
      servico_Id,
      uCliente_Id,
      uParceiro_Id,
    });

    return response.json({
      ocorrencia_Id,
      data,
      Valor,
      servico_Id,
      uCliente_Id,
      uParceiro_Id,
    });
  },
  async delete(request, response) {
    const { ocorrencia_Id } = request.body;

    //const ocorrencia = await connection("Ocorrencias")
    //  .where("ocorrencia_Id", ocorrencia_Id)
    //  .select("*")
    //  .first();

    //if (servico.u_Id !== u_Id) {
    // return response.status(401).json({ error: "Operation not permitted" });
    //}

    await connection("Ocorrencias")
      .where("ocorrencia_Id", ocorrencia_Id)
      .delete();

    return response.status(204).send("OK");
  },
};
