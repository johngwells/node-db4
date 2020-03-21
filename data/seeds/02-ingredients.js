exports.seed = async function(knex) {
  const testData = [
    {name: 'water'},
    {name: 'lettuce'},
    {name: 'bread'},
    {name: 'tomato'}
  ];
  return knex('ingredients').insert(testData);
};
