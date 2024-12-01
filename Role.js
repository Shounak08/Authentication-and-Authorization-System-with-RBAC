const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  permissions: [String], // e.g., 'CREATE_ROOM', 'MODERATE_CHAT'
});

module.exports = mongoose.model('Role', roleSchema);
