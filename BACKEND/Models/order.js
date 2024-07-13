const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    productID:
      {type: Schema.Types.ObjectId, ref: "sneakers"},
    userID: { type: Number },
});

module.exports = mongoose.model("orders", orderSchema);