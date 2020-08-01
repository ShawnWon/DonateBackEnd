const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonationSchema = new Schema({
  busstopid: {
    type: String,
    required: true,
  },
  donatername: {
    type: String,
    required: true,
  },
  donateremail: {
    type: String,
    required: false,
  },
  donateamount: {
    type: String,
    required: true,
  },
});

const Donation = mongoose.model("Donation", DonationSchema);
module.exports = Donation;
