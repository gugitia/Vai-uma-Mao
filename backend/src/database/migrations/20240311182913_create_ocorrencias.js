/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Ocorrencias", function (table) {
    table.increments("ocorrencia_Id").primary();
    table.string("Data").notNullable();
    table.decimal("Valor").notNullable();
    table.string("servico_Id").notNullable();
    table.string("servico_Tipo").notNullable();
    table.string("uCliente_Id").notNullable();
    table.string("uParceiro_Id").notNullable();

    table.foreign("servico_Id").references("servico_Id").inTable("uServico");
    table.foreign("uCliente_Id").references("u_Id").inTable("uCliente");
    table.foreign("uParceiro_Id").references("u_Id").inTable("uParceiro");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("Ocorrencias");
};
