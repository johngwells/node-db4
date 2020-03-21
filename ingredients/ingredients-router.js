const express = require('express');

const router = express.Router();

const Ingredient = require('./ingredients-model');

// Gets all recipes that use the same ingredient
// 1: water 2: lettuce 3: bread 4: tomato
router.get('/:id', (req, res) => {
  const id = req.params.id;

  Ingredient.getRecipes(id)
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(500).json({ error: "Error retrieving ingredient with id" }));
});

module.exports = router;
