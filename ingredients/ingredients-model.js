const db = require('../data/db-config');

module.exports = {
  getRecipes
};

function getRecipes(ingredient_id) {
  return db('recipe_ingredients')
    .join('recipes', 'recipe_ingredients.recipe_id', '=', 'recipes.id')
    .select('title')
    .where({ingredient_id})
    .orderBy('title');
}
