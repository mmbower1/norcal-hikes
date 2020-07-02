// express
const express = require('express');
const router = express.Router();
// middleware
const auth = require('../middleware/auth');
// mongo
// const User = require('../models/User');
// npm's
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const { check, validationResult } = require('express-validator');

// @route    GET /landing
// @desc     Landing page
// @access   Public
router.get('/', async (req, res) => {
  res.json('homepage');
  res.status(500).send('Server error homepage');
});

module.exports = router;