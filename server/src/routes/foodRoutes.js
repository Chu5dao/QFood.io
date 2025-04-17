const express = require('express');
const { getRecipes } = require('../controllers/foodController');
const router = express.Router();

router.get('/recipes', getRecipes);

module.exports = router;
