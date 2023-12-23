const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const cardRoutes = require('./card');
const publicRoutes = require('./public');

router.use('/auth', authRoutes);
router.use('/card', cardRoutes);
router.use('/public', publicRoutes);

module.exports = router;