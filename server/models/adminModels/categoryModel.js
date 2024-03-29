const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  categorytitle: { type: String, required: true },
  status:{ type: String, required: true },
  image: { type: String, required: true },
  createdAt:{ type: String, required: true }
});

module.exports = mongoose.model('category', categorySchema);