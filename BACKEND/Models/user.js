const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
 username: { type: String },
 password: { type: String },
 first_name: { type: String },
 last_name: { type: String },
 address: { type: String },
 city: { type: String },
 postcode: { type: Number },
 country: { type: String },
 phone: { type: Number },
 email: { type: String },
});

module.exports = mongoose.model("users", userSchema);