const express = require('express');
const router = express.Router();
const ContentController = require('../controllers/contentController');
const authMiddleware = require('../middleware/auth');

const contentController = new ContentController();

router.post('/content', authMiddleware, (req, res) => {
    contentController.postContent(req, res);
});

router.delete('/content/:id', authMiddleware, (req, res) => {
    contentController.deleteContent(req, res);
});

module.exports = router;