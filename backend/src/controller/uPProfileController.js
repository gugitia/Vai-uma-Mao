const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const u_Id = request.headers.authorization;

    const servicos = await connection("uServico")
      .where("u_Id", u_Id)
      .select("*");

    const result = { servicos };
    return response.json(result);
  },
};
