const express = require("express");
const connection = require("../database/connection");

module.exports = {
  async list(request, response) {
    const lista = await connection("uServico").select("*");

    return response.json(lista);
  },
  async create(request, response) {
    const { servico_Tipo, servico_Valor } = request.body;
    const u_Id = request.headers.authorization;

    const [servico_Id] = await connection("uServico").insert({
      u_Id,
      servico_Tipo,
      servico_Valor,
    });

    return response.json({ servico_Id, u_Id, servico_Tipo, servico_Valor });
  },
  async delete(request, response) {
    const { servico_Id } = request.body;
    const u_Id = request.headers.authorization;

    const servico = await connection("uServico")
      .where("servico_Id", servico_Id)
      .select("u_Id")
      .first();

    if (servico.u_Id !== u_Id) {
      return response.status(401).json({ error: "Operation not permitted" });
    }

    await connection("uServico").where("servico_Id", servico_Id).delete();

    return response.status(204).send();
  },
};
