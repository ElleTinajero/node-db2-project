
exports.up = function(knex) {
await knex.schema.createTable("cars", (table) => {
    table.increments("id")
    table.integer("VIN").notNull().unique()
    table.text("make").notNull()
    table.text("model").notNull()
    table.text("Mileage").notNull()
})
};

exports.down = function(knex) {
    await knex.schema.dropTableIfExists("cars")
};
