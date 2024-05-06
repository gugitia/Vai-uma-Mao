/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("uParceiro", function (table) {
    table.string("u_Descricao").nullable();
    table.decimal("u_Score").nullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable("uParceiro", function (table) {
    table.dropColumn("u_Descricao");
    table.dropColumn("u_Score");
  });
};
