const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  orderItems:
      {
        name: { type: String },
        quantity: { type: Number },
        size: { type: Number },
        price: { type: Number},                     
      },  
  productID:
      {type: Schema.Types.ObjectId, ref: "sneakers"},
  userID:
      {type: Schema.Types.ObjectId, ref: "users"},
});

module.exports = mongoose.model("orders", orderSchema);