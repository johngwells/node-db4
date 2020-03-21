const express = require('express');

const RecipeRouter = require('./recipes/recipes-router');
const IngredientsRouter = require('./ingredients/ingredients-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' })
})

module.exports = server;
