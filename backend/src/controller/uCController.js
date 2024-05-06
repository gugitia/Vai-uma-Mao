const express = require("express");
const crypto = require("crypto");

const connection = require("../database/connection");

module.exports = {
  async list(request, response) {
    const lista = await connection("uCliente").select("*");

    return response.json(lista);
  },

  async create(request, response) {
    const { u_Nome, u_Email, u_Senha } = request.body;

    const u_Id = crypto.randomBytes(4).toString("HEX");

    await connection("uCliente").insert({
      u_Id,
      u_Nome,
      u_Email,
      u_Senha,
    });

    return response.json({ u_Id });
  },
};
