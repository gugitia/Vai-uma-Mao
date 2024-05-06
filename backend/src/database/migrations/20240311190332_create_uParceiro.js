/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("uParceiro", function (table) {
    table.string("u_Id").primary();
    table.string("u_Nome").notNullable();
    table.string("u_Email").notNullable();
    table.string("u_Senha").notNullable();
    table.string("u_Endereco").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("uParceiro");
};
