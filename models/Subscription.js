const mongoose = require('mongoose');
const SubscriptionSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true
  // },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('subscription', SubscriptionSchema);