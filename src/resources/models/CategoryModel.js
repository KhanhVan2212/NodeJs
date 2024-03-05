const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');
const Schema = mongoose.Schema;
mongoose.plugin(slug);
const Category = new Schema({
  title: { type: String, maxLength: 255, required: true },
  slug: { type: String, slug: 'name', unique: true },
  description: { type: String, maxLength: 255 },
},
{ timestamps: true }
);

module.exports = mongoose.model("Category", Category);
