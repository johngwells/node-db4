const express = require('express');

const RecipeRouter = require('./recipes/recipes-router');
// ingredientsRouter ===>

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipeRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' })
})

module.exports = server;
