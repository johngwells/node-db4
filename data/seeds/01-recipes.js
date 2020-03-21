exports.seed = async function(knex) {
  const testData = [
    {title: 'soup'},
    {title: 'salad'},
    {title: 'sandwich'}
  ];
  return knex('recipes').insert(testData);
};
