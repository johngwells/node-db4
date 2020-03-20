const express = require('express');

// model.js

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'start here' });
});

module.exports = router;
