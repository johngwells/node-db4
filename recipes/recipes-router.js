const express = require('express');

// model.js
const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json({ error: 'Could not get recipes' }))
});

router.get('/:id/shoppingList', (req, res) => {
  Recipes.getShoppingList()
    .then(ingredients => res.status(200).json(ingredients))
    .catch(err => res.status(500).json({ error: 'Could not get ingredients' }))
})

router.get('/:id/instructions', (req, res) => {
  const id = req.params.id;

  Recipes.getInstructions(id)
    .then(instructions => res.status(200).json(instructions))
    .catch(err => res.status(500).json({ error: 'Could not get instructions' }))
})

module.exports = router;
