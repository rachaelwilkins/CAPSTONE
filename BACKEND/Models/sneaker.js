const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sneakerSchema = new Schema({
 brand: { type: String },
 gender: { type: String },
 name: { type: String },
 price_nzd: { type: Number },
 size_range: { type: Array },
 stock_levels: { type: Number },
 material: { type: String },
 heel_size: { type: String },
 cut: { type: String },
 rating: { type: Number },
 images: { type: Array },
 description: { type: String },
});

module.exports = mongoose.model("sneakers", sneakerSchema);