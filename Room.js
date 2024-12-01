const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  allowedRoles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }],
});

module.exports = mongoose.model('Room', roomSchema);
