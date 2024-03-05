const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    slug: { type: String , slug: "name"}
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Product', Product);