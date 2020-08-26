exports.up = function(knex) {
    return knex.schema.createTable("cars", (table) => {
        table.increments("id")
        table.integer("VIN").notNull().unique()
        table.text("make").notNull()
        table.text("model").notNull()
        table.text("Mileage").notNull()
    })
    };
    
    exports.down = function(knex) {
        return knex.schema.dropTableIfExists("cars")
    };
    