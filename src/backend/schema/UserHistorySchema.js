const mongoose = require('mongoose');

const UserHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  updatedField: {
    type: String,
    required: true,
  },
  oldValue: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  newValue: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('UserHistory', UserHistorySchema);
