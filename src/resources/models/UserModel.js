const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
    username: { type: String, maxLength: 255, unique: true },
    password: { type: String, maxLength: 255 },
    email: { type: String, maxLength: 255 },
    role: { type: String },
    avatar: { type: String, maxLength: 255 },

  },
  { timestamps: true }
  );
  module.exports = mongoose.model("Users", Users);