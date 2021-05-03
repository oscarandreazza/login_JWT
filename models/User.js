const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  email: { type: String, required: true, minlength: 3, maxlength: 50 },
  password: { type: String, required: true, minlength: 6, maxlength: 200 },
  createdAt: { type: Date, default: Date.now },
  admin: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);

//bcrypt para transformar a senha em algo que não da pra ler
