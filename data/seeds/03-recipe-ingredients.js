exports.seed = async function(knex) {
  const testData = [
    { recipe_id: 1, ingredient_id: 1, quantity: 4, unit: 'cup' },
    { recipe_id: 1, ingredient_id: 4, quantity: 2, unit: 'ounce' },
    { recipe_id: 2, ingredient_id: 2, quantity: 1, unit: 'ounce' },
    { recipe_id: 2, ingredient_id: 4, quantity: 1, unit: 'ounce' },
    { recipe_id: 3, ingredient_id: 3, quantity: 2, unit: 'slice' },
    { recipe_id: 3, ingredient_id: 2, quantity: 1, unit: 'slice' },
    { recipe_id: 3, ingredient_id: 4, quantity: 1, unit: 'slice' }
  ];

  return knex('recipe_ingredients').insert(testData);
};
