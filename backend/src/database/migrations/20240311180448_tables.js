/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("uCliente", function (table) {
    table.string("Id").primary();
    table.string("Nome").notNullable();
    table.string("Email").notNullable();
    table.string("Senha").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("uCliente");
};
