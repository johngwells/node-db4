
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('title').notNullable()
    })
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('name').notNullable()
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments()

      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
      
      tbl.float('quantity')
      tbl.string('unit', 32)
    })
    .createTable('recipe_steps', tbl => {
      increments()

      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
      
      tbl
        .integer('step')
        .unsigned()
        .notNullable()

      tbl.string('instructions')
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('recipe_ingredient')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
