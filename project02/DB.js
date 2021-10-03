const mongoose = require('mongoose');

// DB schema
const DBSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  context: {
    type: String,
    required: true
  },
})

const DB = mongoose.model('DB', DBSchema);
module.exports = DB;