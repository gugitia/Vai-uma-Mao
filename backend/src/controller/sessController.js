const connection = require("../database/connection");

module.exports = {
  async create(request, response) {
    const { u_Id } = request.body;

    const parceiro = await connection("uParceiro")
      .where("u_Id", u_Id)
      .select("u_Nome", "u_Endereco", "u_Descricao", "u_Score")
      .first();

    if (!parceiro) {
      return response.status(400).json({ error: "perfil não encontrado" });
    }

    return response.json(parceiro);
  },
};
