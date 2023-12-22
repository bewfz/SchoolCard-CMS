const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');
const jwtMiddleware = require('../middleware/jwt');

// Create a new card
router.post('/newcard', jwtMiddleware, cardController.newCard);

// Delete a card
router.delete('/deletecard/:id', jwtMiddleware, cardController.deleteCard);

module.exports = router;