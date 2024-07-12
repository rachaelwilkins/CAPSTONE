const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
 season: { type: Number },
 episode: { type: Number },
 name: { type: String },
 rating: { type: Number },
 description: { type: String },
 airDate: { type: Date },
 id: { type: Number },
});

module.exports = mongoose.model("user", userSchema);

// haven't included the thumbnail data in this deliberately. 
   //commit