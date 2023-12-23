const express = require('express');
const router = express.Router();
const cardController = require('../controllers/publicController');

// Get all cards(Default 10 cards)
router.get('/card', cardController.CardQuery);

module.exports = router;