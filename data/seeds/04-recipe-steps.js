exports.seed = async function(knex) {
  const testData = [
    { recipe_id: 1, step: 1, instructions: 'boil water'},
    { recipe_id: 1, step: 2, instructions: 'add all ingredients'},
    { recipe_id: 2, step: 1, instructions: 'cut lettuce'},
    { recipe_id: 2, step: 2, instructions: 'add tomoto'},
    { recipe_id: 3, step: 1, instructions: 'start with bread'},
    { recipe_id: 3, step: 2, instructions: 'add ingredients on to the bread'}
  ];
  return knex('recipe_steps').insert(testData);
};
