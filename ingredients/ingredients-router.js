const express = require('express');

const router = express.Router();

const Ingredient = require('./ingredients-model');

router.get('/:id/recipes', (req, res) => {
  const id = req.params.id;

  Ingredient.getRecipes(id)
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(500).json({ error: "Error retrieving ingredient with id" }));
});

module.exports = router;
