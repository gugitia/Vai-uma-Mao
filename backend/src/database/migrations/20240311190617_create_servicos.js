/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("uServico", function (table) {
    table.increments("servico_Id").primary();
    table.string("u_Id").notNullable();
    table.string("servico_Tipo").notNullable();
    table.decimal("servico_Valor").notNullable();

    table.foreign("u_Id").references("u_Id").inTable("uParceiro");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("uServico");
};
