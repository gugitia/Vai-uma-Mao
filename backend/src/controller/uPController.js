const express = require("express");
const crypto = require("crypto");

const connection = require("../database/connection");

module.exports = {
  async list(request, response) {
    const lista = await connection("uParceiro").select("*");

    return response.json(lista);
  },

  async create(request, response) {
    const { u_Nome, u_Email, u_Senha, u_Endereco, u_Descricao, u_Score } =
      request.body;

    const u_Id = crypto.randomBytes(4).toString("HEX");

    await connection("uParceiro").insert({
      u_Id,
      u_Nome,
      u_Email,
      u_Senha,
      u_Endereco,
      u_Descricao,
      u_Score,
    });

    return response.json({ u_Id });
  },
};
