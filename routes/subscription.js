const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Subscription = require('../models/Subscription');

// @route      POST api/subscription
// @desc       SUBSCRIPTION
// @access     Public - no token
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email } = req.body;
    console.log('req.body: ', req.body);
    
    if (!email) {
      return res.status(400).send('No email!');
    }
    try {
      // query mongo
      let subscriber = await Subscription.findOne({ email: email }, { unique: true }, async (err, obj) => {
        if (err) throw err;
      });
      // see if email exists
      if (subscriber) {
        console.log(' ');
        console.log("==> User has already subscribed!");
        return res.status(200).json({ message: 'User already subscribed.', success: false })
      };
      // create new model
      subscriber = new Subscription({
        name,
        email
      });
      // save it to mongo
      await subscriber.save();
      // give the server a response
      res.status(200).json({'new subscriber': subscriber});

    } catch (err) {
      console.log(' ');
      console.error('err.message: ', err.message);
      return res.status(500).send('Server error subscription');
    }
  }
);

module.exports = router;