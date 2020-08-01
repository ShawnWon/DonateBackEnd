const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusstopSchema = new Schema({
  busstopid: {
    type: String,
    required: true,
  },
  busstopname: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
});

const Busstop = mongoose.model("Busstop", BusstopSchema);
module.exports = Busstop;
