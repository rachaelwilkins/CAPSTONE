const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const inventorySchema = new Schema({
    productID:
      {type: Schema.Types.ObjectId, ref: "sneakers"},
    stockLevel: { type: Number },
});

module.exports = mongoose.model("inventorys", inventorySchema);